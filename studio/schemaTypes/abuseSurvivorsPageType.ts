import {defineType} from 'sanity'

import {definePageBlocksField} from './pageBlocksField'

export const abuseSurvivorsPageType = defineType({
  name: 'abuseSurvivorsPage',
  title: 'Abuse Survivors Page',
  type: 'document',
  fields: [definePageBlocksField()],

  preview: {
    prepare() {
      return {title: 'Abuse Survivors Page'}
    },
  },
})
