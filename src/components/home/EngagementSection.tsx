const stats = [
  { value: '6-8 Weeks', label: 'Per engagement.', strong: 'Not a one-day event' },
  { value: '70% Application', label: 'Every session.', strong: 'Doing and discussion over lecture' },
  { value: 'Live Pipeline', label: 'Frameworks applied to', strong: 'your actual deals, not case studies' },
  { value: 'Deep Reinforcement', label: 'Weekly coaching sessions', strong: 'sustain and build on each module' },
]

const steps = [
  {
    num: '01',
    title: 'Discovery before design',
    body: 'Every engagement begins with a structured diagnostic of your team\'s current GTM motion. Coaching is tailored to your specific deal environment, buyer personas, and competitive context.',
  },
  {
    num: '02',
    title: 'Cross-functional by design',
    body: 'AEs and SEs (and CS and PS, where applicable) are coached together. A shared framework eliminates the friction that costs deals at handoff points and creates a coherent buyer experience.',
  },
  {
    num: '03',
    title: 'Applied to live deals',
    body: 'The Value Discovery Map, Compass Questioning Model, and decision-oriented demo structures are practised on your actual pipeline. Results are visible in weeks, not quarters.',
  },
  {
    num: '04',
    title: 'Leadership integration',
    body: 'CROs and VP-level sponsors receive regular progress briefings. Forecast quality improves as a downstream effect of deal quality, not through CRM hygiene.',
  },
]

export default function EngagementSection() {
  return (
    <section
      style={{ background: 'var(--color-white)' }}
      id="engagement"
      aria-labelledby="engagement-heading"
    >
      <div className="max-w-[1200px] mx-auto px-[5%] py-16 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-20 items-start">
        <div>
          <span
            className="inline-block text-[0.7rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5"
            style={{ color: 'var(--color-red)', background: 'var(--color-red-light)', border: '1px solid var(--color-red-mid)' }}
          >
            How We Will Work Together
          </span>
          <h2 id="engagement-heading" className="font-display font-medium mb-5" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--color-ink)' }}>
            Far more than training.
          </h2>
          <p className="font-light mb-4" style={{ fontSize: '0.95rem', color: 'var(--color-sage)', lineHeight: 1.85 }}>
            Most programs produce short-term awareness. Skills start to degrade the very next day because they aren't applied to real opps and are not reinforced.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-8" aria-label="Engagement structure">
            {stats.map((s, i) => (
              <div key={i} className="p-5 rounded-sm" style={{ background: 'var(--color-linen)', border: '1px solid rgba(26,26,26,0.1)' }}>
                <div
                  className="font-display font-semibold mb-2"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', color: 'var(--color-red)', lineHeight: 1.15 }}
                >
                  {s.value}
                </div>
                <div className="font-light" style={{ fontSize: '0.82rem', color: 'var(--color-sage)', lineHeight: 1.5 }}>
                  {s.label}{' '}<strong style={{ color: 'var(--color-ink)', fontWeight: 500 }}>{s.strong}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid gap-5 py-7"
              style={{
                gridTemplateColumns: '48px 1fr',
                borderTop: '1px solid rgba(26,26,26,0.1)',
                borderBottom: i === steps.length - 1 ? '1px solid rgba(26,26,26,0.1)' : 'none',
              }}
            >
              <div
                className="font-display font-semibold leading-none pt-0.5"
                style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--color-red)' }}
              >
                {step.num}
              </div>
              <div>
                <h3 className="font-display font-medium italic mb-1.5" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: 'var(--color-ink)' }}>{step.title}</h3>
                <p className="font-light" style={{ fontSize: '0.86rem', color: 'var(--color-sage)', lineHeight: 1.72 }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}