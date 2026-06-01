import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

const RECIPIENT = process.env.CONTACT_EMAIL ?? "balderas293@gmail.com";

// Use verified domain sender when available, otherwise Resend default
const SENDER =
  process.env.RESEND_FROM_EMAIL ?? "Balderas Demolition <noreply@demolitionoc.com>";

/** Known field IDs → display labels */
const LABEL_MAP: Record<string, string> = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  service: "Service",
  message: "Message",
};

function fieldLabel(key: string): string {
  return (
    LABEL_MAP[key] ??
    key
      .replace(/^(home-contact-|quote-|res-|int-|com-|con-|junk-|dumpster-)/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Extract core fields — try standard IDs first, then fall back to prefixed
    const name =
      body.name || body["home-contact-name"] || body["quote-name"] ||
      body["res-name"] || body["int-name"] || body["com-name"] ||
      body["con-name"] || body["junk-name"] || body["dumpster-name"] || "";
    const phone =
      body.phone || body["home-contact-phone"] || body["junk-phone"] ||
      body["dumpster-phone"] || "";
    const email = body.email || "";
    const pageUrl: string = body.pageUrl || "";
    const website = body.website || "";
    const timeElapsed = body.timeElapsed !== undefined ? Number(body.timeElapsed) : undefined;

    // Bot detection
    const isBot = website || (timeElapsed !== undefined && timeElapsed < 3000);
    if (isBot) {
      console.warn(`[Bot Detected] siteName: Balderas, website: ${website}, timeElapsed: ${timeElapsed}`);
      return NextResponse.json({ ok: true, success: true });
    }

    // Spam check
    const message =
      body.message || body["home-contact-message"] || body["quote-message"] ||
      body["res-message"] || body["int-message"] || body["com-message"] ||
      body["con-message"] || body["junk-message"] || body["dumpster-message"] || "";

    if (isSuspiciousSpam(name, email, undefined, message)) {
      console.warn(`[Spam Detected] siteName: Balderas, name: "${name}", email: "${email}", message: "${message}"`);
      return NextResponse.json({ ok: true, success: true });
    }

    // ── Abandoned form handler ─────────────────────────────────
    if (body.abandoned) {
      const identifier = name || email || phone || "Unknown";
      const hasData = !!(name || email || phone);
      if (!hasData) {
        return NextResponse.json({ ok: true });
      }

      const abandonedRows = Object.entries(body as Record<string, string>)
        .filter(([k]) => k !== "abandoned" && k !== "pageUrl" && k !== "timeElapsed" && k !== "website")
        .filter(([, v]) => v && String(v).trim() !== "")
        .map(
          ([key, value]) => `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #fde68a; font-weight: bold; width: 140px; color: #92400e; vertical-align: top;">${escapeHtml(fieldLabel(key))}</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #fde68a; color: #78350f;">${
                key.includes("phone")
                  ? `<a href="tel:${escapeHtml(String(value))}" style="color: #d97706;">${escapeHtml(String(value))}</a>`
                  : escapeHtml(String(value))
              }</td>
            </tr>`,
        )
        .join("");

      const pageRow = pageUrl
        ? `<tr>
             <td style="padding: 12px 0; border-bottom: 1px solid #fde68a; font-weight: bold; width: 140px; color: #92400e; vertical-align: top;">Page</td>
             <td style="padding: 12px 0; border-bottom: 1px solid #fde68a; color: #78350f;"><a href="${escapeHtml(pageUrl)}" style="color: #d97706;">${escapeHtml(pageUrl)}</a></td>
           </tr>`
        : "";

      try {
        await getResend().emails.send({
          from: SENDER,
          to: [RECIPIENT],
          subject: `⚠️ Abandoned Form: ${identifier}`,
          replyTo: email || undefined,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #d97706; padding: 24px; text-align: center; border-bottom: 4px solid #f59e0b;">
                <h1 style="color: #ffffff; margin: 0; font-size: 22px;">⚠️ Abandoned Form Submission</h1>
              </div>
              <div style="padding: 24px; background: #fffbeb;">
                <table style="width: 100%; border-collapse: collapse;">
                  ${abandonedRows}
                  ${pageRow}
                </table>
              </div>
              <div style="padding: 16px 24px; background: #78350f; text-align: center;">
                <p style="color: #fde68a; margin: 0; font-size: 12px;">This visitor started filling out the contact form but left without submitting.</p>
              </div>
            </div>
          `,
        });
      } catch (err: any) {
        console.error("Failed to send abandoned email via Resend:", err);
        try {
          await fetch("https://www.despora.ai/api/alerts/form-failure", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              siteName: "Balderas",
              pageUrl: pageUrl || "",
              errorDetails: `Abandoned form Resend error: ${err.message || "Failed to dispatch email via Resend"}`,
              clientEmail: RECIPIENT,
              leadData: { ...body, abandoned: true },
            }),
          });
        } catch (backupErr) {
          console.error("Backup outage alert report failed:", backupErr);
        }
      }

      return NextResponse.json({ ok: true });
    }

    if (!name) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 },
      );
    }

    // Build rows for ALL submitted fields (exclude internal-only keys)
    const rows = Object.entries(body as Record<string, string>)
      .filter(([k]) => k !== "pageUrl" && k !== "timeElapsed" && k !== "website")
      .filter(([, v]) => v && v.trim() !== "")
      .map(
        ([key, value]) => `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px; color: #333; vertical-align: top;">${escapeHtml(fieldLabel(key))}</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${
              key.includes("phone")
                ? `<a href="tel:${escapeHtml(value)}" style="color: #dc5a31;">${escapeHtml(value)}</a>`
                : escapeHtml(value)
            }</td>
          </tr>`,
      )
      .join("");

    const pageRow = pageUrl
      ? `<tr>
           <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px; color: #333; vertical-align: top;">Page</td>
           <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;"><a href="${escapeHtml(pageUrl)}" style="color: #dc5a31;">${escapeHtml(pageUrl)}</a></td>
         </tr>`
      : "";

    try {
      const { data, error } = await getResend().emails.send({
        from: SENDER,
        to: [RECIPIENT],
        subject: `New Lead from demolitionoc.com — ${name}`,
        replyTo: email || undefined,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #06182C; padding: 24px; text-align: center;">
              <h1 style="color: #dc5a31; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 24px; background: #f9f9f9;">
              <table style="width: 100%; border-collapse: collapse;">
                ${rows}
                ${pageRow}
              </table>
            </div>
            <div style="padding: 16px 24px; background: #06182C; text-align: center;">
              <p style="color: #999; margin: 0; font-size: 12px;">Sent from demolitionoc.com contact form</p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        throw new Error(error.message || "Resend error occurred");
      }

      return NextResponse.json({ success: true, id: data?.id });
    } catch (err: any) {
      console.error("Contact form error:", err);
      try {
        await fetch("https://www.despora.ai/api/alerts/form-failure", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            siteName: "Balderas",
            pageUrl: pageUrl || "",
            errorDetails: err.message || "Failed to send email via Resend",
            clientEmail: RECIPIENT,
            leadData: body,
          }),
        });
      } catch (backupErr) {
        console.error("Backup outage alert report failed:", backupErr);
      }
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 },
      );
    }
  } catch (err) {
    console.error("Unhandled contact route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isGibberish(val: any): boolean {
  if (typeof val !== 'string') return false;
  const trimmed = val.trim();
  if (!/^[a-zA-Z]{8,30}$/.test(trimmed)) return false;
  const hasUpper = /[A-Z]/.test(trimmed);
  const hasLower = /[a-z]/.test(trimmed);
  if (!hasUpper || !hasLower) return false;
  // Must contain at least one uppercase letter after the first character
  return /[A-Z]/.test(trimmed.slice(1));
}

function hasExcessiveDots(emailVal: any): boolean {
  if (typeof emailVal !== 'string') return false;
  const cleanEmail = emailVal.trim().toLowerCase();
  if (!cleanEmail.endsWith('@gmail.com') && !cleanEmail.endsWith('@googlemail.com')) return false;
  const username = cleanEmail.split('@')[0];
  const dotCount = (username.match(/\./g) || []).length;
  return dotCount >= 4;
}

function isSuspiciousSpam(name: any, email: any, addressOrLocation: any, message: any): boolean {
  let score = 0;
  if (isGibberish(name)) score++;
  if (isGibberish(addressOrLocation)) score++;
  if (isGibberish(message)) score++;
  if (hasExcessiveDots(email)) score++;
  return score >= 2;
}

