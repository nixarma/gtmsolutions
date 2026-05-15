'use client'

import { CSSProperties } from 'react'

export default function HoverCard({
  children,
  className,
  style,
  hoverStyle,
  tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
  hoverStyle?: CSSProperties
  tag?: 'div' | 'article'
}) {
  const Tag = tag

  return (
    <Tag
      className={className}
      style={style}
      onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={e => Object.assign(e.currentTarget.style, style)}
    >
      {children}
    </Tag>
  )
}