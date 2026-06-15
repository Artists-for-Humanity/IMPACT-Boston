import {set, unset, type StringInputProps} from 'sanity'

export const tripleCardBackgroundColorOptions = [
  {
    title: 'None',
    value: 'none',
    hex: 'transparent',
  },
  {
    title: 'White',
    value: 'white',
    hex: '#ffffff',
  },
  {
    title: 'Lavender',
    value: 'lavender',
    hex: '#faf6fd',
  },
  {
    title: 'Primary Light',
    value: 'primaryLight',
    hex: '#fcf9ff',
  },
  {
    title: 'Secondary Light',
    value: 'secondaryLight',
    hex: '#fefcff',
  },
  {
    title: 'Complementary Light',
    value: 'complementaryLight',
    hex: '#fffaf7',
  },
  {
    title: 'Gray Light',
    value: 'grayLight',
    hex: '#f4f5f5',
  },
] as const

function normalizeValue(value?: string) {
  return value?.trim().toLowerCase()
}

function matchesOption(
  value: string | undefined,
  option: (typeof tripleCardBackgroundColorOptions)[number],
) {
  const normalizedValue = normalizeValue(value)

  return (
    normalizedValue === option.value.toLowerCase() || normalizedValue === option.hex.toLowerCase()
  )
}

export function TripleCardBackgroundColorInput(props: StringInputProps) {
  const {onChange, readOnly, value} = props
  const normalizedValue = normalizeValue(value)
  const matchesPreset = tripleCardBackgroundColorOptions.some((option) =>
    matchesOption(value, option),
  )
  const customSelected = Boolean(value && value !== 'none' && !matchesPreset)

  return (
    <div style={{display: 'grid', gap: '0.75rem'}}>
      <div
        aria-label="Triple card background color"
        role="radiogroup"
        style={{
          display: 'grid',
          gap: '0.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        }}
      >
        {tripleCardBackgroundColorOptions.map((option) => {
          const selected = matchesOption(value, option)
          const swatchBackground =
            option.hex === 'transparent'
              ? 'linear-gradient(135deg, #ffffff 0%, #ffffff 45%, #d9d9e0 45%, #d9d9e0 55%, #ffffff 55%, #ffffff 100%)'
              : option.hex

          return (
            <button
              aria-checked={selected}
              disabled={readOnly}
              key={option.value}
              onClick={() => onChange(option.value === 'none' ? set('none') : set(option.value))}
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
                  background: swatchBackground,
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
          placeholder="#fcf9ff"
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
