import CtaSection from "@/components/Action/CtaSection";
import type {
  CmsCtaSectionBlock,
  SanityCtaSectionFields,
} from "@/cms/types/blocks";

type CtaSectionBlockProps = {
  fallback?: SanityCtaSectionFields;
  section: CmsCtaSectionBlock;
};

export default function CtaSectionBlock({
  fallback,
  section,
}: CtaSectionBlockProps) {
  const panels = section.panels?.length ? section.panels : fallback?.panels;

  return <CtaSection panels={panels} />;
}
