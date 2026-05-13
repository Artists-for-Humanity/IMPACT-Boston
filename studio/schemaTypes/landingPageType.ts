import {defineField, defineType} from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    // ─── Hero ───────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'headlineParts',
          title: 'Headline Parts',
          description: 'Each word or phrase in the headline with its color.',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'text', title: 'Text', type: 'string'}),
                defineField({
                  name: 'color',
                  title: 'Color',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Black', value: 'black'},
                      {title: 'Secondary (Purple)', value: 'custom_purple'},
                    ],
                    layout: 'radio',
                  },
                }),
              ],
              preview: {
                select: {title: 'text', subtitle: 'color'},
              },
            },
          ],
        }),
        defineField({name: 'body', title: 'Body Text', type: 'text', rows: 3}),
        defineField({name: 'ctaText', title: 'CTA Button Text', type: 'string'}),
        defineField({name: 'ctaHref', title: 'CTA Button Link', type: 'string'}),
        defineField({
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({name: 'imageAlt', title: 'Image Alt Text', type: 'string'}),
      ],
    }),

    // ─── Action Panel ────────────────────────────────────────────────────────
    defineField({
      name: 'actionPanel',
      title: 'Action Panel',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'subtext', title: 'Subtext', type: 'string'}),
        defineField({
          name: 'cards',
          title: 'Action Cards',
          type: 'array',
          validation: (rule) => rule.max(3),
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Card Title', type: 'string'}),
                defineField({name: 'body', title: 'Card Body', type: 'text', rows: 2}),
                defineField({name: 'href', title: 'Link', type: 'string'}),
                defineField({
                  name: 'bgColor',
                  title: 'Background Color',
                  type: 'string',
                  description: 'Hex value e.g. #E86834',
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'href'},
              },
            },
          ],
        }),
      ],
    }),

    // ─── Side Tabs ───────────────────────────────────────────────────────────
    defineField({
      name: 'sideTabs',
      title: 'Side Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Tab Label', type: 'string'}),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{type: 'block'}],
              description: 'Supports headings, paragraphs, and bullet lists.',
            }),
          ],
          preview: {
            select: {title: 'label'},
          },
        },
      ],
    }),

    // ─── Highlights Carousel ─────────────────────────────────────────────────
    defineField({
      name: 'highlights',
      title: 'Highlights Carousel',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'heading', title: 'Heading', type: 'string'}),
            defineField({name: 'body', title: 'Body Text', type: 'text', rows: 4}),
            defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
            defineField({name: 'ctaLink', title: 'CTA Link', type: 'string'}),
            defineField({
              name: 'additionalText',
              title: 'Additional Text',
              type: 'string',
              description: 'e.g. contact info shown below the CTA.',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({name: 'imageAlt', title: 'Image Alt Text', type: 'string'}),
          ],
          preview: {
            select: {title: 'heading', media: 'image'},
          },
        },
      ],
    }),

    // ─── Testimonials ────────────────────────────────────────────────────────
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'quote', title: 'Quote', type: 'text', rows: 4}),
            defineField({name: 'author', title: 'Author', type: 'string'}),
            defineField({name: 'readMoreLink', title: 'Read More Link', type: 'string'}),
          ],
          preview: {
            select: {title: 'author', subtitle: 'quote'},
          },
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Landing Page'}
    },
  },
})
