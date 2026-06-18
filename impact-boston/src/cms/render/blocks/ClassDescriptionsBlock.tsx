import ClassDescriptions from "@/components/ClassDescriptions/ClassDescriptions";
import { resolveClassDescriptionsBlock } from "@/cms/normalize/blocks/classDescriptions";
import type { CmsClassDescriptionsBlock } from "@/cms/types/blocks";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type ClassDescriptionsBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsClassDescriptionsBlock;
};

export default function ClassDescriptionsBlock({
  blockPath,
  dataAttribute,
  section,
}: ClassDescriptionsBlockProps) {
  const props = resolveClassDescriptionsBlock(section);

  return (
    <ClassDescriptions
      {...props}
      dataAttributes={{
        description: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "description"),
        ),
        seeAllLinkText: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "seeAllLinkText"),
        ),
        title: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "title")),
      }}
      items={props.items?.map((item, itemIndex) => {
        const itemPath = getArrayItemPath(
          blockPath,
          "classItems",
          item,
          itemIndex,
        );

        return {
          ...item,
          dataAttributes: {
            cost: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "cost")),
            dateTime: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "dateTime"),
            ),
            description: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "description"),
            ),
            linkText: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "linkText"),
            ),
            location: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "location"),
            ),
            name: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "name")),
            summary: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "summary"),
            ),
          },
        };
      })}
    />
  );
}
