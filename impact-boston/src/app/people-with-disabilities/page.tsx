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
  title: "Self-Defense for People with Disabilities",
  description:
    "IMPACT Boston offers self-defense programs tailored for people with disabilities, including wheelchair users, those with sensory impairments, and more.",
  openGraph: {
    title: "Self-Defense for People with Disabilities",
    description:
      "IMPACT Boston offers self-defense programs tailored for people with disabilities, including wheelchair users, those with sensory impairments, and more.",
    url: "https://impactboston.org/people-with-disabilities",
  },
  alternates: {
    canonical: "https://impactboston.org/people-with-disabilities",
  },
};

const DISABILITY_PAGE_ID = "disabilitiesPage";

export default async function Disabilities() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(DISABILITY_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
