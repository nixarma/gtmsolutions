import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-display text-xl italic text-white mb-2">GTM Solutions</p>
          <p className="font-body text-sm">GTM coaching for B2B SaaS revenue leaders.</p>
        </div>
        <div className="flex gap-8 text-sm font-body">
          <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}
