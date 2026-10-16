import nodemailer from "nodemailer";

export async function sendEnquiryEmail(message: {
  name: string;
  organization: string;
  email: string;
  phone: string;
  topic: string;
  body: string;
}) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM;
  const to = process.env.SMTP_TO;

  if (!host || !port || !user || !pass || !from || !to) {
    throw new Error("Email is not configured.");
  }

  const servername = process.env.SMTP_TLS_SERVERNAME;
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
    ...(servername ? { tls: { servername } } : {}),
  });

  const lines = [
    `Name: ${message.name}`,
    message.organization ? `Organization: ${message.organization}` : "",
    `Email: ${message.email}`,
    message.phone ? `Phone: ${message.phone}` : "",
    `Topic: ${message.topic}`,
    "",
    message.body,
  ].filter((line) => line !== "");

  await transporter.sendMail({
    from: `"EKA website" <${from}>`,
    to,
    replyTo: message.email,
    subject: `Website enquiry: ${message.topic}`,
    text: lines.join("\n"),
  });
}
