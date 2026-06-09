import {set, unset, type StringInputProps} from 'sanity'

const brandBackgroundColorOptions = [
  {
    title: 'Primary',
    hex: '#311e41',
  },
  {
    title: 'Secondary',
    hex: '#563672',
  },
  {
    title: 'Complementary',
    hex: '#e86834',
  },
] as const

function normalizeHex(value?: string) {
  return value?.trim().toLowerCase()
}

export function BackgroundColorInput(props: StringInputProps) {
  const {onChange, readOnly, value} = props
  const normalizedValue = normalizeHex(value)
  const matchesBrandColor = brandBackgroundColorOptions.some(
    (option) => normalizeHex(option.hex) === normalizedValue,
  )
  const customSelected = Boolean(value && !matchesBrandColor)

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
        {brandBackgroundColorOptions.map((option) => {
          const selected = normalizeHex(option.hex) === normalizedValue
          const background = selected ? '#ffffff' : '#000000'
          const textColor = selected ? '#111111' : '#ffffff'
          const metaColor = selected ? '#666666' : 'rgba(255, 255, 255, 0.82)'

          return (
            <button
              aria-checked={selected}
              disabled={readOnly}
              key={option.hex}
              onClick={() => onChange(set(option.hex))}
              role="radio"
              style={{
                alignItems: 'center',
                background,
                border: selected ? `2px solid ${option.hex}` : '1px solid #000000',
                borderRadius: '6px',
                color: textColor,
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
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  borderRadius: '4px',
                  display: 'block',
                  height: '24px',
                  width: '32px',
                }}
              />
              <span style={{display: 'grid', gap: '0.125rem'}}>
                <span style={{fontWeight: 600}}>{option.title}</span>
                <span style={{color: metaColor, fontFamily: 'monospace', fontSize: '0.75rem'}}>
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
          placeholder="#123abc"
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
