'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { fadeUp } from '@/lib/animations'

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}