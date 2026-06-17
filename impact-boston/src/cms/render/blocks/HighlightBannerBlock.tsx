import { stegaClean } from "@sanity/client/stega";

import Highlight2 from "@/components/Highlights/Highlight2";
import type { CmsHighlightBannerBlock } from "@/cms/types/blocks";
import {
  extendPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type HighlightBannerBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsHighlightBannerBlock;
};

export default function HighlightBannerBlock({
  blockPath,
  dataAttribute,
  section,
}: HighlightBannerBlockProps) {
  const title = stegaClean(section.title)?.trim();
  const ctaLabel = stegaClean(section.ctaLabel)?.trim();
  const ctaHref = stegaClean(section.ctaHref)?.trim();
  const body = getBodyParagraphs(section.body);

  if (!title || !body.length || !ctaLabel || !ctaHref) {
    return null;
  }

  return (
    <Highlight2
      title={title}
      body={body}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      supportingText={stegaClean(section.supportingText)?.trim() || undefined}
      backgroundColor={getHexColor(section.backgroundColor) ?? "#311e41"}
      textColor={getHexColor(section.textColor) ?? "#ffffff"}
      buttonBgColor={getHexColor(section.buttonBgColor) ?? "#ffffff"}
      buttonTextColor={getHexColor(section.buttonTextColor) ?? "#000000"}
      supportingTextColor={getHexColor(section.supportingTextColor)}
      dataAttributes={{
        body: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "body")),
        ctaLabel: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "ctaLabel"),
        ),
        supportingText: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "supportingText"),
        ),
        title: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "title")),
      }}
    />
  );
}

function getBodyParagraphs(body?: string[] | string | null) {
  if (Array.isArray(body)) {
    return body
      .map((paragraph) => stegaClean(paragraph)?.trim() ?? "")
      .filter(Boolean);
  }

  return (stegaClean(body) ?? "")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function getHexColor(value?: string | null) {
  const color = stegaClean(value)?.trim();

  return color && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color)
    ? color
    : undefined;
}
