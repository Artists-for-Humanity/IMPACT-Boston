import {LinkIcon} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {BackgroundColorInput} from '../../components/BackgroundColorInput'
import {LightBackgroundColorInput} from '../../components/LightBackgroundColorInput'
import {blockPreviewMedia} from './blockPreviews'
import {BLOCK_DEFAULT_COPY, defaultPortableTextBlock} from './blockDefaults'
import {defineLinkTargetField} from '../linkTarget'

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
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [
            {title: 'Bullet List', value: 'bullet'},
            {title: 'Numbered List', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                icon: LinkIcon,
                fields: [
                  defineLinkTargetField({required: true}),
                  defineField({
                    name: 'href',
                    title: 'Link URL',
                    type: 'string',
                    hidden: true,
                  }),
                ],
              },
            ],
          },
        }),
      ],
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
      name: 'subtitleFirst',
      title: 'Show Subtitle Above Title',
      description: 'Display the subtitle before the title.',
      type: 'boolean',
      initialValue: false,
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
      title: 'Link Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'Link URL',
      type: 'string',
      hidden: true,
    }),
    defineLinkTargetField({
      name: 'ctaLinkTarget',
      title: 'Link',
      hidden: ({parent}) => !parent?.ctaText && !parent?.ctaHref,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      hidden: true,
    }),
    defineLinkTargetField({
      name: 'buttonLinkTarget',
      title: 'Button Link',
      hidden: ({parent}) => !parent?.buttonText && !parent?.buttonLink,
    }),
    defineField({
      name: 'buttonColor',
      title: 'Button Color',
      type: 'string',
      description: 'Choose a brand color or enter a custom hex value.',
      components: {
        input: BackgroundColorInput,
      },
      hidden: ({parent}) => !parent?.buttonText && !parent?.buttonLink,
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {buttonText?: string; buttonLink?: string} | undefined
          const hasButton = Boolean(parent?.buttonText || parent?.buttonLink)

          if (!hasButton || !value) {
            return true
          }

          return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)
            ? true
            : 'Use a valid hex color, like #311e41.'
        }),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      components: {
        input: LightBackgroundColorInput,
      },
      initialValue: '',
    }),
  ],
  initialValue: {
    title: BLOCK_DEFAULT_COPY.title,
    subtitle: BLOCK_DEFAULT_COPY.subtitle,
    body: [defaultPortableTextBlock('normal', BLOCK_DEFAULT_COPY.body)],
    imageAlt: BLOCK_DEFAULT_COPY.imageAlt,
    subtitleFirst: false,
    reverse: false,
    backgroundColor: '',
  },
  preview: {
    select: {title: 'title', subtitle: 'subtitle', media: 'image'},
    prepare({title, subtitle, media}) {
      return {
        title: title ?? 'Content Block',
        subtitle: subtitle ?? 'Content Block',
        media: media ?? blockPreviewMedia.contentBlock,
      }
    },
  },
})
