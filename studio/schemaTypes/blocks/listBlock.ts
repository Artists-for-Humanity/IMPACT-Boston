import {defineField, defineType} from 'sanity'
import {blockPreviewMedia} from './blockPreviews'
import {BLOCK_DEFAULT_COPY, defaultInternalLinkTarget} from './blockDefaults'
import {defineLinkTargetField} from '../linkTarget'
import {SectionIdInput} from '../../components/SectionIdInput'

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
      name: 'showToggle',
      title: 'Show Expand/Collapse Control',
      type: 'boolean',
      description: 'Shows the "Show all" control for accordion lists.',
      hidden: ({parent}) => isDetailsVariant(parent),
      initialValue: true,
    }),
    defineField({
      name: 'noPaddingTop',
      title: 'Remove Top Padding',
      type: 'boolean',
      description: 'Use when the list should sit closer to the block above it.',
      initialValue: false,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
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
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
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
            select: {
              title: 'title',
              subtitle: 'description',
              accordionContent: 'accordionContent',
            },
            prepare({title, subtitle, accordionContent}) {
              return {
                title: title || subtitle || accordionContent || 'List item',
                subtitle: title ? subtitle || accordionContent : undefined,
              }
            },
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
                      hidden: true,
                    }),
                    defineLinkTargetField({title: 'Optional Link'}),
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
    variant: 'accordion',
    showToggle: true,
    noPaddingTop: false,
    title: BLOCK_DEFAULT_COPY.title,
    description: BLOCK_DEFAULT_COPY.subtitle,
    listItems: [
      {
        title: BLOCK_DEFAULT_COPY.title,
        description: BLOCK_DEFAULT_COPY.subtitle,
        showInfoIcon: false,
        accordionContent: BLOCK_DEFAULT_COPY.body,
        defaultOpen: false,
      },
    ],
    detailItems: [
      {
        fields: [
          {
            label: BLOCK_DEFAULT_COPY.label,
            value: BLOCK_DEFAULT_COPY.title,
            linkTarget: {...defaultInternalLinkTarget},
          },
        ],
        descriptionTitle: 'Description',
        description: BLOCK_DEFAULT_COPY.body,
      },
    ],
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
