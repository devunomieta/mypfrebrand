import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    console.warn('CONTACT_TO_EMAIL not set — contact form cannot route emails.');
    return NextResponse.json({ error: 'Contact form target email is not configured' }, { status: 503 });
  }

  // 1. Try sending via Brevo if BREVO_API_KEY is configured
  if (process.env.BREVO_API_KEY) {
    try {
      const senderEmail = process.env.CONTACT_FROM_EMAIL || process.env.BREVO_SENDER_EMAIL || 'no-reply@devunomieta.xyz';
      const senderName = process.env.CONTACT_FROM_NAME || 'Website Contact Form';

      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: senderName, email: senderEmail },
          to: [{ email: toEmail }],
          replyTo: { name, email },
          subject: `New message from ${name} via devunomieta.xyz`,
          textContent: `From: ${name} <${email}>\n\nMessage:\n${message}`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Brevo API error:', errorData);
        return NextResponse.json({ error: errorData.message || 'Failed to send email via Brevo' }, { status: 500 });
      }

      return NextResponse.json({ ok: true, provider: 'brevo' });
    } catch (err) {
      console.error('Brevo request error:', err);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  }

  // 2. Fallback to Resend if RESEND_API_KEY is configured
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || 'Website <onboarding@resend.dev>',
        to: toEmail,
        reply_to: email,
        subject: `New message from ${name} via devunomieta.xyz`,
        text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
      });
      return NextResponse.json({ ok: true, provider: 'resend' });
    } catch (err) {
      console.error('Resend error:', err);
      return NextResponse.json({ error: 'Failed to send email via Resend' }, { status: 500 });
    }
  }

  console.warn('Neither BREVO_API_KEY nor RESEND_API_KEY is configured.');
  return NextResponse.json({ error: 'Email service is not configured' }, { status: 503 });
}
