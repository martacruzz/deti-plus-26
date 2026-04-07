/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/deti-plus-26',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
