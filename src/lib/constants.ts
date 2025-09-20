export const SITE_CONFIG = {
  name: "FitZone Gym",
  tagline: "Transform Your Body, Transform Your Life",
  description: "Premier fitness destination offering state-of-the-art equipment, expert personal training, and diverse group classes to help you achieve your fitness goals.",
  contact: {
    phone: "03000000000",
    email: "su92-bssem-f22-218@superior.edu.pk",
    address: "Johar Town, Lahore, Pakistan"
  },
  hours: {
    weekdays: "5:00 AM - 11:00 PM",
    saturday: "6:00 AM - 10:00 PM", 
    sunday: "7:00 AM - 9:00 PM"
  },
  social: {
    facebook: "https://facebook.com/fitzonegym",
    instagram: "https://instagram.com/fitzonegym",
    twitter: "https://twitter.com/fitzonegym"
  }
}

export const SERVICES = [
  {
    id: 1,
    title: "Personal Training",
    description: "One-on-one sessions with certified trainers tailored to your specific goals and fitness level.",
    icon: "User",
    price: "From $75/session",
    features: ["Customized workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"]
  },
  {
    id: 2,
    title: "Group Classes",
    description: "High-energy group fitness classes led by experienced instructors in a motivating environment.",
    icon: "Users",
    price: "From $20/class",
    features: ["Yoga & Pilates", "HIIT Training", "Zumba & Dance", "Strength Classes"]
  },
  {
    id: 3,
    title: "Strength Training",
    description: "State-of-the-art weight training equipment and free weights for all skill levels.",
    icon: "Dumbbell",
    price: "Included in membership",
    features: ["Latest equipment", "Free weight area", "Olympic platforms", "Assisted machines"]
  },
  {
    id: 4,
    title: "Cardio Zone",
    description: "Modern cardio equipment with entertainment systems and heart rate monitoring.",
    icon: "Heart",
    price: "Included in membership",
    features: ["Treadmills", "Ellipticals", "Rowing machines", "Stationary bikes"]
  }
]

export const MEMBERSHIP_PLANS = [
  {
    id: 1,
    name: "Basic",
    price: 29.99,
    period: "month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Gym access during off-peak hours",
      "Basic cardio and strength equipment",
      "Locker room access",
      "Free initial consultation"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: 49.99,
    period: "month",
    description: "Most popular choice for serious fitness enthusiasts",
    features: [
      "24/7 gym access",
      "All equipment and facilities",
      "2 group classes per week",
      "Guest passes (2 per month)",
      "Towel service",
      "Free parking"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Elite",
    price: 79.99,
    period: "month",
    description: "Ultimate package for complete fitness transformation",
    features: [
      "Everything in Premium",
      "Unlimited group classes",
      "2 personal training sessions/month",
      "Nutrition consultation",
      "Massage therapy (1/month)",
      "VIP locker",
      "Priority booking"
    ],
    popular: false
  }
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content: "FitZone completely transformed my life! The trainers are incredibly knowledgeable and the community is so supportive. I've lost 30 pounds and gained so much confidence.",
    rating: 5,
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    role: "Software Engineer",
    content: "As someone who sits at a desk all day, FitZone has been a game-changer. The variety of classes keeps me motivated, and the flexible hours work perfectly with my schedule.",
    rating: 5,
    image: "/testimonials/mike.jpg"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Teacher",
    content: "I've been a member for over 2 years now, and I still love coming here. The equipment is always well-maintained, and the staff genuinely cares about your progress.",
    rating: 5,
    image: "/testimonials/emma.jpg"
  }
]

export const TRAINERS = [
  {
    id: 1,
    name: "Alex Rivera",
    specialty: "Strength & Conditioning",
    experience: "8 years",
    certifications: ["NASM-CPT", "CSCS"],
    bio: "Specializes in powerlifting and functional movement. Helped 200+ clients achieve their strength goals.",
    image: "/trainers/alex.jpg"
  },
  {
    id: 2,
    name: "Maya Patel",
    specialty: "Yoga & Mindfulness",
    experience: "6 years",
    certifications: ["RYT-500", "Meditation Instructor"],
    bio: "Combines traditional yoga with modern wellness practices for holistic health transformation.",
    image: "/trainers/maya.jpg"
  },
  {
    id: 3,
    name: "Carlos Martinez",
    specialty: "HIIT & Weight Loss",
    experience: "10 years",
    certifications: ["ACSM-CPT", "Nutrition Specialist"],
    bio: "Expert in high-intensity training and sustainable weight loss. Passionate about changing lives through fitness.",
    image: "/trainers/carlos.jpg"
  }
]

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Trainers", href: "#trainers" },
  { name: "Membership", href: "#membership" },
  { name: "Contact", href: "#contact" }
]