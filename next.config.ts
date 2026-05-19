import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  // rehype-slug and other plugins are applied per-page in MDXRemote options
  // keeping next.config lean - rsc MDX handled by next-mdx-remote
})

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.178.34'],
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {},
}

export default withMDX(nextConfig)