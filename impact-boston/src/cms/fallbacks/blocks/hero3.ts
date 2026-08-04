import type { CmsHero3Block } from "@/cms/types/blocks";
import { PLACEHOLDER_IMAGE_SRC } from "@/components/common/placeholderImage";

export const DEFAULT_HERO3_BLOCK: CmsHero3Block = {
  _key: "fallback-hero-3",
  _type: "hero3Block",
  headline: "Fact Check Fridays",
  subheader: "Webinars on Violence, Crime and Personal Safety",
  description:
    "IMPACT's new webinar series features innovative leaders and brilliant minds to debunk myths about violence and crime and give you actionable information about what actually works to make communities safer.",
  imageAlt: "Hero illustration",
  imageSrc: PLACEHOLDER_IMAGE_SRC,
};
