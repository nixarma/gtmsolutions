'use client'

const logos = [
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/aecb9c34-c645-4a68-b3f5-3545fe3e80bc/idLnet8cfu_1768124865154.png?content-type=image%2Fpng', alt: 'Adobe' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/0a5d11c7-f3e3-460f-9e14-58f23e0bfd1c/idXbysKEDR_1768124975067.png?content-type=image%2Fpng', alt: 'Deloitte' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/5858e20f-43b7-46fb-a8d5-839f62aa0047/idtKYGX7j6_1768125000708.png?content-type=image%2Fpng', alt: 'Cloudflare' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/4845bcfb-0e6b-41a8-a4ab-2f2e0a5450d4/splunk+logo.png?content-type=image%2Fpng', alt: 'Splunk' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/86b33a0d-a0a0-41a5-ad23-8651506d3d4a/firstup+logo.png?content-type=image%2Fpng', alt: 'FirstUp' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/ef0c4b99-d53e-4ab0-9697-16212bb21e2a/platform+logo.png?content-type=image%2Fpng', alt: 'Platform.sh' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/b9a5639b-9990-44be-bea7-6c0e3bc5c1ce/experiencecom+logo.png?content-type=image%2Fpng', alt: 'Experience.com' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/1a945c30-9e72-444c-bf88-2eefab74e00a/storyblok+logo.png?content-type=image%2Fpng', alt: 'Storyblok' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/3d08005e-a866-4b63-9527-687dbc8d1dcb/idVCy6Jb0X_1768124910417.png?content-type=image%2Fpng', alt: 'Locus' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/02efee66-884c-4c65-aa26-9cb3fef2018b/idRon9RpGN_logos.png?content-type=image%2Fpng', alt: 'Contentful' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/7b593d63-ff64-4972-a653-7573d0600820/idlDKcAhpa_1768125028466.png?content-type=image%2Fpng', alt: 'ClickUp' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/be4be5c0-b1a6-4dd7-83fb-3091d790a516/scalepad+logo.png?content-type=image%2Fpng', alt: 'ScalePad' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/f191dcb4-1766-45b2-a370-b761535112da/id4Q92hmlX_1768125039360.png?content-type=image%2Fpng', alt: 'Twilio' },
  { src: 'https://images.squarespace-cdn.com/content/6691a8029ee17272f6d299ae/9c29149e-5e6b-46a3-9dcc-f7b2f0827af0/altana+logo.png?content-type=image%2Fpng', alt: 'Altana' },
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
              style={{ height: 24, width: 'auto', objectFit: 'contain', filter: 'grayscale(100%) contrast(0.5)', opacity: 0.6, transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) contrast(1)'; e.currentTarget.style.opacity = '1' }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%) contrast(0.5)'; e.currentTarget.style.opacity = '0.6' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}