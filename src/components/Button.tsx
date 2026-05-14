import Link from 'next/link'
import { clsx } from 'clsx'

type Variant = 'primary' | 'outline' | 'ghost'

const variants: Record<Variant, string> = {
  primary: 'bg-red text-white hover:bg-red-dark',
  outline: 'border border-red text-red hover:bg-red hover:text-white',
  ghost: 'text-white/80 hover:text-white underline underline-offset-4',
}

export default function Button({
  href,
  variant = 'primary',
  className,
  children,
}: {
  href: string
  variant?: Variant
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={clsx('font-body text-sm px-6 py-3 transition-colors inline-block', variants[variant], className)}
    >
      {children}
    </Link>
  )
}
