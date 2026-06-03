import {useMemo, useState} from 'react'
import * as LucideIcons from 'lucide-react'
import {iconNames} from 'lucide-react/dynamic'
import type {LucideIcon} from 'lucide-react'
import {set, type StringInputProps} from 'sanity'

type IconOption = {
  title: string
  value: string
}

const legacyIconAliases: Record<string, string> = {
  dollar: 'dollar-sign',
  graduation: 'graduation-cap',
}

const featuredIconNames = [
  'handshake',
  'user',
  'dollar-sign',
  'graduation-cap',
  // 'heart-handshake',
  // 'shield-check',
  // 'users',
  // 'accessibility',
  // 'person-standing',
  // 'book-open',
  // 'book-open-check',
  // 'school',
  // 'calendar-days',
  // 'clipboard-check',
  // 'badge-dollar-sign',
  // 'hand-heart',
  // 'heart',
  // 'sparkles',
  // 'star',
  // 'award',
  // 'trophy',
  // 'gift',
  // 'megaphone',
  // 'map-pin',
  // 'building-2',
  // 'house',
  // 'phone',
  // 'mail',
  // 'globe',
  // 'circle-help',
  // 'circle-check',
  // 'target',
  // 'lightbulb',
  // 'briefcase-business',
  // 'landmark',
  // 'wallet',
  // 'credit-card',
  // 'ticket',
] as const

const lucideIconNameSet = new Set<string>(iconNames)
const lucideIconComponents = LucideIcons as unknown as Record<string, LucideIcon | undefined>

function toKebabIconName(value: string) {
  return value
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
}

function toPascalIconName(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function toIconTitle(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function normalizeIconValue(value?: string | null) {
  if (!value) {
    return null
  }

  const iconName = toKebabIconName(value)
  const normalizedIconName = legacyIconAliases[iconName] ?? iconName

  return lucideIconNameSet.has(normalizedIconName) ? normalizedIconName : null
}

export function isValidIconValue(value?: string | null) {
  return Boolean(normalizeIconValue(value))
}

function getLucideIcon(iconName?: string | null) {
  const normalizedIconName = normalizeIconValue(iconName)

  if (!normalizedIconName) {
    return null
  }

  return lucideIconComponents[toPascalIconName(normalizedIconName)] ?? null
}

function makeIconOption(value: string): IconOption {
  return {
    title: toIconTitle(normalizeIconValue(value) ?? value),
    value,
  }
}

export const iconOptions = featuredIconNames.map(makeIconOption)

const allLucideIconOptions = iconNames.map((iconName) => makeIconOption(iconName))

function matchesIconSearch(option: IconOption, query: string) {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return true
  }

  return (
    option.title.toLowerCase().includes(normalizedQuery) ||
    option.value.toLowerCase().includes(toKebabIconName(normalizedQuery))
  )
}

export function IconInput(props: StringInputProps) {
  const {onChange, readOnly, value} = props
  const [query, setQuery] = useState('')
  const selectedIconName = normalizeIconValue(value)

  const visibleOptions = useMemo(() => {
    if (!query.trim()) {
      return iconOptions
    }

    return allLucideIconOptions.filter((option) => matchesIconSearch(option, query)).slice(0, 48)
  }, [query])

  return (
    <div style={{display: 'grid', gap: '0.75rem'}}>
      <input
        aria-label="Search Lucide icons"
        disabled={readOnly}
        onChange={(event) => setQuery(event.currentTarget.value)}
        placeholder="Search Lucide icons"
        style={{
          background: '#ffffff',
          border: '1px solid #d9d9e0',
          borderRadius: '4px',
          color: '#111111',
          font: 'inherit',
          padding: '0.5rem',
          width: '100%',
        }}
        type="search"
        value={query}
      />

      <div
        aria-label="Icon"
        role="radiogroup"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.625rem',
        }}
      >
        {visibleOptions.map((option) => {
          const normalizedOptionValue = normalizeIconValue(option.value)
          const selected = Boolean(
            normalizedOptionValue && selectedIconName === normalizedOptionValue,
          )
          const background = selected ? '#ffffff' : '#000000'
          const textColor = selected ? '#111111' : '#ffffff'
          const Icon = getLucideIcon(option.value)

          if (!Icon) {
            return null
          }

          return (
            <button
              aria-checked={selected}
              disabled={readOnly}
              key={option.value}
              onClick={() => onChange(set(option.value))}
              role="radio"
              style={{
                alignItems: 'center',
                background,
                border: selected ? '2px solid #111111' : '1px solid #000000',
                borderRadius: '6px',
                color: textColor,
                cursor: readOnly ? 'not-allowed' : 'pointer',
                display: 'grid',
                flex: '0 0 92px',
                gap: '0.375rem',
                justifyItems: 'center',
                minHeight: '76px',
                opacity: readOnly ? 0.6 : 1,
                padding: '0.5rem',
                textAlign: 'center',
                width: '92px',
              }}
              type="button"
            >
              <span
                style={{
                  alignItems: 'center',
                  background: selected ? '#f4f4f4' : '#151515',
                  border: selected ? '1px solid #d9d9e0' : '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  display: 'flex',
                  height: '36px',
                  justifyContent: 'center',
                  width: '40px',
                }}
              >
                <Icon aria-hidden size={28} strokeWidth={1.6} />
              </span>
              <span style={{fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.2}}>
                {option.title}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
