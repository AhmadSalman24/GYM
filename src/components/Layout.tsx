"use client"

import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import HydrationFix from './HydrationFix'

interface LayoutProps {
  children: ReactNode
  className?: string
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-dark-primary">
      <HydrationFix />
      <Header />
      <main className={`flex-1 ${className || ''}`}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}