/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_MAIN_API: process.env.NEXT_PUBLIC_MAIN_API,
    NEXT_PUBLIC_REGION: process.env.NEXT_PUBLIC_MAIN_REGION,
    NEXT_APP_ID: process.env.NEXT_APP_ID,
    NEXT_PUBLIC_POOL_ID: process.env.NEXT_PUBLIC_POOL_ID,
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    MAP_BOX: process.env.MAP_BOX,
    LOGIN: process.env.LOGIN,
    KEY: process.env.KEY,
    NEXT_PUBLIC_FB_PIXEL: process.env.NEXT_PUBLIC_FB_PIXEL,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
