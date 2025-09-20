"use client"

import { motion } from 'framer-motion'
import { Play, ChevronDown } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function HeroSection() {
  const scrollToServices = () => {
    if (typeof window !== 'undefined') {
      const nextSection = document.querySelector('#services')
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const scrollToMembership = () => {
    if (typeof window !== 'undefined') {
      const membershipSection = document.querySelector('#membership')
      if (membershipSection) {
        membershipSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const stats = [
    { number: '500+', label: 'Happy Members' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '100+', label: 'Classes Monthly' },
    { number: '5+', label: 'Years Experience' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-primary">
      {/* Background with Modern Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 via-dark-primary/20 to-transparent" />
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent-blue/3 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            <span className="text-dark-primary">Transform Your</span>
            <br />
            <motion.span
              initial={{ opacity: 0, backgroundSize: "0% 100%" }}
              animate={{ opacity: 1, backgroundSize: "100% 100%" }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="text-transparent bg-clip-text gradient-emerald relative"
            >
              Body & Mind
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-dark-muted max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Join our premium fitness community with state-of-the-art equipment, 
            expert trainers, and a supportive environment designed for your success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <button
              onClick={scrollToMembership}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Journey
            </button>

            <button
              onClick={scrollToServices}
              className="btn-secondary text-lg px-8 py-4 flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              <span>Explore Services</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="text-center p-6 glass rounded-xl border border-dark-light/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-emerald mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-muted text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToServices}
            className="flex flex-col items-center space-y-2 text-dark-muted hover:text-accent-emerald transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}