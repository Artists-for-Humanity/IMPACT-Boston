import {defineType} from 'sanity'

import {definePageBlocksField} from './pageBlocksField'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [definePageBlocksField()],

  preview: {
    prepare() {
      return {title: 'Landing Page'}
    },
  },
})
