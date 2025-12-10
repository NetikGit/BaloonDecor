import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // other Next.js-specific options only
  turbopack: {
    // set this to your project root where package.json & lockfile for THIS project live
    root: 'C:/Users/Netik/Desktop/freelancing/baloonsbockingapp'
  }
};

export default nextConfig;
