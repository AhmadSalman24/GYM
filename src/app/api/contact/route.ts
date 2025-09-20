import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter - Auto-detect email provider
    let transporter;
    const emailUser = process.env.EMAIL_USER || 'your-email@gmail.com';
    
    if (emailUser.includes('@gmail.com')) {
      // Gmail configuration
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else if (emailUser.includes('@superior.edu.pk')) {
      // Superior University email configuration
      transporter = nodemailer.createTransport({
        host: 'smtp.office365.com', // Common for educational institutions
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false
        }
      });
    } else {
      // Generic SMTP configuration for other providers
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@fitzonegym.com',
      to: 'su92-bssem-f22-218@superior.edu.pk',
      subject: `🏋️ New Contact Form - ${name} | FitZone Gym`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #f0fdf4, #ecfdf5); padding: 20px; border-radius: 15px;">
          <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 25px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🏋️ FitZone Gym</h1>
            <p style="color: #d1fae5; margin: 5px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 10px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #059669; margin-top: 0; font-size: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">👤 Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
                <td style="padding: 8px 0; color: #1f2937;">${service || 'General Inquiry'}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 10px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #059669; margin-top: 0; font-size: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">💬 Message</h2>
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
              <p style="margin: 0; white-space: pre-wrap; color: #374151; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, #e6fffa, #f0fdfa); padding: 20px; border-radius: 10px; text-align: center; border: 2px solid #10b981;">
            <h3 style="color: #059669; margin: 0 0 10px 0;">📅 Submission Details</h3>
            <p style="margin: 0; color: #374151; font-size: 14px;">
              <strong>Date:</strong> ${new Date().toLocaleDateString('en-US', { 
                timeZone: 'Asia/Karachi',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}<br>
              <strong>Time:</strong> ${new Date().toLocaleTimeString('en-US', { 
                timeZone: 'Asia/Karachi',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })} (Pakistan Time)
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 25px; padding: 15px; color: #6b7280; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the FitZone Gym contact form</p>
            <p style="margin: 5px 0 0 0;">Location: Johar Town, Lahore, Pakistan | Phone: 03000000000</p>
          </div>
        </div>
      `,
    }

    // Log the submission details
    console.log('\n🎯 ===== NEW CONTACT FORM SUBMISSION =====')
    console.log('📧 Sending email to: su92-bssem-f22-218@superior.edu.pk')
    console.log('👤 From:', name, `(${email})`)
    console.log('📱 Phone:', phone || 'Not provided')
    console.log('🏋️ Service:', service || 'General Inquiry')
    console.log('💬 Message:', message)
    console.log('⏰ Time:', new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }))

    try {
      // Send the email
      await transporter.sendMail(mailOptions)
      console.log('✅ Email sent successfully!')
      console.log('==========================================\n')

      return NextResponse.json(
        { 
          message: `Thank you ${name}! Your message has been sent successfully. We will contact you at ${email} soon.`,
          success: true,
          submittedAt: new Date().toLocaleString('en-US', { 
            timeZone: 'Asia/Karachi',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }) + ' (Pakistan Time)'
        },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError)
      console.log('📝 Form data still logged for manual follow-up')
      console.log('==========================================\n')
      
      // Even if email fails, we still log the data and inform user
      return NextResponse.json(
        { 
          message: `Thank you ${name}! Your message has been received. If you don't hear back within 24 hours, please contact us directly at su92-bssem-f22-218@superior.edu.pk`,
          success: true,
          submittedAt: new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }) + ' (Pakistan Time)',
          note: 'Message logged for manual follow-up'
        },
        { status: 200 }
      )
    }

  } catch (error) {
    console.error('❌ Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again later.' },
      { status: 500 }
    )
  }
}