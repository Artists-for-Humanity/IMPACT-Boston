import {defineField, defineType} from 'sanity'

export const testimonialsBlockType = defineType({
  name: 'testimonialsBlock',
  title: 'Testimonials Block',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Testimonials Layout',
      type: 'string',
      description: 'Choose the visual layout for this testimonials block.',
      initialValue: 'carousel',
      options: {
        list: [
          {title: 'Carousel', value: 'carousel'},
          {title: 'Spotlight', value: 'spotlight'},
          {title: 'Grid', value: 'grid'},
        ],
        layout: 'radio',
      },
    }),
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      validation: (rule) => rule.required().min(1),
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
              // validation: (rule) => rule.required(),
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
    select: {title: 'heading', variant: 'variant'},
    prepare({title, variant}) {
      const variantTitle =
        variant === 'spotlight' ? 'Spotlight' : variant === 'grid' ? 'Grid' : 'Carousel'

      return {
        title: title || `Testimonials: ${variantTitle}`,
        subtitle: `Testimonials: ${variantTitle}`,
      }
    },
  },
})
