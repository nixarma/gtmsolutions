'use client'

import Link from 'next/link'
import Image from 'next/image'

const services = [
  { label: 'Coaching', href: '/coaching', active: true },
  { label: 'SKOs & QBRs', href: '#', active: false },
  { label: 'Value Discovery', href: '#', active: false },
]

const company = [
  { label: 'About', href: '/about', active: true },
  { label: 'Blog', href: '/blog', active: true },
  { label: 'Operational Walkthrough', href: '/resources/opwalk', active: false },
]

const contact = [
  { label: 'Schedule a Call', href: '/#contact', active: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nikhilsarma', active: true, external: true },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-ink)' }}>
      <div className="max-w-[1200px] mx-auto px-[5%] pt-16 pb-8">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/GSC logo.png"
                alt="GTM Solutions Consulting"
                width={28}
                height={28}
                className="rounded-sm"
              />
              <span className="font-display text-xl italic text-white">GTM Solutions Consulting</span>
            </Link>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 220 }}>
              Helping B2B SaaS teams build decision confidence in their buyers.
            </p>
            <a
              href="https://linkedin.com/in/nikhilsarma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-body font-medium mb-5" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map(s => (
                <li key={s.label}>
                  {s.active ? (
                    <Link href={s.href} className="transition-colors" style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                    >
                      {s.label}
                    </Link>
                  ) : (
                    <span className="cursor-default" style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)' }}>
                      {s.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="font-body font-medium mb-5" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {company.map(c => (
                <li key={c.label}>
                  <Link href={c.href} className="transition-colors" style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch column */}
          <div>
            <h3 className="font-body font-medium mb-5" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3">
              {contact.map(c => (
                <li key={c.label}>
                  {c.external ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                    >
                      {c.label}
                    </a>
                  ) : (
                    <Link href={c.href} className="transition-colors" style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                    >
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
            GTM Solutions Consulting &copy; {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              Impressum
            </Link>
            <Link href="/privacy" className="transition-colors" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              Privacy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}