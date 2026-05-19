'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useQueryState } from 'nuqs'
import { ALL_TAGS, type Tag } from '@/lib/tags'
import type { PostMeta } from '@/lib/posts'

/* ── Editorial cover (mirrors page.tsx) ──────────────────── */
function EditorialCover({ cover }: { cover: PostMeta['cover'] }) {
  return (
    <div className={`blog-editorial blog-cover-${cover.bg}`} style={{ position: 'absolute', inset: 0 }}>
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

/* ── Card cover (mirrors page.tsx) ───────────────────────── */
function CardCover({ cover }: { cover: PostMeta['cover'] }) {
  if (cover.kind === 'photo' && cover.src) {
    return (
      <Image
        src={cover.src}
        alt={cover.alt ?? ''}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
        className="object-cover"
        style={{ transition: 'transform 800ms cubic-bezier(0.2,0.6,0.2,1)' }}
      />
    )
  }
  return <EditorialCover cover={cover} />
}

/* ── Grid card (mirrors page.tsx) ────────────────────────── */
function GridCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card__media">
        <span className="blog-card__category">{post.category}</span>
        <CardCover cover={post.cover} />
      </div>
      <div className="blog-card__meta">
        <span>{post.date}</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="blog-card__title">{post.title}</h3>
      <p className="blog-card__excerpt">{post.excerpt}</p>
      <div className="blog-card__byline">By {post.author.name}</div>
    </Link>
  )
}

/* ── Tag filter bar + filtered grid ─────────────────────── */
interface TagFilterGridProps {
  posts: PostMeta[]
  totalCount: number
}

export default function TagFilterGrid({ posts, totalCount }: TagFilterGridProps) {
  const [activeTag, setActiveTag] = useQueryState('tag', { defaultValue: '' })

  function handleTag(tag: Tag) {
    setActiveTag(activeTag === tag ? '' : tag)
  }

  const filtered = activeTag
    ? posts.filter(p => p.tags?.includes(activeTag as Tag))
    : posts

  return (
    <>
      {/* Filter bar */}
      <section style={{ background: 'var(--color-linen)', borderTop: '1px solid rgba(26,26,26,0.08)', borderBottom: '1px solid rgba(26,26,26,0.08)' }}>
        <div className="section-inner" style={{ padding: '1.25rem 5%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem' }}>
          <button
            onClick={() => setActiveTag('')}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 150ms, color 150ms',
              background: !activeTag ? 'var(--color-ink)' : 'rgba(26,26,26,0.10)',
              color: !activeTag ? '#fff' : 'rgba(26,26,26,0.6)',
            }}
          >
            All
          </button>
          {ALL_TAGS.map(tag => {
            const isActive = activeTag === tag
            return (
              <button
                key={tag}
                onClick={() => handleTag(tag)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.68rem',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 150ms, color 150ms',
                  background: isActive ? 'var(--color-ink)' : 'rgba(26,26,26,0.10)',
                  color: isActive ? '#fff' : 'rgba(26,26,26,0.6)',
                }}
              >
                {tag}
              </button>
            )
          })}
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: 'var(--color-white)' }}>
        <div className="section-inner" style={{ padding: '0 5% 5rem' }}>
          <div className="blog-section-head" style={{ marginTop: '3rem' }}>
            <div>
              <span
                className="blog-eyebrow blog-eyebrow--ghost"
                style={{ marginBottom: '0.75rem', display: 'inline-block' }}
              >
                Recent Writing
              </span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                color: 'var(--color-ink)',
              }}>
                {activeTag ? `Essays on ${activeTag}.` : 'More essays & frameworks.'}
              </h2>
            </div>
            <div className="blog-section-head__right">
              {filtered.length} {filtered.length === 1 ? 'essay' : 'essays'}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="blog-grid">
              {filtered.map(post => <GridCard key={post.slug} post={post} />)}
            </div>
          ) : (
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'rgba(26,26,26,0.4)',
              paddingTop: '2rem',
            }}>
              No essays tagged with &ldquo;{activeTag}&rdquo; yet.
            </p>
          )}
        </div>
      </section>
    </>
  )
}