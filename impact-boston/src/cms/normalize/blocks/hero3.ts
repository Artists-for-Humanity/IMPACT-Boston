import { resolveCmsLink } from "@/cms/links";
import type { Hero3Props } from "@/components/Hero/Hero3";
import type { CmsHero3Block } from "@/cms/types/blocks";

export const DEFAULT_HERO3_FIELDS: Hero3Props = {
  headline: "Blogs,\nStories,\n& updates,",
  description:
    "Insights on safety, empowerment, and the people doing the work.",
  featuredArticle: {
    label: "Most Recent",
    title: "Inside the Suit",
    description:
      "B Whitney, Program Coordinator, brings decades of experience teaching acting to their work at IMPACT. Their work is essential to helping our suited instructors learn their craft.",
    date: "2026-01-23",
    author: "B Whitney",
    href: "/Blog",
    linkText: "Read Full Article",
  },
};

export function resolveHero3Block(section: CmsHero3Block): Hero3Props {
  const link = resolveCmsLink(section.featuredLinkTarget, section.featuredHref);

  return {
    headline: cleanText(section.headline) || DEFAULT_HERO3_FIELDS.headline,
    description:
      cleanText(section.description) || DEFAULT_HERO3_FIELDS.description,
    featuredArticle: {
      label: cleanText(section.featuredLabel) || undefined,
      title:
        cleanText(section.featuredTitle) ||
        DEFAULT_HERO3_FIELDS.featuredArticle.title,
      description:
        cleanText(section.featuredDescription) ||
        DEFAULT_HERO3_FIELDS.featuredArticle.description,
      date: cleanText(section.featuredDate) || undefined,
      author: cleanText(section.featuredAuthor) || undefined,
      href: link.href || DEFAULT_HERO3_FIELDS.featuredArticle.href,
      openInNewTab: link.openInNewTab,
      linkText:
        cleanText(section.featuredLinkText) ||
        DEFAULT_HERO3_FIELDS.featuredArticle.linkText,
    },
  };
}

function cleanText(value?: string | null) {
  return value?.trim() ?? "";
}
