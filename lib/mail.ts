import nodemailer from 'nodemailer';
import type { SendMailOptions } from 'nodemailer';

export const OFFICE_EMAIL = 'Office@purewayslogistics.co.uk';

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendOfficeEmail(options: {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: SendMailOptions['attachments'];
}) {
  const from = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  if (!from || !pass) {
    throw new Error('Email credentials are not configured');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: from, pass },
    secure: true,
    port: 465,
  });

  await transporter.sendMail({
    from,
    to: OFFICE_EMAIL,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
    attachments: options.attachments,
  });
}
