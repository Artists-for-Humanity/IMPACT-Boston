import type { ReactNode } from "react";

import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsBlockFallbacks, CmsPageData } from "@/cms/types/page";
import { createCmsDataAttribute, getBlockPath } from "@/cms/visualEditing";
import BlockRenderer from "./BlockRenderer";

type CmsPageProps = {
  blocks: CmsPageBlock[];
  children?: ReactNode;
  data?: CmsPageData | null;
  fallbacks?: CmsBlockFallbacks;
};

export function CmsPage({ blocks, children, data, fallbacks }: CmsPageProps) {
  const dataAttribute = createCmsDataAttribute(data);

  return (
    <main>
      {blocks.map((block, index) => (
        <BlockRenderer
          block={block}
          blockPath={getBlockPath(block, index)}
          dataAttribute={dataAttribute}
          fallbacks={fallbacks}
          key={block._key || `${block._type}-${index}`}
        />
      ))}
      {children}
    </main>
  );
}
