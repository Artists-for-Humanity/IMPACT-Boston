import ActionPanel from "@/components/Action/ActionPanel";
import type {
  CmsActionPanelBlock,
  SanityActionPanelFields,
} from "@/cms/types/blocks";
import { resolveCmsLink } from "@/cms/links";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type ActionPanelBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  fallback?: SanityActionPanelFields;
  section: CmsActionPanelBlock;
};

export default function ActionPanelBlock({
  blockPath,
  dataAttribute,
  fallback,
  section,
}: ActionPanelBlockProps) {
  const cards = section.cards?.length ? section.cards : fallback?.cards;
  const cardsWithDataAttributes = cards?.map((card, index) => {
    const cardPath = getArrayItemPath(blockPath, "cards", card, index);
    const link = resolveCmsLink(card.linkTarget, card.href);

    return {
      ...card,
      href: link.href,
      openInNewTab: link.openInNewTab,
      dataAttributes: {
        body: getFieldDataAttribute(dataAttribute, extendPath(cardPath, "body")),
        href: getFieldDataAttribute(dataAttribute, extendPath(cardPath, "href")),
        title: getFieldDataAttribute(dataAttribute, extendPath(cardPath, "title")),
      },
    };
  });

  return (
    <ActionPanel
      title={section.title ?? fallback?.title}
      subtext={section.subtext ?? fallback?.subtext}
      cards={cardsWithDataAttributes}
      dataAttributes={{
        subtext: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "subtext")),
        title: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "title")),
      }}
    />
  );
}
