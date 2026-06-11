import type { CmsHighlightsBlock, SanityHighlight } from "@/cms/types/blocks";
import { CMS_FALLBACK_COPY } from "./copy";

export const DEFAULT_HIGHLIGHTS_BLOCK_FALLBACK: {
  label?: string | null;
  slides?: SanityHighlight[] | null;
} = {
  label: CMS_FALLBACK_COPY.label,
  slides: [
    {
      heading: CMS_FALLBACK_COPY.title,
      body: CMS_FALLBACK_COPY.body,
      ctaText: CMS_FALLBACK_COPY.ctaText,
      ctaLink: "#",
      additionalText: CMS_FALLBACK_COPY.subtitle,
      imageAlt: CMS_FALLBACK_COPY.imageAlt,
    },
  ],
};

export const DEFAULT_HIGHLIGHTS_BLOCK: CmsHighlightsBlock = {
  _key: "fallback-highlights",
  _type: "highlightsBlock",
  ...DEFAULT_HIGHLIGHTS_BLOCK_FALLBACK,
};
