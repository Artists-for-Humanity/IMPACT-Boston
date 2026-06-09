import {defineArrayMember, defineField, defineType} from 'sanity'

const blockPreviewImageUrls: Record<string, string> = {
  hero1Block: '/static/block-previews/hero-1.svg',
  hero2Block: '/static/block-previews/hero-2.svg',
  actionPanelBlock: '/static/block-previews/action-panel.svg',
  sideTabsBlock: '/static/block-previews/side-tabs.svg',
  highlightsBlock: '/static/block-previews/highlights.svg',
  testimonialsCarouselBlock: '/static/block-previews/testimonials-carousel.svg',
  testimonialsSpotlightBlock: '/static/block-previews/testimonials-spotlight.svg',
  testimonialsGridBlock: '/static/block-previews/testimonials-grid.svg',
}

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
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
          initialValue: {variant: 'hero1'},
        }),
        defineArrayMember({
          type: 'heroBlock',
          name: 'hero2Block',
          title: 'Hero 2',
          description: 'Uses the Hero2 component from components/Hero.',
          initialValue: {variant: 'hero2'},
        }),
        defineArrayMember({type: 'actionPanelBlock'}),
        defineArrayMember({type: 'sideTabsBlock'}),
        defineArrayMember({type: 'highlightsBlock'}),
        defineArrayMember({
          type: 'testimonialsBlock',
          name: 'testimonialsCarouselBlock',
          title: 'Testimonials: Carousel',
          description: 'Sliding quote cards for several testimonials.',
          initialValue: {variant: 'carousel'},
        }),
        defineArrayMember({
          type: 'testimonialsBlock',
          name: 'testimonialsSpotlightBlock',
          title: 'Testimonials: Spotlight',
          description: 'One large featured quote with supporting attribution.',
          initialValue: {variant: 'spotlight'},
        }),
        defineArrayMember({
          type: 'testimonialsBlock',
          name: 'testimonialsGridBlock',
          title: 'Testimonials: Grid',
          description: 'A simple multi-quote grid for quick scanning.',
          initialValue: {variant: 'grid'},
        }),
      ],
      options: {
        insertMenu: {
          filter: true,
          showIcons: false,
          groups: [
            {
              name: 'heroes',
              title: 'Heroes',
              of: ['hero1Block', 'hero2Block'],
            },
            {
              name: 'content',
              title: 'Content',
              of: ['actionPanelBlock', 'sideTabsBlock', 'highlightsBlock'],
            },
            {
              name: 'testimonials',
              title: 'Testimonials',
              of: [
                'testimonialsCarouselBlock',
                'testimonialsSpotlightBlock',
                'testimonialsGridBlock',
              ],
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
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Landing Page'}
    },
  },
})
