import {defineField, defineType} from 'sanity'

export const highlightsBlockType = defineType({
  name: 'highlightsBlock',
  title: 'Highlights Block',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'body',
              title: 'Body Text',
              type: 'text',
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'ctaText',
              title: 'CTA Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'ctaLink',
              title: 'CTA Link',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'additionalText',
              title: 'Additional Text',
              type: 'string',
              description: 'For example, contact info shown below the CTA.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'imageAlt',
              title: 'Image Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {title: 'heading', media: 'image'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'label'},
    prepare({title}) {
      return {title: title || 'Highlights Block', subtitle: 'Highlights Block'}
    },
  },
})
