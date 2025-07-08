import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Send email to business only (sandbox mode)
    await resend.emails.send({
      from: 'Toni Web Development <info@mail.websiteswithtoni.com>',
      to: ['anthony3303@outlook.com'],
      subject: `New Website Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    // Send thank-you email to the user
    await resend.emails.send({
      from: 'info@mail.websiteswithtoni.com',
      to: email,
      subject: 'Thank you for contacting Websites With Toni!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting Websites With Toni. We have received your message and will get back to you within 24 hours.</p>
          <p>If you have any urgent questions, feel free to reply to this email.</p>
          <br />
          <p>Best regards,<br />Toni</p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you for your inquiry! We will get back to you within 24 hours.',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
