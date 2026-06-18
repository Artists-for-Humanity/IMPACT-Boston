import {defineType} from 'sanity'

import {definePageBlocksField} from './pageBlocksField'

export const publicClassesPageType = defineType({
  name: 'publicClassesPage',
  title: 'Public Classes Page',
  type: 'document',
  fields: [definePageBlocksField()],

  preview: {
    prepare() {
      return {title: 'Public Classes Page'}
    },
  },
})
