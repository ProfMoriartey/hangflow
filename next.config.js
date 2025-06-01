/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();
module.exports = withNextIntl(nextConfig);

// protocol: "https",
