import { defineQuery } from "next-sanity";

import { SIDE_TABS_CONTENT_PROJECTION } from "./fragments/sideTabs";

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
      highlight,
      highlightColor,
      description,
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
        ${SIDE_TABS_CONTENT_PROJECTION}
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
      spotlightQuote,
      spotlightAuthor,
      spotlightAuthorTitle,
      testimonials[] {
        quote,
        author,
        authorTitle,
        readMoreLink
      }
    }
  }
`);
