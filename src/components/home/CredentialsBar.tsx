const creds = [
  { num: '800+', label: 'GTM professionals coached' },
  { num: '41', label: 'B2B SaaS companies worked with' },
  { num: '$72M+', label: 'Revenue contribution from coached teams' },
  { num: '14', label: 'Countries & regions' },
]

export default function CredentialsBar() {
  return (
    <section
      style={{
        background: 'var(--color-linen)',
        borderTop: '1px solid rgba(26,26,26,0.1)',
        borderBottom: '1px solid rgba(26,26,26,0.1)',
      }}
      aria-label="Practice credentials"
    >
      <div className="max-w-[1200px] mx-auto px-[5%] py-12 grid grid-cols-2 md:grid-cols-4">
        {creds.map((c, i) => (
          <div
            key={i}
            className="px-8 text-center"
            style={{
              borderRight: i < creds.length - 1 ? '1px solid rgba(26,26,26,0.1)' : 'none',
            }}
          >
            <div
              className="font-display font-semibold leading-none mb-1.5"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', color: 'var(--color-ink)' }}
            >
              <span style={{ color: 'var(--color-red)' }}>{c.num}</span>
            </div>
            <div
              className="font-light"
              style={{ fontSize: '0.78rem', color: 'var(--color-sage)', lineHeight: 1.5 }}
            >
              {c.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}