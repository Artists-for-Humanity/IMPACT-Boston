import { stegaClean } from "@sanity/client/stega";
import type {
  SingleContentParagraph,
  SingleContentProps,
} from "@/components/Content/Single";
import type { CmsSingleContentBlock } from "@/cms/types/blocks";
import { urlFor } from "@/sanity/image";
import { resolveCmsLink } from "@/cms/links";

const BACKGROUND_COLOR_CLASS_MAP: Record<string, string> = {
  lavender: "bg-bg-lavender",
  primaryLight: "bg-primary-light",
  secondaryLight: "bg-secondary-light",
  complementaryLight: "bg-complementary-light",
  // direct class fallbacks
  "bg-bg-lavender": "bg-bg-lavender",
  "bg-primary-light": "bg-primary-light",
  "bg-secondary-light": "bg-secondary-light",
  "bg-complementary-light": "bg-complementary-light",
};

export function resolveSingleContentBlock(
  section: CmsSingleContentBlock,
): SingleContentProps | undefined {
  const title = section.title?.trim();
  const hasRichContent = Boolean(section.content?.length);
  const bodyParagraphs = section.body
    ?.split(/\n{2,}/)
    .map((text) => text.trim())
    .filter(Boolean)
    .map<SingleContentParagraph>((text) => ({ text }));
  const structuredParagraphs = section.paragraphs
    ?.map<SingleContentParagraph | null>((paragraph) => {
      const text = paragraph?.text?.trim();

      if (!text) {
        return null;
      }

      return {
        text,
        bold: Boolean(paragraph.bold),
      };
    })
    .filter((paragraph): paragraph is SingleContentParagraph =>
      Boolean(paragraph),
    );
  const paragraphs = bodyParagraphs?.length
    ? bodyParagraphs
    : structuredParagraphs;

  if (!hasRichContent && (!title || !paragraphs?.length)) {
    return undefined;
  }

  const ctaText = section.ctaText?.trim();
  const ctaLink = resolveCmsLink(section.ctaLinkTarget, section.ctaHref);
  const purchaseLinkText = section.purchaseLinkText?.trim();
  const purchaseLink = resolveCmsLink(
    section.purchaseLinkTarget,
    section.purchaseLinkHref,
  );

  return {
    eyebrow: section.eyebrow?.trim() || undefined,
    title: title || '',
    titleAs: section.titleAs === "h2" ? "h2" : "h3",
    subtitle: section.subtitle?.trim() || undefined,
    paragraphs,
    imageSrc: section.image
      ? urlFor(section.image)?.width(1200).height(800).fit("crop").url()
      : section.imageSrc ?? undefined,
    imageAlt: section.imageAlt ?? title,
    showImagePlaceholder: Boolean(section.showImagePlaceholder),
    reverse: Boolean(section.reverse),
    cta:
      ctaText && ctaLink.href
        ? { text: ctaText, href: ctaLink.href, openInNewTab: ctaLink.openInNewTab }
        : undefined,
    purchaseLink:
      purchaseLinkText && purchaseLink.href
        ? {
            text: purchaseLinkText,
            href: purchaseLink.href,
            openInNewTab: purchaseLink.openInNewTab,
          }
        : undefined,
    backgroundColor: section.backgroundColor
      ? BACKGROUND_COLOR_CLASS_MAP[stegaClean(section.backgroundColor) ?? ""]
      : undefined,
  };
}
