'use client'

import Link from 'next/link'
import { TrendingDown, OctagonX, AlertCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const buyerStats = [
  { num: '74%', text: 'of buying teams demonstrate unhealthy conflict across stakeholders, making aligned decisions structurally harder' },
  { num: '70%', text: 'of enterprise transformation projects fail to deliver the outcomes that justified the purchase' },
  { num: '60%', text: 'of sales opportunities end in no decision, with the status quo winning by default' },
]

const sellerProblems: { icon: LucideIcon; text: string }[] = [
  { icon: TrendingDown, text: 'Deal slippage and persistently low win rates despite strong product capability and competitive positioning' },
  { icon: OctagonX, text: 'Friction between AEs, SEs, and CS that creates inconsistency in how value is discovered, demonstrated, and defended' },
  { icon: AlertCircle, text: 'Leaders carrying forecasts built on deal activity rather than deal quality' },
]

export default function ProblemSection() {
  return (
    <section
      className="overflow-hidden"
      style={{ background: 'var(--color-ink)' }}
      aria-labelledby="problem-heading"
    >
      <div className="max-w-[1200px] mx-auto px-[5%] py-16">
        <span
          className="inline-block text-[0.7rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5"
          style={{
            color: 'rgba(255,255,255,0.9)',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          The Buying Reality
        </span>

        <h2
          id="problem-heading"
          className="font-display font-medium text-white mb-3"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', maxWidth: 720, lineHeight: 1.2 }}
        >
          Why B2B SaaS Deals Stall: The Buying Decision Problem
        </h2>
        <p
          className="font-display italic mb-16"
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            color: 'rgba(255,255,255,0.78)',
            maxWidth: 680,
            lineHeight: 1.4,
          }}
        >
          Your prospects are not buying software.<br />
          They are making a business decision under risk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="flex flex-col p-9 rounded-sm"
            style={{ background: '#2C2C2C', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3
              className="font-body text-[0.72rem] tracking-[0.18em] uppercase font-medium mb-7"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Buyers Struggle With
            </h3>
            {buyerStats.map((s, i) => (
              <div key={i} className="flex gap-5 items-center mb-7 last:mb-0">
                <div
                  className="font-display font-semibold leading-none min-w-[72px]"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--color-red-ondark)' }}
                >
                  {s.num}
                </div>
                <p
                  style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col p-9 rounded-sm"
            style={{ background: '#2C2C2C', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3
              className="font-body text-[0.72rem] tracking-[0.18em] uppercase font-medium mb-7"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Sellers Struggle With
            </h3>
            {sellerProblems.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4"
                  style={{ borderBottom: i < sellerProblems.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                >
                  <Icon
                    size={16}
                    className="flex-shrink-0"
                    style={{ color: 'var(--color-red-ondark)', marginTop: 3 }}
                    aria-hidden="true"
                  />
                  <p
                    style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.65 }}
                  >
                    {p.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className="mt-16 pt-12 flex flex-col items-center text-center gap-7"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <blockquote
            className="font-display italic"
            style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'rgba(255,255,255,0.82)', maxWidth: 520, lineHeight: 1.45 }}
          >
            This is not a motivation problem.<br />
            It is not a demos problem.<br />
            It is a systems problem.
          </blockquote>
          <Link
            href="#system"
            className="inline-block font-body text-xs tracking-[0.1em] uppercase font-medium px-8 py-3 rounded-sm transition-colors"
            style={{ background: 'var(--color-red)', color: '#fff' }}
          >
            See the System
          </Link>
        </div>
      </div>
    </section>
  )
}