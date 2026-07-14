import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {defineDocuments, presentationTool} from 'sanity/presentation'
import {singletonTypes, structure} from './structure'
import {CMS_PAGE_SCHEMA_TYPE_NAMES} from './schemaTypes/cmsPageType'
import {BLOG_POST_TYPE_NAME} from './schemaTypes/blogPostType'

declare const process: {
  env: {
    SANITY_STUDIO_PREVIEW_ORIGIN?: string
  }
}

const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://localhost:3000'
const allowOrigins = Array.from(new Set(['http://localhost:*', previewOrigin]))
const cmsPageTypeFilter = `[
  ${CMS_PAGE_SCHEMA_TYPE_NAMES.map((type) => `"${type}"`).join(', ')}
]`
const cmsPageFilter = (id: string) => `_id == "${id}" && _type in ${cmsPageTypeFilter}`
const mainDocuments = defineDocuments([
  {
    route: '/',
    filter: cmsPageFilter('landingPage'),
  },
  {
    route: '/AboutImpact',
    filter: cmsPageFilter('aboutImpactPage'),
  },
  {
    route: ['/Resources', '/resources'],
    filter: cmsPageFilter('resources'),
  },
  {
    route: '/Resources/AbuseSurvivors',
    filter: cmsPageFilter('abuseSurvivorsPage'),
  },
  {
    route: '/BoardAndStaff',
    filter: cmsPageFilter('boardAndStaff'),
  },
  {
    route: '/Blog',
    filter: cmsPageFilter('blog'),
  },
  {
    route: '/Blog/:slug',
    resolve: ({params}) => ({
      filter: `_type == "${BLOG_POST_TYPE_NAME}" && slug.current == $slug`,
      params: {slug: params.slug},
    }),
  },
  {
    route: '/Accessibility',
    filter: cmsPageFilter('accessibility'),
  },
  {
    route: '/PublicClasses',
    filter: cmsPageFilter('publicClassesPage'),
  },
  {
    route: '/PeopleWithDisabilities',
    filter: cmsPageFilter('disabilitiesPage'),
  },
  {
    route: '/PeopleWithDisabilities/Ability',
    filter: cmsPageFilter('abilityPage'),
  },
  {
    route: '/PeopleWithDisabilities/ASAP',
    filter: cmsPageFilter('ASAPPage'),
  },
  {
    route: '/PeopleWithDisabilities/AbusePrevention',
    filter: cmsPageFilter('AbusePreventionPage'),
  },
  {
    route: '/SchoolsAndColleges',
    filter: `_id == "schoolsAndCollegesPage" && _type == "schoolsAndCollegesPage"`,
  },
])

export default defineConfig({
  name: 'default',
  title: 'Impact Boston',

  projectId: 'ddrwhofx',
  dataset: 'production',

  plugins: [
    structureTool({structure}),

    presentationTool({
      previewUrl: {
        initial: previewOrigin,
        preview: '/',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      allowOrigins,
      resolve: {
        mainDocuments,
        locations: {
          [BLOG_POST_TYPE_NAME]: {
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: (value) =>
              value?.slug
                ? {
                    locations: [
                      {
                        title: value.title || 'Blog Post',
                        href: `/Blog/${value.slug}`,
                      },
                    ],
                  }
                : null,
          },
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter((template) => !singletonTypes.has(template.schemaType)),
  },

  document: {
    actions: (actions, context) =>
      singletonTypes.has(context.schemaType)
        ? actions.filter(
            (action) =>
              action.action === 'publish' ||
              action.action === 'discardChanges' ||
              action.action === 'restore',
          )
        : actions,
  },
})
