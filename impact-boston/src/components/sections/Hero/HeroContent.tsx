// components/sections/Hero/HeroContent.tsx
// Left side content for hero section  headline, body text, CTA button

import React from 'react'
import Button from '@/components/common/Button'
import HeroHeadline from './HeroHeadline'

interface HeroContentProps {
  headline: React.ReactNode | null
  body: string
  ctaText: string
  ctaHref: string
  className?: string
}

export default function HeroContent({
  headline,
  body,
  ctaText,
  ctaHref,
  className = '',
}: HeroContentProps) {
  return (
    <div className={`flex flex-col gap-8 h-full ${className}`}>
      {headline && (typeof headline === 'string' ? (
        <HeroHeadline>{headline}</HeroHeadline>
      ) : (
        headline
      ))}

      <p className="font-[IBM_Plex_Sans] text-[18px] font-normal leading-normal max-w-lg" style={{ color: '#333' }}>
        {body}
      </p>

      <div className="mt-auto">
        <Button href={ctaHref} variant="primary" size="lg">
          {ctaText}
        </Button>
      </div>
    </div>
  )
}
