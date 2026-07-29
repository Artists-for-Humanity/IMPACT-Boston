import { draftMode } from "next/headers";

import {
  DEFAULT_CMS_BLOCK_FALLBACKS,
  DEFAULT_CMS_PAGE_BLOCKS,
} from "@/cms/fallbacks/blocks";
import { getCmsPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import { getCmsPageData } from "@/sanity/pageData";

const ASAP_PAGE_ID = "ASAPPage";

export default async function ASAP() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(ASAP_PAGE_ID, isEnabled);

  const blocks = getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS).map((block) =>
    block._type === "hero2Block"
      ? { ...block, headlineAs: "h2" as const, tag: "People With Disabilities - ASAP" }
      : block,
  );

  return (
    <CmsPage
      blocks={blocks}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
