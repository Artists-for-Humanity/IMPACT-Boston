import type { Metadata } from "next";
import { draftMode } from "next/headers";

import {
  DEFAULT_CMS_BLOCK_FALLBACKS,
  DEFAULT_CMS_PAGE_BLOCKS,
} from "@/cms/fallbacks/blocks";
import { getCmsPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import { getCmsPageData } from "@/sanity/pageData";

export const metadata: Metadata = {
  title: "Fact Check Fridays",
  description:
    "Fact Check Fridays is IMPACT Boston's series debunking myths about violence, self-defense, and safety with evidence-based information.",
  openGraph: {
    title: "Fact Check Fridays",
    description:
      "Fact Check Fridays is IMPACT Boston's series debunking myths about violence, self-defense, and safety with evidence-based information.",
    url: "https://impactboston.org/fact-check-fridays",
  },
  alternates: {
    canonical: "https://impactboston.org/fact-check-fridays",
  },
};

const FACT_CHECK_FRIDAY_PAGE_ID = "factCheckFriday";

export default async function FactCheckFriday() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(FACT_CHECK_FRIDAY_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
