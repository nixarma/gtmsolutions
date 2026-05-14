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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink px-6 py-4 flex items-center justify-between">
      <Link href="/" className="font-display text-xl italic text-white">
        GTM Solutions
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <Link key={l.href} href={l.href} className="font-body text-sm text-white/80 hover:text-white transition-colors">
            {l.label}
          </Link>
        ))}
        <Link href="/#book" className="font-body text-sm bg-red text-white px-4 py-2 hover:bg-red-dark transition-colors">
          Book a Call
        </Link>
      </div>
    </nav>
  )
}
