"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    // Only add listener on client side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (href: string) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark-secondary/90 backdrop-blur-sm text-white py-2 hidden lg:block border-b border-dark-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent-emerald" />
                <span className="text-dark-secondary">{SITE_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent-emerald" />
                <span className="text-dark-secondary">{SITE_CONFIG.contact.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-accent-emerald" />
              <span className="text-dark-secondary">Mon-Fri: {SITE_CONFIG.hours.weekdays}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-dark-primary/95 backdrop-blur-md shadow-dark border-b border-dark-light" 
            : "bg-dark-primary/80 backdrop-blur-sm",
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="bg-accent-emerald text-dark-primary p-2 rounded-xl">
                  <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                    FZ
                  </div>
                </div>
                <div>
                  <h1 className="font-display font-bold text-2xl text-dark-primary">
                    {SITE_CONFIG.name}
                  </h1>
                  <p className="text-sm text-dark-muted">
                    {SITE_CONFIG.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative font-medium transition-colors hover:text-accent-emerald text-dark-secondary"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent-emerald scale-x-0 transition-transform hover:scale-x-100" />
                </motion.button>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => scrollToSection('#membership')}
                className="btn-primary"
              >
                Join Now
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-dark-secondary hover:text-accent-emerald transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass border-t border-dark-light"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {NAVIGATION_ITEMS.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-dark-secondary hover:text-accent-emerald font-medium transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                  <button
                    onClick={() => scrollToSection('#membership')}
                    className="btn-primary w-full"
                  >
                    Join Now
                  </button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}