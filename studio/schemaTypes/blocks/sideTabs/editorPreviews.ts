import {createElement, useEffect, type CSSProperties, type ReactNode} from 'react'

export type EditorPreviewProps = {
  children?: ReactNode
  focused?: boolean
  onClose?: () => void
  open?: boolean
  selected?: boolean
}

const editorFontFamily = 'var(--font-ibm-plex-sans, "IBM Plex Sans", sans-serif)'
const editorHeadingFontFamily = 'var(--font-poppins, Poppins, sans-serif)'

export function createTextStylePreview(style: CSSProperties) {
  function TextStylePreview({children}: EditorPreviewProps) {
    return createElement('span', {style: {display: 'block', ...style}}, children)
  }

  return TextStylePreview
}

export function StrongDecoratorPreview({children}: EditorPreviewProps) {
  return createElement(
    'strong',
    {
      style: {
        fontFamily: editorFontFamily,
        fontSize: '14px',
        fontWeight: 800,
        letterSpacing: '0em',
        lineHeight: 'normal',
      },
    },
    children,
  )
}

export function DividerEditorPreview({focused, onClose, open, selected}: EditorPreviewProps) {
  useEffect(() => {
    if (open) {
      onClose?.()
    }
  }, [onClose, open])

  return createElement(
    'div',
    {
      contentEditable: false,
      style: {
        borderRadius: 4,
        outline: focused || selected ? '1px solid #e86834' : '1px solid transparent',
        padding: '12px 0',
      },
    },
    createElement('hr', {
      style: {
        border: 0,
        borderTop: '1px solid #dddddd',
        margin: 0,
      },
    }),
  )
}

export const sideTabsEditorFonts = {
  body: editorFontFamily,
  heading: editorHeadingFontFamily,
}
