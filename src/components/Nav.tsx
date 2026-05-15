'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { label: 'About', href: '/about' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Blog', href: '/blog' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'var(--color-ink)' }}>
      <div className="max-w-[1200px] mx-auto px-[5%] py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl italic text-white" onClick={() => setOpen(false)}>
          GTM Solutions
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="font-body text-sm text-white/80 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" className="font-body text-xs tracking-[0.1em] uppercase font-medium px-5 py-2.5 rounded-sm transition-colors" style={{ background: 'var(--color-red)', color: '#fff' }}>
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          onClick={() => setOpen(!open)}
          style={{ touchAction: 'manipulation' }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="block w-6 h-px transition-all duration-300" style={{
            background: 'white',
            transform: open ? 'translateY(4px) rotate(45deg)' : 'none',
          }} />
          <span className="block w-6 h-px transition-all duration-300" style={{
            background: 'white',
            opacity: open ? 0 : 1,
          }} />
          <span className="block w-6 h-px transition-all duration-300" style={{
            background: 'white',
            transform: open ? 'translateY(-4px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '400px' : '0',
          borderTop: open ? '1px solid rgba(255,255,255,0.08)' : 'none',
          background: 'var(--color-ink)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-[5%] py-6 flex flex-col gap-5">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-base text-white/80 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="self-start font-body text-xs tracking-[0.1em] uppercase font-medium px-6 py-3 rounded-sm transition-colors mt-2"
            style={{ background: 'var(--color-red)', color: '#fff' }}
            onClick={() => setOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  )
}