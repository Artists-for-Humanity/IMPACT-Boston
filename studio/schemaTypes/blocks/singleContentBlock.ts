import {defineArrayMember, defineField, defineType} from 'sanity'
import {HeadlineColorInput, headlineColorOptions} from '../../components/HeadlineColorInput'
import {LightBackgroundColorInput} from '../../components/LightBackgroundColorInput'
import {blockPreviewMedia} from './blockPreviews'
import {portableTextContent} from './sideTabs/content/portableText'
import {defineLinkTargetField} from '../linkTarget'

type SingleContentParent = {
  body?: string | null
  content?: unknown[] | null
  ctaText?: string | null
  ctaHref?: string | null
  image?: unknown
  paragraphs?: unknown[] | null
  purchaseLinkText?: string | null
  purchaseLinkHref?: string | null
  showImagePlaceholder?: boolean | null
  title?: string | null
}

const hasImage = (parent: unknown) => {
  const typedParent = parent as SingleContentParent | undefined

  return Boolean(typedParent?.image)
}

const usesPlaceholder = (parent: unknown) => {
  const typedParent = parent as SingleContentParent | undefined

  return Boolean(typedParent?.showImagePlaceholder)
}

const hasText = (value: unknown) => typeof value === 'string' && Boolean(value.trim())

const hasLegacyContent = (parent: unknown) => {
  const typedParent = parent as SingleContentParent | undefined

  return Boolean(
    hasText(typedParent?.title) || hasText(typedParent?.body) || typedParent?.paragraphs?.length,
  )
}

const singleContentCtaContent = defineArrayMember({
  name: 'singleContentCta',
  title: 'CTA Button',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Button Link',
      type: 'string',
      hidden: true,
    }),
    defineLinkTargetField({required: true}),
  ],
  preview: {
    select: {title: 'text', subtitle: 'href'},
    prepare({title, subtitle}) {
      return {
        title: title || 'CTA Button',
        subtitle,
      }
    },
  },
})

const singleContentSupportingLinkContent = defineArrayMember({
  name: 'singleContentSupportingLink',
  title: 'Text Link',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Link Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link URL',
      type: 'string',
      hidden: true,
    }),
    defineLinkTargetField({required: true}),
    defineField({
      name: 'color',
      title: 'Link Color',
      type: 'string',
      initialValue: 'secondary',
      options: {
        list: headlineColorOptions.map(({title, value}) => ({title, value})),
        layout: 'radio',
      },
      components: {
        input: HeadlineColorInput,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'text', subtitle: 'href', color: 'color'},
    prepare({title, subtitle, color}) {
      return {
        title: title || 'Text Link',
        subtitle: [subtitle, color].filter(Boolean).join(' / '),
      }
    },
  },
})

export const singleContentBlockType = defineType({
  name: 'singleContentBlock',
  title: 'Single Content',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      description: 'Optional small label shown above the title, like “Our Vision”.',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      description:
        'Add heading, subtitle, paragraph, CTA button, and text link blocks in the order they should appear.',
      type: 'array',
      validation: (rule) =>
        rule.custom((value, context) =>
          Array.isArray(value) && value.length > 0
            ? true
            : hasLegacyContent(context.parent)
              ? true
              : 'Add at least one content block.',
        ),
      of: [portableTextContent, singleContentCtaContent, singleContentSupportingLinkContent],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'titleAs',
      title: 'Heading Level',
      type: 'string',
      initialValue: 'h3',
      options: {
        list: [
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
        ],
        layout: 'radio',
      },
      hidden: true,
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Optional line shown under the title.',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      description: 'Use blank lines to separate paragraphs.',
      type: 'text',
      rows: 6,
      hidden: true,
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      description: 'Optional advanced paragraphs. Used when Body Text is empty.',
      type: 'array',
      hidden: true,
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'bold',
              title: 'Bold',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {title: 'text', subtitle: 'bold'},
            prepare({title, subtitle}) {
              return {
                title: title || 'Paragraph',
                subtitle: subtitle ? 'Bold' : undefined,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'showImagePlaceholder',
      title: 'Use Placeholder Image',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      hidden: ({parent}) => usesPlaceholder(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          value || usesPlaceholder(context.parent)
            ? true
            : 'Add an image or turn on the placeholder image.',
        ),
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      hidden: ({parent}) => !hasImage(parent) && !usesPlaceholder(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          hasImage(context.parent) || usesPlaceholder(context.parent)
            ? value
              ? true
              : 'Image alt text is required when an image is shown.'
            : true,
        ),
    }),
    defineField({
      name: 'reverse',
      title: 'Show Image on Left',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Button Link',
      type: 'string',
      hidden: true,
    }),
    defineLinkTargetField({
      name: 'ctaLinkTarget',
      title: 'CTA Button Link',
      hidden: true,
    }),
    defineField({
      name: 'purchaseLinkText',
      title: 'Text Link Text',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'purchaseLinkHref',
      title: 'Text Link URL',
      type: 'string',
      hidden: true,
    }),
    defineLinkTargetField({
      name: 'purchaseLinkTarget',
      title: 'Text Link',
      hidden: true,
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      components: {
        input: LightBackgroundColorInput,
      },
    }),
  ],
  initialValue: {
    backgroundColor: 'bg-bg-lavender',
    content: [
      {
        _type: 'block',
        style: 'mediumLabel',
        markDefs: [],
        children: [{_type: 'span', text: 'Our Vision', marks: []}],
      },
      {
        _type: 'block',
        style: 'h3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            text: 'Violence is not inevitable. We all have the ability to stop it.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            text: 'IMPACT has been teaching solutions for safe living since 1971. We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT’s prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don’t feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others.',
            marks: [],
          },
        ],
      },
      {
        _type: 'singleContentSupportingLink',
        text: 'Purchase from Bookshop.org. IMPACT receives 10% of all proceeds.',
        linkTarget: {
          _type: 'linkTarget',
          type: 'url',
          url: 'https://bookshop.org',
          openInNewTab: true,
        },
        color: 'secondary',
      },
    ],
    showImagePlaceholder: true,
    imageAlt: 'Placeholder image',
    titleAs: 'h3',
  },
  preview: {
    select: {
      contentTitle: 'content.0.children.0.text',
      eyebrow: 'eyebrow',
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({contentTitle, eyebrow, title, subtitle}) {
      return {
        title: title || contentTitle || 'Single Content',
        subtitle: [eyebrow, subtitle].filter(Boolean).join(' / '),
        media: blockPreviewMedia.singleContentBlock,
      }
    },
  },
})
