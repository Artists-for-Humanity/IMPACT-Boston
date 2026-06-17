import { stegaClean } from "@sanity/client/stega";
import ImageGrid from "@/components/Content/ImageGrid";
import { urlFor } from "@/sanity/image";
import type { CmsImageGridBlock } from "@/cms/types/blocks";
import { PLACEHOLDER_IMAGE_SRC } from "@/components/common/placeholderImage";

export default function ImageGridBlock({ section }: { section: CmsImageGridBlock }) {
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
