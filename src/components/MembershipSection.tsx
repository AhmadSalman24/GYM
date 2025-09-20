"use client"

import { motion } from 'framer-motion'
import { Check, Star, Crown, Zap } from 'lucide-react'
import { MEMBERSHIP_PLANS } from '@/lib/constants'

const planIcons = {
  1: Zap,
  2: Star,
  3: Crown,
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

export default function MembershipSection() {
  const handlePlanSelection = (planName: string, planPrice: number) => {
    // Scroll to contact section for membership signup
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    setTimeout(() => {
      alert(`You selected the ${planName} plan ($${planPrice}). Please fill out the contact form below to get started with your membership.`)
    }, 500)
  }

  const handleFreeConsultation = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    setTimeout(() => {
      alert('Great! Please fill out the contact form below to schedule your free consultation.')
    }, 500)
  }
  return (
    <section id="membership" className="py-20 bg-dark-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary to-transparent" />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 glass rounded-full text-dark-secondary mb-6"
          >
            <Crown className="w-4 h-4 mr-2 text-accent-purple" />
            <span className="text-sm font-medium">Membership Plans</span>
          </motion.div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Flexible membership options designed to fit your lifestyle and fitness goals. 
            Start your transformation today with our premium facilities and expert guidance.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {MEMBERSHIP_PLANS.map((plan) => {
            const IconComponent = planIcons[plan.id as keyof typeof planIcons]
            
            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`
                  relative rounded-3xl p-8 transition-all duration-300 border border-opacity-20
                  ${plan.popular 
                    ? 'glass-premium shadow-2xl shadow-accent-emerald/25 scale-105' 
                    : 'glass hover:scale-105'
                  }
                `}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent-emerald text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-xl
                    ${plan.popular 
                      ? 'bg-accent-emerald/20' 
                      : 'bg-accent-blue/20'
                    }
                  `}>
                    <IconComponent className={`
                      w-8 h-8 
                      ${plan.popular ? 'text-accent-emerald' : 'text-accent-blue'}
                    `} />
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className="font-display font-bold text-2xl mb-2 text-dark-primary">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-dark-muted">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className={`
                      text-4xl font-bold
                      ${plan.popular ? 'text-accent-emerald' : 'text-accent-blue'}
                    `}>
                      ${plan.price}
                    </span>
                    <span className="text-lg ml-2 text-dark-muted">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`
                        w-5 h-5 mr-3 mt-0.5 flex-shrink-0
                        ${plan.popular ? 'text-accent-emerald' : 'text-accent-blue'}
                      `} />
                      <span className="text-dark-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  onClick={() => handlePlanSelection(plan.name, plan.price)}
                  className={`
                  w-full py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105
                  ${plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                  }
                `}>
                  {plan.popular ? 'Get Started Now' : 'Choose Plan'}
                </button>

                {/* Background Pattern for Popular Plan */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-emerald/5 to-transparent pointer-events-none" />
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-opacity-20">
            <h3 className="font-display font-bold text-2xl mb-4 text-dark-primary">
              Not Sure Which Plan Is Right For You?
            </h3>
            <p className="text-dark-muted mb-6 max-w-2xl mx-auto">
              Our fitness experts are here to help you choose the perfect membership plan 
              based on your goals, schedule, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleFreeConsultation}
                className="btn-primary"
              >
                Get Free Consultation
              </button>
              <button 
                onClick={() => {
                  // Scroll to top of membership section to view all plans
                  const membershipSection = document.querySelector('#membership')
                  if (membershipSection) {
                    membershipSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-secondary"
              >
                Compare All Plans
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}