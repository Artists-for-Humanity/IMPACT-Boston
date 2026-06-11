import {defineField, defineType} from 'sanity'

import {blockPreviewMedia} from './blockPreviews'
import {sideTabsContentTypes} from './sideTabs/content'

export const sideTabsBlockType = defineType({
  name: 'sideTabsBlock',
  title: 'Side Tabs',
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
              of: sideTabsContentTypes,
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
      return {title: 'Side Tabs', media: blockPreviewMedia.sideTabsBlock}
    },
  },
})
