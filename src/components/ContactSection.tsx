"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: SITE_CONFIG.contact.phone,
      action: `tel:${SITE_CONFIG.contact.phone}`
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: SITE_CONFIG.contact.email,
      action: `mailto:${SITE_CONFIG.contact.email}`
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: SITE_CONFIG.contact.address,
      action: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 5AM-11PM',
      action: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-dark-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl" />
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
            <Phone className="w-4 h-4 mr-2 text-accent-blue" />
            <span className="text-sm font-medium">Get In Touch</span>
          </motion.div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Ready to Start Your
            <span className="block text-transparent bg-clip-text gradient-blue">
              Fitness Journey?
            </span>
          </h2>
          
          <p className="text-xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Contact us today to schedule a tour, ask questions, or get started with your membership. 
            Our team is here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-2xl mb-8 text-dark-primary">
              Get in Touch
            </h3>

            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.a
                    key={info.title}
                    href={info.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-6 glass rounded-xl border border-opacity-20 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="bg-accent-blue/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-accent-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-dark-primary">{info.title}</h4>
                      <p className="text-dark-muted">{info.details}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Hours of Operation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-opacity-20"
            >
              <h4 className="font-display font-bold text-xl mb-4 text-dark-primary">Hours of Operation</h4>
              <div className="space-y-2 text-dark-muted">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>{SITE_CONFIG.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>{SITE_CONFIG.hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>{SITE_CONFIG.hours.sunday}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 border border-opacity-20">
              <h3 className="font-display font-bold text-2xl mb-6 text-dark-primary">
                Send us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-accent-emerald mx-auto mb-4" />
                  <h4 className="font-bold text-xl mb-2 text-accent-emerald">Message Sent!</h4>
                  <p className="text-dark-muted">
                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark-secondary">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-secondary/20 border border-dark-light rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all text-dark-primary placeholder-dark-muted"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark-secondary">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-secondary/20 border border-dark-light rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all text-dark-primary placeholder-dark-muted"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark-secondary">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-secondary/20 border border-dark-light rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all text-dark-primary placeholder-dark-muted"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark-secondary">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-secondary/20 border border-dark-light rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all text-dark-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="membership">Membership Information</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="group-classes">Group Classes</option>
                        <option value="tour">Facility Tour</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-secondary">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-secondary/20 border border-dark-light rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all resize-none text-dark-primary placeholder-dark-muted"
                      placeholder="Tell us about your fitness goals and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8 text-center border border-opacity-20">
            <h3 className="font-display font-bold text-2xl mb-4 text-dark-primary">Find Us</h3>
            <p className="text-dark-muted mb-6 max-w-2xl mx-auto">
              Located in the heart of the city with easy access to parking and public transportation.
            </p>
            
            {/* Placeholder for map */}
            <div className="bg-dark-secondary/30 rounded-xl h-64 flex items-center justify-center border border-dark-light">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <p className="text-dark-secondary">Interactive Map Coming Soon</p>
                <p className="text-sm text-dark-muted mt-2">{SITE_CONFIG.contact.address}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}