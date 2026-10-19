import {defineField, defineType} from 'sanity'

export const jobListingsBlockType = defineType({
  name: 'jobListingsBlock',
  title: 'Job Listings',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Heading',
      type: 'string',
      description: 'Optional heading shown above the list of positions, e.g. "Open Positions".',
    }),
    defineField({
      name: 'intro',
      title: 'Section Intro',
      type: 'text',
      rows: 3,
      description: 'Optional introductory text shown below the section heading.',
    }),
    defineField({
      name: 'noOpeningsMessage',
      title: 'No Openings Message',
      type: 'string',
      description:
        'Text shown when no positions are currently visible. Displayed in place of the positions list.',
      initialValue: 'There are no open positions right now. Check back soon.',
    }),
    defineField({
      name: 'positions',
      title: 'Open Positions',
      type: 'array',
      description: 'Add one entry per open role. Toggle "Hide from website" to remove a filled role without deleting it.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Job Title',
              type: 'string',
              description: 'Required. Shown as the position heading on the website.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'summary',
              title: 'Summary',
              type: 'text',
              rows: 4,
              description: 'A short description of the role shown on the website.',
            }),
            defineField({
              name: 'pdfFile',
              title: 'Job Posting File',
              type: 'file',
              description: 'Upload the job description file (PDF, Word doc, etc.).',
            }),
            defineField({
              name: 'fileButtonText',
              title: 'File Button Label',
              type: 'string',
              description: 'Label for the button that opens the job posting file. Defaults to "View Job Description (PDF)" if left blank.',
              placeholder: 'View Job Description (PDF)',
            }),
            defineField({
              name: 'applicationLink',
              title: 'External Application Link',
              type: 'url',
              description: 'Optional. If provided, a secondary "Apply Now" button will link here.',
            }),
            defineField({
              name: 'hiddenFromWebsite',
              title: 'Hide from website',
              type: 'boolean',
              description:
                'Turn on to remove this position from the website. Use when the role is filled or no longer accepting applications.',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'summary',
              hidden: 'hiddenFromWebsite',
            },
            prepare({title, subtitle, hidden}) {
              return {
                title: title || 'Open Position',
                subtitle: hidden ? `${subtitle ?? ''} · Hidden`.trim() : subtitle,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      positions: 'positions',
    },
    prepare({title, positions}) {
      const count = Array.isArray(positions) ? positions.length : 0
      return {
        title: title || 'Job Listings',
        subtitle: `${count} position${count === 1 ? '' : 's'}`,
      }
    },
  },
})
