import { NextRequest, NextResponse } from 'next/server'
import { getDatabase, COLLECTIONS } from '@/lib/mongodb'
import { sendEmail, getNewsletterWelcomeTemplate } from '@/lib/email'
import type { Newsletter } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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

    const db = await getDatabase()
    
    // Check if already subscribed
    const existing = await db.collection<Newsletter>(COLLECTIONS.NEWSLETTERS).findOne({ 
      email: email.toLowerCase() 
    })

    if (existing) {
      if (existing.active) {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 400 }
        )
      } else {
        // Reactivate subscription
        await db.collection<Newsletter>(COLLECTIONS.NEWSLETTERS).updateOne(
          { email: email.toLowerCase() },
          { $set: { active: true, subscribedAt: new Date() } }
        )
        return NextResponse.json(
          { success: true, message: 'Welcome back! Subscription reactivated.' },
          { status: 200 }
        )
      }
    }

    // Create new subscription
    const newsletter: Newsletter = {
      email: email.toLowerCase(),
      subscribedAt: new Date(),
      active: true,
    }

    await db.collection<Newsletter>(COLLECTIONS.NEWSLETTERS).insertOne(newsletter)

    // Send welcome email
    await sendEmail({
      to: email,
      subject: 'Welcome to Rites Digital Newsletter!',
      html: getNewsletterWelcomeTemplate(email),
    })

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
