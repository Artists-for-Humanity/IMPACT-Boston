import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsBlockFallbacks } from "@/cms/types/page";
import BlockRenderer from "./BlockRenderer";

type CmsPageProps = {
  blocks: CmsPageBlock[];
  fallbacks?: CmsBlockFallbacks;
};

export function CmsPage({ blocks, fallbacks }: CmsPageProps) {
  return (
    <main>
      {blocks.map((block, index) => (
        <BlockRenderer
          block={block}
          fallbacks={fallbacks}
          key={block._key || `${block._type}-${index}`}
        />
      ))}
    </main>
  );
}
