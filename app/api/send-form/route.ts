import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure nodemailer with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
  port: 465,
});

export async function POST(request: NextRequest) {
  try {
    // Get form data with file
    const formData = await request.formData();
    
    // Extract form fields
    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      // Skip the file field
      if (key !== 'cv' && typeof value === 'string') {
        data[key] = value;
      }
    }
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Get the CV file
    const cvFile = formData.get('cv') as File | null;

    // Format the email content
    const emailContent = `
      <h1>📃 New Driver Application - PureWays Logistics</h1>
      <p><strong>Full Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Driving License:</strong> ${data.drivingLicence}</p>
      <p><strong>Previous Delivery Driving Experience:</strong> ${data.experience}</p>
      <p><strong>Self-Employed:</strong> ${data.selfEmployed}</p>
      <p><strong>Work Eligibility In the UK:</strong> ${data.workEligibility}</p>
      <p><strong>Available Start Date:</strong> ${data.startDate}</p>
      ${data.additionalInfo ? `<p><strong>Additional Information:</strong> ${data.additionalInfo}</p>` : ''}
      ${cvFile ? `<p><strong>CV Attached:</strong> Yes (${cvFile.name}, ${cvFile.type})</p>` : '<p><strong>CV Attached:</strong> No</p>'}
    `;

    // Configure email options with attachment if CV is provided
    const mailOptions: any = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Send to configured recipient or fall back to sender
      subject: 'New Driver Application Form Submission',
      html: emailContent,
    };
    
    // Add CV attachment if provided
    if (cvFile) {
      const fileArrayBuffer = await cvFile.arrayBuffer();
      const fileBuffer = Buffer.from(fileArrayBuffer);
      
      mailOptions.attachments = [
        {
          filename: cvFile.name,
          content: fileBuffer,
          contentType: cvFile.type,
        },
      ];
    }

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
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