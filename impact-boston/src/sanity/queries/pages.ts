import { defineQuery } from "next-sanity";

import { SIDE_TABS_CONTENT_PROJECTION } from "./fragments/sideTabs";

const PAGE_SECTIONS_PROJECTION = `
    _id,
    _type,
    sections[]{
      _key,
      _type,
      headlineParts[] {
        _key,
        text,
        color
      },
      body,
      buttonColor,
      buttonLink,
      buttonText,
      buttonBgColor,
      buttonTextColor,
      ctaLabel,
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
      supportingText,
      supportingTextColor,
      textColor,
      variant,
      paragraphs[] {
        _key,
        text,
        bold
      },
      reverse,
      purchaseLinkText,
      purchaseLinkHref,
      backgroundColor,
      intro,
      cards[] {
        _key,
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
        _key,
        title,
        description,
        showInfoIcon,
        accordionContent,
        defaultOpen
      },
      detailItems[] {
        _key,
        fields[] {
          _key,
          label,
          value,
          href
        },
        descriptionTitle,
        description
      },
      panels[] {
        _key,
        title,
        titleLine2,
        description,
        buttonText,
        href,
        bgColor,
        icon
      },
      tabs[] {
        _key,
        label,
        ${SIDE_TABS_CONTENT_PROJECTION}
      },
      label,
      slides[] {
        _key,
        heading,
        body,
        ctaText,
        ctaLink,
        additionalText,
        image,
        imageAlt
      },
      heading,
      authorPrefix,
      showAuthors,
      spotlightQuote,
      spotlightAuthor,
      spotlightAuthorTitle,
      testimonials[] {
        _key,
        quote,
        author,
        authorTitle,
        readMoreLink
      },
      members[] {
        name,
        role,
        bio,
        image,
        imageAlt
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
