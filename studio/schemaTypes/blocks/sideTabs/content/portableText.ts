import {LinkIcon} from 'lucide-react'
import {defineArrayMember, defineField} from 'sanity'

import {
  createTextStylePreview,
  sideTabsEditorFonts,
  StrongDecoratorPreview,
  type EditorPreviewProps,
} from '../editorPreviews'

type TextStyleDefinition = {
  title: string
  value: string
  component?: (props: EditorPreviewProps) => React.ReactNode
}

const textStyles = [
  {
    title: 'H1',
    value: 'h1',
    component: createTextStylePreview({
      fontFamily: sideTabsEditorFonts.heading,
      fontSize: '48px',
      fontWeight: 500,
      letterSpacing: '-0.04em',
      lineHeight: '56px',
    }),
  },
  {
    title: 'H2',
    value: 'h2',
    component: createTextStylePreview({
      fontFamily: sideTabsEditorFonts.heading,
      fontSize: '32px',
      fontWeight: 500,
      letterSpacing: '-0.016em',
      lineHeight: '40px',
    }),
  },
  {
    title: 'H3',
    value: 'h3',
    component: createTextStylePreview({
      fontFamily: sideTabsEditorFonts.heading,
      fontSize: '24px',
      fontWeight: 500,
      letterSpacing: '0em',
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Subtitle 1',
    value: 'sub1',
    component: createTextStylePreview({
      fontFamily: sideTabsEditorFonts.heading,
      fontSize: '20px',
      fontWeight: 500,
      letterSpacing: '0em',
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Subtitle 2',
    value: 'sub2',
    component: createTextStylePreview({
      fontFamily: sideTabsEditorFonts.heading,
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '0em',
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Paragraph',
    value: 'normal',
    component: createTextStylePreview({
      fontFamily: sideTabsEditorFonts.body,
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Paragraph Bold',
    value: 'p1Bold',
    component: createTextStylePreview({
      fontFamily: sideTabsEditorFonts.body,
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Paragraph 2',
    value: 'p2',
    component: createTextStylePreview({
      fontFamily: sideTabsEditorFonts.body,
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Medium Label',
    value: 'mediumLabel',
    component: createTextStylePreview({
      fontFamily: sideTabsEditorFonts.heading,
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0em',
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Link Text',
    value: 'link',
    component: createTextStylePreview({
      fontFamily: sideTabsEditorFonts.body,
      fontSize: '16px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '25px',
      textDecoration: 'underline',
      textUnderlineOffset: 2,
    }),
  },
] satisfies TextStyleDefinition[]

export const portableTextContent = defineArrayMember({
  type: 'block',
  styles: textStyles,
  lists: [
    {title: 'Bullet List', value: 'bullet'},
    {title: 'Numbered List', value: 'number'},
  ],
  marks: {
    decorators: [
      {title: 'Bold', value: 'strong', component: StrongDecoratorPreview},
      {title: 'Italic', value: 'em'},
    ],
    annotations: [
      {
        name: 'link',
        title: 'Link',
        type: 'object',
        icon: LinkIcon,
        fields: [
          defineField({
            name: 'href',
            title: 'Link URL',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
        ],
      },
    ],
  },
})
