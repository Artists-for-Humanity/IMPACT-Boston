import HighlightsSection from "@/components/HighlightsSection";
import { resolveHighlights } from "@/cms/normalize/blocks/highlights";
import type { CmsHighlightsBlock, SanityHighlight } from "@/cms/types/blocks";

type HighlightsBlockProps = {
  fallback?: {
    label?: string | null;
    slides?: SanityHighlight[] | null;
  };
  section: CmsHighlightsBlock;
};

export default function HighlightsBlock({
  fallback,
  section,
}: HighlightsBlockProps) {
  const slides = section.slides?.length ? section.slides : fallback?.slides;

  return (
    <HighlightsSection
      label={section.label ?? fallback?.label}
      slides={resolveHighlights(slides)}
    />
  );
}
