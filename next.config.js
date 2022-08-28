/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['index.tsx', 'styles.ts', 'index.jsx', 'index.js']
}

module.exports = nextConfig
