import { NextRequest, NextResponse } from 'next/server';
import { escapeHtml, sendOfficeEmail } from '@/lib/mail';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (key !== 'cv' && typeof value === 'string') {
        data[key] = value;
      }
    }

    const requiredFields = ['fullName', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const cvFile = formData.get('cv') as File | null;
    const row = (label: string, value: string | undefined) =>
      value ? `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>` : '';

    const emailContent = `
      <h1>New driver application</h1>
      ${row('Full Name', data.fullName)}
      ${row('Email', data.email)}
      ${row('Phone', data.phone)}
      ${row('Driving Licence', data.drivingLicence)}
      ${row('Previous Delivery Driving Experience', data.experience)}
      ${row('Self-Employed', data.selfEmployed)}
      ${row('Work Eligibility In the UK', data.workEligibility)}
      ${row('Available Start Date', data.startDate)}
      ${row('Additional Information', data.additionalInfo)}
      ${
        cvFile
          ? `<p><strong>CV Attached:</strong> Yes (${escapeHtml(cvFile.name)}, ${escapeHtml(cvFile.type)})</p>`
          : '<p><strong>CV Attached:</strong> No</p>'
      }
    `;

    const attachments = cvFile
      ? [
          {
            filename: cvFile.name,
            content: Buffer.from(await cvFile.arrayBuffer()),
            contentType: cvFile.type,
          },
        ]
      : undefined;

    await sendOfficeEmail({
      subject: 'New driver application',
      replyTo: data.email,
      html: emailContent,
      attachments,
    });

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
