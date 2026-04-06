import React from 'react'

interface Hero1HeadlineProps {
  children: React.ReactNode
  className?: string
}

export default function Hero1Headline({
  children,
  className = '',
}: Hero1HeadlineProps) {
  return (
    <h1 className={`h1 text-center lg:text-left ${className}`} style={{ color: '#061629' }}>
      {children}
    </h1>
  )
}

interface Hero1HeadlinePartProps {
  children: React.ReactNode
  color?: 'primary' | 'complementary' | 'black'
  customColor?: string
}

export function Hero1HeadlinePart({
  children,
  color = 'black',
  customColor,
}: Hero1HeadlinePartProps) {
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
