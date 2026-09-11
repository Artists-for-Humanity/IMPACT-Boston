import type { DoubleCard } from "@/components/Content/Double";
import { urlFor } from "@/sanity/image";
import { stegaClean } from "next-sanity";
import type { SanityDoubleContentCard } from "@/cms/types/blocks";

function cleanText(value?: string | null) {
  return stegaClean(value)?.trim() ?? "";
}

function toEmbedUrl(url: string): string {
  if (!url) return url;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com") && parsed.pathname === "/watch") {
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (parsed.hostname === "youtu.be") {
      const id = parsed.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (parsed.hostname === "vimeo.com") {
      const id = parsed.pathname.slice(1).split("/")[0];
      return id ? `https://player.vimeo.com/video/${id}` : url;
    }
  } catch {
    // not a valid URL, return as-is
  }
  return url;
}

export function resolveDoubleContentCards(
  cards?: SanityDoubleContentCard[] | null,
): DoubleCard[] | undefined {
  const resolvedCards = cards
    ?.map<DoubleCard | null>((card) => {
      if (!card?.description) {
        return null;
      }

      const mediaType = card.mediaType ?? "image";

      if (mediaType === "video") {
        const videoSrc = toEmbedUrl(cleanText(card.videoSrc));
        if (!videoSrc) return null;
        return {
          _key: card._key,
          title: card.title ?? undefined,
          description: card.description,
          mediaType: "video" as const,
          videoSrc,
          videoTitle: cleanText(card.videoTitle) || undefined,
        };
      }

      if (mediaType === "embed") {
        const scriptSrc = cleanText(card.scriptSrc);
        if (!scriptSrc) return null;
        return {
          _key: card._key,
          title: card.title ?? undefined,
          description: card.description,
          mediaType: "embed" as const,
          scriptSrc,
        };
      }

      return {
        _key: card._key,
        title: card.title ?? undefined,
        description: card.description,
        mediaType: "image" as const,
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
