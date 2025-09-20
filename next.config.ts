import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React strict mode helps catch hydration issues
  reactStrictMode: true,
  
  // Optimize package imports for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Enable source maps in development for better debugging
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'eval-source-map';
    }
    return config;
  },
};

export default nextConfig;
