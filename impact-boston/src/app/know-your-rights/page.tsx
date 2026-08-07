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
  title: "Know Your Rights & Activist Safety",
  description:
    "IMPACT Boston's Know Your Rights program combines legal knowledge and personal safety skills for activists, organizers, and community members.",
  openGraph: {
    title: "Know Your Rights & Activist Safety",
    description:
      "IMPACT Boston's Know Your Rights program combines legal knowledge and personal safety skills for activists, organizers, and community members.",
    url: "https://impactboston.org/know-your-rights",
  },
  alternates: {
    canonical: "https://impactboston.org/know-your-rights",
  },
};

const KNOW_YOUR_RIGHTS_PAGE_ID = "knowYourRights";

export default async function KnowYourRights() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(KNOW_YOUR_RIGHTS_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
