import {defineArrayMember, defineField} from 'sanity'

export const quoteContent = defineArrayMember({
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote Text',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'attribution',
      title: 'Attribution',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'quote', subtitle: 'attribution'},
    prepare({title, subtitle}) {
      return {title: title ? `"${title}"` : 'Quote', subtitle}
    },
  },
})
