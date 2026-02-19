// components/sections/Hero/HeroImage.tsx
// Right side image container for hero section

import Image from 'next/image'
import React from 'react'

interface HeroImageProps {
  src: string
  alt: string
  className?: string
}

export default function HeroImage({
  src,
  alt,
  className = '',
}: HeroImageProps) {
  return (
    <div className={`relative w-full h-full min-h-[500px] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
