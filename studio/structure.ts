import type {StructureResolver} from 'sanity/structure'

export const singletonTypes = new Set(['landingPage'])

const aboutPages = [
  {
    title: 'About Impact',
    id: 'aboutImpact',
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
    title: 'Blog',
    id: 'blog',
  },
  {
    title: 'Accessibility',
    id: 'accessibility',
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
                  .schemaType('landingPage')
                  .child(
                    S.document()
                      .title(page.title)
                      .schemaType('landingPage')
                      .documentId(page.id),
                  ),
              ),
            ),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() ?? ''),
      ),
    ])
