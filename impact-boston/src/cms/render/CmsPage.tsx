import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsPageFallbacks } from "@/cms/types/page";
import BlockRenderer from "./BlockRenderer";

type CmsPageProps = {
  blocks: CmsPageBlock[];
  fallbacks?: CmsPageFallbacks;
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
