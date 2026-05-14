import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | GTM Solutions Consulting',
  robots: { index: false },
}

const sections = [
  {
    title: '1. General Information and Mandatory Information',
    content: [
      'The operators of this website take the protection of your personal data very seriously. We treat your personal data as confidential and in accordance with the statutory data protection regulations and this Privacy Policy.',
      'Personal Data (PII): We do not request, collect, or store any personal identifiable information (PII) through this website directly. No registration is required, and no contact forms are hosted on our servers.',
      'Responsible Party (Controller): The party responsible for data processing on this website is listed in the Impressum.',
    ],
  },
  {
    title: '2. Data Collection on this Website',
    content: [
      'This website is operated using services from two external providers:',
    ],
    providers: [
      { label: 'Website Hosting', text: 'This site is built and deployed using Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA). Vercel processes data (such as IP addresses) to ensure the website is displayed securely and reliably.' },
      { label: 'Domain & DNS Hosting', text: 'Our domain is registered and managed via Namecheap (Namecheap, Inc., 4600 East Washington Street, Suite 305, Phoenix, AZ 85034, USA). Namecheap provides the technical infrastructure to connect our domain name to the web servers.' },
    ],
    footer: 'Legal Basis: The use of these providers is based on Art. 6 (1) (f) GDPR (Legitimate Interest). Our interest lies in the professional, secure, and stable presentation of our online services. We use these services based on their standard terms of service and integrated Data Processing Addendums (DPA), ensuring data is processed in compliance with GDPR standards.',
  },
  {
    title: '3. Cookies and Third-Party Tools',
    content: [
      'Our website uses "cookies." Cookies are small text files and do not cause any damage to your device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your device.',
      'We integrate the scheduling widget of Cal.com (Cal.com, Inc., 382 NE 191st St, Miami, FL) to allow you to book appointments. When you interact with the calendar widget, Cal.com may set cookies necessary for the functionality of the booking process. If you use the widget to book an appointment, the data you enter (e.g., name, email) is processed directly by Cal.com. Please refer to Cal.com\'s Privacy Policy for details on how they handle your data.',
      'The use of this service is based on Art. 6 (1) (f) GDPR (legitimate interest in simplified scheduling) or Art. 6 (1) (a) GDPR (consent) if the widget is only activated upon interaction.',
    ],
  },
  {
    title: '4. Your Rights',
    content: [
      'As a user, you have the right to access information about any data stored about you, request the correction or deletion of your data, and object to the processing of your data based on legitimate interests.',
      'Since we do not store PII on our own servers, requests regarding booking data should be directed to Cal.com or to us via the contact info provided in the Impressum so we can facilitate the request within the Cal.com platform.',
    ],
  },
  {
    title: '5. SSL/TLS Encryption',
    content: [
      'This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content. You can recognize an encrypted connection by the "https://" address line and the lock symbol in your browser bar.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <section style={{ background: 'var(--color-white)' }}>
      <div className="max-w-[800px] mx-auto px-[5%] py-20">

        <span className="inline-block text-[0.7rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-6" style={{ color: 'var(--color-red)', background: 'var(--color-red-light)', border: '1px solid var(--color-red-mid)' }}>
          Legal
        </span>

        <h1 className="font-display font-medium mb-2" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'var(--color-ink)', lineHeight: 1.15 }}>
          Privacy Policy
        </h1>
        <p className="font-light mb-12" style={{ fontSize: '0.88rem', color: 'var(--color-sage)' }}>
          Datenschutzerklärung
        </p>

        <div className="flex flex-col gap-10">
          {sections.map((s, i) => (
            <div key={i} className="pt-10" style={{ borderTop: '1px solid rgba(26,26,26,0.08)' }}>
              <h2 className="font-display font-medium mb-4" style={{ fontSize: '1.4rem', color: 'var(--color-ink)' }}>{s.title}</h2>
              {s.content.map((p, j) => (
                <p key={j} className="font-light mb-3 last:mb-0" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.8 }}>{p}</p>
              ))}
              {s.providers && (
                <div className="flex flex-col gap-3 my-4">
                  {s.providers.map((p, j) => (
                    <div key={j} className="p-6 rounded-sm" style={{ background: 'var(--color-linen)', border: '1px solid rgba(26,26,26,0.08)' }}>
                      <strong className="block font-medium text-sm mb-1.5" style={{ color: 'var(--color-ink)' }}>{p.label}</strong>
                      <p className="font-light" style={{ fontSize: '0.88rem', color: 'var(--color-sage)', lineHeight: 1.8 }}>{p.text}</p>
                    </div>
                  ))}
                </div>
              )}
              {s.footer && (
                <p className="font-light mt-3" style={{ fontSize: '0.92rem', color: 'var(--color-sage)', lineHeight: 1.8 }}>{s.footer}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}