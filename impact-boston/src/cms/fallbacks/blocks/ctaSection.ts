import type {
  CmsCtaSectionBlock,
  SanityCtaSectionFields,
} from "@/cms/types/blocks";
import { CMS_FALLBACK_COPY } from "./copy";

export const DEFAULT_CTA_SECTION_BLOCK_FALLBACK: SanityCtaSectionFields = {
  panels: [
    {
      title: CMS_FALLBACK_COPY.title,
      titleLine2: CMS_FALLBACK_COPY.title,
      description: CMS_FALLBACK_COPY.subtitle,
      buttonText: CMS_FALLBACK_COPY.ctaText,
      href: "#",
      bgColor: "#e86834",
      icon: "file-text",
    },
    {
      title: CMS_FALLBACK_COPY.title,
      titleLine2: CMS_FALLBACK_COPY.title,
      description: CMS_FALLBACK_COPY.subtitle,
      buttonText: CMS_FALLBACK_COPY.ctaText,
      href: "#",
      bgColor: "#311e41",
      icon: "dollar-sign",
    },
  ],
};

export const DEFAULT_CTA_SECTION_BLOCK: CmsCtaSectionBlock = {
  _key: "fallback-cta-section",
  _type: "ctaSectionBlock",
  ...DEFAULT_CTA_SECTION_BLOCK_FALLBACK,
};
