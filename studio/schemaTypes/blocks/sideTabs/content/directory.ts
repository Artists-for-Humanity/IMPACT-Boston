import {defineArrayMember, defineField} from 'sanity'

export const directoryContent = defineArrayMember({
  name: 'directory',
  title: 'Directory',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'previewCount',
      title: 'Preview Count',
      description: 'Number of items to show before "Show More" is displayed. Leave blank to show all.',
      type: 'number',
      initialValue: 10,
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          name: 'directoryItem',
          title: 'Directory Item',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'detail',
              title: 'Detail',
              type: 'string',
              description: 'e.g. title, phone, or other secondary info',
            }),
          ],
          preview: {
            select: {title: 'name', subtitle: 'detail'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'Directory'}
    },
  },
})
