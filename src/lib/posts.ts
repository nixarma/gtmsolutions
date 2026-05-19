import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

import type { Tag } from './tags'
export type { Tag } from './tags'
export { ALL_TAGS } from './tags'

export interface PostMeta {
  slug: string
  title: string
  excerpt: string
  category: string
  tags?: Tag[]
  date: string
  readTime: string
  author: {
    name: string
    role: string
    bio: string
    avatar: string
    linkedin: string
  }
  cover: {
    kind: 'photo' | 'editorial'
    // photo
    src?: string
    alt?: string
    caption?: string
    // editorial
    bg?: 'linen' | 'lightest' | 'sage' | 'ink'
    num?: string
    phrase?: string
  }
  featured?: boolean
}

export interface Post extends PostMeta {
  content: string
}

function slugsFromDisk(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/, ''))
}

function readPost(slug: string): Post {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { ...(data as PostMeta), slug, content }
}

/** All posts sorted newest first */
export function getAllPosts(): PostMeta[] {
  return slugsFromDisk()
    .map(slug => {
      const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(raw)
      return { ...(data as PostMeta), slug }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedPost(): PostMeta | undefined {
  return getAllPosts().find(p => p.featured)
}

export function getPostBySlug(slug: string): Post {
  return readPost(slug)
}

export function getRelatedPosts(currentSlug: string, count = 3): PostMeta[] {
  return getAllPosts()
    .filter(p => p.slug !== currentSlug)
    .slice(0, count)
}