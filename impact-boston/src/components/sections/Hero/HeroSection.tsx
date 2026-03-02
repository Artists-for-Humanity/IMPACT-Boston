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
        <div className="grid-12-col items-center min-h-[600px]">
          {/* Left side  Content */}
          <div className="col-start-1 col-span-4 h-full">
            <HeroContent
              headline={headline}
              body={body}
              ctaText={ctaText}
              ctaHref={ctaHref}
            />
          </div>

          {/* Right side  Image */}
          <div className="col-start-6 col-span-7 h-full">
            <HeroImage src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  )
}
