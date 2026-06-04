import {LinkIcon} from 'lucide-react'
import {createElement, useEffect, type CSSProperties, type ReactNode} from 'react'
import {defineField, defineType} from 'sanity'

type EditorPreviewProps = {
  children?: ReactNode
  focused?: boolean
  onClose?: () => void
  open?: boolean
  selected?: boolean
}

type TextStyleDefinition = {
  title: string
  value: string
  component?: (props: EditorPreviewProps) => ReactNode
}

const editorFontFamily = 'IBM Plex Sans, sans-serif'
const editorHeadingFontFamily = 'Poppins, sans-serif'

function createTextStylePreview(style: CSSProperties) {
  function TextStylePreview({children}: EditorPreviewProps) {
    return createElement('span', {style: {display: 'block', ...style}}, children)
  }

  return TextStylePreview
}

function StrongDecoratorPreview({children}: EditorPreviewProps) {
  return createElement(
    'strong',
    {
      style: {
        fontFamily: editorFontFamily,
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: 'normal',
      },
    },
    children,
  )
}

function DividerEditorPreview({focused, onClose, open, selected}: EditorPreviewProps) {
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

const textStyles = [
  {
    title: 'H1',
    value: 'h1',
    component: createTextStylePreview({
      fontFamily: editorHeadingFontFamily,
      fontSize: '48px',
      fontWeight: 500,
      lineHeight: '56px',
    }),
  },
  {
    title: 'H2',
    value: 'h2',
    component: createTextStylePreview({
      fontFamily: editorHeadingFontFamily,
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '40px',
    }),
  },
  {
    title: 'H3',
    value: 'h3',
    component: createTextStylePreview({
      fontFamily: editorHeadingFontFamily,
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Subtitle 1',
    value: 'sub1',
    component: createTextStylePreview({
      fontFamily: editorHeadingFontFamily,
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Subtitle 2',
    value: 'sub2',
    component: createTextStylePreview({
      fontFamily: editorHeadingFontFamily,
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Paragraph',
    value: 'normal',
    component: createTextStylePreview({
      fontFamily: editorFontFamily,
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Paragraph Bold',
    value: 'p1Bold',
    component: createTextStylePreview({
      fontFamily: editorFontFamily,
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Paragraph 2',
    value: 'p2',
    component: createTextStylePreview({
      fontFamily: editorFontFamily,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Medium Label',
    value: 'mediumLabel',
    component: createTextStylePreview({
      fontFamily: editorHeadingFontFamily,
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 'normal',
    }),
  },
  {
    title: 'Link Text',
    value: 'link',
    component: createTextStylePreview({
      fontFamily: editorFontFamily,
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '25px',
      textDecoration: 'underline',
      textUnderlineOffset: 2,
    }),
  },
] satisfies TextStyleDefinition[]

const usStateOptions = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
].map((state) => ({title: state, value: state}))

const trainerSortOptions = [
  {title: 'Alphabetically', value: 'Alphabetically'},
  {title: 'Reverse Alphabetically', value: 'Reverse Alphabetically'},
  {title: 'Organization', value: 'Organization'},
]

export const sideTabsBlockType = defineType({
  name: 'sideTabsBlock',
  title: 'Side Tabs Block',
  type: 'object',
  fields: [
    defineField({
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Tab Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
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
                },
                {
                  name: 'columns',
                  title: 'Columns',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'items',
                      title: 'Columns',
                      type: 'array',
                      validation: (rule) => rule.required().min(1).max(2),
                      of: [
                        {
                          name: 'column',
                          title: 'Column',
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'items',
                              title: 'Items',
                              type: 'array',
                              of: [{type: 'string'}],
                              validation: (rule) => rule.required().min(1),
                            }),
                          ],
                          preview: {
                            prepare() {
                              return {title: 'Column'}
                            },
                          },
                        },
                      ],
                    }),
                  ],
                  preview: {
                    prepare() {
                      return {title: 'Columns'}
                    },
                  },
                },
                {
                  name: 'divider',
                  title: 'Divider',
                  type: 'object',
                  readOnly: true,
                  components: {
                    block: DividerEditorPreview,
                  },
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      initialValue: 'Divider',
                      hidden: true,
                    }),
                  ],
                  preview: {
                    prepare() {
                      return {title: 'Divider'}
                    },
                  },
                },
                {
                  name: 'resourceList',
                  title: 'Resource List',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'eyebrow',
                      title: 'Eyebrow',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'previewCount',
                      title: 'Preview Count',
                      type: 'number',
                      initialValue: 5,
                      validation: (rule) => rule.min(1),
                    }),
                    defineField({
                      name: 'items',
                      title: 'Items',
                      type: 'array',
                      validation: (rule) => rule.required().min(1),
                      of: [
                        {
                          name: 'resourceListItem',
                          title: 'Resource',
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'title',
                              title: 'Title',
                              type: 'string',
                              validation: (rule) => rule.required(),
                            }),
                            defineField({
                              name: 'href',
                              title: 'Title Link',
                              type: 'string',
                            }),
                            defineField({
                              name: 'detail',
                              title: 'Detail',
                              type: 'string',
                            }),
                            defineField({
                              name: 'detailHref',
                              title: 'Detail Link',
                              type: 'string',
                            }),
                            defineField({
                              name: 'description',
                              title: 'Description',
                              type: 'text',
                              rows: 3,
                            }),
                            defineField({
                              name: 'expandedDescription',
                              title: 'Expanded Description',
                              type: 'text',
                              rows: 3,
                            }),
                            defineField({
                              name: 'meta',
                              title: 'Meta Lines',
                              type: 'array',
                              of: [{type: 'string'}],
                            }),
                            defineField({
                              name: 'icon',
                              title: 'Icon',
                              type: 'string',
                              options: {
                                list: [
                                  {title: 'External Link', value: 'external'},
                                  {title: 'Chevron', value: 'chevron'},
                                ],
                                layout: 'radio',
                              },
                            }),
                          ],
                          preview: {
                            select: {title: 'title', subtitle: 'detail'},
                          },
                        },
                      ],
                    }),
                  ],
                  preview: {
                    select: {title: 'eyebrow'},
                    prepare({title}) {
                      return {title: title || 'Resource List'}
                    },
                  },
                },
                {
                  name: 'trainerList',
                  title: 'Trainer List',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'state',
                      title: 'Default State',
                      type: 'string',
                      initialValue: 'Massachusetts',
                      options: {list: usStateOptions},
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'sortLabel',
                      title: 'Default Sort',
                      type: 'string',
                      initialValue: 'Alphabetically',
                      options: {list: trainerSortOptions},
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'previewCount',
                      title: 'Preview Count',
                      type: 'number',
                      initialValue: 5,
                      validation: (rule) => rule.min(1),
                    }),
                    defineField({
                      name: 'items',
                      title: 'Trainers',
                      type: 'array',
                      validation: (rule) => rule.required().min(1),
                      of: [
                        {
                          name: 'trainerListItem',
                          title: 'Trainer',
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'name',
                              title: 'Name',
                              type: 'string',
                              validation: (rule) => rule.required(),
                            }),
                            defineField({
                              name: 'organization',
                              title: 'Organization',
                              type: 'string',
                              validation: (rule) => rule.required(),
                            }),
                            defineField({
                              name: 'state',
                              title: 'State',
                              type: 'string',
                              options: {list: usStateOptions},
                              validation: (rule) => rule.required(),
                            }),
                            defineField({
                              name: 'contact',
                              title: 'Contact',
                              type: 'string',
                            }),
                            defineField({
                              name: 'contactHref',
                              title: 'Contact Link',
                              type: 'string',
                            }),
                          ],
                          preview: {
                            select: {title: 'name', subtitle: 'organization'},
                          },
                        },
                      ],
                    }),
                  ],
                  preview: {
                    select: {title: 'state'},
                    prepare({title}) {
                      return {title: title ? `Trainer List: ${title}` : 'Trainer List'}
                    },
                  },
                },
                {
                  name: 'sideTabsLink',
                  title: 'Standalone Link',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Text',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'href',
                      title: 'URL or Path',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                  ],
                  preview: {
                    select: {title: 'text', subtitle: 'href'},
                  },
                },
              ],
              description:
                'Use the style menu for global typography classes. Insert columns, dividers, resource lists, trainer lists, or standalone links when the side tabs need structured content.',
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: {title: 'label'},
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Side Tabs Block'}
    },
  },
})
