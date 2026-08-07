import type { Metadata } from "next";
import { draftMode } from "next/headers";

import {
  DEFAULT_CMS_BLOCK_FALLBACKS,
  DEFAULT_CMS_PAGE_BLOCKS,
} from "@/cms/fallbacks/blocks";
import { getCmsPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import { getLandingPageData } from "@/sanity/landingPageData";

export const metadata: Metadata = {
  title: "Empowerment Self-Defense Training in Boston",
  description:
    "IMPACT Boston teaches empowerment self-defense to people of all ages and abilities. Build real skills to stay safe in everyday situations.",
  openGraph: {
    title: "Empowerment Self-Defense Training in Boston",
    description:
      "IMPACT Boston teaches empowerment self-defense to people of all ages and abilities. Build real skills to stay safe in everyday situations.",
    url: "https://impactboston.org",
  },
  alternates: {
    canonical: "https://impactboston.org",
  },
};

export default async function IndexPage() {
  const { isEnabled } = await draftMode();
  const data = await getLandingPageData(isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
