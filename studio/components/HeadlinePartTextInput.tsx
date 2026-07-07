import {useCallback} from 'react'
import {set, unset, type StringInputProps, useFormValue} from 'sanity'

const HERO1_LIMIT = 60

type Part = {_key?: string; text?: string}

export function HeadlinePartTextInput(props: StringInputProps) {
  const {onChange, value = '', path} = props

  // path is [..., 'headlineParts', {_key: 'xyz'}, 'text']
  // headlineParts array lives two levels up
  const partsPath = path.slice(0, -2)
  const currentKey = (path.at(-2) as {_key?: string} | undefined)?._key

  const isHero2 =
    (useFormValue(path.slice(0, -3)) as {_type?: string} | undefined)?._type === 'hero2Block'

  const allParts = useFormValue(partsPath) as Part[] | undefined

  // Characters consumed by every OTHER non-empty part, plus inter-part spaces
  const otherParts = (allParts ?? []).filter(
    (p) => p?._key !== currentKey && p?.text?.trim(),
  )
  const otherChars = otherParts.reduce((sum, p) => sum + (p.text?.trim().length ?? 0), 0)
  const spacesCount = otherChars > 0 ? otherParts.length : 0 // one space between each pair + before this part
  const maxLength = isHero2 ? undefined : Math.max(0, HERO1_LIMIT - otherChars - spacesCount)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.currentTarget.value
      onChange(next ? set(next) : unset())
    },
    [onChange],
  )

  // Render a plain text input that mirrors Sanity Studio's default string style
  return (
    <input
      disabled={props.readOnly ?? false}
      maxLength={maxLength}
      onChange={handleChange}
      placeholder={props.schemaType.placeholder as string | undefined}
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
        width: '100%',
      }}
      type="text"
      value={value}
    />
  )
}
