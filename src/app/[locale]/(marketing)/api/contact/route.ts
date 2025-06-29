import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

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

    // Here you would typically:
    // 1. Send an email to your business email (anthony3303@outlook.com)
    // 2. Store the lead in a database
    // 3. Send a confirmation email to the client
    // 4. Integrate with CRM systems

    // For now, we'll just log the submission
    console.warn('New contact form submission:', {
      name,
      email,
      phone,
      projectType,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    // You can integrate with services like:
    // - SendGrid for emails (send to anthony3303@outlook.com)
    // - Resend for emails (send to anthony3303@outlook.com)
    // - Nodemailer for emails (send to anthony3303@outlook.com)
    // - Airtable for CRM
    // - Google Sheets for lead tracking

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
