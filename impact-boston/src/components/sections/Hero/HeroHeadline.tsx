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
    <h1 className={`font-heading text-h1 leading-[105%] font-bold ${className}`}>
      {children}
    </h1>
  )
}

interface HeroHeadlinePartProps {
  children: React.ReactNode
  color?: 'primary' | 'complementary' | 'black'
}

export function HeroHeadlinePart({
  children,
  color = 'black',
}: HeroHeadlinePartProps) {
  const colorMap = {
    primary: 'text-brand-primary',
    complementary: 'text-brand-complementary',
    black: 'text-black',
  }

  return <span className={colorMap[color]}>{children}</span>
}
