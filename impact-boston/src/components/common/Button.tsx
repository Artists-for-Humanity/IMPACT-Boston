// components/common/Button.tsx
// Primary CTA button — reusable across Header, Hero, FeatureBreak, etc.

import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  showChevron?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

function ChevronIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showChevron = false,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = 'link flex items-center justify-between transition-colors duration-150'

  const variants: Record<ButtonVariant, string> = {
    primary: 'text-[#FFF] bg-[#000] hover:bg-[#222]',
    secondary: 'text-[#FFF] bg-brand-complementary hover:bg-[#A83315]',
    outline: 'text-black border border-[#959595] hover:border-gray-400 hover:text-gray-900',
  }

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-0.5 text-sm',
    md: 'px-4 py-1 text-base',
    lg: 'p-6 h-14 md:p-6 lg:h-18',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const inlineStyles = {}

  if (href) {
    return (
      <a href={href} className={classes} style={inlineStyles}>
        {children}
        {(showChevron || size === 'lg') && <ChevronIcon />}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={inlineStyles}
    >
      {children}
      {(showChevron || size === 'lg') && <ChevronIcon />}
    </button>
  )
}
