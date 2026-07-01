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

export const CMS_PAGE_SCHEMA_TYPE_NAMES = [CMS_PAGE_TYPE_NAME, ...LEGACY_CMS_PAGE_TYPE_NAMES]

export const CMS_PAGE_TITLES: Record<string, string> = {
  AbusePreventionPage: 'Abuse Prevention',
  ASAPPage: 'ASAP',
  aboutImpactPage: 'About Impact',
  abuseSurvivorsPage: 'Abuse Survivors',
  accessibility: 'Accessibility',
  abilityPage: 'Ability',
  blog: 'Blog',
  boardAndStaff: 'Board and Staff',
  booksByMegStone: 'Books by Meg Stone',
  communityOrganizations: 'Community Organizations',
  deEscalation: 'De-escalation',
  disabilitiesPage: 'People with Disabilities',
  empowerment: 'Empowerment Self-Defense',
  factCheckFriday: 'Fact Check Friday',
  healthyRelationships: 'Healthy Relationships',
  knowYourRights: 'Know Your Rights',
  landingPage: 'Home',
  press: 'Press',
  publicClassesPage: 'Public Classes',
  resources: 'Resources',
  resourcesPage: 'Resources',
  schoolsAndColleges: 'Schools & Colleges',
  workplacePrograms: 'Workplace Programs',
}

export function getCmsPageTitle(id?: string | null) {
  const cleanId = id?.replace(/^drafts\./, '') ?? ''

  if (!cleanId) {
    return 'New CMS Content'
  }

  if (CMS_PAGE_TITLES[cleanId]) {
    return CMS_PAGE_TITLES[cleanId]
  }

  return cleanId
    .replace(/Page$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .trim()
}

function defineCmsPageType(name: string, title = 'CMS Content') {
  return defineType({
    name,
    title,
    type: 'document',
    fields: [definePageBlocksField()],

    preview: {
      select: {id: '_id'},
      prepare({id}) {
        return {title: getCmsPageTitle(id as string | undefined)}
      },
    },
  })
}

export const cmsPageType = defineCmsPageType(CMS_PAGE_TYPE_NAME)

export const legacyCmsPageTypes = LEGACY_CMS_PAGE_TYPE_NAMES.map((name) =>
  defineCmsPageType(name, 'Legacy CMS Content'),
)
