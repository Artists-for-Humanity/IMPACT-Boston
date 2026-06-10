import { defineQuery } from "next-sanity";

const SIDE_TABS_CONTENT_PROJECTION = `
  content[]{
    ...,
    children[]{...},
    markDefs[]{...},
    items[]{
      ...,
      items[],
      meta[]
    }
  }
`;

export const LANDING_PAGE_QUERY = defineQuery(`
  *[_id == "landingPage"][0]{
    sections[]{
      _key,
      _type,
      variant,
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
      ${SIDE_TABS_CONTENT_PROJECTION}
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
`);

export const LANDING_PAGE_HERO_QUERY = LANDING_PAGE_QUERY;
