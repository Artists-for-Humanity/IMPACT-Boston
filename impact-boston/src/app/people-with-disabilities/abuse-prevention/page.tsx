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
  title: "Abuse Prevention Programs",
  description:
    "IMPACT Boston's abuse prevention programs equip people with disabilities with the skills to recognize, resist, and report unsafe situations.",
  openGraph: {
    title: "Abuse Prevention Programs",
    description:
      "IMPACT Boston's abuse prevention programs equip people with disabilities with the skills to recognize, resist, and report unsafe situations.",
    url: "https://impactboston.org/people-with-disabilities/abuse-prevention",
  },
  alternates: {
    canonical:
      "https://impactboston.org/people-with-disabilities/abuse-prevention",
  },
};

const ABUSE_PREVENTION_PAGE_ID = "AbusePreventionPage";

export default async function AbusePrevention() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(ABUSE_PREVENTION_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
