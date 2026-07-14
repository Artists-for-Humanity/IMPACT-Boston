import {defineField, defineType} from 'sanity'
import {LightBackgroundColorInput} from '../../components/LightBackgroundColorInput'
import {LimitedTextInput} from '../../components/LimitedTextInput'
import {blockPreviewMedia} from './blockPreviews'
import {BLOCK_DEFAULT_COPY} from './blockDefaults'
import {SectionIdInput} from '../../components/SectionIdInput'

export const imageGridBlockType = defineType({
  name: 'imageGridBlock',
  title: 'Image Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      description: 'Optional paragraphs shown to the right of the title.',
      type: 'array',
      of: [{type: 'text', rows: 3}],
    }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Role / Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'bio',
              title: 'Bio',
              type: 'text',
              rows: 4,
              components: {
                input: (props) => LimitedTextInput({...props, limit: 525}),
              },
              validation: (rule) =>
                rule.required().custom((value) =>
                  !value || value.length <= 525
                    ? true
                    : `Bio must be 525 characters or fewer (currently ${value.length}).`,
                ),
            }),
            defineField({
              name: 'image',
              title: 'Photo',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'imageAlt',
              title: 'Photo Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {title: 'name', subtitle: 'role', media: 'image'},
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Member',
                subtitle,
                media,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      components: {
        input: LightBackgroundColorInput,
      },
      initialValue: '',
    }),
    defineField({
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description: 'Optional. Makes this block an anchor target for on-page links (e.g. "program-collaborators"). Auto-populated from the block title.',
      components: {
        input: SectionIdInput,
      },
    }),
  ],
  initialValue: {
    title: BLOCK_DEFAULT_COPY.title,
    description: [BLOCK_DEFAULT_COPY.subtitle],
    members: [
      {
        name: BLOCK_DEFAULT_COPY.author,
        role: BLOCK_DEFAULT_COPY.authorTitle,
        bio: BLOCK_DEFAULT_COPY.body,
        imageAlt: BLOCK_DEFAULT_COPY.imageAlt,
      },
    ],
    backgroundColor: '',
  },
  preview: {
    select: {title: 'title', subtitle: 'subtitle'},
    prepare({title, subtitle}) {
      return {
        title: title || 'Image Grid',
        subtitle,
        media: blockPreviewMedia.imageGridBlock,
      }
    },
  },
})
