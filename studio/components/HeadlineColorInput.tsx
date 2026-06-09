import {set, type StringInputProps} from 'sanity'

export const headlineColorOptions = [
  {
    title: 'Primary',
    value: 'primary',
    hex: '#311e41',
  },
  {
    title: 'Secondary',
    value: 'secondary',
    hex: '#563672',
    legacyValues: ['custom_purple'],
  },
  {
    title: 'Complementary',
    value: 'complementary',
    hex: '#e86834',
  },

] as const

export function HeadlineColorInput(props: StringInputProps) {
  const {onChange, readOnly, value} = props

  return (
    <div
      aria-label="Headline color"
      role="radiogroup"
      style={{
        display: 'grid',
        gap: '0.5rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      }}
    >
      {headlineColorOptions.map((option) => {
        const selected =
          value === option.value ||
          ('legacyValues' in option &&
            (option.legacyValues as readonly string[]).includes(value ?? ''))
        const background = selected ? '#ffffff' : '#000000'
        const textColor = selected ? '#111111' : '#ffffff'
        const metaColor = selected ? '#666666' : 'rgba(255, 255, 255, 0.82)'

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
  )
}
