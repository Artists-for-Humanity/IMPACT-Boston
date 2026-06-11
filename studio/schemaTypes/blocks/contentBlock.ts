import {defineField, defineType} from 'sanity'

export const contentBlockType = defineType({
  name: 'contentBlock',
  title: 'Content Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {image?: unknown} | undefined
          if (parent?.image && !value) {
            return 'Image alt text is required when an image is provided.'
          }
          return true
        }),
    }),
    defineField({
      name: 'reverse',
      title: 'Reverse Layout',
      description: 'Place the image on the left and text on the right.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Button Link',
      type: 'string',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      description: 'Tailwind CSS class for the section background (e.g. bg-bg-lavender).',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'subtitle', media: 'image'},
    prepare({title, subtitle, media}) {
      return {
        title: title ?? 'Content Block',
        subtitle: subtitle ?? 'Content Block',
        media,
      }
    },
  },
})
