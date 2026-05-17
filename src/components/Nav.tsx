'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const resourceItems = [
  { label: 'Operational Walkthrough', href: '/resources/opwalk', desc: 'AI-focused discovery framework for AEs & SEs' },
]

const links = [
  { label: 'Coaching', href: '/coaching' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Scroll lock when mobile overlay is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setResourcesOpen(true)
  }

  const handleMouseLeave = () => {
    // Small delay so moving diagonally into the panel doesn't close it instantly
    hoverTimeout.current = setTimeout(() => setResourcesOpen(false), 120)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'var(--color-ink)' }}>
      <div className="max-w-[1200px] mx-auto px-[5%] py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/GSC logo.png"
            alt="GTM Solutions Consulting"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span className="font-display text-xl italic text-white">GTM Solutions Consulting</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Coaching */}
          <Link
            href="/coaching"
            className="font-body text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Coaching
          </Link>

          {/* Resources dropdown — hover triggered */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1.5 font-body text-sm font-medium text-white/80 hover:text-white transition-colors focus:outline-none"
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
              tabIndex={0}
              onFocus={() => setResourcesOpen(true)}
              onBlur={(e) => {
                // Close only if focus leaves the whole dropdown group
                if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                  setResourcesOpen(false)
                }
              }}
            >
              Resources
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                style={{
                  transition: 'transform 0.18s ease',
                  transform: resourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  opacity: 0.55,
                }}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              role="menu"
              style={{
                position: 'absolute',
                top: 'calc(100% + 12px)',
                right: '-16px',
                width: '288px',
                background: 'var(--color-ink)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '4px',
                padding: '6px',
                opacity: resourcesOpen ? 1 : 0,
                pointerEvents: resourcesOpen ? 'auto' : 'none',
                transform: resourcesOpen ? 'translateY(0)' : 'translateY(-5px)',
                transition: 'opacity 0.15s ease, transform 0.15s ease',
                boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
              }}
            >
              {/* Arrow notch */}
              <div style={{
                position: 'absolute',
                top: '-5px',
                right: '22px',
                width: '10px',
                height: '6px',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: 'var(--color-ink)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  transform: 'rotate(45deg)',
                  position: 'absolute',
                  top: '3px',
                  left: '1px',
                }} />
              </div>

              {resourceItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setResourcesOpen(false)}
                  className="group hover:bg-white/5"
                  style={{
                    display: 'block',
                    padding: '11px 14px',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    transition: 'background 0.12s ease',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '3px',
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.38)',
                    lineHeight: 1.45,
                  }}>
                    {item.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Blog + About */}
          {links.filter(l => l.label !== 'Coaching').map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="font-body text-xs tracking-[0.1em] uppercase font-medium px-5 py-2.5 rounded-sm transition-colors"
            style={{ background: 'var(--color-red)', color: '#fff' }}
          >
            Book a Call
          </Link>
        </div>

        {/* Desktop: no mobile hamburger */}
      </div>

      {/* ── Fullscreen mobile menu overlay ────────────────────── */}
      <div
        className="mobile-menu-overlay"
        aria-hidden={!open}
        {...(!open ? { inert: '' } : {})}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--color-linen)',
          zIndex: 60,
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 8%',
          paddingBottom: 'calc(96px + env(safe-area-inset-bottom))',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.18s ease',
        }}
      >
        {/* Nav items */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {[
            { label: 'Coaching', href: '/coaching' },
            { label: 'Resources', href: null },
            { label: 'Blog', href: '/blog' },
            { label: 'About', href: '/about' },
          ].map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: 'clamp(2rem, 8vw, 3rem)',
                    color: 'var(--color-ink)',
                    textDecoration: 'none',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid rgba(26,26,26,0.08)',
                    transition: 'opacity 0.15s ease',
                  }}
                  className="hover:opacity-60"
                >
                  {item.label}
                </Link>
              ) : (
                /* Resources — expandable */
                <div>
                  <button
                    onClick={() => setMobileResourcesOpen(v => !v)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid rgba(26,26,26,0.08)',
                      cursor: 'pointer',
                      padding: '0.6rem 0',
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      fontSize: 'clamp(2rem, 8vw, 3rem)',
                      color: 'var(--color-ink)',
                      textAlign: 'left',
                    }}
                  >
                    Resources
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        transition: 'transform 0.18s ease',
                        transform: mobileResourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        opacity: 0.4,
                      }}
                    >
                      <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div style={{
                    maxHeight: mobileResourcesOpen ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.22s ease',
                  }}>
                    {resourceItems.map(r => (
                      <Link
                        key={r.href}
                        href={r.href}
                        onClick={() => { setOpen(false); setMobileResourcesOpen(false) }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          minHeight: '52px',
                          padding: '0 0 0 1.25rem',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 500,
                          fontSize: '1.05rem',
                          color: 'var(--color-sage)',
                          textDecoration: 'none',
                          borderBottom: '1px solid rgba(26,26,26,0.06)',
                        }}
                      >
                        {r.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Schedule a Call */}
          <div style={{ marginTop: '2rem' }}>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="font-body font-medium"
              style={{
                display: 'inline-block',
                background: 'var(--color-red)',
                color: '#fff',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.875rem 2rem',
                borderRadius: '2px',
                textDecoration: 'none',
              }}
            >
              Schedule a Call
            </Link>
          </div>

          {/* Close — separated with generous margin to avoid accidental tap */}
          <div style={{ marginTop: '2.5rem' }}>
            <button
              onClick={() => { setOpen(false); setMobileResourcesOpen(false) }}
              className="font-body font-medium"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--color-ink)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '2px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-linen)',
                padding: '0.875rem 2rem',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Close
            </button>
          </div>
        </nav>
      </div>

      {/* ── Permanent mobile bottom bar ────────────────────────── */}
      <div
        className="mobile-bottom-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'var(--color-linen)',
          borderTop: '1px solid rgba(26,26,26,0.10)',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', height: '56px' }}>
          {/* Schedule a Call */}
          <Link
            href="/#contact"
            className="font-body font-medium"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-red)',
              color: '#fff',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Schedule a Call
          </Link>

          {/* Menu */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Open menu"
            aria-expanded={open}
            className="font-body font-medium"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              borderLeft: '1px solid rgba(26,26,26,0.10)',
              cursor: 'pointer',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
            }}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <line x1="0" y1="1" x2="14" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0" y1="5" x2="14" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0" y1="9" x2="14" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Menu
          </button>
        </div>
        {/* Safe area spacer — fills iOS home indicator zone */}
        <div style={{ height: 'env(safe-area-inset-bottom)', background: 'var(--color-linen)' }} />
      </div>
    </nav>
  )
}