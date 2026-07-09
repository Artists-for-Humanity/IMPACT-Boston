import type { DoubleCard } from "@/components/Content/Double";
import { urlFor } from "@/sanity/image";
import type { SanityDoubleContentCard } from "@/cms/types/blocks";

export function resolveDoubleContentCards(
  cards?: SanityDoubleContentCard[] | null,
): DoubleCard[] | undefined {
  const resolvedCards = cards
    ?.map<DoubleCard | null>((card) => {
      if (!card?.description) {
        return null;
      }

      return {
        _key: card._key,
        title: card.title ?? undefined,
        description: card.description,
        imageSrc: card.image
          ? urlFor(card.image)?.width(1200).height(600).fit("crop").url()
          : card.imageSrc ?? undefined,
        imageAlt: card.imageAlt ?? card.title ?? "",
        showImagePlaceholder: Boolean(card.showImagePlaceholder),
      };
    })
    .filter((card): card is DoubleCard => Boolean(card));

  return resolvedCards?.length ? resolvedCards : undefined;
}
