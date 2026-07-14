import {useEffect} from 'react'
import {set, useFormValue, type StringInputProps} from 'sanity'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function SectionIdInput(props: StringInputProps) {
  const {onChange, value} = props

  // Walk up one level from the sectionId field to the parent block object
  const parentPath = props.path.slice(0, -1)

  // Top-level title fields (most blocks)
  const title = useFormValue([...parentPath, 'title']) as string | undefined
  const heading = useFormValue([...parentPath, 'heading']) as string | undefined
  const label = useFormValue([...parentPath, 'label']) as string | undefined
  const articleTitle = useFormValue([...parentPath, 'articleTitle']) as string | undefined

  // Nested fallbacks for blocks with no top-level title field:
  // ctaSectionBlock → panels[0].title
  const panelTitle = useFormValue([...parentPath, 'panels', 0, 'title']) as string | undefined
  // doubleContentBlock → cards[0].title
  const cardTitle = useFormValue([...parentPath, 'cards', 0, 'title']) as string | undefined
  // sideTabsBlock → tabs[0].label
  const tabLabel = useFormValue([...parentPath, 'tabs', 0, 'label']) as string | undefined
  // singleContentBlock (content[]) → first span text in first block
  const contentText = useFormValue([
    ...parentPath,
    'content',
    0,
    'children',
    0,
    'text',
  ]) as string | undefined

  const sourceText =
    title || heading || label || articleTitle || panelTitle || cardTitle || tabLabel || contentText || ''
  const autoId = slugify(sourceText)

  useEffect(() => {
    if (!value && autoId) {
      onChange(set(autoId))
    }
  }, [autoId]) // eslint-disable-line react-hooks/exhaustive-deps

  return props.renderDefault({
    ...props,
    elementProps: {
      ...props.elementProps,
      placeholder: autoId || 'section-id',
    },
  })
}
