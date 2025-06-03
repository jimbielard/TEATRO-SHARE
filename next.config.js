/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'via.placeholder.com'], // Allow Google profile images and placeholder images
  },
  env: {
    MONGODB_URI: 'mongodb://localhost:27017/teatro-share',
    GOOGLE_ID: 'dummy-id',
    GOOGLE_SECRET: 'dummy-secret',
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'your-secret-key'
  },
}

module.exports = nextConfig 