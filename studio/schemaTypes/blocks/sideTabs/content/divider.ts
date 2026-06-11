import {defineArrayMember, defineField} from 'sanity'

import {DividerEditorPreview} from '../editorPreviews'

export const dividerContent = defineArrayMember({
  name: 'divider',
  title: 'Divider',
  type: 'object',
  readOnly: true,
  components: {
    block: DividerEditorPreview,
  },
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      initialValue: 'Divider',
      hidden: true,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Divider'}
    },
  },
})
