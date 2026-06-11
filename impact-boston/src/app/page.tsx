import { draftMode } from "next/headers";

import {
  HOME_PAGE_FALLBACK_BLOCKS,
  HOME_PAGE_FALLBACKS,
} from "@/cms/fallbacks/pages/home";
import { getLandingPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import { getLandingPageData } from "@/sanity/landingPageData";

export default async function IndexPage() {
  const { isEnabled } = await draftMode();
  const data = await getLandingPageData(isEnabled);

  return (
    <CmsPage
      blocks={getLandingPageBlocks(data, HOME_PAGE_FALLBACK_BLOCKS)}
      fallbacks={HOME_PAGE_FALLBACKS}
    />
  );
}
