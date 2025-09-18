/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // disables lightningcss, falls back to PostCSS
  },

};

export default nextConfig;
