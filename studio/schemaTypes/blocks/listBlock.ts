import {defineField, defineType} from 'sanity'
import {blockPreviewMedia} from './blockPreviews'

const defaultDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut lorem porttitor.'

const defaultAccordionBody =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ultrices massa a lacinia. Praesent sit amet ipsum dapibus, eleifend dui vel, fringilla orci. Donec et dui conLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ultrices massa a lacinia. Praesent sit amet ipsum dapibus, eleifend dui vel, fringilla orci. Donec et dui conLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ultrices massa a lacinia. Praesent sit amet ipsum dapibus, eleifend dui vel, fringilla orci. Donec et dui con'

const defaultListItems = [
  {
    title: 'Static List Item',
    description: defaultDescription,
  },
  {
    title: 'Accordion - Collapsed',
    description: defaultDescription,
    accordionContent: defaultAccordionBody,
  },
  {
    title: 'Accordion - Expanded',
    description: defaultDescription,
    accordionContent: defaultAccordionBody,
    defaultOpen: true,
  },
  {
    title: 'List with Information Icon',
    description: defaultDescription,
    showInfoIcon: true,
  },
  {
    title: 'Accordion with Information Icon',
    description: defaultDescription,
    showInfoIcon: true,
    accordionContent: defaultAccordionBody,
  },
  ...Array.from({length: 8}, () => ({
    title: 'Item',
    description: defaultDescription,
  })),
]

const defaultDetailFields = [
  {label: 'Name', value: 'Middle School Safety'},
  {label: 'Summary', value: '7-hour class, all genders, ages 10-13'},
  {label: 'Cost', value: 'Course Fee: $150. Scholarships always available!'},
  {label: 'Date/Time', value: '6/6/26 10am-5pm'},
  {label: 'Location', value: 'Brighton, MA'},
  {label: 'Link', value: 'http://www.sample.org/head', href: 'http://www.sample.org/head'},
]

const defaultDetailItems = Array.from({length: 5}, () => ({
  fields: defaultDetailFields,
  descriptionTitle: 'Description',
  description:
    'This course helps students develop the skills to respond to potentially dangerous situations. Students learn to avoid altercations, resist intimidation, assert themselves in the face of peer pressure and escape potential assaults. They are also taught how to report dangerous situations to a safe adult. Scenarios focus on issues relevant to their lives such as bullying, dating situations, and increasing independence, as well as violence perpetrated by strangers.',
}))

const isDetailsVariant = (parent: unknown) =>
  typeof parent === 'object' &&
  parent !== null &&
  'variant' in parent &&
  (parent as {variant?: string}).variant === 'details'

export const listBlockType = defineType({
  name: 'listBlock',
  title: 'List',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: 'accordion',
      options: {
        list: [
          {title: 'Accordion List', value: 'accordion'},
          {title: 'Detail List', value: 'details'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional. Leave blank for lists that should start directly with the items.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'showToggle',
      title: 'Show Open/Close All Toggle',
      type: 'boolean',
      description: 'Shows a header action that opens or closes every accordion item.',
      initialValue: true,
      hidden: ({parent}) => isDetailsVariant(parent),
    }),
    defineField({
      name: 'noPaddingTop',
      title: 'Remove Top Padding',
      type: 'boolean',
      description: 'Use when the list should sit closer to the block above it.',
      initialValue: false,
    }),
    defineField({
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      hidden: ({parent}) => isDetailsVariant(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          isDetailsVariant(context.parent) || (Array.isArray(value) && value.length > 0)
            ? true
            : 'At least one list item is required.',
        ),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
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
              name: 'showInfoIcon',
              title: 'Show Information Icon',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'accordionContent',
              title: 'Accordion Content',
              description: 'Leave blank for a static list item.',
              type: 'text',
              rows: 6,
            }),
            defineField({
              name: 'defaultOpen',
              title: 'Open by Default',
              type: 'boolean',
              initialValue: false,
              hidden: ({parent}) => !parent?.accordionContent,
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),
    defineField({
      name: 'detailItems',
      title: 'Detail Items',
      type: 'array',
      hidden: ({parent}) => !isDetailsVariant(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          !isDetailsVariant(context.parent) || (Array.isArray(value) && value.length > 0)
            ? true
            : 'At least one detail item is required.',
        ),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'fields',
              title: 'Fields',
              type: 'array',
              validation: (rule) => rule.required().min(1),
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'value',
                      title: 'Value',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'href',
                      title: 'Optional Link URL',
                      type: 'string',
                    }),
                  ],
                  preview: {
                    select: {title: 'label', subtitle: 'value'},
                  },
                },
              ],
            }),
            defineField({
              name: 'descriptionTitle',
              title: 'Description Title',
              type: 'string',
              initialValue: 'Description',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 5,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {title: 'fields.0.value', subtitle: 'description'},
          },
        },
      ],
    }),
  ],
  initialValue: {
    variant: 'accordion',
    title: 'List Component',
    description: defaultDescription,
    showToggle: true,
    noPaddingTop: false,
    listItems: defaultListItems,
    detailItems: defaultDetailItems,
  },
  preview: {
    select: {title: 'title', subtitle: 'variant'},
    prepare({title, subtitle}) {
      return {
        title: title || 'List',
        subtitle: subtitle === 'details' ? 'Detail List' : 'Accordion List',
        media: blockPreviewMedia.listBlock,
      }
    },
  },
})
