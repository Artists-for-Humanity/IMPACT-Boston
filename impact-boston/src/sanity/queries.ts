import { defineQuery } from 'next-sanity'

export const LANDING_PAGE_QUERY = defineQuery(`
  *[_id == "landingPage"][0]{
    sections[]{
      _key,
      _type,
      headlineParts[] {
        text,
        color
      },
      body,
      ctaText,
      ctaHref,
      image,
      imageAlt,
      title,
      subtext,
      cards[] {
        title,
        body,
        href,
        bgColor,
        icon
      },
      tabs[] {
        label,
        content
      },
      label,
      slides[] {
        heading,
        body,
        ctaText,
        ctaLink,
        additionalText,
        image,
        imageAlt
      },
      heading,
      testimonials[] {
        quote,
        author,
        readMoreLink
      }
    },
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
    },
    actionPanel {
      title,
      subtext,
      cards[] {
        title,
        body,
        href,
        bgColor,
        icon
      }
    },
    sideTabs[] {
      label,
      content
    },
    highlightsLabel,
    highlights[] {
      heading,
      body,
      ctaText,
      ctaLink,
      additionalText,
      image,
      imageAlt
    },
    testimonialsHeading,
    testimonialsSubtext,
    testimonials[] {
      quote,
      author,
      readMoreLink
    }
  }
`)

export const LANDING_PAGE_HERO_QUERY = LANDING_PAGE_QUERY
