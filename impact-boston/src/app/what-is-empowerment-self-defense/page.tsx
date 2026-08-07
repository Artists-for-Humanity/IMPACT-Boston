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
  title: "What is Empowerment Self-Defense?",
  description:
    "Discover what empowerment self-defense means — a whole-person approach that builds physical, verbal, and emotional skills to prevent and resist violence.",
  openGraph: {
    title: "What is Empowerment Self-Defense?",
    description:
      "Discover what empowerment self-defense means — a whole-person approach that builds physical, verbal, and emotional skills to prevent and resist violence.",
    url: "https://impactboston.org/what-is-empowerment-self-defense",
  },
  alternates: {
    canonical: "https://impactboston.org/what-is-empowerment-self-defense",
  },
};

const EMPOWERMENT_PAGE_ID = "empowerment";

export default async function Empowerment() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(EMPOWERMENT_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
