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
  title: "Books by Meg Stone",
  description:
    "Explore books written by Meg Stone, Executive Director of IMPACT Boston, on self-defense, safety, and empowerment.",
  openGraph: {
    title: "Books by Meg Stone",
    description:
      "Explore books written by Meg Stone, Executive Director of IMPACT Boston, on self-defense, safety, and empowerment.",
    url: "https://impactboston.org/books-by-meg-stone",
  },
  alternates: {
    canonical: "https://impactboston.org/books-by-meg-stone",
  },
};

const BOOKS_BY_MEG_STONE_PAGE_ID = "booksByMegStone";

export default async function BooksByMegStone() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(BOOKS_BY_MEG_STONE_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
