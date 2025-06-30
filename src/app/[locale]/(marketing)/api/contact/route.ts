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

    // Send email to business
    const emailResult = await resend.emails.send({
      from: 'Toni Web Development <anthony3303@outlook.com>',
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

    // Send confirmation email to client
    await resend.emails.send({
      from: 'Toni Web Development <anthony3303@outlook.com>',
      to: [email],
      subject: 'Thank you for your inquiry - Toni Web Development',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Thank you for your inquiry!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out about your website project. I've received your inquiry and will get back to you within 24 hours with a custom quote and next steps.</p>
          <p><strong>Project Details:</strong></p>
          <ul>
            <li>Project Type: ${projectType}</li>
            <li>Budget Range: ${budget || 'Not specified'}</li>
          </ul>
          <p>In the meantime, feel free to check out my portfolio at <a href="https://yourwebsite.com/portfolio" style="color: #f97316;">my portfolio</a> to see examples of my work.</p>
          <p>Best regards,<br>Toni<br>Web Developer</p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            Phone: (630) 540-6506<br>
            Email: anthony3303@outlook.com
          </p>
        </div>
      `,
    });

    console.warn('Email sent successfully:', emailResult);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
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
