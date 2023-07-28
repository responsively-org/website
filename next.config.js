/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  transpilePackages: ['react-tweet'],
  redirects: async () => {
    return [
      {
        source: '/join-discord',
        destination: 'https://discord.com/invite/tFG4E7bgkr',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig
