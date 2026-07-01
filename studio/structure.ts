import type {StructureResolver} from 'sanity/structure'

import {CMS_PAGE_SCHEMA_TYPE_NAMES, CMS_PAGE_TYPE_NAME} from './schemaTypes/cmsPageType'

type CmsPageListItem = {
  id: string
  title: string
}

export const singletonTypes = new Set(CMS_PAGE_SCHEMA_TYPE_NAMES)

const aboutPages: CmsPageListItem[] = [
  {
    title: 'About Impact',
    id: 'aboutImpactPage',
  },
  {
    title: 'Board and Staff',
    id: 'boardAndStaff',
  },
  {
    title: 'Resources',
    id: 'resources',
  },
  {
    title: 'Abuse Survivors',
    id: 'abuseSurvivorsPage',
  },
  {
    title: 'Blog',
    id: 'blog',
  },
  {
    title: 'Accessibility',
    id: 'accessibility',
  },
]

const programsPages: CmsPageListItem[] = [
  {
    title: 'Public Classes',
    id: 'publicClassesPage',
  },
  {
    title: 'People with Disabilities',
    id: 'disabilitiesPage',
  },
  {
    title: 'Ability',
    id: 'abilityPage',
  },
  {
    title: 'ASAP',
    id: 'ASAPPage',
  },
  {
    title: 'Abuse Prevention',
    id: 'AbusePreventionPage',
  },
]

function cmsPageListItem(
  S: Parameters<StructureResolver>[0],
  page: CmsPageListItem,
) {
  return S.listItem()
    .title(page.title)
    .id(page.id)
    .schemaType(CMS_PAGE_TYPE_NAME)
    .child(
      S.document()
        .title(page.title)
        .schemaType(CMS_PAGE_TYPE_NAME)
        .documentId(page.id),
    )
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing Page')
        .id('landingPage')
        .schemaType(CMS_PAGE_TYPE_NAME)
        .child(
          S.document()
            .title('Landing Page')
            .schemaType(CMS_PAGE_TYPE_NAME)
            .documentId('landingPage'),
        ),
      S.listItem()
        .title('About Pages')
        .id('aboutPages')
        .child(
          S.list()
            .title('About Pages')
            .items(aboutPages.map((page) => cmsPageListItem(S, page))),
        ),
      S.listItem()
        .title('Programs Pages')
        .id('programPages')
        .child(
          S.list()
            .title('Programs Pages')
            .items(programsPages.map((page) => cmsPageListItem(S, page))),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() ?? ''),
      ),
    ])
