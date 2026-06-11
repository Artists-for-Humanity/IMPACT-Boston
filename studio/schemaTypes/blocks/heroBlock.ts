import {defineField, defineType} from 'sanity'
import {HeadlineColorInput, headlineColorOptions} from '../../components/HeadlineColorInput'

const isHero2 = (parent: unknown) =>
  typeof parent === 'object' && parent !== null && '_type' in parent
    ? (parent as {_type?: string})._type === 'hero2Block'
    : false

export const heroBlockType = defineType({
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: ({parent}) => !isHero2(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          isHero2(context.parent) && !value ? 'Title is required for Hero 2.' : true,
        ),
    }),
    defineField({
      name: 'highlight',
      title: 'Highlighted Title Text',
      type: 'string',
      description: 'Optional colored text appended to the Hero 2 title.',
      hidden: ({parent}) => !isHero2(parent),
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlight Color',
      type: 'string',
      initialValue: 'secondary',
      hidden: ({parent}) => !isHero2(parent),
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
      name: 'headlineParts',
      title: 'Headline Parts',
      description: 'Each word or phrase in the headline with its color.',
      type: 'array',
      hidden: ({parent}) => isHero2(parent),
      validation: (rule) =>
        rule.custom((value, context) => {
          if (isHero2(context.parent)) return true
          return Array.isArray(value) && value.length > 0
            ? true
            : 'At least one headline part is required for Hero 1.'
        }),
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
      hidden: ({parent}) => isHero2(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          isHero2(context.parent) || value ? true : 'CTA button link is required for Hero 1.',
        ),
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {type: '_type'},
    prepare({type}) {
      const title = type === 'hero2Block' ? 'Hero 2' : 'Hero 1'

      return {title, subtitle: 'Hero Block'}
    },
  },
})
