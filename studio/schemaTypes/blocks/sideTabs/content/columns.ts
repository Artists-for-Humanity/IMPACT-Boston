import {defineArrayMember, defineField} from 'sanity'

export const columnsContent = defineArrayMember({
  name: 'columns',
  title: 'Columns',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Columns',
      type: 'array',
      validation: (rule) => rule.required().min(1).max(2),
      of: [
        {
          name: 'column',
          title: 'Column',
          type: 'object',
          fields: [
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [{type: 'string'}],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            prepare() {
              return {title: 'Column'}
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Columns'}
    },
  },
})
