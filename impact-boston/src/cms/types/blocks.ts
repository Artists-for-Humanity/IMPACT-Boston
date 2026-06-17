import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "next-sanity";

import type { ActionPanelCard } from "@/components/Action/ActionPanel";
import type { CtaPanelData } from "@/components/Action/CtaSection";
import type { DoubleCard } from "@/components/Content/Double";
import type {
  SingleContentParagraph,
  SingleContentProps,
} from "@/components/Content/Single";
import type { TripleProps } from "@/components/Content/Triple";
import type { HighlightSlide } from "@/components/HighlightsSection";
import type {
  ListDetailItem,
  ListItem,
  ListVariant,
} from "@/components/List/List";
import type { Testimonial } from "@/components/Highlights/Testimonials/Carousel";
import type { SideTab } from "@/components/TabsPanel/SideTabs";

export type SanityHeroHeadlinePart = {
  _key?: string | null;
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

export type SanitySingleContentParagraph = {
  _key?: string | null;
  text?: SingleContentParagraph["text"] | null;
  bold?: SingleContentParagraph["bold"] | null;
};

export type SanitySingleContentFields = {
  content?: SanitySingleContentContentBlock[] | null;
  eyebrow?: string | null;
  title?: string | null;
  titleAs?: SingleContentProps["titleAs"] | null;
  subtitle?: string | null;
  body?: string | null;
  paragraphs?: SanitySingleContentParagraph[] | null;
  image?: SanityImageSource | null;
  imageSrc?: string | null;
  imageAlt?: string | null;
  showImagePlaceholder?: boolean | null;
  reverse?: boolean | null;
  ctaText?: string | null;
  ctaHref?: string | null;
  purchaseLinkText?: string | null;
  purchaseLinkHref?: string | null;
  backgroundColor?: string | null;
};

export type SanitySingleContentCtaBlock = {
  _key?: string;
  _type: "singleContentCta";
  text?: string | null;
  href?: string | null;
};

export type SanitySingleContentSupportingLinkBlock = {
  _key?: string;
  _type: "singleContentSupportingLink";
  text?: string | null;
  href?: string | null;
  color?: string | null;
};

export type SanitySingleContentContentBlock =
  | PortableTextBlock
  | SanitySingleContentCtaBlock
  | SanitySingleContentSupportingLinkBlock;

export type SanityDoubleContentCard = {
  _key?: string | null;
  title?: DoubleCard["title"] | null;
  description?: string | null;
  image?: SanityImageSource | null;
  imageSrc?: string | null;
  imageAlt?: string | null;
  showImagePlaceholder?: boolean | null;
  showImageGradient?: boolean | null;
};

export type SanityTripleContentCard = {
  _key?: string | null;
  title?: string | null;
  titleLine2?: string | null;
  description?: string | null;
  tags?: string[] | null;
  backgroundColor?: string | null;
};

export type SanityTripleContentFields = {
  title?: TripleProps["title"] | null;
  subtitle?: TripleProps["subtitle"] | null;
  intro?: TripleProps["intro"] | null;
  cards?: SanityTripleContentCard[] | null;
};

export type SanityListFields = {
  variant?: ListVariant | null;
  title?: string | null;
  description?: string | null;
  listItems?: ListItem[] | null;
  detailItems?: ListDetailItem[] | null;
};

export type SanitySideTab = {
  _key?: string | null;
  label?: string | null;
  content?: SideTab["content"] | null;
};

export type SanityHighlight = {
  _key?: string | null;
  heading?: string | null;
  body?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  additionalText?: string | null;
  image?: SanityImageSource | null;
  imageSrc?: string | null;
  imageAlt?: string | null;
  dataAttributes?: HighlightSlide["dataAttributes"];
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

export type CmsSingleContentBlock = CmsPageBlockBase &
  SanitySingleContentFields & {
    _type: "singleContentBlock";
  };

export type CmsDoubleContentBlock = CmsPageBlockBase & {
  _type: "doubleContentBlock";
  cards?: SanityDoubleContentCard[] | null;
};

export type CmsTripleContentBlock = CmsPageBlockBase &
  SanityTripleContentFields & {
    _type: "tripleContentBlock";
  };

export type CmsListBlock = CmsPageBlockBase &
  SanityListFields & {
    _type: "listBlock";
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
  title?: string | null;
  subtitle?: string | null;
  body?: PortableTextBlock[] | string | null;
  buttonColor?: string | null;
  buttonLink?: string | null;
  buttonText?: string | null;
  image?: SanityImageSource | null;
  imageAlt?: string | null;
  reverse?: boolean | null;
  ctaText?: string | null;
  ctaHref?: string | null;
  backgroundColor?: string | null;
};

export type CmsImageGridMember = {
  name?: string | null;
  role?: string | null;
  bio?: string | null;
  image?: SanityImageSource | null;
  imageAlt?: string | null;
};

export type CmsImageGridBlock = CmsPageBlockBase & {
  _type: "imageGridBlock";
  title?: string | null;
  description?: string[] | null;
  members?: CmsImageGridMember[] | null;
  backgroundColor?: string | null;
};

export type CmsTestimonialsBlock = CmsPageBlockBase & {
  _type: "testimonialsCarouselBlock" | "testimonialsSpotlightBlock";
  authorPrefix?: string | null;
  heading?: string | null;
  showAuthors?: boolean | null;
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
  | CmsSingleContentBlock
  | CmsDoubleContentBlock
  | CmsTripleContentBlock
  | CmsListBlock
  | CmsSideTabsBlock
  | CmsHighlightsBlock
  | CmsTestimonialsBlock
  | CmsContentBlock
  | CmsImageGridBlock;

export type ResolvedHighlightSlide = HighlightSlide;
