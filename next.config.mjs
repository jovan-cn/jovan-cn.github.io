import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  "./app/i18n/request.ts", 
);

/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== "production";
const nextConfig = {
  output: dev ? undefined: "export", 
  images: {
    unoptimized: dev ? false : true,
  },
};

export default withNextIntl(nextConfig);
