import {defineArrayMember, defineField, defineType} from 'sanity'
import {BackgroundColorInput} from '../../components/BackgroundColorInput'
import {LimitedTextInput} from '../../components/LimitedTextInput'
import {blockPreviewMedia} from './blockPreviews'
import {defineLinkTargetField} from '../linkTarget'

type TestimonialsBlockParent = {
  _type?: string
  showAuthors?: boolean | null
}

const isParticipantSpotlightBlock = (parent: unknown) => {
  const typedParent = parent as TestimonialsBlockParent | undefined

  return typedParent?._type === 'testimonialsSpotlightBlock'
}

export const testimonialsBlockType = defineType({
  name: 'testimonialsBlock',
  title: 'Testimonials Block',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'string',
      description: 'Optional supporting text under the heading.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Choose a brand color or enter a custom hex value.',
      components: {
        input: BackgroundColorInput,
      },
      hidden: ({parent}) => isParticipantSpotlightBlock(parent),
      validation: (rule) =>
        rule.custom((value, context) => {
          if (isParticipantSpotlightBlock(context.parent) || !value) {
            return true
          }

          return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)
            ? true
            : 'Use a valid hex color, like #faf6fd.'
        }),
    }),
    defineField({
      name: 'showAuthors',
      title: 'Show Authors',
      type: 'boolean',
      initialValue: false,
      hidden: ({parent}) => isParticipantSpotlightBlock(parent),
    }),
    defineField({
      name: 'authorPrefix',
      title: 'Author Prefix',
      description: 'Optional text shown before carousel author names.',
      type: 'string',
      initialValue: '- ',
      hidden: ({parent}) => {
        const typedParent = parent as TestimonialsBlockParent | undefined

        return isParticipantSpotlightBlock(parent) || !typedParent?.showAuthors
      },
    }),
    defineField({
      name: 'spotlightQuote',
      title: 'Spotlight Quote',
      type: 'text',
      rows: 8,
      description: 'The full quote shown in the participant spotlight layout.',
      hidden: ({parent}) => !isParticipantSpotlightBlock(parent),
      validation: (rule) =>
        rule.custom((value, context) => {
          if (!isParticipantSpotlightBlock(context.parent)) {
            return true
          }

          return value ? true : 'Add a quote for the participant spotlight.'
        }),
    }),
    defineField({
      name: 'spotlightAuthor',
      title: 'Spotlight Author',
      type: 'string',
      description: 'Optional author name shown under the spotlight quote.',
      hidden: ({parent}) => !isParticipantSpotlightBlock(parent),
    }),
    defineField({
      name: 'spotlightAuthorTitle',
      title: 'Spotlight Author Title',
      type: 'array',
      description: 'Optional attribution detail shown under or next to the author. Supports bold.',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [],
          },
        }),
      ],
      hidden: ({parent}) => !isParticipantSpotlightBlock(parent),
    }),
    defineField({
      name: 'testimonials',
      title: 'Carousel Testimonials',
      type: 'array',
      description: 'The repeatable quote cards used by the carousel layout.',
      hidden: ({parent}) => isParticipantSpotlightBlock(parent),
      validation: (rule) =>
        rule.custom((value, context) => {
          if (isParticipantSpotlightBlock(context.parent)) {
            return true
          }

          return Array.isArray(value) && value.length > 0
            ? true
            : 'Add at least one testimonial for the carousel.'
        }),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 4,
              validation: (rule) =>
                rule.custom((value) => {
                  if (!value) return 'Quote is required.'
                  if (typeof value === 'string' && value.length > 700)
                    return `Quote must be 700 characters or fewer (currently ${value.length}).`
                  return true
                }),
              components: {
                input: (props) => LimitedTextInput({...props, limit: 700}),
              },
            }),
            defineField({
              name: 'author',
              title: 'Author',
              type: 'string',
            }),
            defineField({
              name: 'authorTitle',
              title: 'Author Title',
              type: 'string',
              description: 'Optional attribution detail shown under or next to the author.',
            }),
            defineField({
              name: 'readMoreLink',
              title: 'Read More Link',
              type: 'string',
              description: 'Optional.',
              hidden: true,
            }),
            defineLinkTargetField({name: 'readMoreLinkTarget', title: 'Read More Link'}),
          ],
          preview: {
            select: {title: 'author', subtitle: 'quote'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      type: '_type',
      spotlightAuthor: 'spotlightAuthor',
      carouselAuthor: 'testimonials.0.author',
    },
    prepare({title, type, spotlightAuthor, carouselAuthor}) {
      const layoutTitle =
        type === 'testimonialsSpotlightBlock' ? 'Participant Spotlight' : 'Carousel'
      const author = type === 'testimonialsSpotlightBlock' ? spotlightAuthor : carouselAuthor
      const media =
        type === 'testimonialsSpotlightBlock'
          ? blockPreviewMedia.testimonialsSpotlightBlock
          : blockPreviewMedia.testimonialsCarouselBlock

      return {
        title: title || `Testimonials: ${layoutTitle}`,
        subtitle: author ? `${layoutTitle}: ${author}` : `Testimonials: ${layoutTitle}`,
        media,
      }
    },
  },
})
