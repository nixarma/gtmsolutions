import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug, getRelatedPosts, type PostMeta } from '@/lib/posts'
import { ProgressBar, TOC, CalEmbed } from '@/components/blog/BlogClientComponents'
import type { TocSection } from '@/components/blog/BlogClientComponents'
import '@/app/blog/blog.css'
import rehypeSlug from 'rehype-slug'

/* ── Static params ────────────────────────────────────────── */
export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

/* ── Metadata ─────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return {
      title: `${post.title} | GTM Solutions Consulting`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author.name],
        ...(post.cover.kind === 'photo' && post.cover.src
          ? { images: [{ url: post.cover.src }] }
          : {}),
      },
    }
  } catch {
    return { title: 'Article | GTM Solutions Consulting' }
  }
}

/* ── MDX components ───────────────────────────────────────── */
// These let you use shortcodes in MDX files, e.g. <PullQuote attr="...">text</PullQuote>
function PullQuote({ children, attr }: { children: React.ReactNode; attr?: string }) {
  return (
    <figure className="blog-pullquote">
      <div className="blog-pullquote__text">{children}</div>
      {attr && <figcaption className="blog-pullquote__attr">{attr}</figcaption>}
    </figure>
  )
}

function InlineFigure({
  src, alt, label, caption,
}: { src: string; alt: string; label?: string; caption?: string }) {
  return (
    <figure className="blog-inline-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      {(label || caption) && (
        <figcaption>
          {label && <span className="label">{label}</span>}
          {caption && <span>{caption}</span>}
        </figcaption>
      )}
    </figure>
  )
}

function MidCTA() {
  return (
    <aside className="blog-mid-cta">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="blog-mid-cta__kicker">Working through this with your team?</div>
        <div className="blog-mid-cta__title">
          Most engagements begin with one diagnostic conversation.{' '}
          <span className="blog-mid-cta__title-up">No prep needed.</span>
        </div>
      </div>
      <div>
        <a href="#booking" className="blog-mid-cta__btn">Schedule a strategy session</a>
      </div>
    </aside>
  )
}

const MDX_COMPONENTS = { PullQuote, InlineFigure, MidCTA }

/* ── Editorial cover ──────────────────────────────────────── */
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

/* ── Related card ─────────────────────────────────────────── */
function RelatedCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card__media">
        <span className="blog-card__category">{post.category}</span>
        {post.cover.kind === 'photo' && post.cover.src ? (
          <Image
            src={post.cover.src}
            alt={post.cover.alt ?? ''}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <EditorialCover cover={post.cover} />
        )}
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

/* ── TOC extraction from MDX headings ─────────────────────── */
// Reads ## headings from raw MDX content and converts to TOC sections.
// Format expected: ## <num>.<label>  e.g.  ## 01. The misdiagnosis
function extractTocSections(content: string): TocSection[] {
  const re = /^## +(\d{2})\.\s+(.+)$/gm
  const sections: TocSection[] = []
  let match
  while ((match = re.exec(content)) !== null) {
    const num = match[1]
    const label = match[2].trim()
    const fullHeading = `${num}. ${label}`
    const id = fullHeading
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
    sections.push({ id, num, label })
  }
  return sections
}

/* ── Page ─────────────────────────────────────────────────── */
// Cal.com link - update to your actual cal.com username/event
const CAL_LINK = 'nikhilsarma/intros'

export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  const related = getRelatedPosts(slug, 3)
  const tocSections = extractTocSections(post.content)

  return (
    <>
      {/* Client: thin progress bar fixed at top */}
      <ProgressBar />

      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <header className="blog-article-hero">
          <div className="blog-article-hero__inner">
            <span className="blog-eyebrow blog-eyebrow--dark">{post.category}</span>
            <h1 className="blog-article-hero__h1">{post.title}</h1>
            <p className="blog-article-hero__lede">{post.excerpt}</p>
            <div className="blog-article-hero__meta">
              <div className="blog-author-block">
                {post.author.avatar && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="blog-author-block__avatar"
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                )}
                <div>
                  <div className="blog-author-block__name">{post.author.name}</div>
                  <div className="blog-author-block__role">{post.author.role}</div>
                </div>
              </div>
              <div className="blog-article-hero__metabits">
                <span>{post.date}</span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'currentColor', opacity: 0.5, display: 'inline-block' }} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Cover image (photo posts only) */}
        {post.cover.kind === 'photo' && post.cover.src && (
          <section className="blog-article-cover">
            <div className="blog-article-cover__inner">
              <div className="blog-article-cover__rule" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover.src}
                alt={post.cover.alt ?? ''}
                style={{
                  width: '100%',
                  borderRadius: 3,
                  aspectRatio: '16 / 8',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 1,
                  display: 'block',
                }}
              />
              {post.cover.caption && (
                <p className="blog-article-cover__caption">{post.cover.caption}</p>
              )}
            </div>
          </section>
        )}

        {/* Article body */}
        <section style={{ background: 'var(--color-white)' }}>
          <div className="blog-article-layout">

            {/* TOC - client island (sticky scroll tracking) */}
            {tocSections.length > 0 && <TOC sections={tocSections} />}
            {tocSections.length === 0 && <div />}

            <div>
              <article className="blog-prose">
                <MDXRemote source={post.content} components={MDX_COMPONENTS} options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}/>
              </article>

              {/* Author bio */}
              <aside className="blog-author-bio">
                {post.author.avatar && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="blog-author-bio__avatar"
                    src={post.author.avatar}
                    alt={post.author.name}
                    loading="lazy"
                  />
                )}
                <div>
                  <div className="blog-author-bio__kicker">About the author</div>
                  <h3 className="blog-author-bio__name">{post.author.name}</h3>
                  <p className="blog-author-bio__role">{post.author.role}</p>
                  <p className="blog-author-bio__body">{post.author.bio}</p>
                  <div className="blog-author-bio__links">
                    <a
                      href={post.author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <span style={{ opacity: 0.3 }}>·</span>
                    <Link href="/blog">All Essays</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Booking embed */}
        <section id="booking" className="blog-cal-section">
          <div className="blog-cal-section__inner">
            <div className="blog-cal-section__header">
              <p className="blog-cal-section__kicker">Ready to apply this?</p>
              <h2 className="blog-cal-section__title">
                Book a diagnostic conversation.
              </h2>
            </div>
            {/* Client island: lazy-loaded via IntersectionObserver */}
            <CalEmbed calLink={CAL_LINK} slug={slug}/>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="blog-related">
            <div className="section-inner" style={{ padding: '4rem 5%' }}>
              <div className="blog-section-head">
                <div>
                  <span
                    className="blog-eyebrow blog-eyebrow--ghost"
                    style={{ marginBottom: '0.75rem', display: 'inline-block' }}
                  >
                    Continue Reading
                  </span>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                    color: 'var(--color-ink)',
                  }}>
                    Related essays.
                  </h2>
                </div>
                <div className="blog-section-head__right">
                  <Link
                    href="/blog"
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      gap: '0.4rem', color: 'var(--color-sage)',
                      textDecoration: 'none', fontSize: '0.68rem',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      fontWeight: 500,
                    }}
                  >
                    All Essays <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="blog-grid">
                {related.map(p => <RelatedCard key={p.slug} post={p} />)}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
