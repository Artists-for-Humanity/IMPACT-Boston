import { defineQuery } from "next-sanity";

import { SIDE_TABS_CONTENT_PROJECTION } from "./fragments/sideTabs";

const LINK_TARGET_PROJECTION = `
  _type,
  type,
  url,
  internalPath,
  email,
  openInNewTab,
  file {
    asset->{
      url,
      originalFilename
    }
  }
`;

const PAGE_SECTIONS_PROJECTION = `
    _id,
    _type,
    sections[]{
      _key,
      _type,
      headline,
      headlineParts[] {
        _key,
        text,
        color
      },
      body,
      _type == "contentBlock" => {
        body[] {
          ...,
          markDefs[] {
            ...,
            href,
            linkTarget {
              ${LINK_TARGET_PROJECTION}
            }
          },
          children[] {
            ...
          }
        }
      },
      buttonColor,
      buttonLink,
      buttonLinkTarget {
        ${LINK_TARGET_PROJECTION}
      },
      buttonText,
      buttonBgColor,
      buttonTextColor,
      calloutText,
      articleTitle,
      articleDescription,
      articleAuthor,
      href,
      linkText,
      linkTarget {
        ${LINK_TARGET_PROJECTION}
      },
      ctaLabel,
      ctaText,
      ctaHref,
      ctaLinkTarget {
        ${LINK_TARGET_PROJECTION}
      },
      image,
      imageAlt,
      featuredLabel,
      featuredTitle,
      featuredDescription,
      featuredDate,
      featuredAuthor,
      featuredLinkText,
      featuredHref,
      featuredLinkTarget {
        ${LINK_TARGET_PROJECTION}
      },
      showImagePlaceholder,
      highlight,
      highlightColor,
      description,
      subtitle,
      subtitleFirst,
      reverse,
      backgroundColor,
      hideMedia,
      youtubeUrl,
      videoTitle,
      content[] {
        ...,
        linkTarget {
          ${LINK_TARGET_PROJECTION}
        },
        markDefs[] {
          ...,
          href,
          linkTarget {
            ${LINK_TARGET_PROJECTION}
          }
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
      showToggle,
      noPaddingTop,
      paragraphs[] {
        _key,
        text,
        bold
      },
      mediaCards[] {
        _key,
        title,
        outlet,
        mediaType,
        image,
        imageSrc,
        imageAlt,
        videoSrc,
        videoTitle,
        scriptSrc,
        href,
        linkTarget {
          ${LINK_TARGET_PROJECTION}
        }
      },
      reverse,
      purchaseLinkText,
      purchaseLinkHref,
      purchaseLinkTarget {
        ${LINK_TARGET_PROJECTION}
      },
      backgroundColor,
      intro,
      cards[] {
        _key,
        title,
        titleLine2,
        body,
        href,
        linkText,
        linkTarget {
          ${LINK_TARGET_PROJECTION}
        },
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
          href,
          linkTarget {
            ${LINK_TARGET_PROJECTION}
          }
        },
        descriptionTitle,
        description
      },
      seeAllLinkText,
      seeAllHref,
      seeAllLinkTarget {
        ${LINK_TARGET_PROJECTION}
      },
      classItems[] {
        _key,
        name,
        summary,
        cost,
        dateTime,
        location,
        linkText,
        href,
        linkTarget {
          ${LINK_TARGET_PROJECTION}
        },
        description
      },
      panels[] {
        _key,
        title,
        titleLine2,
        description,
        buttonText,
        href,
        linkTarget {
          ${LINK_TARGET_PROJECTION}
        },
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
        ctaLinkTarget {
          ${LINK_TARGET_PROJECTION}
        },
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
        readMoreLink,
        readMoreLinkTarget {
          ${LINK_TARGET_PROJECTION}
        }
      },
      members[] {
        name,
        role,
        bio,
        image,
        imageAlt
      },
      subheader,
      items[] {
        _key,
        title,
        description,
        date,
        author,
        href,
        linkTarget {
          ${LINK_TARGET_PROJECTION}
        }
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
