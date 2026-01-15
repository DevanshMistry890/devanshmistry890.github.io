/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ['import'],
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
