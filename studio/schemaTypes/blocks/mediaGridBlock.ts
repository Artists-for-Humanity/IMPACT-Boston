import {defineField, defineType} from 'sanity'
import {blockPreviewMedia} from './blockPreviews'
import {BLOCK_DEFAULT_COPY, defaultInternalLinkTarget} from './blockDefaults'
import {defineLinkTargetField} from '../linkTarget'

export const mediaGridBlockType = defineType({
  name: 'mediaGridBlock',
  title: 'Media Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheader',
      title: 'Subheader',
      description: 'Optional subtitle shown below the section title.',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              description: 'Article title, outlet name, or heading for the card.',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'date',
              title: 'Date',
              type: 'date',
              options: {dateFormat: 'MMM D, YYYY'},
            }),
            defineField({
              name: 'author',
              title: 'Author',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'string',
              hidden: true,
            }),
            defineLinkTargetField({required: true}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
            prepare({title, subtitle}) {
              return {title: title || 'Media Item', subtitle}
            },
          },
        },
      ],
    }),
  ],
  initialValue: {
    title: BLOCK_DEFAULT_COPY.title,
    subheader: BLOCK_DEFAULT_COPY.subtitle,
    items: [
      {
        title: BLOCK_DEFAULT_COPY.title,
        description: BLOCK_DEFAULT_COPY.body,
        author: BLOCK_DEFAULT_COPY.author,
        linkTarget: {...defaultInternalLinkTarget},
      },
    ],
  },
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: title || 'Media Grid',
        media: blockPreviewMedia.mediaGridBlock,
      }
    },
  },
})
