import Triple from "@/components/Content/Triple";
import { resolveTripleContentBlock } from "@/cms/normalize/blocks/tripleContent";
import type { CmsTripleContentBlock } from "@/cms/types/blocks";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type TripleContentBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsTripleContentBlock;
};

export default function TripleContentBlock({
  blockPath,
  dataAttribute,
  section,
}: TripleContentBlockProps) {
  const props = resolveTripleContentBlock(section);

  return (
    <Triple
      {...props}
      cards={props.cards.map((card, index) => {
        const cardPath = getArrayItemPath(blockPath, "cards", card, index);

        return {
          ...card,
          content: card.content.map((item) => {
            if (item.type === "title") {
              return {
                ...item,
                dataSanity: getFieldDataAttribute(
                  dataAttribute,
                  extendPath(cardPath, "title"),
                ),
                line2DataSanity: getFieldDataAttribute(
                  dataAttribute,
                  extendPath(cardPath, "titleLine2"),
                ),
              };
            }

            if (item.type === "description") {
              return {
                ...item,
                dataSanity: getFieldDataAttribute(
                  dataAttribute,
                  extendPath(cardPath, "description"),
                ),
              };
            }

            return {
              ...item,
              dataSanity: getFieldDataAttribute(
                dataAttribute,
                extendPath(cardPath, "tags"),
              ),
            };
          }),
          dataAttributes: {
            backgroundColor: getFieldDataAttribute(
              dataAttribute,
              extendPath(cardPath, "backgroundColor"),
            ),
          },
        };
      })}
      dataAttributes={{
        intro: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "intro")),
        subtitle: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "subtitle"),
        ),
        title: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "title")),
      }}
    />
  );
}
