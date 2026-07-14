import {defineField, defineType} from 'sanity'
import {blockPreviewMedia} from './blockPreviews'
import {BLOCK_DEFAULT_COPY, defaultInternalLinkTarget} from './blockDefaults'
import {defineLinkTargetField} from '../linkTarget'
import {LimitedTextInput} from '../../components/LimitedTextInput'
import {SectionIdInput} from '../../components/SectionIdInput'

export const highlightsBlockType = defineType({
  name: 'highlightsBlock',
  title: 'Highlights Carousel',
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
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'body',
              title: 'Body Text',
              type: 'text',
              rows: 4,
              validation: (rule) =>
                rule.custom((value) => {
                  if (!value) return 'Body text is required.'
                  if (typeof value === 'string' && value.length > 300)
                    return `Body text must be 300 characters or fewer (currently ${value.length}).`
                  return true
                }),
              components: {
                input: (props) => LimitedTextInput({...props, limit: 300}),
              },
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
              hidden: true,
            }),
            defineLinkTargetField({name: 'ctaLinkTarget', title: 'CTA Link', required: true}),
            defineField({
              name: 'additionalText',
              title: 'Additional Text',
              type: 'string',
              description: 'For example, contact info shown below the CTA.',
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
    defineField({
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description: 'Optional. Makes this block an anchor target for on-page links (e.g. "program-collaborators"). Auto-populated from the block title.',
      components: {
        input: SectionIdInput,
      },
    }),
  ],
  initialValue: {
    label: BLOCK_DEFAULT_COPY.label,
    slides: [
      {
        heading: BLOCK_DEFAULT_COPY.title,
        body: BLOCK_DEFAULT_COPY.body,
        ctaText: BLOCK_DEFAULT_COPY.ctaText,
        ctaLinkTarget: {...defaultInternalLinkTarget},
        additionalText: BLOCK_DEFAULT_COPY.subtitle,
        imageAlt: BLOCK_DEFAULT_COPY.imageAlt,
      },
    ],
  },
  preview: {
    select: {title: 'label'},
    prepare({title}) {
      return {
        title: title || 'Highlights Carousel',
        subtitle: 'Highlights Carousel',
        media: blockPreviewMedia.highlightsBlock,
      }
    },
  },
})
