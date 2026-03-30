import React from 'react'
import Grid from '@/components/common/Grid'
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
    <section className={`bg-brand-gray-light my-8 ${className}`}>
      <Grid>
        <div className="col-span-4 md:col-span-8 lg:col-span-5">
          <HeroContent
            headline={headline}
            body={body}
            ctaText={ctaText}
            ctaHref={ctaHref}
          />
        </div>
        <div className="col-span-4 md:col-span-8 lg:col-span-7 h-[544px]">
          <HeroImage src={imageSrc} alt={imageAlt} />
        </div>
      </Grid>
    </section>
  )
}
