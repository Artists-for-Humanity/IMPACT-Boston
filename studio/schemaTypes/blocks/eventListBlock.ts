import {LinkIcon} from 'lucide-react'
import {defineField, defineType} from 'sanity'
import {defineLinkTargetField} from '../linkTarget'
import {blockPreviewMedia} from './blockPreviews'

const DEFAULT_REGISTRATION_URL =
  'https://impactboston.app.neoncrm.com/np/clients/impactboston/eventRegistration.jsp?event=481&'

function getOrdinal(n: number): string {
  const v = n % 100
  if (v >= 11 && v <= 13) return 'th'
  switch (n % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

function formatEventDate(isoDate: string): string {
  const match = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!match) return isoDate
  const month = parseInt(match[2], 10)
  const day = parseInt(match[3], 10)
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${monthNames[month - 1]} ${day}${getOrdinal(day)}`
}

export const eventListBlockType = defineType({
  name: 'eventListBlock',
  title: 'Event List',
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
      name: 'noPaddingTop',
      title: 'Remove Top Padding',
      type: 'boolean',
      description: 'Use when this list should sit closer to the block above it.',
      initialValue: false,
    }),
    defineField({
      name: 'showChevrons',
      title: 'Show Chevron Icons',
      type: 'boolean',
      description: 'Shows the right-side chevron on each event row.',
      initialValue: true,
    }),
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'dateLabel',
              title: 'Date',
              type: 'date',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'registerLabel',
              title: 'Register Label',
              type: 'string',
              initialValue: 'Register here:',
            }),
            defineField({
              name: 'linkText',
              title: 'Link Text',
              description: 'Optional. Defaults to the resolved link URL.',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'string',
              hidden: true,
            }),
            defineLinkTargetField({
              title: 'Registration Link',
            }),
            defineField({
              name: 'details',
              title: 'Expandable Details',
              description: 'Optional content revealed when visitors open the row. Select text to add links.',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}],
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
                },
              ],
            }),
            defineField({
              name: 'defaultOpen',
              title: 'Open by Default',
              type: 'boolean',
              initialValue: false,
              hidden: ({parent}) => !parent?.details?.length,
            }),
          ],
          preview: {
            select: {
              dateLabel: 'dateLabel',
              title: 'title',
            },
            prepare({dateLabel, title}) {
              return {
                title: title || 'Event',
                subtitle: dateLabel ? formatEventDate(dateLabel) : undefined,
              }
            },
          },
        },
      ],
    }),
  ],
  initialValue: {
    noPaddingTop: false,
    showChevrons: true,
    events: [
      {
        dateLabel: '2025-07-10',
        title: 'Stranger Danger with Paul Renfro and Shameka Gregory',
        registerLabel: 'Register here:',
        linkTarget: {
          _type: 'linkTarget',
          type: 'url',
          url: DEFAULT_REGISTRATION_URL,
          openInNewTab: true,
        },
        defaultOpen: false,
      },
    ],
  },
  preview: {
    select: {
      events: 'events',
      title: 'title',
    },
    prepare({events, title}) {
      const itemCount = Array.isArray(events) ? events.length : 0
      const itemLabel = itemCount === 1 ? 'event' : 'events'

      return {
        title: title || 'Event List',
        subtitle: itemCount ? `${itemCount} ${itemLabel}` : 'Event List',
        media: blockPreviewMedia.eventListBlock,
      }
    },
  },
})
