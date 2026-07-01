import {defineType} from 'sanity'

import {definePageBlocksField} from './pageBlocksField'

export const schoolsAndCollegesPageType = defineType({
  name: 'schoolsAndCollegesPage',
  title: 'Schools & Colleges Page',
  type: 'document',
  fields: [definePageBlocksField()],

  preview: {
    prepare() {
      return {title: 'Schools & Colleges Page'}
    },
  },
})
