import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {previewAction} from './plugins/previewAction'

export default defineConfig({
  name: 'default',
  title: 'Impact Boston',

  projectId: 'ddrwhofx',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      // Only add preview action for post documents
      if (context.schemaType === 'post') {
        return [...prev, previewAction]
      }
      return prev
    },
  },
})
