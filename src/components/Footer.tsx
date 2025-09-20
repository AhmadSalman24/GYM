"use client"

import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  Users,
  Award
} from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Membership', href: '#membership' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  { name: 'Personal Training', href: '#services' },
  { name: 'Group Classes', href: '#services' },
  { name: 'Nutrition Counseling', href: '#services' },
  { name: 'Strength Training', href: '#services' },
  { name: 'Cardio Equipment', href: '#services' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: SITE_CONFIG.social.facebook },
  { name: 'Instagram', icon: Instagram, href: SITE_CONFIG.social.instagram },
  { name: 'Twitter', icon: Twitter, href: SITE_CONFIG.social.twitter },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-dark-primary text-white border-t border-dark-light">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-accent-emerald text-dark-primary p-2 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                  FZ
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-dark-primary">{SITE_CONFIG.name}</h3>
                <p className="text-dark-muted text-sm">{SITE_CONFIG.tagline}</p>
              </div>
            </div>
            
            <p className="text-dark-secondary leading-relaxed">
              {SITE_CONFIG.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-accent-emerald" />
                </div>
                <div className="text-2xl font-bold text-accent-emerald">500+</div>
                <div className="text-sm text-dark-muted">Members</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-accent-emerald" />
                </div>
                <div className="text-2xl font-bold text-accent-emerald">5+</div>
                <div className="text-sm text-dark-muted">Years</div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-lg mb-6 text-dark-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-dark-secondary hover:text-accent-emerald transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-lg mb-6 text-dark-primary">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-dark-secondary hover:text-accent-emerald transition-colors"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-lg mb-6 text-dark-primary">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-emerald mt-0.5 flex-shrink-0" />
                <p className="text-dark-secondary">{SITE_CONFIG.contact.address}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-emerald" />
                <a 
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="text-dark-secondary hover:text-accent-emerald transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-emerald" />
                <a 
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-dark-secondary hover:text-accent-emerald transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-accent-emerald" />
                  <span className="font-semibold text-dark-primary">Hours:</span>
                </div>
                <div className="text-sm text-dark-secondary space-y-1 ml-7">
                  <p>Mon-Fri: {SITE_CONFIG.hours.weekdays}</p>
                  <p>Saturday: {SITE_CONFIG.hours.saturday}</p>
                  <p>Sunday: {SITE_CONFIG.hours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold mb-3 text-dark-primary">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass p-2 rounded-lg hover:scale-110 transition-all duration-300 border border-opacity-20"
                    >
                      <Icon className="h-5 w-5 text-accent-emerald" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-muted text-sm">
              © 2024 {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-dark-muted">
              <a href="#" className="hover:text-accent-emerald transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent-emerald transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent-emerald transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}