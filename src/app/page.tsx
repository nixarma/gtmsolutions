import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ForSection from '@/components/home/ForSection'
import ProblemSection from '@/components/home/ProblemSection'
import CredentialsBar from '@/components/home/CredentialsBar'
import SystemSection from '@/components/home/SystemSection'
import EngagementSection from '@/components/home/EngagementSection'
import LogosSection from '@/components/home/LogosSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CtaSection from '@/components/home/CtaSection'
import FadeUp from '@/components/ui/FadeUp'

export const metadata: Metadata = {
  title: 'GTM Coaching & Presales Training | GTM Solutions Consulting | Nikhil Sarma',
  description:
    'Nikhil Sarma is a B2B SaaS GTM coach and consultant. He has worked with teams at Adobe, Cloudflare, Splunk, and Locus to build buyer-first GTM systems grounded in value discovery, decision confidence, and commercial clarity.',
  alternates: { canonical: 'https://gtmsolutions.co/' },
  openGraph: {
    title: 'GTM Coaching & Presales Training | GTM Solutions Consulting',
    description:
      'Nikhil Sarma helps CROs, VPs of Sales, and Heads of Solutions Engineering build buyer-first GTM systems grounded in value discovery, decision confidence, and commercial clarity.',
    url: 'https://gtmsolutions.co/',
    siteName: 'GTM Solutions Consulting',
    type: 'website',
    images: [
      {
        url: '/images/GSC Logo.png?format=1500w',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Coaching & Presales Training | GTM Solutions Consulting',
    description:
      'Helping GTM teams build decision confidence in their buyers. Value discovery, storytelling, demos, and negotiation coaching for B2B SaaS.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: 'GTM Solutions Consulting',
      alternateName: 'GTMWorks',
      url: 'https://gtmsolutions.co',
      founder: {
        '@type': 'Person',
        name: 'Nikhil Sarma',
        jobTitle: 'GTM Coach & Consultant',
        url: 'https://gtmsolutions.co/about',
        description:
          'Nikhil Sarma is a B2B SaaS GTM coach with expertise in value discovery, presales coaching, value demonstration, and buyer-first sales methodology. He has coached over 800 sales and presales professionals across companies including Adobe, Cloudflare, Splunk, Storyblok, and Locus.',
        knowsAbout: [
          'GTM coaching',
          'presales coaching',
          'value discovery',
          'value demonstration',
          'sales storytelling',
          'decision confidence',
          'solutions engineering',
          'B2B SaaS sales',
        ],
      },
      description:
        'GTM Solutions Consulting provides expert GTM coaching, presales training, and value discovery frameworks for CROs, VPs of Sales, and Heads of Solutions Engineering in B2B SaaS companies.',
      serviceType: [
        'GTM Coaching',
        'Presales Coaching',
        'Sales Training',
        'Value Discovery',
        'Value Demonstration',
        'Sales Storytelling',
      ],
      areaServed: 'Worldwide',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <FadeUp><ForSection /></FadeUp>
      <FadeUp><ProblemSection /></FadeUp>
      <CredentialsBar />
      <FadeUp><SystemSection /></FadeUp>
      <FadeUp><EngagementSection /></FadeUp>
      <FadeUp><LogosSection /></FadeUp>
      <FadeUp><TestimonialsSection /></FadeUp>
      <FadeUp><CtaSection /></FadeUp>
    </>
  )
}