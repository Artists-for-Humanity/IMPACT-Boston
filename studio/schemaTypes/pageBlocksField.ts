import {defineArrayMember, defineField} from 'sanity'

import {BLOCK_DEFAULT_COPY, defaultInternalLinkTarget} from './blocks/blockDefaults'
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
        initialValue: {
          headlineParts: [{text: BLOCK_DEFAULT_COPY.title, color: 'black'}],
          body: BLOCK_DEFAULT_COPY.body,
          ctaText: BLOCK_DEFAULT_COPY.ctaText,
          ctaLinkTarget: {...defaultInternalLinkTarget},
          imageAlt: BLOCK_DEFAULT_COPY.imageAlt,
        },
      }),
      defineArrayMember({
        type: 'heroBlock',
        name: 'hero2Block',
        title: 'Hero 2',
        description: 'Uses the Hero2 component from components/Hero.',
        initialValue: {
          headlineParts: [{text: BLOCK_DEFAULT_COPY.title, color: 'black'}],
          description: BLOCK_DEFAULT_COPY.body,
          supportingText: BLOCK_DEFAULT_COPY.subtitle,
          hideMedia: true,
        },
      }),
      defineArrayMember({type: 'hero3Block'}),
      defineArrayMember({type: 'articleCalloutBlock'}),
      defineArrayMember({type: 'contentBlock'}),
      defineArrayMember({type: 'doubleContentBlock'}),
      defineArrayMember({type: 'actionPanelBlock'}),
      defineArrayMember({type: 'ctaSectionBlock'}),
      defineArrayMember({type: 'sideTabsBlock'}),
      defineArrayMember({type: 'listBlock'}),
      defineArrayMember({type: 'classDescriptionsBlock'}),
      defineArrayMember({type: 'tripleContentBlock'}),
      defineArrayMember({type: 'imageGridBlock'}),
      defineArrayMember({type: 'mediaGridBlock'}),
      defineArrayMember({type: 'highlightBannerBlock'}),
      defineArrayMember({type: 'highlightsBlock'}),
      defineArrayMember({
        type: 'testimonialsBlock',
        name: 'testimonialsCarouselBlock',
        title: 'Testimonials: Carousel',
        description: 'Sliding quote cards for several testimonials.',
        initialValue: {
          heading: BLOCK_DEFAULT_COPY.title,
          subtext: BLOCK_DEFAULT_COPY.subtitle,
          backgroundColor: '#faf6fd',
          showAuthors: true,
          authorPrefix: '- ',
          testimonials: [
            {
              quote: BLOCK_DEFAULT_COPY.quote,
              author: BLOCK_DEFAULT_COPY.author,
              authorTitle: BLOCK_DEFAULT_COPY.authorTitle,
            },
            {
              quote: BLOCK_DEFAULT_COPY.quote,
              author: BLOCK_DEFAULT_COPY.author,
              authorTitle: BLOCK_DEFAULT_COPY.authorTitle,
            },
            {
              quote: BLOCK_DEFAULT_COPY.quote,
              author: BLOCK_DEFAULT_COPY.author,
              authorTitle: BLOCK_DEFAULT_COPY.authorTitle,
            },
          ],
        },
      }),
      defineArrayMember({
        type: 'testimonialsBlock',
        name: 'testimonialsSpotlightBlock',
        title: 'Testimonials: Participant Spotlight',
        description: 'One large featured participant quote with supporting attribution.',
        initialValue: {
          heading: BLOCK_DEFAULT_COPY.title,
          subtext: BLOCK_DEFAULT_COPY.subtitle,
          spotlightQuote: BLOCK_DEFAULT_COPY.quote,
          spotlightAuthor: BLOCK_DEFAULT_COPY.author,
          spotlightAuthorTitle: BLOCK_DEFAULT_COPY.authorTitle,
        },
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
            of: ['hero1Block', 'hero2Block', 'hero3Block'],
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
              'doubleContentBlock',
              'actionPanelBlock',
              'sideTabsBlock',
              'tripleContentBlock',
              'imageGridBlock',
              'mediaGridBlock',
            ],
          },
          {
            name: 'list',
            title: 'List',
            of: ['listBlock', 'classDescriptionsBlock'],
          },
          {
            name: 'testimonials',
            title: 'Testimonials',
            of: ['testimonialsCarouselBlock', 'testimonialsSpotlightBlock'],
          },
          {
            name: 'highlights',
            title: 'Highlights',
            of: ['highlightBannerBlock', 'highlightsBlock', 'articleCalloutBlock'],
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
