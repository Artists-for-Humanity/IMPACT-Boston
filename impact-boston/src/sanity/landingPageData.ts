import type { LandingPageData } from "@/cms/types/page";

import { getCmsPageData } from "./pageData";

export async function getLandingPageData(
  isDraftModeEnabled: boolean,
): Promise<LandingPageData | null> {
  return getCmsPageData("landingPage", isDraftModeEnabled);
}
