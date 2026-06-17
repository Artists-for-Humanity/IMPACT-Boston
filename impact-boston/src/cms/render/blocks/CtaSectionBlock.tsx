import CtaSection from "@/components/Action/CtaSection";
import type {
  CmsCtaSectionBlock,
  SanityCtaSectionFields,
} from "@/cms/types/blocks";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type CtaSectionBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  fallback?: SanityCtaSectionFields;
  section: CmsCtaSectionBlock;
};

export default function CtaSectionBlock({
  blockPath,
  dataAttribute,
  fallback,
  section,
}: CtaSectionBlockProps) {
  const panels = section.panels?.length ? section.panels : fallback?.panels;
  const panelsWithDataAttributes = panels?.map((panel, index) => {
    const panelPath = getArrayItemPath(blockPath, "panels", panel, index);

    return {
      ...panel,
      dataAttributes: {
        buttonText: getFieldDataAttribute(
          dataAttribute,
          extendPath(panelPath, "buttonText"),
        ),
        description: getFieldDataAttribute(
          dataAttribute,
          extendPath(panelPath, "description"),
        ),
        href: getFieldDataAttribute(dataAttribute, extendPath(panelPath, "href")),
        title: getFieldDataAttribute(dataAttribute, extendPath(panelPath, "title")),
        titleLine2: getFieldDataAttribute(
          dataAttribute,
          extendPath(panelPath, "titleLine2"),
        ),
      },
    };
  });

  return <CtaSection panels={panelsWithDataAttributes} />;
}
