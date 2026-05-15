'use client'

import { useEffect, useRef } from 'react'

export default function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const loadedRef = useRef(false)

  useEffect(() => {
    const target = containerRef.current
    if (!target) return

    function loadCal() {
      if (loadedRef.current) return
      loadedRef.current = true

      const loadingEl = document.getElementById('cal-loading')
      if (loadingEl) setTimeout(() => { loadingEl.style.display = 'none' }, 1200)

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
      w.Cal('init', 'intros', { origin: 'https://app.cal.com' })
      w.Cal.ns.intros('inline', {
        elementOrSelector: '#my-cal-inline-intros',
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
        calLink: 'nikhilsarma/intros',
      })
      w.Cal.ns.intros('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#99332F' },
          dark: { 'cal-brand': '#C8D9C6' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              loadCal()
              observer.unobserve(target)
            }
          })
        },
        { rootMargin: '200px' }
      )
      observer.observe(target)
      return () => observer.disconnect()
    } else {
      loadCal()
    }
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--color-ink)' }}
      id="contact"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 w-[600px] h-[600px] rounded-full"
        style={{ top: '40%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(153,51,47,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-[5%] pt-20">
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-16 mb-16">
          <div>
            <h2 id="cta-heading" className="font-display font-medium text-white mb-3" style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)' }}>
              Our first step starts here.
            </h2>
            <p className="font-light" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, maxWidth: 520 }}>
              If what you've read resonates with the reality your team is working in, schedule a leadership conversation. I work with a limited number of clients at any time to ensure depth over volume.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative"
        style={{ minHeight: 600, background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '48px 0' }}
        id="cal-embed-container"
      >
        <div id="cal-loading" className="absolute inset-0 flex flex-col items-center justify-center gap-3" aria-live="polite">
          <div className="w-6 h-6 rounded-full border-2 animate-spin" style={{ borderColor: 'rgba(153,51,47,0.2)', borderTopColor: 'var(--color-red-ondark)' }} aria-hidden="true" />
          <span className="uppercase tracking-[0.12em]" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>Loading calendar</span>
        </div>
        <div id="my-cal-inline-intros" style={{ width: '100%', height: '100%', overflow: 'scroll' }} />
      </div>
    </section>
  )
}