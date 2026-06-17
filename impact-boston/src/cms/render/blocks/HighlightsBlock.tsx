import HighlightsSection from "@/components/HighlightsSection";
import { resolveHighlights } from "@/cms/normalize/blocks/highlights";
import type { CmsHighlightsBlock, SanityHighlight } from "@/cms/types/blocks";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type HighlightsBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  fallback?: {
    label?: string | null;
    slides?: SanityHighlight[] | null;
  };
  section: CmsHighlightsBlock;
};

export default function HighlightsBlock({
  blockPath,
  dataAttribute,
  fallback,
  section,
}: HighlightsBlockProps) {
  const slides = section.slides?.length ? section.slides : fallback?.slides;
  const slidesWithDataAttributes = slides?.map((slide, index) => {
    const slidePath = getArrayItemPath(blockPath, "slides", slide, index);

    return {
      ...slide,
      dataAttributes: {
        additionalText: getFieldDataAttribute(
          dataAttribute,
          extendPath(slidePath, "additionalText"),
        ),
        body: getFieldDataAttribute(dataAttribute, extendPath(slidePath, "body")),
        ctaText: getFieldDataAttribute(
          dataAttribute,
          extendPath(slidePath, "ctaText"),
        ),
        heading: getFieldDataAttribute(
          dataAttribute,
          extendPath(slidePath, "heading"),
        ),
        image: getFieldDataAttribute(dataAttribute, extendPath(slidePath, "image")),
      },
    };
  });

  return (
    <HighlightsSection
      dataAttributes={{
        label: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "label")),
      }}
      label={section.label ?? fallback?.label}
      slides={resolveHighlights(slidesWithDataAttributes)}
    />
  );
}
