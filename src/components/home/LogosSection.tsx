'use client'

const logos = [
  { src: '/images/adobe.svg', alt: 'Adobe'},
  { src: '/images/altana.png', alt: 'Altana'},
  { src: '/images/atlassian.svg', alt: 'Atlassian'},
  { src: '/images/clickup.svg', alt: 'ClickUp'},
  { src: '/images/cloudflare.svg', alt: 'Cloudflare'},
  { src: '/images/contentful.svg', alt: 'Contentful'},
  { src: '/images/deloitte.svg', alt: 'Deloitte'},
  { src: '/images/experience.png', alt: 'Experience'},
  { src: '/images/firstup.png', alt: 'FirstUp'},
  { src: '/images/locus.svg', alt: 'Locus'},
  { src: '/images/platform.png', alt: 'Platform.sh'},
  { src: '/images/scalepad.svg', alt: 'Scalepad'},
  { src: '/images/splunk.png', alt: 'Splunk'},
  { src: '/images/storyblok.png', alt: 'Storyblok'},
  { src: '/images/thinkproject.svg', alt: 'Thinkproject'},
  { src: '/images/twilio.svg', alt: 'Twilio'},
]

export default function LogosSection() {
  return (
    <section
      style={{
        background: 'var(--color-lightest2)',
        borderTop: '1px solid rgba(26,26,26,0.06)',
        borderBottom: '1px solid rgba(26,26,26,0.06)',
      }}
      aria-label="Client companies"
    >
      <div className="max-w-[1200px] mx-auto px-[5%] py-11">
        <p className="text-center uppercase tracking-[0.2em] font-medium mb-10" style={{ fontSize: '0.68rem', color: 'var(--color-sage)', opacity: 0.55 }}>
          Teams I have worked with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {logos.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              height={24}
              style={{ height: 28, width: 120, objectFit: 'contain', filter: 'grayscale(100%) contrast(0.5)', opacity: 0.6, transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) contrast(1)'; e.currentTarget.style.opacity = '1' }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%) contrast(0.5)'; e.currentTarget.style.opacity = '0.6' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}