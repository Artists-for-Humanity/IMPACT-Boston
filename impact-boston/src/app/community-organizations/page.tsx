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
  title: "Community Organization Programs",
  description:
    "Partner with IMPACT Boston to bring empowerment self-defense workshops to your community organization, shelter, nonprofit, or cultural group.",
  openGraph: {
    title: "Community Organization Programs",
    description:
      "Partner with IMPACT Boston to bring empowerment self-defense workshops to your community organization, shelter, nonprofit, or cultural group.",
    url: "https://impactboston.org/community-organizations",
  },
  alternates: {
    canonical: "https://impactboston.org/community-organizations",
  },
};

const COMMUNITY_ORGANIZATIONS_PAGE_ID = "communityOrganizations";

export default async function CommunityOrganizations() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(COMMUNITY_ORGANIZATIONS_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
