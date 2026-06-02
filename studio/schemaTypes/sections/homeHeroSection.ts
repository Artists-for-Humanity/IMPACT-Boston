import {defineField, defineType} from 'sanity'

export const homeHeroSectionType = defineType({
  name: 'homeHeroSection',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'headlineParts',
      title: 'Headline Parts',
      description: 'Each word or phrase in the headline with its color.',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'color',
              title: 'Color',
              type: 'string',
              options: {
                list: [
                  {title: 'Black', value: 'black'},
                  {title: 'Secondary (Purple)', value: 'custom_purple'},
                ],
                layout: 'radio',
              },
              initialValue: 'black',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {title: 'text', subtitle: 'color'},
          },
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Button Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
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
    prepare() {
      return {title: 'Hero'}
    },
  },
})
