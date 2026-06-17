import {defineField, defineType} from 'sanity'
import {blockPreviewMedia} from './blockPreviews'

export const imageGridBlockType = defineType({
  name: 'imageGridBlock',
  title: 'Image Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      description: 'Optional paragraphs shown to the right of the title.',
      type: 'array',
      of: [{type: 'text', rows: 3}],
    }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Role / Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'bio',
              title: 'Bio',
              type: 'text',
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Photo',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'imageAlt',
              title: 'Photo Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {title: 'name', subtitle: 'role', media: 'image'},
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Member',
                subtitle,
                media,
              }
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
    select: {title: 'title', subtitle: 'subtitle'},
    prepare({title, subtitle}) {
      return {
        title: title || 'Image Grid',
        subtitle,
        media: blockPreviewMedia.tripleContentBlock,
      }
    },
  },
})
