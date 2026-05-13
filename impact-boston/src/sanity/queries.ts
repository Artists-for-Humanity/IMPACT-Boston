import { defineQuery } from 'next-sanity'

export const LANDING_PAGE_HERO_QUERY = defineQuery(`
  *[_type == "landingPage"][0]{
    hero {
      headlineParts[] {
        text,
        color
      },
      body,
      ctaText,
      ctaHref,
      image,
      imageAlt
    }
  }
`)
