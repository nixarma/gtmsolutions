'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[88vh] overflow-hidden"
      style={{ background: 'var(--color-ink)' }}
      aria-label="Hero"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(153,51,47,0.07) 0%, transparent 68%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-[5%] py-16 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-16 relative z-10 w-full">

        {/* Left: content */}
        <div className="fade-up-children flex flex-col">
          <p
            className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-[0.75rem] tracking-[0.18em] uppercase font-medium mb-7"
            style={{
              color: 'rgba(255,255,255,0.9)',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            B2B &nbsp;&bull;&nbsp; Decision Confidence &nbsp;&bull;&nbsp; Enterprise Sales
          </p>

          <h1
            className="font-display font-medium italic mb-7 text-white"
            style={{ fontSize: 'clamp(2.8rem, 4.2vw, 4.2rem)', lineHeight: 1.12 }}
          >
            Your job is not<br />
            to sell software.<br />
            It is to enable<br />
            <em className="not-italic" style={{ color: 'var(--color-sage-mid)' }}>decision confidence.</em>
          </h1>

          <p
            className="mb-4"
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.85,
              maxWidth: 500,
            }}
          >
            Most B2B SaaS teams don't lose deals because of product gaps. They lose because buyers cannot confidently justify a decision.
          </p>
          <p
            className="mb-11"
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.85,
              maxWidth: 500,
            }}
          >
            I help CROs and GTM leaders build the system that changes that.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-block font-body text-xs tracking-[0.1em] uppercase font-medium px-8 py-3 transition-colors rounded-sm"
              style={{ background: 'var(--color-red)', color: '#fff' }}
            >
              Schedule a Strategy Session
            </Link>
            <Link
              href="#system"
              className="inline-block font-body text-xs tracking-[0.1em] uppercase font-medium px-8 py-3 transition-colors rounded-sm"
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.22)',
              }}
            >
              See the System
            </Link>
          </div>
        </div>

        {/* Right: photo */}
        <div className="hidden md:flex justify-end items-center">
          <div className="relative w-[320px] h-[400px]">
            <div
              className="absolute rounded-sm pointer-events-none z-0"
              style={{
                top: 18, left: 18, right: -18, bottom: -18,
                border: '1px solid rgba(153,51,47,0.3)',
              }}
              aria-hidden="true"
            />
            <Image
              src="/images/gtm website hero image.webp"
              alt="A figure standing at the start of a deliberate path leading toward a clear destination — a visual metaphor for decision confidence in B2B buying"
              fill
              sizes="(max-width: 768px) 0px, 320px"
              className="object-cover object-center rounded-sm relative z-10"
              priority
              fetchPriority="high"
            />
          </div>
        </div>

      </div>
      
    </section>
  )
}