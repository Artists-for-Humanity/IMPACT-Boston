import type {StructureResolver} from 'sanity/structure'

export const singletonTypes = new Set(['landingPage'])

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
        .title('Other Landing Pages')
        .id('otherLandingPages')
        .schemaType('landingPage')
        .child(
          S.documentList()
            .title('Other Landing Pages')
            .schemaType('landingPage')
            .filter('_type == "landingPage" && !(_id in ["landingPage", "drafts.landingPage"])'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() ?? ''),
      ),
    ])
