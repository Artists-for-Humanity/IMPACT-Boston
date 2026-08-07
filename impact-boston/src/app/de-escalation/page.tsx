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
  title: "De-Escalation Training",
  description:
    "IMPACT Boston's de-escalation training teaches verbal and nonverbal strategies to reduce conflict and promote safety in high-tension situations.",
  openGraph: {
    title: "De-Escalation Training",
    description:
      "IMPACT Boston's de-escalation training teaches verbal and nonverbal strategies to reduce conflict and promote safety in high-tension situations.",
    url: "https://impactboston.org/de-escalation",
  },
  alternates: {
    canonical: "https://impactboston.org/de-escalation",
  },
};

const DE_ESCALATION_PAGE_ID = "deEscalation";

export default async function DeEscalation() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(DE_ESCALATION_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
