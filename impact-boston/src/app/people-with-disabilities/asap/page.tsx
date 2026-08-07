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
  title: "ASAP Program",
  description:
    "The ASAP program from IMPACT Boston delivers specialized self-defense and safety training for people with a variety of disabilities and support needs.",
  openGraph: {
    title: "ASAP Program",
    description:
      "The ASAP program from IMPACT Boston delivers specialized self-defense and safety training for people with a variety of disabilities and support needs.",
    url: "https://impactboston.org/people-with-disabilities/asap",
  },
  alternates: {
    canonical: "https://impactboston.org/people-with-disabilities/asap",
  },
};

const ASAP_PAGE_ID = "ASAPPage";

export default async function ASAP() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(ASAP_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
