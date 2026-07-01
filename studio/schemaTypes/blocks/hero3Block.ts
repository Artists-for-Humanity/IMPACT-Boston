import {defineField, defineType} from 'sanity'

import {defineLinkTargetField} from '../linkTarget'
import {defaultInternalLinkTarget} from './blockDefaults'
import {blockPreviewMedia} from './blockPreviews'

export const hero3BlockType = defineType({
  name: 'hero3Block',
  title: 'Hero 3',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      description: 'Use line breaks to control the hero headline wrapping.',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredLabel',
      title: 'Featured Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredTitle',
      title: 'Featured Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredDescription',
      title: 'Featured Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredDate',
      title: 'Featured Date',
      type: 'date',
      options: {dateFormat: 'MMM D, YYYY'},
    }),
    defineField({
      name: 'featuredAuthor',
      title: 'Featured Author',
      type: 'string',
    }),
    defineField({
      name: 'featuredLinkText',
      title: 'Featured Link Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredHref',
      title: 'Legacy Featured Link URL',
      type: 'string',
      hidden: true,
    }),
    defineLinkTargetField({
      name: 'featuredLinkTarget',
      title: 'Featured Link',
      required: true,
    }),
  ],
  initialValue: {
    headline: 'Blogs,\nStories,\n& updates,',
    description: 'Insights on safety, empowerment, and the people doing the work.',
    featuredLabel: 'Most Recent',
    featuredTitle: 'Inside the Suit',
    featuredDescription:
      'B Whitney, Program Coordinator, brings decades of experience teaching acting to their work at IMPACT. Their work is essential to helping our suited instructors learn their craft.',
    featuredDate: '2026-01-23',
    featuredAuthor: 'B Whitney',
    featuredLinkText: 'Read Full Article',
    featuredLinkTarget: {
      ...defaultInternalLinkTarget,
      internalPath: '/Blog',
    },
  },
  preview: {
    select: {title: 'headline', subtitle: 'featuredTitle'},
    prepare({title, subtitle}) {
      return {
        title: title || 'Hero 3',
        subtitle,
        media: blockPreviewMedia.hero3Block,
      }
    },
  },
})
