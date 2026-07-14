import {defineField, defineType} from 'sanity'
import {BackgroundColorInput} from '../../components/BackgroundColorInput'
import {blockPreviewMedia} from './blockPreviews'
import {BLOCK_DEFAULT_COPY, defaultInternalLinkTarget} from './blockDefaults'
import {defineLinkTargetField} from '../linkTarget'

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
      hidden: true,
    }),
    defineLinkTargetField({name: 'ctaLinkTarget', title: 'Button Link', required: true}),

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
  initialValue: {
    backgroundColor: '#311e41',
    title: BLOCK_DEFAULT_COPY.title,
    textColor: '#ffffff',
    body: [BLOCK_DEFAULT_COPY.body],
    ctaLabel: BLOCK_DEFAULT_COPY.ctaText,
    ctaLinkTarget: {...defaultInternalLinkTarget},
    buttonBgColor: '#ffffff',
    buttonTextColor: '#000000',
    supportingText: BLOCK_DEFAULT_COPY.subtitle,
    supportingTextColor: '#b8a6c8',
  },
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
