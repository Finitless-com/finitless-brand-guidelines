/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['@finitless/design-system'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brand.finitless.com',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
