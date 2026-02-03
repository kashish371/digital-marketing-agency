import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || 'noreply@ritesdigital.com',
      to,
      subject,
      html,
      replyTo,
    })
    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}

export function getContactEmailTemplate(data: {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0a192f 0%, #1e3a5f 100%); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; background: #f8f9fa; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0a192f; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Rites Digital Marketing</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${data.email}</div>
          </div>
          ${data.phone ? `
          <div class="field">
            <div class="label">Phone</div>
            <div class="value">${data.phone}</div>
          </div>
          ` : ''}
          ${data.company ? `
          <div class="field">
            <div class="label">Company</div>
            <div class="value">${data.company}</div>
          </div>
          ` : ''}
          ${data.service ? `
          <div class="field">
            <div class="label">Service Interest</div>
            <div class="value">${data.service}</div>
          </div>
          ` : ''}
          ${data.budget ? `
          <div class="field">
            <div class="label">Budget Range</div>
            <div class="value">${data.budget}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message</div>
            <div class="value">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Rites Digital Marketing website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function getNewsletterWelcomeTemplate(email: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0a192f 0%, #1e3a5f 100%); color: white; padding: 40px; text-align: center; }
        .content { padding: 40px; background: #f8f9fa; text-align: center; }
        .button { display: inline-block; padding: 15px 30px; background: #3b82f6; color: white; text-decoration: none; border-radius: 8px; margin-top: 20px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Rites Digital!</h1>
        </div>
        <div class="content">
          <h2>Thanks for subscribing!</h2>
          <p>You're now part of our community. We'll keep you updated with the latest digital marketing insights, tips, and industry news.</p>
          <a href="https://ritesdigital.com" class="button">Visit Our Website</a>
        </div>
        <div class="footer">
          <p>You're receiving this because you subscribed to our newsletter.</p>
          <p>Email: ${email}</p>
        </div>
      </div>
    </body>
    </html>
  `
}
