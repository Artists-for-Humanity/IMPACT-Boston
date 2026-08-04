import {defineField, defineType} from 'sanity'

import {blockPreviewMedia} from './blockPreviews'

export const hero3BlockType = defineType({
  name: 'hero3Block',
  title: 'Hero 3',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Header',
      description: 'Main hero heading. Use line breaks only when you need manual wrapping.',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheader',
      title: 'Subheader',
      description: 'Short supporting line shown under the header.',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageSrc',
      title: 'Legacy Image URL',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      description: 'Describe the image for screen readers.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  initialValue: {
    headline: 'Fact Check Fridays',
    subheader: 'Webinars on Violence, Crime and Personal Safety',
    description:
      "IMPACT's new webinar series features innovative leaders and brilliant minds to debunk myths about violence and crime and give you actionable information about what actually works to make communities safer.",
    imageAlt: 'Hero illustration',
  },
  preview: {
    select: {title: 'headline', subtitle: 'subheader', media: 'image'},
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Hero 3',
        subtitle,
        media: media || blockPreviewMedia.hero3Block,
      }
    },
  },
})
