import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsBlockFallbacks, CmsPageData } from "@/cms/types/page";
import { createCmsDataAttribute, getBlockPath } from "@/cms/visualEditing";
import BlockRenderer from "./BlockRenderer";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function blockAutoId(block: CmsPageBlock): string {
  // Only use simple top-level title fields — never fall back to nested tab/panel/card
  // labels, which would create duplicate IDs with those components' own elements.
  const b = block as {
    title?: string;
    heading?: string;
    label?: string;
    articleTitle?: string;
  };
  const text = b.title || b.heading || b.label || b.articleTitle || "";
  return text ? slugify(text) : "";
}

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

        // sideTabsBlock manages its own per-tab anchor spans internally — a
        // block-level id would collide with tab ids and activate no specific tab.
        const resolvedId =
          block._type === "sideTabsBlock"
            ? undefined
            : block.sectionId || blockAutoId(block) || undefined;

        return resolvedId ? (
          <div id={resolvedId} key={key} className="scroll-mt-[120px]">
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
