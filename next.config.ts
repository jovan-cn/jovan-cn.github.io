import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm';



/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== "production";
const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  output: dev ? undefined : "export",
  image: {
      unoptimized: dev ? false : true,
  },
};

const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({
  // default mdx only, extends for md
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm]
  }
});

export default withNextIntl(withMDX(nextConfig));
