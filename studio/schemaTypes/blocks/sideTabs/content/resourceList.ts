import {defineArrayMember, defineField} from 'sanity'

export const resourceListContent = defineArrayMember({
  name: 'resourceList',
  title: 'Resource List',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'previewCount',
      title: 'Preview Count',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          name: 'resourceListItem',
          title: 'Resource',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Title Link',
              type: 'string',
            }),
            defineField({
              name: 'detail',
              title: 'Detail',
              type: 'string',
            }),
            defineField({
              name: 'detailHref',
              title: 'Detail Link',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'expandedDescription',
              title: 'Expanded Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'meta',
              title: 'Meta Lines',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'External Link', value: 'external'},
                  {title: 'Chevron', value: 'chevron'},
                ],
                layout: 'radio',
              },
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'detail'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'eyebrow'},
    prepare({title}) {
      return {title: title || 'Resource List'}
    },
  },
})
