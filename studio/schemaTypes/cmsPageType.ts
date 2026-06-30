import {defineType} from 'sanity'

import {definePageBlocksField} from './pageBlocksField'

export const CMS_PAGE_TYPE_NAME = 'cmsPage'

export const LEGACY_CMS_PAGE_TYPE_NAMES = [
  'aboutImpactPage',
  'abuseSurvivorsPage',
  'disabilitiesPage',
  'landingPage',
  'publicClassesPage',
  'resourcesPage',
]

export const CMS_PAGE_SCHEMA_TYPE_NAMES = [
  CMS_PAGE_TYPE_NAME,
  ...LEGACY_CMS_PAGE_TYPE_NAMES,
]

const PAGE_TITLES: Record<string, string> = {
  aboutImpactPage: 'About Impact',
  abuseSurvivorsPage: 'Abuse Survivors',
  accessibility: 'Accessibility',
  blog: 'Blog',
  boardAndStaff: 'Board & Staff',
  disabilitiesPage: 'People With Disabilities',
  landingPage: 'Landing Page',
  publicClassesPage: 'Public Classes',
  resources: 'Resources',
}

function defineCmsPageType(name: string, title = 'CMS Page') {
  return defineType({
    name,
    title,
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
}

export const cmsPageType = defineCmsPageType(CMS_PAGE_TYPE_NAME)

export const legacyCmsPageTypes = LEGACY_CMS_PAGE_TYPE_NAMES.map((name) =>
  defineCmsPageType(name, 'Legacy CMS Page'),
)
