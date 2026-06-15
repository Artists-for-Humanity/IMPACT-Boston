import type { SanityImageSource } from "@sanity/image-url";

import type { ActionPanelCard } from "@/components/Action/ActionPanel";
import type { CtaPanelData } from "@/components/Action/CtaSection";
import type { HighlightSlide } from "@/components/HighlightsSection";
import type { Testimonial } from "@/components/Highlights/Testimonials/Carousel";
import type { SideTab } from "@/components/TabsPanel/SideTabs";

export type SanityHeroHeadlinePart = {
  text?: string | null;
  color?: string | null;
};

export type SanityHeroFields = {
  headlineParts?: SanityHeroHeadlinePart[] | null;
  body?: string | null;
  ctaText?: string | null;
  ctaHref?: string | null;
  image?: SanityImageSource | null;
  imageAlt?: string | null;
  title?: string | null;
  highlight?: string | null;
  highlightColor?: string | null;
  description?: string | null;
  youtubeUrl?: string | null;
  videoTitle?: string | null;
};

export type SanityActionPanelFields = {
  title?: string | null;
  subtext?: string | null;
  cards?: ActionPanelCard[] | null;
};

export type SanityCtaSectionFields = {
  panels?: CtaPanelData[] | null;
};

export type SanitySideTab = {
  label?: string | null;
  content?: SideTab["content"] | null;
};

export type SanityHighlight = {
  heading?: string | null;
  body?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  additionalText?: string | null;
  image?: SanityImageSource | null;
  imageSrc?: string | null;
  imageAlt?: string | null;
};

export type CmsPageBlockBase = {
  _key?: string | null;
};

export type CmsHeroBlock = CmsPageBlockBase &
  SanityHeroFields & {
    _type: "hero1Block" | "hero2Block";
  };

export type CmsActionPanelBlock = CmsPageBlockBase &
  SanityActionPanelFields & {
    _type: "actionPanelBlock";
  };

export type CmsCtaSectionBlock = CmsPageBlockBase &
  SanityCtaSectionFields & {
    _type: "ctaSectionBlock";
  };

export type CmsSideTabsBlock = CmsPageBlockBase & {
  _type: "sideTabsBlock";
  tabs?: SanitySideTab[] | null;
};

export type CmsHighlightsBlock = CmsPageBlockBase & {
  _type: "highlightsBlock";
  label?: string | null;
  slides?: SanityHighlight[] | null;
};

export type CmsContentBlock = CmsPageBlockBase & {
  _type: "contentBlock";
  label?: string | null;
  title?: string | null;
  subtitle?: string | null;
  body?: string | null;
  image?: SanityImageSource | null;
  imageAlt?: string | null;
  reverse?: boolean | null;
  ctaText?: string | null;
  ctaHref?: string | null;
  backgroundColor?: string | null;
};

export type CmsTestimonialsBlock = CmsPageBlockBase & {
  _type: "testimonialsCarouselBlock" | "testimonialsSpotlightBlock";
  heading?: string | null;
  subtext?: string | null;
  spotlightQuote?: string | null;
  spotlightAuthor?: string | null;
  spotlightAuthorTitle?: string | null;
  testimonials?: Testimonial[] | null;
};

export type CmsPageBlock =
  | CmsHeroBlock
  | CmsActionPanelBlock
  | CmsCtaSectionBlock
  | CmsSideTabsBlock
  | CmsHighlightsBlock
  | CmsTestimonialsBlock
  | CmsContentBlock;

export type ResolvedHighlightSlide = HighlightSlide;
