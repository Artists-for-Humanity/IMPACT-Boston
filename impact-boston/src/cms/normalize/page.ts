import type { CmsPageBlock } from "@/cms/types/blocks";
import type { LandingPageData } from "@/cms/types/page";

export function getLandingPageBlocks(
  data: LandingPageData | null,
  fallbackBlocks: CmsPageBlock[] = [],
): CmsPageBlock[] {
  return data?.sections?.length ? data.sections : fallbackBlocks;
}
