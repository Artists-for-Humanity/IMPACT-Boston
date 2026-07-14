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
  // singleContentBlock → scan content[] for first heading block (h2/h3/h4)
  const content0Style = useFormValue([...parentPath, 'content', 0, 'style']) as string | undefined
  const content0Text = useFormValue([...parentPath, 'content', 0, 'children', 0, 'text']) as string | undefined
  const content1Style = useFormValue([...parentPath, 'content', 1, 'style']) as string | undefined
  const content1Text = useFormValue([...parentPath, 'content', 1, 'children', 0, 'text']) as string | undefined
  const content2Style = useFormValue([...parentPath, 'content', 2, 'style']) as string | undefined
  const content2Text = useFormValue([...parentPath, 'content', 2, 'children', 0, 'text']) as string | undefined

  const HEADING_STYLES = new Set(['h1', 'h2', 'h3', 'h4'])
  const contentHeading =
    (HEADING_STYLES.has(content0Style ?? '') && content0Text) ||
    (HEADING_STYLES.has(content1Style ?? '') && content1Text) ||
    (HEADING_STYLES.has(content2Style ?? '') && content2Text) ||
    undefined

  const sourceText =
    title || heading || label || articleTitle || panelTitle || cardTitle || tabLabel || contentHeading || ''
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
