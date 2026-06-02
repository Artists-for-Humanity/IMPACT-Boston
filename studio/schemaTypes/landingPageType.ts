import {defineField, defineType} from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      title: 'Page Sections',
      description: 'Add and reorder homepage components here.',
      type: 'array',
      of: [
        {type: 'homeHeroSection'},
        {type: 'homeActionPanelSection'},
        {type: 'homeSideTabsSection'},
        {type: 'homeHighlightsSection'},
        {type: 'homeTestimonialsSection'},
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Landing Page'}
    },
  },
})
