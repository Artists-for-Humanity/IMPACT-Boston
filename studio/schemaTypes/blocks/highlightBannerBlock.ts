import {defineField, defineType} from 'sanity'
import {BackgroundColorInput} from '../../components/BackgroundColorInput'
import {blockPreviewMedia} from './blockPreviews'

export const highlightBannerBlockType = defineType({
  name: 'highlightBannerBlock',
  title: 'Highlight Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      initialValue: '#311e41',
      components: {
        input: BackgroundColorInput,
      },
      validation: (rule) => rule.required().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
     defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      initialValue: '#ffffff',
      components: {
        input: BackgroundColorInput,
      },
      validation: (rule) => rule.required().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i),
    }),
    defineField({
      name: 'body',
      title: 'Body Paragraphs',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          type: 'text',
          rows: 3,
        },
      ],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaHref',
      title: 'Button Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'buttonBgColor',
      title: 'Button Background Color',
      type: 'string',
      initialValue: '#ffffff',
      components: {
        input: BackgroundColorInput,
      },
      validation: (rule) => rule.required().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i),
    }),
    defineField({
      name: 'buttonTextColor',
      title: 'Button Text Color',
      type: 'string',
      initialValue: '#000000',
      components: {
        input: BackgroundColorInput,
      },
      validation: (rule) => rule.required().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i),
    }),

    defineField({
      name: 'supportingText',
      title: 'Supporting Text',
      type: 'string',
      description: 'Optional small text shown below the button.',
    }),
    defineField({
      name: 'supportingTextColor',
      title: 'Supporting Text Color',
      type: 'string',
      initialValue: '#b8a6c8',
      components: {
        input: BackgroundColorInput,
      },
      hidden: ({parent}) => !parent?.supportingText,
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {supportingText?: string} | undefined

          if (!parent?.supportingText || !value) {
            return true
          }

          return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)
            ? true
            : 'Use a valid hex color, like #b8a6c8.'
        }),
    }),

  ],
  preview: {
    select: {title: 'title', subtitle: 'ctaLabel'},
    prepare({title, subtitle}) {
      return {
        title: title || 'Highlight Banner',
        subtitle: subtitle || 'Highlight Banner',
        media: blockPreviewMedia.highlightBannerBlock,
      }
    },
  },
})
