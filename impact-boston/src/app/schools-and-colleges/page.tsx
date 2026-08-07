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
  title: "Programs for Schools & Colleges",
  description:
    "IMPACT Boston brings empowerment self-defense programs to K–12 schools and colleges, teaching students practical safety and boundary-setting skills.",
  openGraph: {
    title: "Programs for Schools & Colleges",
    description:
      "IMPACT Boston brings empowerment self-defense programs to K–12 schools and colleges, teaching students practical safety and boundary-setting skills.",
    url: "https://impactboston.org/schools-and-colleges",
  },
  alternates: {
    canonical: "https://impactboston.org/schools-and-colleges",
  },
};

const SCHOOLS_AND_COLLEGES_PAGE_ID = "schoolsAndCollegesPage";

export default async function SchoolAndColleges() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(SCHOOLS_AND_COLLEGES_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
