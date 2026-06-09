import {defineField, defineType} from 'sanity'

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
        {type: 'heroBlock'},
        {type: 'actionPanelBlock'},
        {type: 'sideTabsBlock'},
        {type: 'highlightsBlock'},
        {type: 'testimonialsBlock'},
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
