"use client"

import { motion } from 'framer-motion'
import { Star, Award, Calendar } from 'lucide-react'
import { TRAINERS } from '@/lib/constants'

export default function TrainersSection() {
  return (
    <section id="trainers" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />
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
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark-primary mb-6">
            Our Professional
            <span className="block text-transparent bg-clip-text gradient-emerald">
              Trainers
            </span>
          </h2>

          <p className="text-xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Work with certified fitness professionals who are passionate about helping you 
            achieve your goals through personalized training and expert guidance.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 border border-dark-light/20 hover:border-accent-emerald/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-emerald/10">
                {/* Trainer Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-square bg-gradient-to-br from-dark-tertiary to-dark-primary rounded-xl flex items-center justify-center">
                    {/* Placeholder since we don't have actual images */}
                    <div className="w-24 h-24 bg-accent-emerald/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-accent-emerald">
                        {trainer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>

                {/* Trainer Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark-primary mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-accent-emerald font-medium">
                      {trainer.specialty}
                    </p>
                  </div>

                  <p className="text-dark-muted text-sm leading-relaxed">
                    {trainer.bio}
                  </p>

                  {/* Experience & Rating */}
                  <div className="flex items-center justify-between pt-4 border-t border-dark-light/20">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-accent-blue" />
                      <span className="text-sm text-dark-secondary">{trainer.experience}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent-emerald text-accent-emerald" />
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-dark-secondary">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="px-2 py-1 bg-dark-tertiary/50 text-xs text-accent-emerald rounded-md border border-accent-emerald/20"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Book Session Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 btn-secondary group"
                  >
                    <span>Book Session</span>
                    <motion.div
                      className="ml-2 inline-block"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-dark-light/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-primary mb-4">
              Ready to Train with Our Experts?
            </h3>
            <p className="text-dark-muted mb-6">
              Schedule a consultation with one of our certified trainers and start your 
              personalized fitness journey today.
            </p>
            <button className="btn-primary">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}