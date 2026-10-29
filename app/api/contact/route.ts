import { NextRequest, NextResponse } from 'next/server';
import { escapeHtml, sendOfficeEmail } from '@/lib/mail';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const company = String(body.company ?? '').trim();
    const subject = String(body.subject ?? '').trim();
    const message = String(body.message ?? '').trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    const row = (label: string, value: string) =>
      value ? `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>` : '';

    await sendOfficeEmail({
      subject: `Website enquiry: ${subject}`,
      replyTo: email,
      html: `
        <h1>New website enquiry</h1>
        ${row('Name', name)}
        ${row('Email', email)}
        ${row('Phone', phone)}
        ${row('Company', company)}
        ${row('Subject', subject)}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ message: 'Message sent' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
