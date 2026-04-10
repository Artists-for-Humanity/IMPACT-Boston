import React from 'react'
import Grid from '@/components/common/Grid'
import Hero1Content from './Hero1Content'
import Hero1Image from './Hero1Image'

interface Hero1SectionProps {
  headline: React.ReactNode
  body: string
  ctaText: string
  ctaHref: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export default function Hero1Section({
  headline,
  body,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  className = '',
}: Hero1SectionProps) {
  return (
    <section className={`bg-brand-gray-light py-8 md:py-10 lg:py-18 ${className}`}>
      <div className="mx-4 md:mx-8 lg:mx-36">
        <Grid className="gap-y-10 md:gap-y-10 lg:gap-y-0">
          <div className="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-5 lg:col-start-1">
            <Hero1Content
              headline={headline}
              body={body}
              ctaText={ctaText}
              ctaHref={ctaHref}
            />
          </div>
          <div className="col-span-4 md:col-span-8 lg:col-span-7 h-[544px]">
            <Hero1Image src={imageSrc} alt={imageAlt} />
          </div>
        </Grid>
      </div>
    </section>
  )
}
