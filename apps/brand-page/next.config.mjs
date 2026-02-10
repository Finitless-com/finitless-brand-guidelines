/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@finitless/design-system'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brand.finitless.com',
        pathname: '/assets/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/brand-manifest.json',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
