'use client'

const topCards = [
  {
    num: '01',
    title: 'Value Discovery',
    body: 'Discovery grounded in the buyer\'s business context, competitive pressures, and decision-making structure. Surfaces what matters to economic buyers before a demo is built.',
  },
  {
    num: '02',
    title: 'Storytelling',
    body: 'Structuring the commercial narrative around what your best customers achieved — and making that case travel through the buying committee without the seller in the room.',
  },
  {
    num: '03',
    title: 'Value Demonstration',
    body: 'Demo structures built around decisions, not features. Teaching SEs and AEs to demonstrate outcomes relevant to each stakeholder tier, moving buyers from interest to confidence.',
  },
]

const bottomCards = [
  {
    num: '04',
    title: 'Business Acumen & Financial Fluency',
    body: 'Building the commercial vocabulary to speak the language of economic buyers. ROI frameworks, business case development, and connecting product capability to board-level priorities.',
  },
  {
    num: '05',
    title: 'Negotiation',
    body: 'Value-led approaches to procurement conversations that protect margin without damaging relationships. Negotiating from a position of established value, not desperation.',
  },
]

export default function SystemSection() {
  return (
    <section
      style={{ background: 'var(--color-sage)' }}
      id="system"
      aria-labelledby="system-heading"
    >
      <div className="max-w-[1200px] mx-auto px-[5%] py-16">
        <span
          className="inline-block text-[0.75rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5"
          style={{
            color: 'rgba(255,255,255,0.9)',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          The System
        </span>

        <h2
          id="system-heading"
          className="font-display font-medium text-white mb-3"
          style={{ fontSize: 'clamp(2rem, 3.2vw, 2.9rem)', maxWidth: 600 }}
        >
          GTM Coaching Services: Value Discovery and Demonstration, Storytelling, and Business Acumen
        </h2>
        <p
          className="mb-14"
          style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', maxWidth: 560, lineHeight: 1.8 }}
        >
          Coaching that addresses modules and teams in isolation produces one-off improvements. What moves revenue is a shared operating model across discovery, storytelling, demos, and negotiation.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-sm mb-[2px]"
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
          role="list"
        >
          {topCards.map((card, i) => (
            <article
              key={i}
              className="p-10 transition-colors duration-200"
              style={{ borderRight: i < topCards.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', background: 'transparent' }}
              role="listitem"
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div
                className="font-display font-semibold leading-none mb-5"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', color: 'var(--color-sage-mid)', opacity: 0.65 }}
                aria-hidden="true"
              >
                {card.num}
              </div>
              <h3 className="font-display font-medium italic text-white mb-2" style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)' }}>{card.title}</h3>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.78 }}>{card.body}</p>
            </article>
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm"
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderTop: 'none' }}
          role="list"
        >
          {bottomCards.map((card, i) => (
            <article
              key={i}
              className="p-10 transition-colors duration-200"
              style={{ borderRight: i < bottomCards.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', background: 'transparent' }}
              role="listitem"
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div
                className="font-display font-semibold leading-none mb-5"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', color: 'var(--color-sage-mid)', opacity: 0.65 }}
                aria-hidden="true"
              >
                {card.num}
              </div>
              <h3 className="font-display font-medium italic text-white mb-2" style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)' }}>{card.title}</h3>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.78 }}>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}