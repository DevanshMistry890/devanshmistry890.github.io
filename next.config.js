/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ['import'],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
