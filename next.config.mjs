/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'szchquhlwnotkddxfmpv.supabase.co',
        pathname: '/storage/v1/object/public/**',
        port: '',
      },
    ],
  },
};

export default nextConfig;