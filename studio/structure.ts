import type {StructureResolver} from 'sanity/structure'

import {
  CMS_PAGE_SCHEMA_TYPE_NAMES,
  CMS_PAGE_TYPE_NAME,
  getCmsPageTitle,
} from './schemaTypes/cmsPageType'
import {BLOG_POST_TYPE_NAME} from './schemaTypes/blogPostType'

type CmsPageListItem = {
  id: string
  title: string
  schemaType?: string
}

export const singletonTypes = new Set([...CMS_PAGE_SCHEMA_TYPE_NAMES, 'schoolsAndCollegesPage'])
const hiddenDocumentTypes = new Set([...singletonTypes, BLOG_POST_TYPE_NAME])

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
    id: 'schoolsAndCollegesPage',
    schemaType: 'schoolsAndCollegesPage',
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

const disabilitiesSubPages: CmsPageListItem[] = [
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
  const schemaType = page.schemaType ?? CMS_PAGE_TYPE_NAME
  return S.listItem()
    .title(page.title)
    .id(page.id)
    .schemaType(schemaType)
    .child(S.document().title(page.title).schemaType(schemaType).documentId(page.id))
}

function blogFolderListItem(S: Parameters<StructureResolver>[0]) {
  return S.listItem()
    .title('Blog')
    .id('blogFolder')
    .child(
      S.list()
        .title('Blog')
        .items([
          cmsPageListItem(S, {
            title: 'Landing Page',
            id: 'blog',
          }),
          S.listItem()
            .title('Blog Posts')
            .id('blogPosts')
            .schemaType(BLOG_POST_TYPE_NAME)
            .child(
              S.documentTypeList(BLOG_POST_TYPE_NAME)
                .title('Blog Posts')
                .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
            ),
        ]),
    )
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
            .items([
              ...aboutPages.slice(0, 4).map((page) => cmsPageListItem(S, page)),
              blogFolderListItem(S),
              ...aboutPages.slice(4).map((page) => cmsPageListItem(S, page)),
            ]),
        ),
      S.listItem()
        .title('Programs')
        .id('programPages')
        .child(
          S.list()
            .title('Programs')
            .items([
              ...programsPages.map((page) => cmsPageListItem(S, page)),
              S.listItem()
                .title('People with Disabilities')
                .id('disabilitiesFolder')
                .child(
                  S.list()
                    .title('People with Disabilities')
                    .items(disabilitiesSubPages.map((page) => cmsPageListItem(S, page))),
                ),
            ]),
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
        (listItem) => !hiddenDocumentTypes.has(listItem.getId() ?? ''),
      ),
    ])
