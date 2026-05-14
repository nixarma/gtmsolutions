import { clsx } from 'clsx'

type Background = 'ink' | 'white' | 'linen' | 'sage' | 'lightest2'

const bgMap: Record<Background, string> = {
  ink: 'bg-ink text-white',
  white: 'bg-white text-ink',
  linen: 'bg-linen text-ink',
  sage: 'bg-sage-light text-ink',
  lightest2: 'bg-lightest2 text-ink',
}

export default function Section({
  bg = 'white',
  className,
  children,
}: {
  bg?: Background
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={clsx('px-6 py-20', bgMap[bg], className)}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
