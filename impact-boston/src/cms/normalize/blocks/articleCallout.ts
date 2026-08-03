import { stegaClean } from "next-sanity";

import type { ArticleCalloutProps } from "@/components/Content/ArticleCallout";
import { resolveCmsLink } from "@/cms/links";
import type { CmsArticleCalloutBlock } from "@/cms/types/blocks";

export function resolveArticleCalloutBlock(
  section: CmsArticleCalloutBlock,
): ArticleCalloutProps | null {
  const calloutText = cleanText(section.calloutText);
  const calloutTextAs = (stegaClean(section.calloutTextAs) as ArticleCalloutProps["calloutTextAs"]) ?? undefined;
  const calloutSubtext = cleanText(section.calloutSubtext) || undefined;
  const articleTitle = cleanText(section.articleTitle);
  const articleDescription = cleanText(section.articleDescription);
  const linkText = cleanText(section.linkText);
  const link = resolveCmsLink(section.linkTarget, section.href);

  if (
    !calloutText ||
    !articleTitle ||
    !articleDescription ||
    !linkText ||
    !link.href
  ) {
    return null;
  }

  return {
    calloutText,
    calloutTextAs,
    calloutSubtext,
    article: {
      author: cleanText(section.articleAuthor) || undefined,
      description: articleDescription,
      href: link.href,
      linkText,
      openInNewTab: link.openInNewTab,
      title: articleTitle,
    },
  };
}

function cleanText(value?: string | null) {
  return stegaClean(value)?.trim() ?? "";
}
