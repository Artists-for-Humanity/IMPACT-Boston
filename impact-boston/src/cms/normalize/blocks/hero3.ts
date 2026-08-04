import type { Hero3Props } from "@/components/Hero/Hero3";
import { PLACEHOLDER_IMAGE_SRC } from "@/components/common/placeholderImage";
import type { CmsHero3Block } from "@/cms/types/blocks";
import { urlFor } from "@/sanity/image";

export const DEFAULT_HERO3_FIELDS: Hero3Props = {
  headline: "Fact Check Fridays",
  description:
    "IMPACT's new webinar series features innovative leaders and brilliant minds to debunk myths about violence and crime and give you actionable information about what actually works to make communities safer.",
  imageAlt: "Hero illustration",
  imageSrc: PLACEHOLDER_IMAGE_SRC,
};

export function resolveHero3Block(section: CmsHero3Block): Hero3Props {
  const imageSrc = section.image
    ? urlFor(section.image)?.width(1200).fit("max").url()
    : cleanText(section.imageSrc);

  return {
    headline: cleanText(section.headline) || DEFAULT_HERO3_FIELDS.headline,
    subheader: cleanText(section.subheader) || undefined,
    description:
      cleanText(section.description) || DEFAULT_HERO3_FIELDS.description,
    imageAlt: cleanText(section.imageAlt) || DEFAULT_HERO3_FIELDS.imageAlt,
    imageSrc: imageSrc || DEFAULT_HERO3_FIELDS.imageSrc,
  };
}

function cleanText(value?: string | null) {
  return value?.trim() ?? "";
}
