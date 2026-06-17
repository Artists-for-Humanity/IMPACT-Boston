import ContentDouble from "@/components/Content/Double";
import { resolveDoubleContentCards } from "@/cms/normalize/blocks/doubleContent";
import type { CmsDoubleContentBlock } from "@/cms/types/blocks";

type DoubleContentBlockProps = {
  section: CmsDoubleContentBlock;
};

export default function DoubleContentBlock({
  section,
}: DoubleContentBlockProps) {
  const cards = resolveDoubleContentCards(section.cards);

  if (!cards?.length) {
    return null;
  }

  return <ContentDouble cards={cards} />;
}
