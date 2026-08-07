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
  title: "Healthy Relationships & Sex Education",
  description:
    "IMPACT Boston's healthy relationships and sex education programs help youth and adults build skills for consent, communication, and safer connections.",
  openGraph: {
    title: "Healthy Relationships & Sex Education",
    description:
      "IMPACT Boston's healthy relationships and sex education programs help youth and adults build skills for consent, communication, and safer connections.",
    url: "https://impactboston.org/healthy-relationships",
  },
  alternates: {
    canonical: "https://impactboston.org/healthy-relationships",
  },
};

const HEALTHY_RELATIONSHIPS_PAGE_ID = "healthyRelationships";

export default async function HealthyRelationships() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(HEALTHY_RELATIONSHIPS_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
