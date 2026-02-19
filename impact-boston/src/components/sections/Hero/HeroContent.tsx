// components/sections/Hero/HeroContent.tsx
// Left side content for hero section  headline, body text, CTA button

import React from 'react'
import Button from '@/components/common/Button'
import HeroHeadline from './HeroHeadline'

interface HeroContentProps {
  headline: React.ReactNode
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
    <div className={`flex flex-col gap-6 ${className}`}>
      {typeof headline === 'string' ? (
        <HeroHeadline>{headline}</HeroHeadline>
      ) : (
        headline
      )}

      <p className="text-body1 font-body text-black leading-relaxed max-w-lg">
        {body}
      </p>

      <div className="mt-4">
        <Button href={ctaHref} variant="primary" size="lg">
          {ctaText}
        </Button>
      </div>
    </div>
  )
}
