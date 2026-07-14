import {defineArrayMember, defineField, defineType} from 'sanity'
import {portableTextContent} from './blocks/sideTabs/content/portableText'

export const BLOG_POST_TYPE_NAME = 'blogPost'

const blogPostImageContent = defineArrayMember({
  name: 'blogPostImage',
  title: 'Image',
  type: 'image',
  options: {hotspot: true},
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      subtitle: 'caption',
      media: 'asset',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Image',
        subtitle,
        media,
      }
    },
  },
})

export const blogPostType = defineType({
  name: BLOG_POST_TYPE_NAME,
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL path for this post, for example /Blog/making-an-impact.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Shown on the blog landing page card and used for the post metadata.',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      options: {dateFormat: 'MMM D, YYYY'},
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Post Content',
      description:
        'Optional. Add headings, paragraphs, lists, links, and images when this post should have a full article page.',
      type: 'array',
      of: [portableTextContent, blogPostImageContent],
    }),
  ],
  orderings: [
    {
      title: 'Published Date, Newest First',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      author: 'author',
    },
    prepare({title, publishedAt, author}) {
      return {
        title: title || 'Blog Post',
        subtitle: [publishedAt, author].filter(Boolean).join(' / '),
      }
    },
  },
})
