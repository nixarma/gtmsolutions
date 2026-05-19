import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operational Walkthrough | GTM Solutions Consulting',
  description:
    'A structured 5-phase discovery framework for AEs and SEs selling AI. Find where AI actually fits in your prospect\'s workflow before you build a single demo slide.',
  alternates: { canonical: '/resources/opwalk' },
  openGraph: {
    title: 'Operational Walkthrough | GTM Solutions Consulting',
    description:
      'Stop demoing AI features nobody asked for. A 5-phase structured discovery framework for AEs and SEs.',
    type: 'article',
  },
}

export default function OpwalkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}