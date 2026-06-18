import { stegaClean } from "next-sanity";

import type {
  ClassDescriptionItem,
  ClassDescriptionsProps,
} from "@/components/ClassDescriptions/ClassDescriptions";
import { resolveCmsLink } from "@/cms/links";
import type { CmsClassDescriptionsBlock } from "@/cms/types/blocks";

export function resolveClassDescriptionsBlock(
  section: CmsClassDescriptionsBlock,
): ClassDescriptionsProps {
  const items = section.classItems
    ?.map(resolveClassDescriptionItem)
    .filter((item): item is ClassDescriptionItem => Boolean(item));
  const seeAllLink = resolveCmsLink(
    section.seeAllLinkTarget,
    section.seeAllHref,
  );
  const seeAllLinkText = displayText(section.seeAllLinkText);

  return {
    title: displayText(section.title) || undefined,
    description: displayText(section.description) || undefined,
    items: items?.length ? items : undefined,
    seeAllLink:
      seeAllLink.href && seeAllLinkText
        ? {
            href: seeAllLink.href,
            openInNewTab: seeAllLink.openInNewTab,
            text: seeAllLinkText,
          }
        : undefined,
  };
}

function resolveClassDescriptionItem(
  item: ClassDescriptionItem,
): ClassDescriptionItem | null {
  const link = resolveCmsLink(item.linkTarget, item.href);
  const linkText = displayText(item.linkText) || link.href;
  const resolvedItem = {
    _key: item._key,
    cost: displayText(item.cost) || undefined,
    dateTime: displayText(item.dateTime) || undefined,
    description: displayText(item.description) || undefined,
    href: link.href,
    linkText,
    location: displayText(item.location) || undefined,
    name: displayText(item.name) || undefined,
    openInNewTab: link.openInNewTab,
    summary: displayText(item.summary) || undefined,
  };

  if (
    !resolvedItem.name &&
    !resolvedItem.summary &&
    !resolvedItem.cost &&
    !resolvedItem.dateTime &&
    !resolvedItem.location &&
    !resolvedItem.linkText &&
    !resolvedItem.description
  ) {
    return null;
  }

  return resolvedItem;
}

function displayText(value?: string | null) {
  return stegaClean(value)?.trim() || "";
}
