"use client"

import { motion } from 'framer-motion'
import { Award, Users, Heart, Target, Quote } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

const features = [
  {
    icon: Award,
    title: 'Certified Trainers',
    description: 'Our expert trainers hold industry-leading certifications and years of experience.'
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Join a supportive community that motivates and celebrates your fitness journey.'
  },
  {
    icon: Heart,
    title: 'Holistic Wellness',
    description: 'We focus on complete wellness - physical, mental, and emotional health.'
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Personalized programs designed to help you achieve your specific fitness goals.'
  }
]

const stats = [
  { number: '5+', label: 'Years of Excellence' },
  { number: '500+', label: 'Happy Members' },
  { number: '50+', label: 'Expert Trainers' },
  { number: '100+', label: 'Classes Monthly' }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark-tertiary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
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
            Your Fitness Journey
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Starts Here
            </span>
          </h2>
          
          <p className="text-xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Transform your lifestyle with our premium fitness community, expert guidance, 
            and state-of-the-art facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-dark-muted leading-relaxed">
                At {SITE_CONFIG.name}, we believe fitness is more than just working out—it&apos;s about 
                transforming your entire lifestyle. For over 5 years, we&apos;ve been the premier 
                fitness destination, helping thousands of members achieve their goals and live 
                healthier, happier lives.
              </p>
              
              <p className="text-lg text-dark-muted leading-relaxed">
                Our state-of-the-art facility combines cutting-edge equipment with expert guidance 
                and a supportive community atmosphere. Whether you&apos;re just starting your fitness 
                journey or you&apos;re a seasoned athlete, we have everything you need to succeed.
              </p>

              <div className="bg-gradient-to-r from-secondary-50 to-accent-50 p-6 rounded-xl border-l-4 border-secondary-500">
                <Quote className="w-8 h-8 text-secondary-500 mb-4" />
                <p className="text-neutral-700 italic text-lg leading-relaxed">
                  &ldquo;Our mission is to empower every individual to unlock their full potential 
                  through fitness, nutrition, and unwavering support.&rdquo;
                </p>
                <p className="text-dark-secondary font-semibold mt-4">
                  - FitZone Leadership Team
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl border border-opacity-20 hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-accent-emerald/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent-emerald" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-dark-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-dark-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 border border-opacity-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-dark-primary">
              Our Impact in Numbers
            </h3>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">
              These numbers represent real people who have transformed their lives with us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-emerald mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="font-display font-bold text-3xl text-dark-primary mb-6">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-xl text-dark-muted mb-8 max-w-2xl mx-auto">
            Join our community today and discover what makes FitZone the perfect place 
            to achieve your fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-primary"
            >
              Schedule a Tour
            </button>
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const element = document.querySelector('#membership')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-secondary"
            >
              View Membership
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}