/** @type {import('next').NextConfig} */

const withFonts = require("next-fonts");

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lens.infura-ipfs.io",
      },
    ],
  },
};

module.exports = withFonts({
  ...nextConfig,
  webpack(config, options) {
    return config;
  },
});
