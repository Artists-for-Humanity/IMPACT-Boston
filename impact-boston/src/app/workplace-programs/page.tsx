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
  title: "Workplace Self-Defense Workshops",
  description:
    "IMPACT Boston provides workplace self-defense and personal safety workshops, helping organizations build a culture of safety and empowerment.",
  openGraph: {
    title: "Workplace Self-Defense Workshops",
    description:
      "IMPACT Boston provides workplace self-defense and personal safety workshops, helping organizations build a culture of safety and empowerment.",
    url: "https://impactboston.org/workplace-programs",
  },
  alternates: {
    canonical: "https://impactboston.org/workplace-programs",
  },
};

const WORKPLACE_PROGRAMS_PAGE_ID = "workplacePrograms";

export default async function WorkplacePrograms() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(WORKPLACE_PROGRAMS_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
