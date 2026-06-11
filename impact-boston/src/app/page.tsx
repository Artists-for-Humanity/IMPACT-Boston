import { draftMode } from "next/headers";

import {
  DEFAULT_CMS_BLOCK_FALLBACKS,
  DEFAULT_CMS_PAGE_BLOCKS,
} from "@/cms/fallbacks/blocks";
import { getLandingPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import { getLandingPageData } from "@/sanity/landingPageData";

export default async function IndexPage() {
  const { isEnabled } = await draftMode();
  const data = await getLandingPageData(isEnabled);

  return (
    <CmsPage
      blocks={getLandingPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
