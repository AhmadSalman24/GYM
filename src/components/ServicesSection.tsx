"use client"

import { motion } from 'framer-motion'
import { User, Users, Dumbbell, Heart, ArrowRight, Check } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const iconMap = {
  User: User,
  Users: Users,
  Dumbbell: Dumbbell,
  Heart: Heart,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function ServicesSection() {
  const handleLearnMore = (serviceTitle: string) => {
    // Scroll to contact section for more information
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    // Show alert with service information
    alert(`Learn more about ${serviceTitle}! Our team will contact you with detailed information.`)
  }

  const handleBookConsultation = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    // Show alert
    alert('Great choice! Please fill out the contact form below to book your free consultation.')
  }

  return (
    <section id="services" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-dark-primary mb-6">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Achieve Your Goals
            </span>
          </h2>
          
          <p className="text-xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            From personalized training to state-of-the-art equipment, we provide comprehensive 
            fitness solutions tailored to your unique journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative glass rounded-2xl p-8 hover:bg-dark-hover transition-all duration-300 border-dark-light"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-emerald/5 to-accent-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-emerald/10 group-hover:bg-accent-emerald group-hover:shadow-emerald rounded-xl transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-accent-emerald group-hover:text-dark-primary transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title & Price */}
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-xl text-dark-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-accent-emerald font-semibold text-lg">
                      {service.price}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-dark-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-dark-secondary">
                        <Check className="w-4 h-4 text-accent-emerald mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    onClick={() => handleLearnMore(service.title)}
                    className="flex items-center text-accent-emerald hover:text-accent-blue font-semibold group-hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-accent-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center glass p-12 text-white rounded-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-emerald opacity-90" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of members who have transformed their lives with our premium services.
            </p>
            <button 
              onClick={handleBookConsultation}
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Book Your Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}