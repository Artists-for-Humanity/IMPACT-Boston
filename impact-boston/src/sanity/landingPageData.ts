import type { LandingPageData } from "@/cms/types/page";

import { client } from "./client";
import { LANDING_PAGE_QUERY } from "./queries/pages";

export async function getLandingPageData(
  isDraftModeEnabled: boolean,
): Promise<LandingPageData | null> {
  try {
    return await client.fetch<LandingPageData | null>(
      LANDING_PAGE_QUERY,
      {},
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
    console.error("Failed to fetch landing page content from Sanity.", error);
    return null;
  }
}
