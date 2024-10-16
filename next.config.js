/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allows any hostname
        },
      ],
    },
  }
  
  module.exports = nextConfig
  