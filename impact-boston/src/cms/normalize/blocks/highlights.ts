import type { HighlightSlide } from "@/components/HighlightsSection";
import { urlFor } from "@/sanity/image";
import type { SanityHighlight } from "@/cms/types/blocks";

export function resolveHighlights(
  highlights?: SanityHighlight[] | null,
): HighlightSlide[] | undefined {
  if (!highlights?.length) {
    return undefined;
  }

  return highlights.map((highlight) => ({
    _key: highlight._key,
    heading: highlight.heading,
    body: highlight.body,
    ctaText: highlight.ctaText,
    ctaLink: highlight.ctaLink,
    additionalText: highlight.additionalText,
    imageSrc: highlight.image
      ? urlFor(highlight.image)?.width(1200).height(675).fit("crop").url()
      : highlight.imageSrc,
    imageAlt:
      highlight.imageAlt || highlight.heading || "IMPACT Boston highlight",
    dataAttributes: highlight.dataAttributes,
  }));
}
