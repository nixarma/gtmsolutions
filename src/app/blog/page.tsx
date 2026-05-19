import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getAllPosts, getFeaturedPost, type PostMeta } from '@/lib/posts'
import TagFilterGrid from '@/components/blog/TagFilterGrid'
import '@/app/blog/blog.css'

export const metadata: Metadata = {
  title: 'Blog | GTM Solutions Consulting',
  description:
    'Field notes on Decision Confidence, value discovery, and the systems behind durable revenue. Written for CROs, VPs of Sales, and Solutions Engineering leaders.',
  openGraph: {
    title: 'Blog | GTM Solutions Consulting',
    description:
      'Frameworks, perspectives, and the practitioner detail behind what Nikhil Sarma teaches inside engagements.',
  },
}

/* ── Editorial cover (text-only card art) ─────────────────── */
function EditorialCover({ cover }: { cover: PostMeta['cover'] }) {
  const bgClass = `blog-cover-${cover.bg}`
  return (
    <div className={`blog-editorial ${bgClass}`} style={{ position: 'absolute', inset: 0 }}>
      <div className="blog-editorial__rule" />
      <div className="blog-editorial__num">{cover.num}</div>
      <div className="blog-editorial__phrase">
        {cover.phrase?.split('\n').map((line, i) => (
          <span key={i} style={{ display: 'block' }}>{line}</span>
        ))}
      </div>
    </div>
  )
}

/* ── Featured hero card ───────────────────────────────────── */
function FeaturedCard({ post }: { post: PostMeta }) {
  const titleBody = post.title.replace(/\.$/, '')
  return (
    <Link href={`/blog/${post.slug}`} className="blog-featured">
      {post.cover.kind === 'photo' && post.cover.src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="blog-featured__media"
          src={post.cover.src}
          alt={post.cover.alt ?? ''}
        />
      )}
      <div className="blog-featured__overlay" />
      <div className="blog-featured__rule" />
      <div className="blog-featured__inner">
        <div className="blog-featured__kicker">
          <span className="tag">{post.category}</span>
          <span>Featured</span>
        </div>
        <h2 className="blog-featured__title">
          {titleBody}
          <span className="blog-featured__title-up">.</span>
        </h2>
        <p className="blog-featured__excerpt">{post.excerpt}</p>
        <div className="blog-featured__meta">
          <span className="blog-featured__author">{post.author.name}</span>
          <span className="blog-featured__sep" />
          <span>{post.date}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function BlogPage() {
  const allPosts = getAllPosts()
  const featured = getFeaturedPost() ?? allPosts[0]
  const rest = allPosts.filter(p => p.slug !== featured?.slug)

  return (
    <main style={{ paddingTop: '64px' }}>

      {/* Intro */}
      <section style={{ background: 'var(--color-white)' }}>
        <div className="section-inner" style={{ padding: '4rem 5% 2.5rem' }}>
          <span className="blog-eyebrow blog-eyebrow--light" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>
            The Blog
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              lineHeight: 1.18,
              color: 'var(--color-ink)',
              maxWidth: 720,
              marginBottom: '1rem',
            }}
          >
            Field notes on Decision Confidence, value discovery, and the systems behind durable revenue.
          </h1>
          <p style={{
            fontWeight: 300,
            fontSize: '1rem',
            lineHeight: 1.85,
            color: 'var(--color-sage)',
            maxWidth: 580,
          }}>
            Frameworks, perspectives, and the practitioner detail behind what I teach inside engagements.
            Written for CROs, VPs of Sales, and Solutions Engineering leaders.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section style={{ background: 'var(--color-white)' }}>
          <div className="section-inner" style={{ padding: '0 5% 4rem' }}>
            <FeaturedCard post={featured} />
          </div>
        </section>
      )}

      {/* Tag filter bar + grid */}
      {rest.length > 0 && (
        <Suspense fallback={null}>
          <TagFilterGrid posts={rest} totalCount={rest.length} />
        </Suspense>
      )}

    </main>
  )
}