# FitZone Gym - Professional Fitness Website

A modern, responsive fitness website built with Next.js 14, React, TypeScript, and Tailwind CSS. This project showcases a professional gym business with advanced animations, interactive components, and a beautiful design.

## 🌟 Features

### Design & User Experience
- **Modern Design**: Clean, professional design with custom color schemes
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Advanced animations using Framer Motion
- **Interactive Components**: Engaging user interactions and hover effects
- **Optimized Performance**: Fast loading times and optimized assets

### Website Sections
- **Hero Section**: Eye-catching landing area with animated elements
- **Services**: Detailed overview of gym services and programs
- **About Us**: Company story, mission, and achievements
- **Testimonials**: Customer success stories with interactive carousel
- **Membership Plans**: Tiered pricing with detailed feature comparisons
- **Contact Form**: Professional contact form with validation
- **Location Info**: Hours, contact details, and map integration

### Technical Features
- **Next.js 14**: Latest version with App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Custom Components**: Reusable, modular component architecture
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Modern Fonts**: Google Fonts integration (Inter & Oswald)

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── AboutSection.tsx   # About us section
│   ├── ContactSection.tsx # Contact form and info
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Hero landing section
│   ├── Layout.tsx         # Layout wrapper
│   ├── MembershipSection.tsx # Pricing plans
│   ├── ServicesSection.tsx   # Services overview
│   └── TestimonialsSection.tsx # Customer testimonials
└── lib/                   # Utility functions and constants
    ├── constants.ts       # Site configuration and data
    └── utils.ts           # Helper functions
```

## 🎨 Customization

### Updating Site Information
Edit the `SITE_CONFIG` object in `src/lib/constants.ts` to update:
- Company name and tagline
- Contact information
- Hours of operation
- Social media links

### Modifying Content
Update the arrays in `src/lib/constants.ts`:
- `SERVICES` - Gym services and programs
- `MEMBERSHIP_PLANS` - Pricing tiers
- `TESTIMONIALS` - Customer reviews

## 📱 Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

Built with ❤️ for modern fitness businesses
