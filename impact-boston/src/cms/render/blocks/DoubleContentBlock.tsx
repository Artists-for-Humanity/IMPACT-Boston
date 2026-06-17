import ContentDouble from "@/components/Content/Double";
import { resolveDoubleContentCards } from "@/cms/normalize/blocks/doubleContent";
import type { CmsDoubleContentBlock } from "@/cms/types/blocks";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type DoubleContentBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsDoubleContentBlock;
};

export default function DoubleContentBlock({
  blockPath,
  dataAttribute,
  section,
}: DoubleContentBlockProps) {
  const cards = resolveDoubleContentCards(section.cards)?.map((card, index) => {
    const cardPath = getArrayItemPath(blockPath, "cards", card, index);

    return {
      ...card,
      dataAttributes: {
        description: getFieldDataAttribute(
          dataAttribute,
          extendPath(cardPath, "description"),
        ),
        image: getFieldDataAttribute(dataAttribute, extendPath(cardPath, "image")),
        title: getFieldDataAttribute(dataAttribute, extendPath(cardPath, "title")),
      },
    };
  });

  if (!cards?.length) {
    return null;
  }

  return <ContentDouble cards={cards} />;
}
