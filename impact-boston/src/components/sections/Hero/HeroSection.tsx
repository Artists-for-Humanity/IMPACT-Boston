// components/sections/Hero/HeroSection.tsx
// Main container  orchestrates split-screen hero layout

import React from 'react'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

interface HeroSectionProps {
  headline: React.ReactNode
  body: string
  ctaText: string
  ctaHref: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export default function HeroSection({
  headline,
  body,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  className = '',
}: HeroSectionProps) {
  return (
    <section className={`w-full bg-brand-gray-light ${className}`}>
      <div className="container-grid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
          {/* Left side  Content */}
          <HeroContent
            headline={headline}
            body={body}
            ctaText={ctaText}
            ctaHref={ctaHref}
          />

          {/* Right side  Image */}
          <HeroImage src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </section>
  )
}
