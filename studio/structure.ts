import type {StructureResolver} from 'sanity/structure'

import {
  CMS_PAGE_SCHEMA_TYPE_NAMES,
  CMS_PAGE_TYPE_NAME,
  getCmsPageTitle,
} from './schemaTypes/cmsPageType'

type CmsPageListItem = {
  id: string
  title: string
}

export const singletonTypes = new Set(CMS_PAGE_SCHEMA_TYPE_NAMES)

const aboutPages: CmsPageListItem[] = [
  {
    title: getCmsPageTitle('aboutImpactPage'),
    id: 'aboutImpactPage',
  },
  {
    title: getCmsPageTitle('boardAndStaff'),
    id: 'boardAndStaff',
  },
  {
    title: getCmsPageTitle('resources'),
    id: 'resources',
  },
  {
    title: getCmsPageTitle('abuseSurvivorsPage'),
    id: 'abuseSurvivorsPage',
  },
  {
    title: getCmsPageTitle('blog'),
    id: 'blog',
  },
  {
    title: getCmsPageTitle('accessibility'),
    id: 'accessibility',
  },
]

const programsPages: CmsPageListItem[] = [
  {
    title: getCmsPageTitle('publicClassesPage'),
    id: 'publicClassesPage',
  },
  {
    title: getCmsPageTitle('schoolsAndColleges'),
    id: 'schoolsAndColleges',
  },
  {
    title: getCmsPageTitle('disabilitiesPage'),
    id: 'disabilitiesPage',
  },
  {
    title: getCmsPageTitle('abilityPage'),
    id: 'abilityPage',
  },
  {
    title: getCmsPageTitle('ASAPPage'),
    id: 'ASAPPage',
  },
  {
    title: getCmsPageTitle('AbusePreventionPage'),
    id: 'AbusePreventionPage',
  },
  {
    title: getCmsPageTitle('deEscalation'),
    id: 'deEscalation',
  },
  {
    title: getCmsPageTitle('communityOrganizations'),
    id: 'communityOrganizations',
  },
  {
    title: getCmsPageTitle('workplacePrograms'),
    id: 'workplacePrograms',
  },
  {
    title: getCmsPageTitle('knowYourRights'),
    id: 'knowYourRights',
  },
  {
    title: getCmsPageTitle('healthyRelationships'),
    id: 'healthyRelationships',
  },
]

const learnMorePages: CmsPageListItem[] = [
  {
    title: getCmsPageTitle('factCheckFriday'),
    id: 'factCheckFriday',
  },
  {
    title: getCmsPageTitle('booksByMegStone'),
    id: 'booksByMegStone',
  },
  {
    title: getCmsPageTitle('press'),
    id: 'press',
  },
  {
    title: getCmsPageTitle('empowerment'),
    id: 'empowerment',
  },
]

function cmsPageListItem(S: Parameters<StructureResolver>[0], page: CmsPageListItem) {
  return S.listItem()
    .title(page.title)
    .id(page.id)
    .schemaType(CMS_PAGE_TYPE_NAME)
    .child(S.document().title(page.title).schemaType(CMS_PAGE_TYPE_NAME).documentId(page.id))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title(getCmsPageTitle('landingPage'))
        .id('landingPage')
        .schemaType(CMS_PAGE_TYPE_NAME)
        .child(
          S.document()
            .title(getCmsPageTitle('landingPage'))
            .schemaType(CMS_PAGE_TYPE_NAME)
            .documentId('landingPage'),
        ),
      S.listItem()
        .title('About')
        .id('aboutPages')
        .child(
          S.list()
            .title('About')
            .items(aboutPages.map((page) => cmsPageListItem(S, page))),
        ),
      S.listItem()
        .title('Programs')
        .id('programPages')
        .child(
          S.list()
            .title('Programs')
            .items(programsPages.map((page) => cmsPageListItem(S, page))),
        ),
      S.listItem()
        .title('Learn More')
        .id('learnMorePages')
        .child(
          S.list()
            .title('Learn More')
            .items(learnMorePages.map((page) => cmsPageListItem(S, page))),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() ?? ''),
      ),
    ])
