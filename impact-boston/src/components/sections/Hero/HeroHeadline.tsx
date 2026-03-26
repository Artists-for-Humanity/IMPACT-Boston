import React from 'react'

interface HeroHeadlineProps {
  children: React.ReactNode
  className?: string
}

export default function HeroHeadline({
  children,
  className = '',
}: HeroHeadlineProps) {
  return (
    <h1 className={`h1 text-center lg:text-left ${className}`} style={{ color: '#061629' }}>
      {children}
    </h1>
  )
}

interface HeroHeadlinePartProps {
  children: React.ReactNode
  color?: 'primary' | 'complementary' | 'black'
  customColor?: string
}

export function HeroHeadlinePart({
  children,
  color = 'black',
  customColor,
}: HeroHeadlinePartProps) {
  const colorMap = {
    primary: 'text-brand-primary',
    complementary: 'text-brand-complementary',
    black: 'text-black',
  }

  if (customColor) {
    return <span style={{ color: customColor }}>{children}</span>
  }

  return <span className={colorMap[color]}>{children}</span>
}
