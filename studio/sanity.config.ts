import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {defineDocuments, presentationTool} from 'sanity/presentation'
import {singletonTypes, structure} from './structure'

declare const process: {
  env: {
    SANITY_STUDIO_PREVIEW_ORIGIN?: string
  }
}

const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://localhost:3000'
const allowOrigins = Array.from(new Set(['http://localhost:*', previewOrigin]))
const mainDocuments = defineDocuments([
  {
    route: '/',
    filter: `_id == "landingPage"`,
  },
])

export default defineConfig({
  name: 'default',
  title: 'Impact Boston',

  projectId: 'ddrwhofx',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
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
      },
    }),
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
