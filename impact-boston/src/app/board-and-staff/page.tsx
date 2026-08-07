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
  title: "Board and Staff",
  description:
    "Meet the IMPACT Boston board of directors and staff — dedicated individuals working to advance empowerment self-defense in Greater Boston.",
  openGraph: {
    title: "Board and Staff",
    description:
      "Meet the IMPACT Boston board of directors and staff — dedicated individuals working to advance empowerment self-defense in Greater Boston.",
    url: "https://impactboston.org/board-and-staff",
  },
  alternates: {
    canonical: "https://impactboston.org/board-and-staff",
  },
};

const BOARD_AND_STAFF_PAGE_ID = "boardAndStaff";

export default async function BoardAndStaff() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(BOARD_AND_STAFF_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
