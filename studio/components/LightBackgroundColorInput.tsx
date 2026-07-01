import {set, unset, type StringInputProps} from 'sanity'

const lightBackgroundColorOptions = [
  {
    title: 'White',
    value: '',
    hex: '#ffffff',
    aliases: ['white'],
  },
  {
    title: 'Lavender',
    value: 'bg-bg-lavender',
    hex: '#faf6fd',
    aliases: ['lavender'],
  },
  {
    title: 'Complementary Light',
    value: 'bg-complementary-light',
    hex: '#fffaf7',
    aliases: ['complementaryLight'],
  },
] as const

function normalizeValue(value?: string) {
  return value?.trim().toLowerCase()
}

function matchesOption(
  value: string | undefined,
  option: (typeof lightBackgroundColorOptions)[number],
) {
  const normalizedValue = normalizeValue(value)

  if (!normalizedValue) {
    return option.value === ''
  }

  return (
    normalizedValue === option.value.toLowerCase() ||
    option.aliases.some((alias) => normalizedValue === alias.toLowerCase())
  )
}

export function LightBackgroundColorInput(props: StringInputProps) {
  const {onChange, readOnly, value} = props
  const matchesPreset = lightBackgroundColorOptions.some((option) => matchesOption(value, option))
  const customSelected = Boolean(value && !matchesPreset)

  return (
    <div style={{display: 'grid', gap: '0.75rem'}}>
      <div
        aria-label="Background color"
        role="radiogroup"
        style={{
          display: 'grid',
          gap: '0.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        }}
      >
        {lightBackgroundColorOptions.map((option) => {
          const selected = matchesOption(value, option)

          return (
            <button
              aria-checked={selected}
              disabled={readOnly}
              key={option.title}
              onClick={() => onChange(option.value ? set(option.value) : unset())}
              role="radio"
              style={{
                alignItems: 'center',
                background: selected ? '#ffffff' : '#000000',
                border: selected ? '2px solid #111111' : '1px solid #000000',
                borderRadius: '6px',
                color: selected ? '#111111' : '#ffffff',
                cursor: readOnly ? 'not-allowed' : 'pointer',
                display: 'flex',
                gap: '0.75rem',
                opacity: readOnly ? 0.6 : 1,
                padding: '0.625rem 0.75rem',
                textAlign: 'left',
                width: '100%',
              }}
              type="button"
            >
              <span
                aria-hidden
                style={{
                  background: option.hex,
                  border: '1px solid #d9d9e0',
                  borderRadius: '4px',
                  display: 'block',
                  height: '24px',
                  width: '32px',
                }}
              />
              <span style={{display: 'grid', gap: '0.125rem'}}>
                <span style={{fontWeight: 600}}>{option.title}</span>
                <span
                  style={{
                    color: selected ? '#666666' : 'rgba(255, 255, 255, 0.82)',
                    fontFamily: 'monospace',
                    fontSize: '0.75rem',
                  }}
                >
                  {option.hex}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <label
        style={{
          background: customSelected ? '#ffffff' : '#000000',
          border: customSelected ? '2px solid #111111' : '1px solid #000000',
          borderRadius: '6px',
          color: customSelected ? '#111111' : '#ffffff',
          display: 'grid',
          gap: '0.375rem',
          padding: '0.625rem 0.75rem',
        }}
      >
        <span style={{fontWeight: 600}}>Custom hex</span>
        <input
          disabled={readOnly}
          onChange={(event) => {
            const nextValue = event.currentTarget.value.trim()
            onChange(nextValue ? set(nextValue) : unset())
          }}
          placeholder="#faf6fd"
          style={{
            background: '#ffffff',
            border: '1px solid #d9d9e0',
            borderRadius: '4px',
            color: '#111111',
            font: 'inherit',
            padding: '0.5rem',
            width: '100%',
          }}
          type="text"
          value={customSelected ? value : ''}
        />
      </label>
    </div>
  )
}
