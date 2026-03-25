// components/sections/Hero/HeroHeadline.tsx
// Multi-colored headline treatment  reusable for hero sections

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
    <h1 className={`font-[Poppins] text-[48px] font-medium leading-[56px] tracking-[-1.92px] text-center md:text-[64px] md:leading-[64px] md:tracking-[-4px] md:text-center lg:text-[80px] lg:leading-[80px] lg:tracking-[-4px] lg:text-left self-stretch ${className}`} style={{ color: '#061629' }}>
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
