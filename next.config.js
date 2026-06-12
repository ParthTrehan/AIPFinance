/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: "/AIPFinance",
  assetPrefix: "/AIPFinance/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
