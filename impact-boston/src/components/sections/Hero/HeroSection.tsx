// components/sections/Hero/HeroSection.tsx
// Main container  orchestrates split-screen hero layout

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
      {/* <div className="container-grid"> */}
        <div className=" items-center md:min-h-[600px] col-start-1 col-span-4">
          {/* Content - full width on mobile, left side on desktop */}
          <div className="col-span-4 md:col-start-1 md:col-span-4 h-full">
            <HeroContent
              headline={headline}
              body={body}
              ctaText={ctaText}
              ctaHref={ctaHref}
            />
          </div>

          {/* Image - full width on mobile below content, right side on desktop */}
          <div className="col-span-4 md:col-start-6 md:col-span-7 h-full">
            <HeroImage src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}
