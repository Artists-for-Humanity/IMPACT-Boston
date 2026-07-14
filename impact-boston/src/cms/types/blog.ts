import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "next-sanity";

export type SanityImageDimensions = {
  aspectRatio?: number | null;
  height?: number | null;
  width?: number | null;
};

export type SanityImageWithMetadata = SanityImageSource & {
  alt?: string | null;
  asset?: {
    metadata?: {
      dimensions?: SanityImageDimensions | null;
    } | null;
    url?: string | null;
  } | null;
  caption?: string | null;
};

export type BlogPostImageBlock = SanityImageWithMetadata & {
  _key?: string;
  _type: "blogPostImage" | "image";
};

export type BlogPostContentBlock = PortableTextBlock | BlogPostImageBlock;

export type BlogPost = {
  _id?: string | null;
  _type?: "blogPost" | string | null;
  author?: string | null;
  content?: BlogPostContentBlock[] | null;
  excerpt?: string | null;
  heroImage?: SanityImageWithMetadata | null;
  heroImageAlt?: string | null;
  publishedAt?: string | null;
  slug?: string | null;
  title?: string | null;
};

export type BlogPostSummary = {
  _id?: string | null;
  author?: string | null;
  excerpt?: string | null;
  publishedAt?: string | null;
  slug?: string | null;
  title?: string | null;
};
