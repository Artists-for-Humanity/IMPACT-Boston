import type { CmsHero3Block } from "@/cms/types/blocks";

export const DEFAULT_HERO3_BLOCK: CmsHero3Block = {
  _key: "fallback-hero-3",
  _type: "hero3Block",
  headline: "Blogs,\nStories,\n& updates,",
  description:
    "Insights on safety, empowerment, and the people doing the work.",
  featuredLabel: "Most Recent",
  featuredTitle: "Inside the Suit",
  featuredDescription:
    "B Whitney, Program Coordinator, brings decades of experience teaching acting to their work at IMPACT. Their work is essential to helping our suited instructors learn their craft.",
  featuredDate: "2026-01-23",
  featuredAuthor: "B Whitney",
  featuredLinkText: "Read Full Article",
  featuredLinkTarget: {
    _type: "linkTarget",
    type: "internal",
    internalPath: "/Blog",
    openInNewTab: false,
  },
};
