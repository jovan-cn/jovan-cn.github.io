import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  "app/i18n/request.ts", 
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output:  process.env.NODE_ENV !== "production" ? undefined: "export", 
  images: {
    unoptimized: process.env.NODE_ENV !== "production" ? false : true,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
