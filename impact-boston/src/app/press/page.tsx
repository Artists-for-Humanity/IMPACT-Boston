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
  title: "Press & Media",
  description:
    "Read news coverage, media mentions, and press resources about IMPACT Boston and the empowerment self-defense movement.",
  openGraph: {
    title: "Press & Media",
    description:
      "Read news coverage, media mentions, and press resources about IMPACT Boston and the empowerment self-defense movement.",
    url: "https://impactboston.org/press",
  },
  alternates: {
    canonical: "https://impactboston.org/press",
  },
};

const PRESS_PAGE_ID = "press";

export default async function Press() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(PRESS_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
