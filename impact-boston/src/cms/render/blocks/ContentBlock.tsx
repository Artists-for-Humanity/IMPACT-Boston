import SingleContent from "@/components/Content/Single";
import { urlFor } from "@/sanity/image";
import type { CmsContentBlock } from "@/cms/types/blocks";

type ContentBlockProps = {
  section: CmsContentBlock;
};

export default function ContentBlock({ section }: ContentBlockProps) {
  const imageSrc = section.image
    ? (urlFor(section.image)?.width(1000).fit("max").url() ?? undefined)
    : undefined;

  const paragraphs = section.body
    ? [{ text: section.body }]
    : [];

  return (
    <SingleContent
      label={section.label ?? undefined}
      title={section.title ?? ""}
      subtitle={section.subtitle ?? undefined}
      paragraphs={paragraphs}
      imageSrc={imageSrc}
      imageAlt={section.imageAlt ?? ""}
      reverse={section.reverse ?? false}
      cta={
        section.ctaText && section.ctaHref
          ? { text: section.ctaText, href: section.ctaHref }
          : undefined
      }
      backgroundColor={section.backgroundColor ?? undefined}
    />
  );
}
