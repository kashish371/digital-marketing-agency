import { NextRequest, NextResponse } from 'next/server'
import { getDatabase, COLLECTIONS } from '@/lib/mongodb'
import { sendEmail, getContactEmailTemplate } from '@/lib/email'
import type { Contact } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, budget, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Save to database
    const db = await getDatabase()
    const contact: Contact = {
      name,
      email,
      phone: phone || undefined,
      company: company || undefined,
      service: service || undefined,
      budget: budget || undefined,
      message,
      createdAt: new Date(),
      status: 'new',
    }

    await db.collection<Contact>(COLLECTIONS.CONTACTS).insertOne(contact)

    // Send email notification
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@ritesdigital.com'
    await sendEmail({
      to: adminEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: getContactEmailTemplate({ name, email, phone, company, service, budget, message }),
      replyTo: email,
    })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
