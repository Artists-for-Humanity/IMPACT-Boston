import {defineField, defineType} from 'sanity'

type TestimonialsBlockParent = {
  _type?: string
  variant?: string
}

const isParticipantSpotlightBlock = (parent: unknown) => {
  const typedParent = parent as TestimonialsBlockParent | undefined

  return typedParent?._type === 'testimonialsSpotlightBlock' || typedParent?.variant === 'spotlight'
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
      type: 'string',
      description: 'Optional attribution detail shown under or next to the author.',
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
              validation: (rule) => rule.required(),
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
            }),
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
      const variantTitle =
        type === 'testimonialsSpotlightBlock' ? 'Participant Spotlight' : 'Carousel'
      const author = type === 'testimonialsSpotlightBlock' ? spotlightAuthor : carouselAuthor

      return {
        title: title || `Testimonials: ${variantTitle}`,
        subtitle: author ? `${variantTitle}: ${author}` : `Testimonials: ${variantTitle}`,
      }
    },
  },
})
