import {defineField, defineType} from 'sanity'
import {BackgroundColorInput} from '../../components/BackgroundColorInput'
import {IconInput, isValidIconValue} from '../../components/IconInput'
import {blockPreviewMedia} from './blockPreviews'

export const actionPanelBlockType = defineType({
  name: 'actionPanelBlock',
  title: 'Action Grid',
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
              components: {
                input: IconInput,
              },
              validation: (rule) =>
                rule
                  .required()
                  .custom((value) =>
                    !value || isValidIconValue(value)
                      ? true
                      : 'Use a valid Lucide icon name, like heart-handshake or book-open.',
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
            select: {title: 'title', subtitle: 'href'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: title || 'Action Grid',
        subtitle: 'Action Grid',
        media: blockPreviewMedia.actionPanelBlock,
      }
    },
  },
})
