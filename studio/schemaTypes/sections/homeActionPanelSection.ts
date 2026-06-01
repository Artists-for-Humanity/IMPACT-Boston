import {defineField, defineType} from 'sanity'

export const homeActionPanelSectionType = defineType({
  name: 'homeActionPanelSection',
  title: 'Action Panel',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Action Cards',
      type: 'array',
      validation: (rule) => rule.required().min(1).max(3),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'body',
              title: 'Card Body',
              type: 'text',
              rows: 2,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Handshake', value: 'handshake'},
                  {title: 'Person', value: 'user'},
                  {title: 'Dollar Sign', value: 'dollar'},
                  {title: 'Graduation Cap', value: 'graduation'},
                ],
                layout: 'dropdown',
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'bgColor',
              title: 'Background Color',
              type: 'string',
              description: 'Hex value e.g. #E86834',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'href'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'Action Panel', subtitle: 'Action Panel'}
    },
  },
})
