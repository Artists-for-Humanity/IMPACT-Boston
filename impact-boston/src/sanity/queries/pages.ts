import { defineQuery } from "next-sanity";

import { SIDE_TABS_CONTENT_PROJECTION } from "./fragments/sideTabs";

const PAGE_SECTIONS_PROJECTION = `
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
      subtitle,
      reverse,
      backgroundColor,
      youtubeUrl,
      videoTitle,
      title,
      subtext,
      cards[] {
        title,
        body,
        href,
        bgColor,
        icon
      },
      panels[] {
        title,
        titleLine2,
        description,
        buttonText,
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
`;

export const CMS_PAGE_QUERY = defineQuery(`
  *[_id == $pageId][0]{
    ${PAGE_SECTIONS_PROJECTION}
  }
`);

export const LANDING_PAGE_QUERY = defineQuery(`
  *[_id == "landingPage"][0]{
    ${PAGE_SECTIONS_PROJECTION}
  }
`);
