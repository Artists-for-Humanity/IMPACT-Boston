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
      showImagePlaceholder,
      highlight,
      highlightColor,
      description,
      subtitle,
      reverse,
      backgroundColor,
      youtubeUrl,
      videoTitle,
      content[] {
        ...,
        markDefs[] {
          ...,
          href
        },
        children[] {
          ...
        }
      },
      eyebrow,
      title,
      titleAs,
      subtitle,
      subtext,
      variant,
      paragraphs[] {
        text,
        bold
      },
      reverse,
      purchaseLinkText,
      purchaseLinkHref,
      backgroundColor,
      intro,
      cards[] {
        title,
        titleLine2,
        body,
        href,
        bgColor,
        icon,
        description,
        tags,
        backgroundColor,
        image,
        imageAlt,
        showImagePlaceholder,
        showImageGradient
      },
      listItems[] {
        title,
        description,
        showInfoIcon,
        accordionContent,
        defaultOpen
      },
      detailItems[] {
        fields[] {
          label,
          value,
          href
        },
        descriptionTitle,
        description
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
