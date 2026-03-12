/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/ai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/construction-ai',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig