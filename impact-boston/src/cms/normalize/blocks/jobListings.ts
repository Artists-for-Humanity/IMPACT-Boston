import { stegaClean } from "next-sanity";

import type { JobListingItem, JobListingsProps } from "@/components/JobListings/JobListings";
import type { CmsJobListingsBlock } from "@/cms/types/blocks";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function displayText(value?: string | null) {
  return stegaClean(value)?.trim() || "";
}

export function resolveJobListingsBlock(
  section: CmsJobListingsBlock,
): JobListingsProps {
  const positions = section.positions
    ?.filter((item) => !item.hiddenFromWebsite)
    .map((item): JobListingItem | null => {
      const title = displayText(item.title);
      if (!title) return null;

      return {
        _key: item._key,
        title,
        id: slugify(title),
        summary: displayText(item.summary) || undefined,
        pdfUrl: item.pdfFile?.asset?.url || undefined,
        fileButtonText: displayText(item.fileButtonText) || undefined,
        applicationLink: displayText(item.applicationLink) || undefined,
      };
    })
    .filter((item): item is JobListingItem => item !== null);

  return {
    title: displayText(section.title) || undefined,
    intro: displayText(section.intro) || undefined,
    noOpeningsMessage: displayText(section.noOpeningsMessage) || undefined,
    positions: positions?.length ? positions : [],
  };
}
