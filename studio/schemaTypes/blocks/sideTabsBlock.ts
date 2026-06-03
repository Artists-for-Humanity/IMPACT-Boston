import {defineField, defineType} from 'sanity'

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
              of: [{type: 'block'}],
              description: 'Supports headings, paragraphs, and lists.',
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
