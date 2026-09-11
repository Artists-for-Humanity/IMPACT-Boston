import {defineField, defineType} from 'sanity'
import {blockPreviewMedia} from './blockPreviews'

type DoubleContentCardParent = {
  image?: unknown
  mediaType?: string | null
  showImagePlaceholder?: boolean | null
}

const isMediaImage = (parent: unknown) => {
  const typedParent = parent as DoubleContentCardParent | undefined

  return !typedParent?.mediaType || typedParent.mediaType === 'image'
}

const isMediaVideo = (parent: unknown) => {
  const typedParent = parent as DoubleContentCardParent | undefined

  return typedParent?.mediaType === 'video'
}

const isMediaEmbed = (parent: unknown) => {
  const typedParent = parent as DoubleContentCardParent | undefined

  return typedParent?.mediaType === 'embed'
}

const hasImage = (parent: unknown) => {
  const typedParent = parent as DoubleContentCardParent | undefined

  return Boolean(typedParent?.image)
}

const usesPlaceholder = (parent: unknown) => {
  const typedParent = parent as DoubleContentCardParent | undefined

  return Boolean(typedParent?.showImagePlaceholder)
}

export const doubleContentBlockType = defineType({
  name: 'doubleContentBlock',
  title: 'Double Content',
  type: 'object',
  fields: [
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      validation: (rule) => rule.required().min(2).max(2),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'mediaType',
              title: 'Media Type',
              type: 'string',
              initialValue: 'image',
              options: {
                list: [
                  {title: 'Image', value: 'image'},
                  {title: 'Video Embed', value: 'video'},
                  {title: 'Script Embed', value: 'embed'},
                ],
                layout: 'radio',
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'showImagePlaceholder',
              title: 'Use Placeholder Image',
              type: 'boolean',
              initialValue: false,
              hidden: ({parent}) => !isMediaImage(parent),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              hidden: ({parent}) => !isMediaImage(parent) || usesPlaceholder(parent),
              validation: (rule) =>
                rule.custom((value, context) => {
                  if (!isMediaImage(context.parent)) return true
                  return value || usesPlaceholder(context.parent)
                    ? true
                    : 'Add an image or turn on the placeholder image.'
                }),
            }),
            defineField({
              name: 'imageAlt',
              title: 'Image Alt Text',
              type: 'string',
              hidden: ({parent}) => !isMediaImage(parent) || (!hasImage(parent) && !usesPlaceholder(parent)),
              validation: (rule) =>
                rule.custom((value, context) => {
                  if (!isMediaImage(context.parent)) return true
                  return hasImage(context.parent) || usesPlaceholder(context.parent)
                    ? value
                      ? true
                      : 'Image alt text is required when an image is shown.'
                    : true
                }),
            }),
            defineField({
              name: 'videoSrc',
              title: 'Video Embed URL',
              type: 'url',
              description: 'Use a YouTube, Vimeo, or other embeddable iframe URL.',
              hidden: ({parent}) => !isMediaVideo(parent),
              validation: (rule) =>
                rule.custom((value, context) =>
                  isMediaVideo(context.parent) && !value ? 'Add a video embed URL.' : true,
                ),
            }),
            defineField({
              name: 'videoTitle',
              title: 'Video Title',
              type: 'string',
              description: 'Accessible title for the embedded video.',
              hidden: ({parent}) => !isMediaVideo(parent),
            }),
            defineField({
              name: 'scriptSrc',
              title: 'Script Embed URL or Tag',
              description:
                'Paste a plain URL, a full <script src="..."> tag, or a full <iframe> tag.',
              type: 'text',
              rows: 2,
              hidden: ({parent}) => !isMediaEmbed(parent),
              validation: (rule) =>
                rule.custom((value, context) => {
                  if (!isMediaEmbed(context.parent)) return true
                  if (!value) return 'Add a script embed URL or tag.'
                  const trimmed = (value as string).trim()
                  if (
                    trimmed.startsWith('<script') ||
                    trimmed.startsWith('<iframe') ||
                    /^https?:\/\//i.test(trimmed)
                  ) {
                    return true
                  }
                  return 'Must be a URL (starting with https://) or a <script> / <iframe> tag.'
                }),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
            },
            prepare({title, subtitle, media}) {
              return {
                title: title || subtitle || 'Double content card',
                subtitle: title ? subtitle : undefined,
                media,
              }
            },
          },
        },
      ],
    }),
  ],
  initialValue: {
    cards: [
      {
        mediaType: 'image',
        description: 'First card description',
        showImagePlaceholder: true,
        imageAlt: 'Placeholder image',
      },
      {
        mediaType: 'image',
        description: 'Second card description',
        showImagePlaceholder: true,
        imageAlt: 'Placeholder image',
      },
    ],
  },
  preview: {
    select: {
      firstCard: 'cards.0.description',
      secondCard: 'cards.1.description',
    },
    prepare({firstCard, secondCard}) {
      return {
        title: 'Double Content',
        subtitle: [firstCard, secondCard].filter(Boolean).join(' / '),
        media: blockPreviewMedia.doubleContentBlock,
      }
    },
  },
})
