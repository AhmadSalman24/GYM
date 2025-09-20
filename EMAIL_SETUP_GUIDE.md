# 📧 Email Setup Guide for Contact Form

## 🎯 Quick Setup (5 minutes)

To receive emails at `su92-bssem-f22-218@superior.edu.pk` when someone fills the contact form:

### Step 1: Create a Sending Gmail Account
1. Create a new Gmail account (or use existing) - this will be the "sender" account
2. Example: `fitzonegym2025@gmail.com`

### Step 2: Enable App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **App passwords** section
4. Select **Mail** and generate a 16-character password
5. Copy this password (it looks like: `abcd efgh ijkl mnop`)

### Step 3: Update Environment Variables
Edit the `.env.local` file in your project root:

```env
EMAIL_USER=fitzonegym2025@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```
*(Replace with your actual Gmail and app password)*

### Step 4: Restart Development Server
```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

## ✅ How It Works

1. **Customer fills form** → Form data submitted
2. **API processes request** → Validates data
3. **Email sent via Gmail** → Using your sender account
4. **Email arrives at** → `su92-bssem-f22-218@superior.edu.pk`
5. **Beautiful HTML email** → With all customer details

## 📧 Email Template Features

The emails you'll receive include:
- 🎨 **Professional Design** - Gym-branded HTML template
- 👤 **Customer Details** - Name, email, phone, service interest
- 💬 **Full Message** - Customer's inquiry
- 📅 **Pakistan Time** - Automatic timezone conversion
- 🔗 **Clickable Email** - Direct reply to customer
- 🏋️ **Gym Branding** - Professional FitZone styling

## 🔄 Alternative Options

### Option 1: Use Your Personal Gmail
```env
EMAIL_USER=your-personal@gmail.com
EMAIL_PASS=your-app-password
```

### Option 2: Use Superior University Email
If you can get SMTP settings for your superior.edu.pk email:
```javascript
// In /src/app/api/contact/route.ts, replace Gmail config with:
{
  host: 'mail.superior.edu.pk', // Replace with actual SMTP server
  port: 587,
  secure: false,
  auth: {
    user: 'su92-bssem-f22-218@superior.edu.pk',
    pass: 'your-email-password'
  }
}
```

### Option 3: Free Email Services
- **SendGrid** - 100 emails/day free
- **Mailgun** - 5,000 emails/month free
- **EmailJS** - Client-side email sending

## 🧪 Testing the Setup

1. Fill out the contact form on your website
2. Check the terminal for confirmation logs
3. Check `su92-bssem-f22-218@superior.edu.pk` inbox
4. Look for a beautifully formatted email with gym branding

## 🚨 Troubleshooting

### "Authentication Failed"
- Double-check Gmail credentials in `.env.local`
- Ensure 2-Step Verification is enabled
- Generate a new App Password

### "Less Secure Apps"
- Use App Password (not regular password)
- App passwords bypass "less secure apps" restrictions

### "Connection Timeout"
- Check internet connection
- Try a different Gmail account
- Consider using alternative email service

## 📱 Current Status

✅ **Email API Created** - Ready to send emails
✅ **HTML Template** - Professional gym-branded design  
✅ **Form Integration** - Connected to contact form
✅ **Error Handling** - Graceful failures with logging
✅ **Timezone Support** - Pakistan time display
⏳ **Pending** - Gmail credentials in `.env.local`

Once you add your Gmail credentials, customers will be able to send you emails directly through the contact form! 🚀

---

**Need Help?** If you encounter any issues, the form will still log all submissions to the console as a backup, so no inquiries will be lost.