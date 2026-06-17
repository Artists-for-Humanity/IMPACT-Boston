import { stegaClean } from "@sanity/client/stega";
import ImageGrid from "@/components/Content/ImageGrid";
import { urlFor } from "@/sanity/image";
import type { CmsImageGridBlock } from "@/cms/types/blocks";
import { PLACEHOLDER_IMAGE_SRC } from "@/components/common/placeholderImage";
import type { CmsDataAttribute, CmsFieldPath } from "@/cms/visualEditing";

type ImageGridBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsImageGridBlock;
};

export default function ImageGridBlock({ section }: ImageGridBlockProps) {
  const members = (section.members ?? [])
    .filter((m) => m.name && m.role && m.bio)
    .map((m) => ({
      name: m.name!,
      role: m.role!,
      bio: m.bio!,
      imageSrc: m.image
        ? (urlFor(m.image)?.width(740).height(660).fit("crop").url() ?? PLACEHOLDER_IMAGE_SRC)
        : PLACEHOLDER_IMAGE_SRC,
      imageAlt: m.imageAlt ?? m.name ?? "",
    }));

  return (
    <ImageGrid
      title={section.title ?? ""}
      description={section.description?.filter(Boolean) as string[] | undefined}
      members={members}
      backgroundColor={stegaClean(section.backgroundColor) ?? undefined}
    />
  );
}
