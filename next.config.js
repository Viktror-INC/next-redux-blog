/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/cloudinary/:path*',
        destination: 'https://api.cloudinary.com/:path*',
      },
    ]
  },
};

module.exports = nextConfig;
