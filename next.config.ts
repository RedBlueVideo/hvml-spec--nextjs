import type { NextConfig } from "next";
import createMDX from '@next/mdx';
// import remarkFrontmatter from 'remark-frontmatter';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

// https://nextjs.org/docs/app/guides/mdx
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // optional: add remark-frontmatter to prevent YAML from rendering as text
    remarkPlugins: ['remark-frontmatter'],
  },
});

export default withMDX(nextConfig);
