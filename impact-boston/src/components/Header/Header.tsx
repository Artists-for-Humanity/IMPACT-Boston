// components/Header/Header.tsx
// Main header container — composes SiteBanner, Logo, and Navigation.
// Sticky on scroll with a subtle backdrop blur.
// Props accept Sanity data; hardcoded defaults used until Sanity is wired up.

'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

interface NavItem {
  label: string
  link: string
  subItems?: { label: string; link: string }[]
}

interface HeaderProps {
  // Logo props
  logoSrc?: string
  logoAlt?: string
  // Navigation props
  navItems?: NavItem[]
}

export default function Header({
  logoSrc,
  logoAlt,
  navItems,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  // Add shadow + slight bg shift once user scrolls
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Main nav bar */}
      <div
        className={`
          relative w-full bg-white border-b border-gray-100 transition-shadow duration-200
          ${scrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : ''}
        `}
      >
        <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-6 md:px-8 py-6">
          <Logo src={logoSrc} alt={logoAlt} />
          <Navigation items={navItems} />
        </div>
      </div>
    </header>
  )
}
