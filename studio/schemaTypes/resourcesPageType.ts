import {defineType} from 'sanity'

import {definePageBlocksField} from './pageBlocksField'

export const resourcesPageType = defineType({
  name: 'resourcesPage',
  title: 'Resources Page',
  type: 'document',
  fields: [definePageBlocksField()],

  preview: {
    prepare() {
      return {title: 'Resources Page'}
    },
  },
})
