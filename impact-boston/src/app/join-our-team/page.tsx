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
  title: "Join Our Team",
  description:
    "Explore career opportunities at IMPACT Boston and help advance empowerment self-defense in Greater Boston.",
  openGraph: {
    title: "Join Our Team",
    description:
      "Explore career opportunities at IMPACT Boston and help advance empowerment self-defense in Greater Boston.",
    url: "https://impactboston.org/join-our-team",
  },
  alternates: {
    canonical: "https://impactboston.org/join-our-team",
  },
};

const JOIN_OUR_TEAM_PAGE_ID = "joinOurTeamPage";

export default async function JoinOurTeam() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(JOIN_OUR_TEAM_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
