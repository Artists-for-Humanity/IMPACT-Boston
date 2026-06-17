import List from "@/components/List/List";
import { resolveListBlock } from "@/cms/normalize/blocks/list";
import type { CmsListBlock } from "@/cms/types/blocks";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type ListBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsListBlock;
};

export default function ListBlock({
  blockPath,
  dataAttribute,
  section,
}: ListBlockProps) {
  const props = resolveListBlock(section);

  return (
    <List
      {...props}
      dataAttributes={{
        description: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "description"),
        ),
        title: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "title")),
      }}
      detailItems={props.detailItems?.map((item, itemIndex) => {
        const itemPath = getArrayItemPath(
          blockPath,
          "detailItems",
          item,
          itemIndex,
        );

        return {
          ...item,
          dataAttributes: {
            description: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "description"),
            ),
            descriptionTitle: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "descriptionTitle"),
            ),
          },
          fields: item.fields.map((field, fieldIndex) => {
            const fieldPath = getArrayItemPath(
              itemPath,
              "fields",
              field,
              fieldIndex,
            );

            return {
              ...field,
              dataAttributes: {
                label: getFieldDataAttribute(
                  dataAttribute,
                  extendPath(fieldPath, "label"),
                ),
                value: getFieldDataAttribute(
                  dataAttribute,
                  extendPath(fieldPath, "value"),
                ),
              },
            };
          }),
        };
      })}
      items={props.items?.map((item, index) => {
        const itemPath = getArrayItemPath(blockPath, "listItems", item, index);

        return {
          ...item,
          dataAttributes: {
            accordionContent: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "accordionContent"),
            ),
            description: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "description"),
            ),
            title: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "title")),
          },
        };
      })}
    />
  );
}
