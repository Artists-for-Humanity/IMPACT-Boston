import {defineArrayMember, defineField} from 'sanity'
import {defineLinkTargetField} from '../../../linkTarget'

export const sideTabsLinkContent = defineArrayMember({
  name: 'sideTabsLink',
  title: 'Standalone Link',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL or Path',
      type: 'string',
      hidden: true,
    }),
    defineLinkTargetField({required: true}),
  ],
  preview: {
    select: {title: 'text', subtitle: 'href'},
  },
})
