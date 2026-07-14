import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsBlockFallbacks, CmsPageData } from "@/cms/types/page";
import { createCmsDataAttribute, getBlockPath } from "@/cms/visualEditing";
import BlockRenderer from "./BlockRenderer";

type CmsPageProps = {
  blocks: CmsPageBlock[];
  data?: CmsPageData | null;
  fallbacks?: CmsBlockFallbacks;
};

export function CmsPage({ blocks, data, fallbacks }: CmsPageProps) {
  const dataAttribute = createCmsDataAttribute(data);

  return (
    <main>
      {blocks.map((block, index) => {
        const key = block._key || `${block._type}-${index}`;
        const renderer = (
          <BlockRenderer
            block={block}
            blockPath={getBlockPath(block, index)}
            dataAttribute={dataAttribute}
            fallbacks={fallbacks}
          />
        );

        return block.sectionId ? (
          <div id={block.sectionId} key={key}>
            {renderer}
          </div>
        ) : (
          <BlockRenderer
            key={key}
            block={block}
            blockPath={getBlockPath(block, index)}
            dataAttribute={dataAttribute}
            fallbacks={fallbacks}
          />
        );
      })}
    </main>
  );
}
