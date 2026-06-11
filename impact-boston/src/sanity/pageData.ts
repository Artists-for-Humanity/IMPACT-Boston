import type { CmsPageData } from "@/cms/types/page";

import { client } from "./client";
import { CMS_PAGE_QUERY } from "./queries/pages";

export async function getCmsPageData(
  pageId: string,
  isDraftModeEnabled: boolean,
): Promise<CmsPageData | null> {
  try {
    return await client.fetch<CmsPageData | null>(
      CMS_PAGE_QUERY,
      { pageId },
      isDraftModeEnabled
        ? {
            perspective: "drafts",
            useCdn: false,
            stega: true,
            cache: "no-store",
          }
        : { next: { revalidate: 60 } },
    );
  } catch (error) {
    console.error(`Failed to fetch CMS page content for ${pageId}.`, error);
    return null;
  }
}
