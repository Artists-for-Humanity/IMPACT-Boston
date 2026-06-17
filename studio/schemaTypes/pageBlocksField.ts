import {defineArrayMember, defineField} from 'sanity'

import {blockPreviewImageUrls} from './blocks/blockPreviews'

export function definePageBlocksField() {
  return defineField({
    name: 'sections',
    title: 'Page Blocks',
    description: 'Add and reorder page blocks here.',
    type: 'array',
    of: [
      defineArrayMember({
        type: 'heroBlock',
        name: 'hero1Block',
        title: 'Hero 1',
        description: 'Uses the Hero1 component from components/Hero.',
      }),
      defineArrayMember({
        type: 'heroBlock',
        name: 'hero2Block',
        title: 'Hero 2',
        description: 'Uses the Hero2 component from components/Hero.',
      }),
      defineArrayMember({type: 'contentBlock'}),
      defineArrayMember({type: 'singleContentBlock'}),
      defineArrayMember({type: 'doubleContentBlock'}),
      defineArrayMember({type: 'tripleContentBlock'}),
      defineArrayMember({type: 'listBlock'}),
      defineArrayMember({type: 'actionPanelBlock'}),
      defineArrayMember({type: 'ctaSectionBlock'}),
      defineArrayMember({type: 'sideTabsBlock'}),
      defineArrayMember({type: 'highlightsBlock'}),
      defineArrayMember({
        type: 'testimonialsBlock',
        name: 'testimonialsCarouselBlock',
        title: 'Testimonials: Carousel',
        description: 'Sliding quote cards for several testimonials.',
      }),
      defineArrayMember({
        type: 'testimonialsBlock',
        name: 'testimonialsSpotlightBlock',
        title: 'Testimonials: Participant Spotlight',
        description: 'One large featured participant quote with supporting attribution.',
      }),
    ],
    options: {
      insertMenu: {
        filter: true,
        showIcons: false,
        groups: [
          {
            name: 'heroes',
            title: 'Hero',
            of: ['hero1Block', 'hero2Block'],
          },
          {
            name: 'action',
            title: 'Action',
            of: ['actionPanelBlock', 'ctaSectionBlock'],
          },
          {
            name: 'content',
            title: 'Content',
            of: [
              'contentBlock',
              'singleContentBlock',
              'doubleContentBlock',
              'tripleContentBlock',
              'listBlock',
              'sideTabsBlock',
              'highlightsBlock',
            ],
          },
          {
            name: 'testimonials',
            title: 'Testimonials',
            of: ['testimonialsCarouselBlock', 'testimonialsSpotlightBlock'],
          },
          {
            name: 'highlights',
            title: 'Highlights',
            of: ['highlightsBlock'],
          },
        ],
        views: [
          {
            name: 'grid',
            previewImageUrl: (schemaTypeName) => blockPreviewImageUrls[schemaTypeName],
          },
          {name: 'list'},
        ],
      },
    },
    validation: (rule) => rule.required().min(1),
  })
}
