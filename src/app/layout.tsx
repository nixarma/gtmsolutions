import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'GTM Solutions Consulting | B2B SaaS GTM Coach',
    template: '%s | GTM Solutions Consulting',
  },
  description: 'Nikhil Sarma helps CROs, VPs of Sales, and Heads of Solutions Engineering build buyer-first GTM systems grounded in value discovery, decision confidence, and commercial clarity.',
  metadataBase: new URL('https://gtmsolutions.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'GTM Solutions Consulting',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/nikhil-sarma.jpg',
        width: 1200,
        height: 630,
        alt: 'GTM Solutions Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScroll />
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}