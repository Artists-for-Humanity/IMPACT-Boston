import MediaGrid, { type MediaGridItem } from "@/components/Content/MediaGrid";
import { resolveCmsLink } from "@/cms/links";
import type { CmsMediaGridBlock } from "@/cms/types/blocks";
import type { CmsDataAttribute, CmsFieldPath } from "@/cms/visualEditing";

type MediaGridBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsMediaGridBlock;
};

export default function MediaGridBlock({ section }: MediaGridBlockProps) {
  const items = (section.items ?? [])
    .map<MediaGridItem | null>((item) => {
      const link = resolveCmsLink(item.linkTarget, item.href);

      if (!item.title || !item.description || !link.href) {
        return null;
      }

      return {
        title: item.title,
        description: item.description,
        date: item.date ?? undefined,
        author: item.author ?? undefined,
        href: link.href,
        openInNewTab: link.openInNewTab,
      };
    })
    .filter((item): item is MediaGridItem => Boolean(item));

  return (
    <MediaGrid
      title={section.title ?? ""}
      subheader={section.subheader ?? undefined}
      items={items}
    />
  );
}
