import type { NextConfig } from "next";
// import rehypePrism from "rehype-prism-plus";
import createMDX from '@next/mdx';
// import remarkFrontmatter from 'remark-frontmatter';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  compiler: {
    removeConsole: false,
  },
};

// https://nextjs.org/docs/app/guides/mdx
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    /**
     * Prevents YAML frontmatter from rendering as text
     * inside Markdown content
     */
    remarkPlugins: ['remark-frontmatter'],
    rehypePlugins: ['rehype-prism-plus'],
  },
});

export default withMDX(nextConfig);
