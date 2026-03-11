// components/Header/Logo.tsx
// IMPACT Boston logo — reusable outside the header.
// Accepts an optional image src from Sanity; falls back to
// the text lockup if no image is provided.

import Image from 'next/image'

interface LogoProps {
  src?: string
  alt?: string
  href?: string
}

export default function Logo({ src, alt = 'IMPACT Boston', href = '/' }: LogoProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      aria-label="IMPACT Boston — go to homepage"
    >
      <Image
        src="/images/logos/logo-full-color.png"
        alt="IMPACT Boston"
        height={24}
        width={108}
        className="h-6 w-[108px] object-contain"
      />
    </a>
  )
}
