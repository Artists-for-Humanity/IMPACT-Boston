import {defineField, defineType, type FieldDefinition} from 'sanity'
import {LinkTargetInput} from '../components/LinkTargetInput'
import {internalPageOptions, linkTypeOptions} from './linkTargetOptions'

type LinkTargetFieldOptions = {
  description?: string
  hidden?: FieldDefinition<'object'>['hidden']
  name?: string
  required?: boolean
  title?: string
  validation?: FieldDefinition<'object'>['validation']
}

const isType = (parent: unknown, type: string) =>
  typeof parent === 'object' &&
  parent !== null &&
  'type' in parent &&
  (parent as {type?: string}).type === type

export const linkTargetType = defineType({
  name: 'linkTarget',
  title: 'Link',
  type: 'object',
  components: {
    input: LinkTargetInput,
  },
  fields: [
    defineField({
      name: 'type',
      title: 'Link Type',
      type: 'string',
      initialValue: 'url',
      options: {
        list: [...linkTypeOptions],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      hidden: ({parent}) => !isType(parent, 'url'),
    }),
    defineField({
      name: 'internalPath',
      title: 'Internal Page',
      type: 'string',
      hidden: ({parent}) => !isType(parent, 'internal'),
      options: {
        list: internalPageOptions,
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      hidden: ({parent}) => !isType(parent, 'email'),
      validation: (rule) =>
        rule.custom((value, context) => {
          if (!isType(context.parent, 'email') || !value) return true
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : 'Enter a valid email address.'
        }),
    }),
    defineField({
      name: 'file',
      title: 'Asset',
      type: 'file',
      description: 'Upload or drag in a PDF, document, or other downloadable file.',
      hidden: ({parent}) => !isType(parent, 'asset'),
      options: {
        accept: '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.csv,.zip',
      },
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: true,
      hidden: ({parent}) => isType(parent, 'internal') || isType(parent, 'email'),
    }),
  ],
  initialValue: {
    type: 'url',
    openInNewTab: true,
  },
  preview: {
    select: {
      type: 'type',
      url: 'url',
      internalPath: 'internalPath',
      email: 'email',
      fileName: 'file.asset.originalFilename',
    },
    prepare({type, url, internalPath, email, fileName}) {
      const subtitle =
        type === 'internal'
          ? internalPath
          : type === 'email'
            ? email
            : type === 'asset'
              ? fileName
              : url

      return {
        title: linkTypeOptions.find((option) => option.value === type)?.title || 'Link',
        subtitle,
      }
    },
  },
})

export function defineLinkTargetField({
  description,
  hidden,
  name = 'linkTarget',
  required = false,
  title = 'Link',
  validation,
}: LinkTargetFieldOptions = {}) {
  return defineField({
    name,
    title,
    type: 'linkTarget',
    description,
    hidden,
    validation: validation ?? (required ? (rule) => rule.required() : undefined),
  })
}
