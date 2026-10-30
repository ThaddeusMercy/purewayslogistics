export const OFFICE_EMAIL = 'Office@purewayslogistics.co.uk';
const FROM_EMAIL = 'Pureways Logistics Website <website@purewayslogistics.co.uk>';

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

type Attachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

// Sends through Resend (https://resend.com); the key lives in Vercel as RESEND_API_KEY.
export async function sendOfficeEmail(options: {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: Attachment[];
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [OFFICE_EMAIL],
      reply_to: options.replyTo || undefined,
      subject: options.subject,
      html: options.html,
      attachments: options.attachments?.map((file) => ({
        filename: file.filename,
        content: file.content.toString('base64'),
        content_type: file.contentType,
      })),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend error ${response.status}: ${await response.text()}`);
  }
}
