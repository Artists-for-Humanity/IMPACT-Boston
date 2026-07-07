import {useCallback} from 'react'
import {set, unset, type TextInputProps} from 'sanity'

export function LimitedTextInput({limit, ...props}: TextInputProps & {limit: number}) {
  const {onChange, readOnly, value = ''} = props
  const used = typeof value === 'string' ? value.length : 0
  const remaining = limit - used
  const isOver = remaining < 0
  const isWarning = remaining >= 0 && remaining <= 20

  const counterColor = isOver ? '#e55b5b' : isWarning ? '#d97706' : '#6b7280'
  const barColor = isOver ? '#e55b5b' : isWarning ? '#d97706' : '#563672'
  const barWidth = `${Math.min(100, (used / limit) * 100)}%`

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const next = e.currentTarget.value
      onChange(next ? set(next) : unset())
    },
    [onChange],
  )

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
      <textarea
        disabled={readOnly ?? false}
        maxLength={limit}
        onChange={handleChange}
        placeholder={props.schemaType.placeholder as string | undefined}
        rows={3}
        style={{
          background: 'var(--card-bg-color, #fff)',
          border: '1px solid var(--card-border-color, #e2e8f0)',
          borderRadius: '3px',
          color: 'inherit',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          lineHeight: '1.5',
          outline: 'none',
          padding: '6px 10px',
          resize: 'vertical',
          width: '100%',
        }}
        value={value as string}
      />

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
          : `${remaining} of ${limit} character${remaining === 1 ? '' : 's'} remaining`}
      </p>
    </div>
  )
}
