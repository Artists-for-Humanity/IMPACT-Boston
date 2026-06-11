import { PLACEHOLDER_IMAGE_SRC } from "@/components/common/placeholderImage";
import type { CmsHeroBlock } from "@/cms/types/blocks";
import type { HeroBlockFallback } from "@/cms/types/page";
import { CMS_FALLBACK_COPY } from "./copy";

export const DEFAULT_HERO_BLOCK_FALLBACK: HeroBlockFallback = {
  headlineParts: [{ text: CMS_FALLBACK_COPY.title, color: "black" }],
  body: CMS_FALLBACK_COPY.body,
  ctaText: CMS_FALLBACK_COPY.ctaText,
  ctaHref: "#",
  imageSrc: PLACEHOLDER_IMAGE_SRC,
  imageAlt: CMS_FALLBACK_COPY.imageAlt,
};

export const DEFAULT_HERO_BLOCK: CmsHeroBlock = {
  _key: "fallback-hero",
  _type: "hero1Block",
  headlineParts: DEFAULT_HERO_BLOCK_FALLBACK.headlineParts,
  body: DEFAULT_HERO_BLOCK_FALLBACK.body,
  ctaText: DEFAULT_HERO_BLOCK_FALLBACK.ctaText,
  ctaHref: DEFAULT_HERO_BLOCK_FALLBACK.ctaHref,
  imageAlt: DEFAULT_HERO_BLOCK_FALLBACK.imageAlt,
};
