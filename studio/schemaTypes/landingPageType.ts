import {defineType} from 'sanity'

import {definePageBlocksField} from './pageBlocksField'

const PAGE_TITLES: Record<string, string> = {
  landingPage: 'Landing Page',
  boardAndStaff: 'Board & Staff',
  blog: 'Blog',
  accessibility: 'Accessibility',
}

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Page',
  type: 'document',
  fields: [definePageBlocksField()],

  preview: {
    select: {id: '_id'},
    prepare({id}) {
      const cleanId = (id as string)?.replace(/^drafts\./, '') ?? ''
      return {title: PAGE_TITLES[cleanId] ?? cleanId}
    },
  },
})
