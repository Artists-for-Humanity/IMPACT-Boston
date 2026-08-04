import {defineField, defineType} from 'sanity'
import {defineLinkTargetField} from '../linkTarget'
import {blockPreviewMedia} from './blockPreviews'

const DEFAULT_REGISTRATION_URL =
  'https://impactboston.app.neoncrm.com/np/clients/impactboston/eventRegistration.jsp?event=481&'

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
              title: 'Date Label',
              description: 'Short display date, e.g. Jul 10th.',
              type: 'string',
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
              description: 'Optional content revealed when visitors open the row.',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'defaultOpen',
              title: 'Open by Default',
              type: 'boolean',
              initialValue: false,
              hidden: ({parent}) => !parent?.details,
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
                subtitle: dateLabel,
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
        dateLabel: 'Jul 10th',
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
