import {defineField, defineType, type FieldDefinition} from 'sanity'
import {LinkTargetInput} from '../components/LinkTargetInput'
import {internalPageOptions, linkTypeOptions} from './linkTargetOptions'
import {BLOG_POST_TYPE_NAME} from './blogPostType'

type LinkTargetFieldOptions = {
  description?: string
  hidden?: FieldDefinition<'object'>['hidden']
  name?: string
  required?: boolean
  title?: string
}

type LinkTargetValue = {
  _type?: string | null
  email?: string | null
  file?: {
    asset?: {
      _ref?: string | null
      url?: string | null
    } | null
  } | null
  internalPath?: string | null
  openInNewTab?: boolean | null
  blogPost?: {
    _ref?: string | null
  } | null
  type?: string | null
  url?: string | null
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
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      hidden: ({parent}) => !isType(parent, 'url'),
      validation: (rule) =>
        rule.custom((value, context) =>
          isType(context.parent, 'url') && value && !isUrl(value) ? 'Enter a valid URL.' : true,
        ),
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
      validation: (rule) =>
        rule.custom(() => true),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      hidden: ({parent}) => !isType(parent, 'email'),
      validation: (rule) =>
        rule.custom((value, context) => {
          if (!isType(context.parent, 'email')) return true
          if (!value) return true

          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : 'Enter a valid email address.'
        }),
    }),
    defineField({
      name: 'blogPost',
      title: 'Blog Post',
      type: 'reference',
      to: [{type: BLOG_POST_TYPE_NAME}],
      hidden: ({parent}) => !isType(parent, 'blogPost'),
      validation: (rule) =>
        rule.custom((value, context) =>
          isType(context.parent, 'blogPost') && !value ? 'Choose a blog post.' : true,
        ),
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
      validation: (rule) =>
        rule.custom(() => true),
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: true,
      hidden: ({parent}) =>
        isType(parent, 'internal') || isType(parent, 'blogPost') || isType(parent, 'email'),
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
      blogPostTitle: 'blogPost.title',
      blogPostSlug: 'blogPost.slug.current',
      fileName: 'file.asset.originalFilename',
    },
    prepare({type, url, internalPath, email, blogPostTitle, blogPostSlug, fileName}) {
      const subtitle =
        type === 'internal'
          ? internalPath
          : type === 'blogPost'
            ? blogPostSlug
          : type === 'email'
            ? email
            : type === 'asset'
              ? fileName
              : url

      return {
        title: linkTypeOptions.find((option) => option.value === type)?.title || 'Link',
        subtitle: type === 'blogPost' ? blogPostTitle || subtitle : subtitle,
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
}: LinkTargetFieldOptions = {}) {
  return defineField({
    name,
    title,
    type: 'linkTarget',
    description,
    hidden,
    validation: (rule) =>
      rule.custom((value, context) => {
        if (isHidden(hidden, context)) {
          return true
        }

        return validateLinkTarget(value, required, context.parent, name)
      }),
  })
}

function validateLinkTarget(
  value: unknown,
  required: boolean,
  parent: unknown,
  fieldName: string,
) {
  const link = toLinkTargetValue(value)
  const fallbackHref = getFallbackHref(parent, fieldName)

  if (!link || isBlankLinkTarget(link)) {
    return required && !fallbackHref ? 'Choose a link.' : true
  }

  if (!link.type) {
    return required ? 'Choose a link type.' : true
  }

  if (link.type === 'url') {
    if (!link.url) {
      return required && !fallbackHref ? 'Enter a URL.' : true
    }

    return isUrl(link.url) ? true : 'Enter a valid URL.'
  }

  if (link.type === 'internal') {
    return link.internalPath || !required ? true : 'Choose an internal page.'
  }

  if (link.type === 'blogPost') {
    return link.blogPost?._ref || !required ? true : 'Choose a blog post.'
  }

  if (link.type === 'email') {
    if (!link.email) {
      return required ? 'Enter an email address.' : true
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(link.email)
      ? true
      : 'Enter a valid email address.'
  }

  if (link.type === 'asset') {
    return hasFileAsset(link.file) || !required ? true : 'Choose or upload an asset.'
  }

  return true
}

function isBlankLinkTarget(value: LinkTargetValue) {
  return (
    !value.url?.trim() &&
    !value.internalPath?.trim() &&
    !value.blogPost?._ref &&
    !value.email?.trim() &&
    !hasFileAsset(value.file)
  )
}

function hasFileAsset(file: LinkTargetValue['file']) {
  return Boolean(file?.asset?._ref || file?.asset?.url)
}

function toLinkTargetValue(value: unknown): LinkTargetValue | null {
  return typeof value === 'object' && value !== null ? (value as LinkTargetValue) : null
}

function isUrl(value: string) {
  try {
    const url = new URL(value)

    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function getFallbackHref(parent: unknown, fieldName: string) {
  if (typeof parent !== 'object' || parent === null) {
    return ''
  }

  const parentRecord = parent as Record<string, unknown>
  const candidateFields = [
    fieldName.replace(/LinkTarget$/, 'Href'),
    fieldName.replace(/Target$/, ''),
    'href',
    'ctaHref',
    'ctaLink',
    'buttonLink',
    'readMoreLink',
  ]

  for (const candidateField of candidateFields) {
    const value = parentRecord[candidateField]

    if (typeof value === 'string' && value.trim()) {
      return value.trim()
    }
  }

  return ''
}

function isHidden(hidden: LinkTargetFieldOptions['hidden'], context: unknown) {
  if (!hidden) {
    return false
  }

  if (typeof hidden === 'boolean') {
    return hidden
  }

  try {
    return Boolean(hidden(context as never))
  } catch {
    return false
  }
}
