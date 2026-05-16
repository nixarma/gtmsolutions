'use client'

import { useEffect, useState, useRef } from 'react'

/* ── Reading progress bar ─────────────────────────────────── */
// Lenis smooth scroll moves the page via its own mechanism, not window.scrollY.
// We listen to Lenis if it exists, falling back to native scroll.
export function ProgressBar() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const update = (scrollY: number) => {
      const h = document.documentElement
      const max = (h.scrollHeight - h.clientHeight) || 1
      setPct(Math.min(100, Math.max(0, (scrollY / max) * 100)))
    }

    // Lenis exposes itself on window.__lenis in most Next.js setups
    const lenis = (window as any).__lenis
    if (lenis) {
      lenis.on('scroll', ({ scroll }: { scroll: number }) => update(scroll))
      return () => lenis.off('scroll')
    }

    // Fallback: native scroll
    const onScroll = () => update(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="blog-progress-bar" aria-hidden="true">
      <div className="blog-progress-bar__fill" style={{ width: `${pct}%` }} />
    </div>
  )
}

/* ── Sticky TOC ───────────────────────────────────────────── */
export interface TocSection {
  id: string
  num: string
  label: string
}

export function TOC({ sections }: { sections: TocSection[] }) {
  const ids = sections.map(s => s.id)
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    if (!ids.length) return

    const update = () => {
      const fromTop = 140
      let cur = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - fromTop < 0) cur = id
      }
      setActive(cur)
    }

    // Lenis-aware: use Lenis scroll event if available
    const lenis = (window as any).__lenis
    if (lenis) {
      lenis.on('scroll', update)
      update()
      return () => lenis.off('scroll', update)
    }

    // Fallback: native scroll
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [ids.join(',')])  // eslint-disable-line react-hooks/exhaustive-deps

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const lenis = (window as any).__lenis
    if (lenis) {
      lenis.scrollTo(el, { offset: -88 })
    } else {
      window.scrollTo({ top: el.offsetTop - 88, behavior: 'smooth' })
    }
  }

  return (
    <aside className="blog-toc">
      <div className="blog-toc__label">On this page</div>
      <ul className="blog-toc__list">
        {sections.map(s => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={scrollTo(s.id)}
              className={`blog-toc__link${active === s.id ? ' blog-toc__link--active' : ''}`}
            >
              <span className="blog-toc__num">{s.num}</span>
              <span>{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

/* ── Cal.com inline embed (lazy via IntersectionObserver) ─── */
export function CalEmbed({ calLink, slug }: { calLink: string; slug: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const initialised = useRef(false)
  const embedId = `cal-embed-${slug}`


  useEffect(() => {
    initialised.current = false
    setVisible(false)
  }, [slug])

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [slug])

  useEffect(() => {
    if (!visible || initialised.current) return

    const timer = setTimeout(() => {
      const namespace = `blog-${slug}`
      if (!document.getElementById(embedId)) return
      initialised.current = true

      // Mirror CtaSection's IIFE pattern exactly so both share window.Cal
      ;(function (C: any, A: string, L: string) {
        const p = function (a: any, ar: any) { a.q.push(ar) }
        const d = C.document
        C.Cal = C.Cal || function (...args: any[]) {
          const cal = C.Cal
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            const s = d.createElement('script')
            s.src = A
            d.head.appendChild(s)
            cal.loaded = true
          }
          if (args[0] === L) {
            const api: any = function (...a: any[]) { p(api, a) }
            const ns = args[1]
            api.q = api.q || []
            if (typeof ns === 'string') {
              cal.ns[ns] = cal.ns[ns] || api
              p(cal.ns[ns], args)
              p(cal, ['initNamespace', ns])
            } else {
              p(cal, args)
            }
            return
          }
          p(cal, args)
        }
      })(window, 'https://app.cal.com/embed/embed.js', 'init')

      const w = window as any
      w.Cal('init', namespace, { origin: 'https://app.cal.com' })
      w.Cal.ns[namespace]('inline', {
        elementOrSelector: `#${embedId}`,
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
        calLink,
      })
      w.Cal.ns[namespace]('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#99332F' },
          dark: { 'cal-brand': '#C8D9C6' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [visible, calLink, embedId])

  return (
    <div ref={wrapperRef} className="blog-cal-embed-wrapper">
      {visible && (
        <div
          id={embedId}
          style={{ width: '100%', minHeight: 600, overflow: 'scroll' }}
        />
      )}
      {!visible && (
        <div style={{
          minHeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-sage)',
          fontSize: '0.82rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          Loading booking calendar...
        </div>
      )}
    </div>
  )
}