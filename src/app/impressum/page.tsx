import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | GTM Solutions Consulting',
  robots: { index: false },
}

export default function ImpressumPage() {
  return (
    <section style={{ background: 'var(--color-white)' }}>
      <div className="max-w-[800px] mx-auto px-[5%] py-20">

        <span className="inline-block text-[0.7rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-6" style={{ color: 'var(--color-red)', background: 'var(--color-red-light)', border: '1px solid var(--color-red-mid)' }}>
          Legal
        </span>

        <h1 className="font-display font-medium mb-2" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'var(--color-ink)', lineHeight: 1.15 }}>
          Impressum
        </h1>
        <p className="font-light mb-12" style={{ fontSize: '0.88rem', color: 'var(--color-sage)' }}>
          Information in accordance with § 5 DDG | Angaben gemäß § 5 DDG
        </p>

        <div className="flex flex-col gap-0" style={{ borderTop: '1px solid rgba(26,26,26,0.08)' }}>
          {[
            { label: 'Legal name', value: 'GTM Solutions Consulting UG (haftungsbeschränkt)' },
            { label: 'Represented by', value: 'Nikhil Sarma (Founder / CEO)' },
            { label: 'Register entry', value: 'HRB 266621B (Registered in Charlottenburg)' },
            { label: 'VAT ID', value: 'DE449599861' },
            { label: 'Email', value: 'nikhil@gtmsolutions.co' },
            { label: 'Phone', value: '+49 0176 71922492' },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-[180px_1fr] py-5" style={{ borderBottom: '1px solid rgba(26,26,26,0.08)' }}>
              <span className="font-body text-sm font-medium" style={{ color: 'var(--color-ink)' }}>{row.label}</span>
              <span className="font-light text-sm" style={{ color: 'var(--color-sage)' }}>{row.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-sm" style={{ background: 'var(--color-linen)', border: '1px solid rgba(26,26,26,0.08)' }}>
          <h2 className="font-display font-medium mb-3" style={{ fontSize: '1.4rem', color: 'var(--color-ink)' }}>EU Dispute Resolution</h2>
          <p className="font-light" style={{ fontSize: '0.88rem', color: 'var(--color-sage)', lineHeight: 1.8 }}>
            The European Commission provides a platform for online dispute resolution (ODR):{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors" style={{ color: 'var(--color-red)' }}>
              https://ec.europa.eu/consumers/odr/
            </a>
            . Our e-mail address can be found above in the Impressum.
          </p>
        </div>

      </div>
    </section>
  )
}