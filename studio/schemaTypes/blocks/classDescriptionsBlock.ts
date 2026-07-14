import {defineField, defineType} from 'sanity'
import {blockPreviewMedia} from './blockPreviews'
import {BLOCK_DEFAULT_COPY, defaultInternalLinkTarget} from './blockDefaults'
import {defineLinkTargetField} from '../linkTarget'
import {SectionIdInput} from '../../components/SectionIdInput'

export const classDescriptionsBlockType = defineType({
  name: 'classDescriptionsBlock',
  title: 'Class Descriptions',
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
      name: 'seeAllLinkText',
      title: 'See All Link Text',
      type: 'string',
      description: 'Optional link shown in the header on desktop and below the list on mobile.',
    }),
    defineField({
      name: 'seeAllHref',
      title: 'See All Link URL',
      type: 'string',
      hidden: true,
    }),
    defineLinkTargetField({
      name: 'seeAllLinkTarget',
      title: 'See All Link',
    }),
    defineField({
      name: 'classItems',
      title: 'Classes / Services',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'summary',
              title: 'Summary',
              type: 'string',
            }),
            defineField({
              name: 'cost',
              title: 'Cost',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'dateTime',
              title: 'Date/Time',
              type: 'text',
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'text',
            }),
            defineField({
              name: 'linkText',
              title: 'Link Text',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'string',
              hidden: true,
            }),
            defineLinkTargetField(),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 5,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'summary',
            },
            prepare({title, subtitle}) {
              return {
                title: title || 'Class / Service',
                subtitle,
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
    title: BLOCK_DEFAULT_COPY.title,
    description: BLOCK_DEFAULT_COPY.subtitle,
    seeAllLinkText: BLOCK_DEFAULT_COPY.ctaText,
    seeAllLinkTarget: {...defaultInternalLinkTarget},
    classItems: [
      {
        name: BLOCK_DEFAULT_COPY.title,
        summary: BLOCK_DEFAULT_COPY.subtitle,
        cost: BLOCK_DEFAULT_COPY.subtitle,
        dateTime: BLOCK_DEFAULT_COPY.subtitle,
        location: BLOCK_DEFAULT_COPY.subtitle,
        linkText: BLOCK_DEFAULT_COPY.ctaText,
        linkTarget: {...defaultInternalLinkTarget},
        description: BLOCK_DEFAULT_COPY.body,
      },
    ],
  },
  preview: {
    select: {
      classItems: 'classItems',
      title: 'title',
    },
    prepare({classItems, title}) {
      const itemCount = Array.isArray(classItems) ? classItems.length : 0
      const itemLabel = itemCount === 1 ? 'class/service' : 'classes/services'

      return {
        title: title || 'Class Descriptions',
        subtitle: itemCount ? `${itemCount} ${itemLabel}` : 'Class Descriptions',
        media: blockPreviewMedia.classDescriptionsBlock,
      }
    },
  },
})
