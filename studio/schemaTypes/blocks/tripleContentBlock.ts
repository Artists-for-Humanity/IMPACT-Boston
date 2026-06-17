import {defineField, defineType} from 'sanity'
import {TripleCardBackgroundColorInput} from '../../components/TripleCardBackgroundColorInput'
import {blockPreviewMedia} from './blockPreviews'

const defaultCards = [
  {
    title: 'Realistic Scenarios',
    description:
      'Our self-defense classes simulate scenarios of threat, intimidation and violence perpetrated by strangers and people we know. Classes are taught by a team of two instructors, one of whom takes on the role of an aggressor. This instructor wears a full suit of body armor so students can safely defend themselves using the same force needed in a real attack.',
    backgroundColor: 'primaryLight',
  },
  {
    title: 'A Fight Avoided is',
    titleLine2: 'a Fight Won',
    description:
      'Physical self-defense is always a last resort. Students learn verbal skills to de-escalate conflict and avoid unnecessary violence. Many assailants use verbal threats to intimidate people, so IMPACT teaches students to stay calm and respond effectively to harassment.',
    backgroundColor: 'primaryLight',
  },
  {
    title: 'Building Confidence,',
    titleLine2: 'Healing from Trauma',
    description:
      'IMPACT gives people the opportunity to be effective and successful in the face of fear. Having this experience has helped people heal from past trauma and take on new challenges.',
    backgroundColor: 'primaryLight',
  },
]

export const tripleContentBlockType = defineType({
  name: 'tripleContentBlock',
  title: 'Triple Content',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      validation: (rule) => rule.required().min(1).max(3),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'titleLine2',
              title: 'Card Title Line 2',
              description: 'Optional second line shown directly under the card title.',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Card Description',
              type: 'text',
              rows: 5,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              name: 'backgroundColor',
              title: 'Background Color',
              type: 'string',
              initialValue: 'primaryLight',
              components: {
                input: TripleCardBackgroundColorInput,
              },
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
  ],
  initialValue: {
    title: 'Our Approach to Self-Defense',
    subtitle: 'Realistic Scenarios, De-escalation Skills & Rebuilding Safety and Confidence',
    cards: defaultCards,
  },
  preview: {
    select: {title: 'title', subtitle: 'subtitle'},
    prepare({title, subtitle}) {
      return {
        title: title || 'Triple Content',
        subtitle,
        media: blockPreviewMedia.tripleContentBlock,
      }
    },
  },
})
