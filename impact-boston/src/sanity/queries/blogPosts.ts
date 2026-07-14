import { defineQuery } from "next-sanity";

const LINK_TARGET_PROJECTION = `
  _type,
  type,
  url,
  internalPath,
  blogPost->{
    title,
    "slug": slug.current
  },
  email,
  openInNewTab,
  file {
    asset->{
      url,
      originalFilename
    }
  }
`;

const IMAGE_METADATA_PROJECTION = `
  ...,
  asset->{
    _id,
    url,
    metadata {
      dimensions {
        aspectRatio,
        height,
        width
      }
    }
  }
`;

const BLOG_POST_CONTENT_PROJECTION = `
  content[] {
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
    },
    _type == "blogPostImage" => {
      ${IMAGE_METADATA_PROJECTION}
    },
    _type == "image" => {
      ${IMAGE_METADATA_PROJECTION}
    }
  }
`;

export const BLOG_POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug] | order(_updatedAt desc)[0] {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    author,
    heroImage {
      ${IMAGE_METADATA_PROJECTION}
    },
    heroImageAlt,
    ${BLOG_POST_CONTENT_PROJECTION}
  }
`);

export const BLOG_POST_SLUGS_QUERY = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const BLOG_POST_SUMMARIES_QUERY = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    author
  }
`);
