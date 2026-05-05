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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 },
      );
    }

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
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px; color: #333;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${escapeHtml(name)}</td>
              </tr>
              ${email ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${escapeHtml(email)}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;"><a href="tel:${escapeHtml(phone)}" style="color: #dc5a31;">${escapeHtml(phone)}</a></td>
              </tr>
              ${service ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${escapeHtml(service)}</td>
              </tr>` : ""}
              ${message ? `<tr>
                <td style="padding: 12px 0; font-weight: bold; color: #333; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #555;">${escapeHtml(message)}</td>
              </tr>` : ""}
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
