import {defineField, defineType} from 'sanity'

import {defineLinkTargetField} from '../linkTarget'
import {blockPreviewMedia} from './blockPreviews'

export const articleCalloutBlockType = defineType({
  name: 'articleCalloutBlock',
  title: 'Article Callout',
  type: 'object',
  fields: [
    defineField({
      name: 'calloutText',
      title: 'Callout Text',
      description: 'Large text shown next to or above the article card.',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'articleTitle',
      title: 'Article Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'articleDescription',
      title: 'Article Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'articleAuthor',
      title: 'Article Author',
      type: 'string',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      initialValue: 'Read Full Article here.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Legacy Link URL',
      type: 'string',
      hidden: true,
    }),
    defineLinkTargetField({
      title: 'Article Link',
      required: true,
    }),
  ],
  initialValue: {
    calloutText:
      'For more on what differentiates empowerment self-defense from other approaches, read this blog post from Martha Thompson at IMPACT Chicago.',
    articleTitle: 'Is it Empowerment Self-Defense?',
    articleDescription:
      'A checklist comparing non-empowerment self-defense programs to true empowerment self-defense (ESD) programs across three areas, philosophy, teaching approach, and methodology. Showing what genuine ESD looks like versus programs that fall short.',
    articleAuthor: 'Martha Thompson',
    linkText: 'Read Full Article here.',
  },
  preview: {
    select: {title: 'articleTitle', subtitle: 'calloutText'},
    prepare({title, subtitle}) {
      return {
        title: title || 'Article Callout',
        subtitle,
        media: blockPreviewMedia.articleCalloutBlock,
      }
    },
  },
})
