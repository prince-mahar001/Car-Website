import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const ticketId = `TKT-${Math.floor(10000 + Math.random() * 90000)}`;

    const inquiryRecord = {
      ticketId,
      name,
      email,
      phone: phone || null,
      subject: subject || 'General Inquiry',
      message,
      receivedAt: new Date().toISOString()
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. Our dispatch manager will respond within 15 minutes.',
        inquiry: inquiryRecord
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid contact request payload.' },
      { status: 500 }
    );
  }
}
