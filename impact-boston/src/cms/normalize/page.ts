import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsPageData, LandingPageData } from "@/cms/types/page";

export function getCmsPageBlocks(
  data: CmsPageData | null,
  fallbackBlocks: CmsPageBlock[] = [],
): CmsPageBlock[] {
  return data?.sections?.length ? data.sections : fallbackBlocks;
}

export function getLandingPageBlocks(
  data: LandingPageData | null,
  fallbackBlocks: CmsPageBlock[] = [],
): CmsPageBlock[] {
  return getCmsPageBlocks(data, fallbackBlocks);
}
