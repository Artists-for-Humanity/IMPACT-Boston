import {defineArrayMember, defineField} from 'sanity'

import {defineLinkTargetField} from '../../../linkTarget'
import {trainerSortOptions, usStateOptions} from '../options'

export const trainerListContent = defineArrayMember({
  name: 'trainerList',
  title: 'Trainer List',
  type: 'object',
  fields: [
    defineField({
      name: 'state',
      title: 'Default State',
      type: 'string',
      initialValue: 'Massachusetts',
      options: {list: usStateOptions},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sortLabel',
      title: 'Default Sort',
      type: 'string',
      initialValue: 'Alphabetically',
      options: {list: trainerSortOptions},
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
      title: 'Trainers',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          name: 'trainerListItem',
          title: 'Trainer',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'organization',
              title: 'Organization',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'state',
              title: 'State',
              type: 'string',
              options: {list: usStateOptions},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'contact',
              title: 'Contact',
              type: 'string',
            }),
            defineField({
              name: 'contactHref',
              title: 'Contact Link',
              type: 'string',
              hidden: true,
            }),
            defineLinkTargetField({name: 'contactLinkTarget', title: 'Contact Link'}),
          ],
          preview: {
            select: {title: 'name', subtitle: 'organization'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'state'},
    prepare({title}) {
      return {title: title ? `Trainer List: ${title}` : 'Trainer List'}
    },
  },
})
