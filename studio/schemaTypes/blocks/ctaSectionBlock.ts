import {defineField, defineType} from 'sanity'
import {BackgroundColorInput} from '../../components/BackgroundColorInput'
import {IconInput, isValidIconValue} from '../../components/IconInput'
import {blockPreviewMedia} from './blockPreviews'

export const ctaSectionBlockType = defineType({
  name: 'ctaSectionBlock',
  title: 'CTA Panels',
  type: 'object',
  fields: [
    defineField({
      name: 'panels',
      title: 'CTA Panels',
      type: 'array',
      validation: (rule) => rule.required().min(1).max(2),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'titleLine2',
              title: 'Title Line 2',
              type: 'string',
              description: 'Optional second line shown directly under the title.',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Button Link',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Button Icon',
              type: 'string',
              components: {
                input: IconInput,
              },
              validation: (rule) =>
                rule
                  .required()
                  .custom((value) =>
                    !value || isValidIconValue(value)
                      ? true
                      : 'Use a valid Lucide icon name, like file-text or dollar-sign.',
                  ),
            }),
            defineField({
              name: 'bgColor',
              title: 'Background Color',
              type: 'string',
              description: 'Choose a brand color or enter a custom hex value.',
              components: {
                input: BackgroundColorInput,
              },
              validation: (rule) =>
                rule.required().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, {
                  name: 'hex color',
                  invert: false,
                }),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'buttonText',
            },
          },
        },
      ],
    }),
  ],
  initialValue: {
    panels: [
      {
        title: 'Title',
        titleLine2: 'Title',
        description: 'Here you put your subtitle.',
        buttonText: 'Call to Action',
        href: '#',
        bgColor: '#e86834',
        icon: 'file-text',
      },
      {
        title: 'Title',
        titleLine2: 'Title',
        description: 'Here you put your subtitle.',
        buttonText: 'Call to Action',
        href: '#',
        bgColor: '#311e41',
        icon: 'dollar-sign',
      },
    ],
  },
  preview: {
    select: {title: 'panels.0.title'},
    prepare({title}) {
      return {
        title: title || 'CTA Panels',
        subtitle: 'CTA Panels',
        media: blockPreviewMedia.ctaSectionBlock,
      }
    },
  },
})
