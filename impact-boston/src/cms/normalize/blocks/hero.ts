import type { SanityImageSource } from "@sanity/image-url";

import { urlFor } from "@/sanity/image";
import type { HeroBlockFallback } from "@/cms/types/page";
import type { SanityHeroHeadlinePart } from "@/cms/types/blocks";

type ResolvedHeroHeadlinePart = {
  text: string;
  color?: string | null;
};

export function resolveHeadlineParts(
  headlineParts?: SanityHeroHeadlinePart[] | null,
  fallbackHeadlineParts: HeroBlockFallback["headlineParts"] = [],
): ResolvedHeroHeadlinePart[] {
  const validHeadlineParts = headlineParts?.filter(
    (part): part is ResolvedHeroHeadlinePart => Boolean(part?.text),
  );

  return validHeadlineParts?.length
    ? validHeadlineParts
    : fallbackHeadlineParts;
}

export function resolveHeroImageSrc(
  image?: SanityImageSource | null,
  fallbackImageSrc?: string,
) {
  return image
    ? (urlFor(image)?.width(1400).fit("max").url() ??
        fallbackImageSrc)
    : fallbackImageSrc;
}

export function resolveHero2HighlightColor(
  color?: string | null,
): "primary" | "secondary" | "complementary" | undefined {
  return color === "primary" ||
    color === "secondary" ||
    color === "complementary"
    ? color
    : undefined;
}
