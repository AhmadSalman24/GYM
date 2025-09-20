"use client"

import { useEffect } from 'react'

export default function HydrationFix() {
  useEffect(() => {
    // Clean up browser extension attributes that cause hydration mismatches
    const cleanupExtensionAttributes = () => {
      const elements = document.querySelectorAll('[bis_skin_checked], [__processed_c4354bff-31f9-44ee-b7ad-ed5c4e4fa7cd__]');
      elements.forEach(element => {
        element.removeAttribute('bis_skin_checked');
        element.removeAttribute('__processed_c4354bff-31f9-44ee-b7ad-ed5c4e4fa7cd__');
      });
    };

    // Run cleanup immediately and after a short delay
    cleanupExtensionAttributes();
    const timer = setTimeout(cleanupExtensionAttributes, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
}