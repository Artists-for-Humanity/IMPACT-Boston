import {defineField, defineType} from 'sanity'
import {blockPreviewMedia} from './blockPreviews'
import {SectionIdInput} from '../../components/SectionIdInput'

type DoubleContentCardParent = {
  image?: unknown
  showImagePlaceholder?: boolean | null
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
    defineField({
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description: 'Optional. Makes this block an anchor target for on-page links (e.g. "program-collaborators"). Auto-populated from the block title.',
      components: {
        input: SectionIdInput,
      },
    }),
  ],
  initialValue: {
    cards: [
      {
        description: 'First card description',
        showImagePlaceholder: true,
        imageAlt: 'Placeholder image',
      },
      {
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
