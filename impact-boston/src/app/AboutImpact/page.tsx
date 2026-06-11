import { draftMode } from "next/headers";

import {
  DEFAULT_CMS_BLOCK_FALLBACKS,
  DEFAULT_CMS_PAGE_BLOCKS,
} from "@/cms/fallbacks/blocks";
import { getCmsPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import { getCmsPageData } from "@/sanity/pageData";

const ABOUT_IMPACT_PAGE_ID = "aboutImpactPage";

export default async function AboutImpact() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(ABOUT_IMPACT_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
