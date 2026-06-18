import MediaGrid from "@/components/Content/MediaGrid";
import type { CmsMediaGridBlock } from "@/cms/types/blocks";
import type { CmsDataAttribute, CmsFieldPath } from "@/cms/visualEditing";

type MediaGridBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsMediaGridBlock;
};

export default function MediaGridBlock({ section }: MediaGridBlockProps) {
  const items = (section.items ?? [])
    .filter((item) => item.title && item.description && item.href)
    .map((item) => ({
      title: item.title!,
      description: item.description!,
      date: item.date ?? undefined,
      author: item.author ?? undefined,
      href: item.href!,
    }));

  return (
    <MediaGrid
      title={section.title ?? ""}
      subheader={section.subheader ?? undefined}
      items={items}
    />
  );
}
