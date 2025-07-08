import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, friendEmail, yourEmail } = await req.json();

    const html = `
      <h2>New Referral Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Friend's Email:</strong> ${friendEmail}</p>
      <p><strong>Your Email:</strong> ${yourEmail}</p>
    `;

    // Send notification to you
    await resend.emails.send({
      from: 'info@mail.websiteswithtoni.com',
      to: 'anthony3303@outlook.com',
      subject: 'New Website Referral Submission',
      html,
    });

    // Send thank-you email to the referrer
    await resend.emails.send({
      from: 'info@mail.websiteswithtoni.com',
      to: yourEmail,
      subject: 'Thanks for Your Referral!',
      html: `
        <h2>Thank You for Referring a Friend!</h2>
        <p>We appreciate you spreading the word. If your friend gets their website made with us, you'll receive $50 as a thank you!</p>
        <p>— Websites With Toni</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Failed to send referral.' },
      { status: 500 },
    );
  }
}
