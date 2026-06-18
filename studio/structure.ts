import type {StructureResolver} from 'sanity/structure'

export const singletonTypes = new Set([
  'aboutImpactPage',
  'abuseSurvivorsPage',
  'landingPage',
  'publicClassesPage',
  'resourcesPage',
])

const aboutPages = [
  {
    title: 'About Impact',
    id: 'aboutImpactPage',
    schemaType: 'aboutImpactPage',
  },
  {
    title: 'Board and Staff',
    id: 'boardAndStaff',
    schemaType: 'landingPage',
  },
  {
    title: 'Resources',
    id: 'resources',
    schemaType: 'resourcesPage',
  },
  {
    title: 'Abuse Survivors',
    id: 'abuseSurvivorsPage',
    schemaType: 'abuseSurvivorsPage',
  },
  {
    title: 'Blog',
    id: 'blog',
    schemaType: 'landingPage',
  },
  {
    title: 'Accessibility',
    id: 'accessibility',
    schemaType: 'landingPage',
  },
]

const programsPages = [
  {
    title: 'Public Classes',
    id: 'publicClassesPage',
    schemaType: 'publicClassesPage',
  },
] 

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing Page')
        .id('landingPage')
        .schemaType('landingPage')
        .child(
          S.document().title('Landing Page').schemaType('landingPage').documentId('landingPage'),
        ),
      S.listItem()
        .title('About Pages')
        .id('aboutPages')
        .child(
          S.list()
            .title('About Pages')
            .items(
              aboutPages.map((page) =>
                S.listItem()
                  .title(page.title)
                  .id(page.id)
                  .schemaType(page.schemaType)
                  .child(
                    S.document().title(page.title).schemaType(page.schemaType).documentId(page.id),
                  ),
              ),
            ),
        ),
        S.listItem()
        .title('Programs Pages')
        .id('programPages')
        .child(
          S.list()
            .title('Programs Pages')
            .items(
              programsPages.map((page) =>
                S.listItem()
                  .title(page.title)
                  .id(page.id)
                  .schemaType(page.schemaType)
                  .child(
                    S.document().title(page.title).schemaType(page.schemaType).documentId(page.id),
                  ),
              ),
            ),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() ?? ''),
      ),
    ])
