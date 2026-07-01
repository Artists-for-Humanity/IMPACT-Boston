import {defineField, defineType} from 'sanity'
import {HeadlineColorInput, headlineColorOptions} from '../../components/HeadlineColorInput'
import {blockPreviewMedia} from './blockPreviews'
import {defineLinkTargetField} from '../linkTarget'

type HeroBlockParent = {
  _type?: string
  hideMedia?: boolean | null
  image?: unknown
  youtubeUrl?: string | null
}

const isHero2 = (parent: unknown) =>
  typeof parent === 'object' && parent !== null && '_type' in parent
    ? (parent as {_type?: string})._type === 'hero2Block'
    : false

const hasYouTubeUrl = (parent: unknown) => {
  const typedParent = parent as HeroBlockParent | undefined

  return Boolean(typedParent?.youtubeUrl?.trim())
}

const hasImage = (value: unknown) => Boolean(value)

const hidesMedia = (parent: unknown) => {
  const typedParent = parent as HeroBlockParent | undefined

  return Boolean(typedParent?.hideMedia)
}

function isYouTubeUrl(value?: string | null) {
  if (!value) return true

  try {
    const url = new URL(value)
    const hostname = url.hostname.replace(/^www\./, '')

    return (
      hostname === 'youtube.com' ||
      hostname === 'm.youtube.com' ||
      hostname === 'youtube-nocookie.com' ||
      hostname === 'youtu.be'
    )
  } catch {
    return false
  }
}

export const heroBlockType = defineType({
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'highlight',
      title: 'Highlighted Title Text',
      type: 'string',
      description: 'Optional colored text appended to the Hero 2 title.',
      hidden: true,
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlight Color',
      type: 'string',
      initialValue: 'secondary',
      hidden: true,
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Complementary', value: 'complementary'},
        ],
        layout: 'radio',
      },
    }),
   
    defineField({
      name: 'headlineParts',
      title: 'Headline Parts',
      description: 'Each word or phrase in the headline with its color.',
      type: 'array',
      validation: (rule) =>
        rule.custom((value) =>
          Array.isArray(value) && value.length > 0
            ? true
            : 'At least one headline part is required.',
        ),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'color',
              title: 'Color',
              type: 'string',
              options: {
                list: headlineColorOptions.map(({title, value}) => ({title, value})),
                layout: 'radio',
              },
              components: {
                input: HeadlineColorInput,
              },
              initialValue: 'black',
            }),
          ],
          preview: {
            select: {title: 'text', subtitle: 'color'},
            prepare({title, subtitle}) {
              const color = headlineColorOptions.find((option) => option.value === subtitle)

              return {
                title,
                subtitle: color ? `${color.title} (${color.hex})` : subtitle,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      hidden: ({parent}) => !isHero2(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          isHero2(context.parent) && !value ? 'Description is required for Hero 2.' : true,
        ),
    }),
    defineField({
      name: 'supportingText',
      title: 'Supporting Text',
      type: 'text',
      rows: 2,
      description: 'Optional centered text shown below the Hero 2 description and above the media.',
      hidden: ({parent}) => !isHero2(parent),
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'text',
      rows: 3,
      hidden: ({parent}) => isHero2(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          isHero2(context.parent) || value ? true : 'Body text is required for Hero 1.',
        ),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      hidden: ({parent}) => isHero2(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          isHero2(context.parent) || value ? true : 'CTA button text is required for Hero 1.',
        ),
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
      hidden: ({parent}) => isHero2(parent),
      required: true,
    }),
    defineField({
      name: 'hideMedia',
      title: 'No Hero Image or Video',
      type: 'boolean',
      description: 'Use Hero 2 without a media area.',
      hidden: ({parent}) => !isHero2(parent),
      initialValue: false,
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'Optional. Paste a YouTube watch, share, shorts, or embed URL.',
      hidden: ({parent}) => !isHero2(parent) || hidesMedia(parent),
      validation: (rule) =>
        rule.custom((value) => (isYouTubeUrl(value) ? true : 'Use a valid YouTube URL.')),
    }),
    defineField({
      name: 'videoTitle',
      title: 'Video Title',
      type: 'string',
      description: 'Optional accessible title for the embedded YouTube video.',
      hidden: ({parent}) => !isHero2(parent) || hidesMedia(parent),
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      hidden: ({parent}) => isHero2(parent) && hidesMedia(parent),
      validation: (rule) =>
        rule.custom((value, context) => {
          if (!isHero2(context.parent) && !hasImage(value)) {
            return 'Hero image is required for Hero 1.'
          }

          if (
            isHero2(context.parent) &&
            !hidesMedia(context.parent) &&
            !hasImage(value) &&
            !hasYouTubeUrl(context.parent)
          ) {
            return 'Add a hero image, a YouTube URL, or choose "No Hero Image or Video."'
          }

          return true
        }),
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      hidden: ({parent}) => isHero2(parent) && (hidesMedia(parent) || !hasImage(parent?.image)),
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as HeroBlockParent | undefined

          if (isHero2(parent) && hidesMedia(parent)) {
            return true
          }

          if (!isHero2(parent) || hasImage(parent?.image)) {
            return value ? true : 'Image alt text is required when an image is used.'
          }

          return true
        }),
    }),
  ],
  preview: {
    select: {type: '_type'},
    prepare({type}) {
      const title = type === 'hero2Block' ? 'Hero 2' : 'Hero 1'
      const media =
        type === 'hero2Block' ? blockPreviewMedia.hero2Block : blockPreviewMedia.hero1Block

      return {title, subtitle: 'Hero Block', media}
    },
  },
})
