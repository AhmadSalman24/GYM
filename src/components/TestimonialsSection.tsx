"use client"

import { motion } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-dark-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5" />
      
      {/* Background Elements */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      
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
            <Quote className="w-4 h-4 mr-2 text-accent-blue" />
            <span className="text-sm font-medium">Success Stories</span>
          </motion.div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl text-dark-primary mb-6">
            What Our Members
            <span className="block text-transparent bg-clip-text gradient-blue">
              Are Saying
            </span>
          </h2>
          
          <p className="text-xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who have transformed their lives at FitZone. 
            Join thousands of satisfied members who&apos;ve achieved their fitness goals.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative glass rounded-3xl p-8 md:p-12 border border-opacity-20">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-accent-blue" />
            </div>

            {/* Content */}
            <div className="pt-8">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {renderStars(TESTIMONIALS[currentIndex].rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-dark-secondary leading-relaxed text-center mb-8 italic">
                  &ldquo;{TESTIMONIALS[currentIndex].content}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-emerald to-accent-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {TESTIMONIALS[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <div className="font-display font-bold text-lg text-dark-primary">
                      {TESTIMONIALS[currentIndex].name}
                    </div>
                    <div className="text-dark-muted">
                      {TESTIMONIALS[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-dark-muted hover:text-accent-blue transition-all hover:scale-110"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-dark-muted hover:text-accent-blue transition-all hover:scale-110"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-accent-blue scale-125' 
                  : 'bg-dark-muted/30 hover:bg-dark-muted/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 border border-opacity-20 hover:scale-105 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-dark-muted mb-4 leading-relaxed italic">
                &ldquo;{testimonial.content.length > 120 
                  ? testimonial.content.substring(0, 120) + '...' 
                  : testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-emerald to-accent-purple rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-dark-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-dark-muted">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="font-display font-bold text-3xl text-dark-primary mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-dark-muted mb-8 max-w-2xl mx-auto">
            Join our community and become the next success story. Your transformation starts today!
          </p>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                const element = document.querySelector('#membership')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary"
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}