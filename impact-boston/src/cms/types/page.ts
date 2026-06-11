import type { SideTab } from "@/components/TabsPanel/SideTabs";

import type {
  CmsPageBlock,
  CmsTestimonialsBlock,
  SanityActionPanelFields,
  SanityHighlight,
} from "./blocks";

export type HeroFallback = {
  headlineParts: { text: string; color: string }[];
  body: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

export type CmsPageFallbacks = {
  actionPanel?: SanityActionPanelFields;
  hero?: HeroFallback;
  highlights?: {
    label?: string | null;
    slides?: SanityHighlight[] | null;
  };
  sideTabs?: SideTab[];
  testimonials?: Pick<
    CmsTestimonialsBlock,
    | "heading"
    | "subtext"
    | "spotlightAuthor"
    | "spotlightAuthorTitle"
    | "spotlightQuote"
    | "testimonials"
  >;
};

export type CmsPageData = {
  sections?: CmsPageBlock[] | null;
};

export type LandingPageData = CmsPageData;
