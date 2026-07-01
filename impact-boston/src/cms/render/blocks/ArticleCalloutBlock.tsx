import ArticleCallout from "@/components/Content/ArticleCallout";
import { resolveArticleCalloutBlock } from "@/cms/normalize/blocks/articleCallout";
import type { CmsArticleCalloutBlock } from "@/cms/types/blocks";
import {
  extendPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type ArticleCalloutBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsArticleCalloutBlock;
};

export default function ArticleCalloutBlock({
  blockPath,
  dataAttribute,
  section,
}: ArticleCalloutBlockProps) {
  const props = resolveArticleCalloutBlock(section);

  if (!props) {
    return null;
  }

  return (
    <ArticleCallout
      {...props}
      dataAttributes={{
        articleAuthor: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "articleAuthor"),
        ),
        articleDescription: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "articleDescription"),
        ),
        articleTitle: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "articleTitle"),
        ),
        calloutText: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "calloutText"),
        ),
        linkText: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "linkText"),
        ),
      }}
    />
  );
}
