import {type ArrayOfObjectsInputProps, useFormValue} from 'sanity'

const HERO1_LIMIT = 60

type Part = {text?: string}

function getTotalChars(value: unknown): number {
  if (!Array.isArray(value)) return 0
  const parts = (value as Part[]).filter((p) => p?.text?.trim())
  const total = parts.reduce((sum, p) => sum + (p.text?.trim().length ?? 0), 0)
  const spaces = Math.max(0, parts.length - 1)
  return total + spaces
}

export function HeadlinePartsInput(props: ArrayOfObjectsInputProps) {
  const {renderDefault} = props

  // Read the parent block to detect Hero 1 vs Hero 2
  const parent = useFormValue(props.path.slice(0, -1)) as {_type?: string} | undefined
  const isHero2 = parent?._type === 'hero2Block'

  if (isHero2) {
    return <>{renderDefault(props)}</>
  }

  const used = getTotalChars(props.value)
  const remaining = HERO1_LIMIT - used
  const isOver = remaining < 0
  const isWarning = remaining >= 0 && remaining <= 10

  const counterColor = isOver ? '#e55b5b' : isWarning ? '#d97706' : '#6b7280'
  const barColor = isOver ? '#e55b5b' : isWarning ? '#d97706' : '#563672'
  const barWidth = `${Math.min(100, (used / HERO1_LIMIT) * 100)}%`

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
      {renderDefault(props)}

      <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
        {/* Progress bar */}
        <div
          style={{
            background: '#e5e7eb',
            borderRadius: '9999px',
            height: '4px',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <div
            style={{
              background: barColor,
              borderRadius: '9999px',
              height: '100%',
              transition: 'width 0.15s ease, background 0.15s ease',
              width: barWidth,
            }}
          />
        </div>

        {/* Counter label */}
        <p style={{color: counterColor, fontSize: '0.75rem', margin: 0, textAlign: 'right'}}>
          {isOver
            ? `${Math.abs(remaining)} character${Math.abs(remaining) === 1 ? '' : 's'} over limit`
            : `${remaining} of ${HERO1_LIMIT} character${remaining === 1 ? '' : 's'} remaining`}
        </p>
      </div>
    </div>
  )
}
