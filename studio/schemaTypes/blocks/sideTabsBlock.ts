import {defineField, defineType} from 'sanity'

import {blockPreviewMedia} from './blockPreviews'
import {BLOCK_DEFAULT_COPY, defaultPortableTextBlock} from './blockDefaults'
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
  initialValue: {
    tabs: [
      {
        label: 'Tab One',
        content: [
          defaultPortableTextBlock('h3', BLOCK_DEFAULT_COPY.title),
          defaultPortableTextBlock('normal', BLOCK_DEFAULT_COPY.body),
        ],
      },
      {
        label: 'Tab Two',
        content: [
          defaultPortableTextBlock('h3', BLOCK_DEFAULT_COPY.title),
          defaultPortableTextBlock('normal', BLOCK_DEFAULT_COPY.body),
        ],
      },
    ],
  },
  preview: {
    prepare() {
      return {title: 'Side Tabs', media: blockPreviewMedia.sideTabsBlock}
    },
  },
})
