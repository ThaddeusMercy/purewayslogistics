import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure nodemailer with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
});

export async function POST(request: NextRequest) {
  try {
    // Get form data
    const data = await request.json();

    // Validate required fields
    const requiredFields = ["name", "email", "subject", "message"];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 },
        );
      }
    }

    // Format the email content
    const emailContent = `
      <h1>📬 New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
      <p><strong>Company Name:</strong> ${data.company || "Not provided"}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `;

    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to:
        process.env.CONTACT_F0RM_RECIPIENT_EMAIL ||
        "office@purewayslogistics.co.uk",
      subject: `Contact Form: ${data.subject}`,
      html: emailContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
