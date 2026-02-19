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
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = 'flex items-center justify-center gap-0.5 font-nav font-normal rounded-[5px] transition-colors duration-150'

  const variants: Record<ButtonVariant, string> = {
    primary: 'text-[#FFF] bg-[#6E3388] hover:bg-brand-primary',
    secondary: 'text-[#FFF] bg-brand-complementary hover:bg-[#A83315]',
    outline: 'text-black border border-[#959595] hover:border-gray-400 hover:text-gray-900',
  }

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-0.5 text-sm',
    md: 'px-4 py-1 text-base',
    lg: 'px-6 py-2 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const inlineStyles = { lineHeight: '25px' }

  if (href) {
    return (
      <a href={href} className={classes} style={inlineStyles}>
        {children}
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
    </button>
  )
}
