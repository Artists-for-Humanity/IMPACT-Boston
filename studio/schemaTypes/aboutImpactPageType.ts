import {defineType} from 'sanity'

import {definePageBlocksField} from './pageBlocksField'

export const aboutImpactPageType = defineType({
  name: 'aboutImpactPage',
  title: 'About Impact Page',
  type: 'document',
  fields: [definePageBlocksField()],

  preview: {
    prepare() {
      return {title: 'About Impact Page'}
    },
  },
})
