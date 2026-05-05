import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

const RECIPIENT = process.env.CONTACT_EMAIL ?? "ali.h@toporganicleads.com";

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

    if (!name) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 },
      );
    }

    // Build rows for ALL submitted fields
    const rows = Object.entries(body as Record<string, string>)
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
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
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
