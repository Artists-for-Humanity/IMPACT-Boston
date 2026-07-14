export const BLOCK_DEFAULT_COPY = {
  author: 'Name',
  authorTitle: 'Title',
  body: 'Here you put your body text.',
  cardBody: 'Here you put your card body text.',
  ctaText: 'Call to Action',
  imageAlt: 'Placeholder image',
  label: 'Label',
  quote: 'Here you put your quote.',
  subtitle: 'Here you put your subtitle.',
  title: 'Title',
} as const

export const defaultInternalLinkTarget = {
  _type: 'linkTarget',
  type: 'internal',
  internalPath: '/',
}

export function defaultPortableTextBlock(style: string, text: string) {
  return {
    _type: 'block',
    style,
    markDefs: [],
    children: [{_type: 'span', text, marks: []}],
  }
}
