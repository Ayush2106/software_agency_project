import nodemailer from "nodemailer";
import type { ContactFormData } from "@/lib/types";

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("GMAIL_USER and GMAIL_APP_PASSWORD must be set in .env.local");
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

function formatBody(data: ContactFormData): string {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    data.service ? `Service: ${data.service}` : null,
    "",
    "Message:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const to = process.env.CONTACT_EMAIL_TO || process.env.GMAIL_USER;
  if (!to) throw new Error("CONTACT_EMAIL_TO or GMAIL_USER must be set");

  const transporter = getTransporter();
  const fromUser = process.env.GMAIL_USER!;

  await transporter.sendMail({
    from: `"PrimeAxis Solutions" <${fromUser}>`,
    to,
    replyTo: data.email,
    subject: `[PrimeAxis] ${data.service || "Contact"} — ${data.name}`,
    text: formatBody(data),
    html: `<pre style="font-family:sans-serif;line-height:1.6">${formatBody(data).replace(/</g, "&lt;")}</pre>`,
  });
}
