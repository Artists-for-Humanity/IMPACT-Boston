import {defineArrayMember, defineField} from 'sanity'

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
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'text', subtitle: 'href'},
  },
})
