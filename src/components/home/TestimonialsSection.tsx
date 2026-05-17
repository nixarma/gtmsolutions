'use client'

const testimonials = [
  {
    pullquote: 'An absolute masterclass in value-based selling',
    body: 'Instead of traditional lectures, Nikhil demonstrates his own principles with every session. Real life situations, live deal guidance, brainstorming exercises and constant reinforcement of principles are the norm. I\'d urge anyone involved in sales to have a conversation with Nikhil.',
    name: 'Gavin Thomas',
    role: 'Manager, Presales SEA',
    company: 'Locus',
  },
  {
    pullquote: 'One of the most relatable and relevant facilitators I\'ve worked with',
    body: 'Nikhil\'s ability to tailor his approach to different groups with unique challenges was truly impressive. His genuine interest in understanding our business prior to the workshop led to exceptionally strong outcomes.',
    name: 'Pooja Kumar',
    role: 'Director Field Enablement, JAPAC',
    company: 'Adobe',
  },
  {
    pullquote: 'A unique ability to reframe negotiation as a value conversation',
    body: 'He brings clarity, structure, and a deep understanding of how to align with what truly matters to the customer. A great session, and an even better perspective on how negotiation should actually work in enterprise deals.',
    name: 'Guru Vaidya',
    role: 'Head of APAC DMe Field Solution Consulting',
    company: 'Adobe',
  },
  {
    pullquote: 'Complex concepts feel immediately actionable',
    body: 'His ability to connect strategic themes like value discovery with the real, day-to-day challenges of our sales teams across regions was especially valuable. What stood out most was how quickly he earned the group\'s attention and respect.',
    name: 'Robert Latas',
    role: 'Managing Director',
    company: 'Thinkproject Poland',
  },
  {
    pullquote: 'Went above and beyond to help us perfect our demo',
    body: 'Nikhil not only guided me through the technical aspects of demoing our platform but also provided valuable insights on qualifying opportunities effectively. His expertise, patience, and clear communication made the process smooth and highly productive.',
    name: 'Ed Prisco',
    role: 'Sales Director, North America',
    company: 'Locus',
  },
  {
    pullquote: 'Tangible improvements and fruitful results',
    body: 'Nikhil\'s innovative ideas and fresh perspectives provided valuable insights that transformed our daily operations. His insight and mindset are truly assets, and I believe anyone who has the opportunity to work with him will benefit immensely.',
    name: 'Arshaad Mohamed',
    role: 'Director, Solutions and Delivery',
    company: 'Locus',
  },
]

export default function TestimonialsSection() {
  return (
    <section
      style={{ background: 'var(--color-linen)' }}
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1200px] mx-auto px-[5%] py-16">
        <h2 id="testimonials-heading" className="font-display font-medium mb-14" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--color-ink)' }}>
          GTM Coaching Results: What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex flex-col gap-5 p-8 rounded-sm transition-all duration-200"
              style={{ background: 'var(--color-white)', border: '1px solid rgba(26,26,26,0.1)' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--color-red-mid)'; el.style.boxShadow = '0 6px 28px rgba(26,26,26,0.07)'; el.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(26,26,26,0.1)'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}
            >
              <div
                className="font-display font-semibold italic relative pl-4"
                style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)', color: 'var(--color-ink)', lineHeight: 1.38 }}
              >
                <span className="absolute left-0 top-[-4px] not-italic font-normal" style={{ color: 'var(--color-red)', fontSize: '2rem', lineHeight: 1 }} aria-hidden="true">&#8220;</span>
                {t.pullquote}
              </div>
              <p className="flex-1" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.78 }}>{t.body}</p>
              <div className="pt-4" style={{ borderTop: '1px solid rgba(26,26,26,0.1)' }}>
                <strong className="block font-medium" style={{ fontSize: '0.88rem', color: 'var(--color-ink)' }}>{t.name}</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-sage)' }}>{t.role} &mdash; {t.company}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}