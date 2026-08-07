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
  title: "IMPACT:Ability Programs",
  description:
    "IMPACT:Ability brings inclusive self-defense training to people with a range of disabilities, adapting techniques for each participant's needs.",
  openGraph: {
    title: "IMPACT:Ability Programs",
    description:
      "IMPACT:Ability brings inclusive self-defense training to people with a range of disabilities, adapting techniques for each participant's needs.",
    url: "https://impactboston.org/people-with-disabilities/ability",
  },
  alternates: {
    canonical: "https://impactboston.org/people-with-disabilities/ability",
  },
};

const ABILITY_PAGE_ID = "abilityPage";

export default async function Ability() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(ABILITY_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
