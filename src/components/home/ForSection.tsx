'use client'

import { useFadeUp } from '@/hooks/useFadeUp'
import {
  Share2,
  X,
  SlidersHorizontal,
  TrendingDown,
  Minus,
  AlertCircle,
  FileText,
  CircleOff,
  AlignStartVertical,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const cards: {
  tag: string
  heading: string
  challenges: { icon: LucideIcon; text: string }[]
  body: string
}[] = [
  {
    tag: 'CROs & VPs of GTM',
    heading: 'You\'re not missing leads. You\'re missing a shared operating model.',
    challenges: [
      { icon: Share2, text: 'Cross-functional misalignment across the GTM motion' },
      { icon: X, text: 'Value gets lost between discovery and decision' },
      { icon: SlidersHorizontal, text: 'Inconsistent buyer experience across deals' },
    ],
    body: 'When AEs, SEs, CS, and PS aren\'t working from the same framework, buyers feel it. Conflicting messages and poor handoffs are revenue problems disguised as process problems.',
  },
  {
    tag: 'VPs of Sales',
    heading: 'You carry the number. Your buyers carry the risk.',
    challenges: [
      { icon: TrendingDown, text: 'Win rates that plateau despite product strength' },
      { icon: Minus, text: 'Deals that stall or slip into no-decision' },
      { icon: AlertCircle, text: 'Forecasts built on activity, not deal quality' },
    ],
    body: 'You know your team can sell. What you\'re less certain about is whether they\'re building the kind of buyer confidence that actually closes enterprise deals at the right margin.',
  },
  {
    tag: 'VPs of Solutions Engineering',
    heading: 'Your SEs are technically capable but commercially underused.',
    challenges: [
      { icon: FileText, text: 'SEs lacking knowledge of why problems are worth solving' },
      { icon: CircleOff, text: 'SEs seen as support, not as commercial drivers' },
      { icon: AlignStartVertical, text: 'Lack of a consistent methodology across the team' },
    ],
    body: 'The best Solutions teams shape deals. If your SEs are merely pulled into demos and technical Q&As, you\'re leaving influence and margin on the table.',
  },
]

export default function ForSection() {
  const ref = useFadeUp()

  return (
    <section
      ref={ref as any}
      className="overflow-hidden"
      style={{ background: 'var(--color-white)' }}
      id="for-you"
      aria-labelledby="for-heading"
    >
      <div className="max-w-[1200px] mx-auto px-[5%] py-16">
        <span
          className="inline-block text-[0.75rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5"
          style={{
            color: 'var(--color-red)',
            background: 'var(--color-red-light)',
            border: '1px solid var(--color-red-mid)',
          }}
        >
          Who This Is For
        </span>
        <h2
          id="for-heading"
          className="font-display font-medium mb-3"
          style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--color-ink)', maxWidth: 600 }}
        >
          GTM Systems Building for CROs and VPs of Sales and Solutions Engineering
        </h2>
        <p
          className="mb-14"
          style={{ fontSize: '1rem', color: 'var(--color-sage)', lineHeight: 1.8, maxWidth: 560 }}
        >
          This is not a generic sales training program. It is a structured coaching engagement for GTM leaders who are responsible for the quality of deals, not just a volume of activity.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-sm"
          style={{
            border: '1px solid rgba(26,26,26,0.1)',
            gridTemplateRows: 'subgrid',
          }}
          role="list"
        >
          {cards.map((card, i) => (
            <article
              key={i}
              className="p-10 transition-colors duration-200"
              style={{
                display: 'grid',
                gridRow: 'span 4',
                gridTemplateRows: 'subgrid',
                borderRight: i < cards.length - 1 ? '1px solid rgba(26,26,26,0.1)' : 'none',
                background: 'var(--color-white)',
              }}
              role="listitem"
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-lightest2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-white)')}
            >
              {/* Row 1: tag */}
              <div
                className="text-[0.72rem] tracking-[0.16em] uppercase font-medium mb-4"
                style={{ color: 'var(--color-red)' }}
              >
                {card.tag}
              </div>

              {/* Row 2: heading */}
              <h3
                className="font-display font-medium italic mb-5"
                style={{ fontSize: '1.4rem', color: 'var(--color-ink)', lineHeight: 1.3 }}
              >
                {card.heading}
              </h3>

              {/* Row 3: challenges */}
              <ul className="flex flex-col gap-2 mb-5" aria-label="Common challenges">
                {card.challenges.map((c, j) => {
                  const Icon = c.icon
                  return (
                    <li
                      key={j}
                      className="flex items-start gap-3 px-4 py-3 rounded-sm text-[0.84rem]"
                      style={{
                        background: 'var(--color-red-light)',
                        border: '1px solid var(--color-red-mid)',
                        color: 'var(--color-ink)',
                        lineHeight: 1.55,
                      }}
                    >
                      <Icon
                        size={14}
                        className="flex-shrink-0"
                        style={{ color: 'var(--color-red)', marginTop: 3 }}
                        aria-hidden="true"
                      />
                      {c.text}
                    </li>
                  )
                })}
              </ul>

              {/* Row 4: body */}
              <p
                className="pt-5"
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--color-sage)',
                  lineHeight: 1.75,
                  borderTop: '1px solid rgba(26,26,26,0.1)',
                }}
              >
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}