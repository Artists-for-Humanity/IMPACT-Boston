// components/sections/Hero/HeroImage.tsx
// Right side image container for hero section

import Image from 'next/image'

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
    <div className={`relative w-full min-h-[300px] md:h-full ${className}`} style={{ backgroundColor: '#311E41' }}>
      <div
        className="absolute top-0 left-0 right-0 h-[7px] z-10"
        style={{
          background: 'linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)'
        }}
      />
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
