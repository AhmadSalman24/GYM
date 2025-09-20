import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import TrainersSection from '@/components/TrainersSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import MembershipSection from '@/components/MembershipSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TrainersSection />
      <TestimonialsSection />
      <MembershipSection />
      <ContactSection />
    </Layout>
  )
}
