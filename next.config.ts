import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  theme: {
    extend: {
      fontFamily: {
        mono: ['"PT Mono"', 'monospace'], // add PT Mono
      },
    },
  },
  plugins: [],
};

export default nextConfig;
