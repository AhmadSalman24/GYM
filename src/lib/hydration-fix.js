// Hydration fix for browser extension conflicts
if (typeof window !== 'undefined') {
  // Suppress hydration warnings caused by browser extensions
  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('hydration') ||
       args[0].includes('bis_skin_checked') ||
       args[0].includes('__processed_') ||
       args[0].includes('browser extension'))
    ) {
      return;
    }
    originalError.apply(console, args);
  };

  // Remove browser extension attributes on DOM ready
  const cleanupExtensionAttributes = () => {
    const elements = document.querySelectorAll('[bis_skin_checked], [__processed_c4354bff-31f9-44ee-b7ad-ed5c4e4fa7cd__]');
    elements.forEach(element => {
      element.removeAttribute('bis_skin_checked');
      element.removeAttribute('__processed_c4354bff-31f9-44ee-b7ad-ed5c4e4fa7cd__');
    });
  };

  // Run cleanup after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cleanupExtensionAttributes);
  } else {
    cleanupExtensionAttributes();
  }

  // Also run cleanup after React hydration
  setTimeout(cleanupExtensionAttributes, 100);
}