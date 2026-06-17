import {defineField, defineType} from 'sanity'
import {blockPreviewMedia} from './blockPreviews'


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
              name: 'subtext',
              title: 'Subtext',
              description: 'Optional secondary line, e.g. date or author.',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'linkText',
              title: 'Link Text',
              type: 'string',
              initialValue: 'Read more',
            }),
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
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'None (White)', value: ''},
          {title: 'Lavender', value: 'bg-bg-lavender'},
          {title: 'Primary Light', value: 'bg-primary-light'},
          {title: 'Secondary Light', value: 'bg-secondary-light'},
          {title: 'Complementary Light', value: 'bg-complementary-light'},
        ],
        layout: 'radio',
      },
      initialValue: '',
    }),
  ],
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
