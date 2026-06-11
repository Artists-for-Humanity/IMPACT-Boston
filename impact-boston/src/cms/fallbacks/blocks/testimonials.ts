import type { CmsTestimonialsBlock } from "@/cms/types/blocks";
import type { CmsBlockFallbacks } from "@/cms/types/page";
import { CMS_FALLBACK_COPY } from "./copy";

export const DEFAULT_TESTIMONIALS_BLOCK_FALLBACK: NonNullable<
  CmsBlockFallbacks["testimonials"]
> = {
  heading: CMS_FALLBACK_COPY.title,
  subtext: CMS_FALLBACK_COPY.subtitle,
  spotlightQuote: CMS_FALLBACK_COPY.quote,
  spotlightAuthor: CMS_FALLBACK_COPY.author,
  spotlightAuthorTitle: CMS_FALLBACK_COPY.authorTitle,
  testimonials: [
    {
      quote: CMS_FALLBACK_COPY.quote,
      author: CMS_FALLBACK_COPY.author,
      authorTitle: CMS_FALLBACK_COPY.authorTitle,
    },
    {
      quote: CMS_FALLBACK_COPY.quote,
      author: CMS_FALLBACK_COPY.author,
      authorTitle: CMS_FALLBACK_COPY.authorTitle,
    },
    {
      quote: CMS_FALLBACK_COPY.quote,
      author: CMS_FALLBACK_COPY.author,
      authorTitle: CMS_FALLBACK_COPY.authorTitle,
    },
  ],
};

export const DEFAULT_TESTIMONIALS_BLOCK: CmsTestimonialsBlock = {
  _key: "fallback-testimonials",
  _type: "testimonialsCarouselBlock",
  ...DEFAULT_TESTIMONIALS_BLOCK_FALLBACK,
};
