/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // disables lightningcss, falls back to PostCSS
  },
  // output: "export", // must be at root level
  //  images: {
  //   unoptimized: true, // ✅ disables Next.js image optimization
  // },
};

export default nextConfig;
