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
    <div className={`flex flex-col h-full ${className}`}>
      <div className="mb-3 md:mb-8">
        {headline && (typeof headline === 'string' ? (
          <HeroHeadline>{headline}</HeroHeadline>
        ) : (
          headline
        ))}
      </div>

      <p className="font-[IBM_Plex_Sans] text-[18px] font-normal leading-normal max-w-lg text-center min-[744px]:text-center md:text-left mb-8 md:mb-8" style={{ color: '#333' }}>
        {body}
      </p>

      <div className="mt-auto flex justify-center min-[744px]:justify-center md:justify-start">
        <Button href={ctaHref} variant="primary" size="lg">
          {ctaText}
        </Button>
      </div>
    </div>
  )
}
