import MediaGrid, { type MediaGridItem } from "@/components/Content/MediaGrid";
import { resolveCmsLink } from "@/cms/links";
import type { CmsMediaGridBlock } from "@/cms/types/blocks";
import {
  createDocumentDataAttribute,
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type MediaGridBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsMediaGridBlock;
};

export default function MediaGridBlock({ blockPath, dataAttribute, section }: MediaGridBlockProps) {
  const items = (section.items ?? [])
    .map<MediaGridItem | null>((item, index) => {
      const link = resolveCmsLink(item.linkTarget, item.href);

      if (!item.title || !item.description || !link.href) {
        return null;
      }

      let dataAttributes: MediaGridItem["dataAttributes"];

      if (item._id && item._type) {
        const docAttr = createDocumentDataAttribute(item._id, item._type);
        dataAttributes = {
          title: getFieldDataAttribute(docAttr, ["title"]),
          description: getFieldDataAttribute(docAttr, ["description"]),
          date: getFieldDataAttribute(docAttr, ["publishedAt"]),
          author: getFieldDataAttribute(docAttr, ["author"]),
        };
      } else {
        const itemPath = getArrayItemPath(blockPath, "items", item, index);
        dataAttributes = {
          title: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "title")),
          description: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "description")),
          date: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "date")),
          author: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "author")),
        };
      }

      return {
        title: item.title,
        description: item.description,
        date: item.date ?? undefined,
        author: item.author ?? undefined,
        href: link.href,
        openInNewTab: link.openInNewTab,
        dataAttributes,
      };
    })
    .filter((item): item is MediaGridItem => Boolean(item));

  return (
    <MediaGrid
      title={section.title ?? ""}
      subheader={section.subheader ?? undefined}
      dataAttributes={{
        title: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "title")),
        subheader: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "subheader")),
      }}
      items={items}
    />
  );
}
