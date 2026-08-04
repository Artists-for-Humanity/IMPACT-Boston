import { stegaClean } from "next-sanity";

import type {
  EventListItem,
  EventListProps,
} from "@/components/Events/EventList";
import { resolveCmsLink } from "@/cms/links";
import type {
  CmsEventListBlock,
  SanityEventListFields,
  SanityEventListItem,
} from "@/cms/types/blocks";

export function resolveEventListBlock(
  section: CmsEventListBlock,
  fallback?: SanityEventListFields,
): EventListProps {
  const events = resolveEventListItems(
    section.events?.length ? section.events : fallback?.events,
  );

  return {
    description:
      displayText(section.description) ||
      displayText(fallback?.description) ||
      undefined,
    events,
    noPaddingTop: section.noPaddingTop ?? fallback?.noPaddingTop ?? undefined,
    showChevrons: section.showChevrons ?? fallback?.showChevrons ?? undefined,
    title: displayText(section.title) || displayText(fallback?.title) || undefined,
  };
}

function resolveEventListItems(
  events?: SanityEventListItem[] | null,
): EventListItem[] | undefined {
  const resolvedEvents = events
    ?.map(resolveEventListItem)
    .filter((event): event is EventListItem => Boolean(event));

  return resolvedEvents?.length ? resolvedEvents : undefined;
}

function resolveEventListItem(item: SanityEventListItem): EventListItem | null {
  const link = resolveCmsLink(item.linkTarget, item.href);
  const linkText = displayText(item.linkText) || link.href;
  const registerLabel = linkText
    ? displayText(item.registerLabel) || "Register here:"
    : undefined;
  const resolvedItem: EventListItem = {
    _key: item._key,
    dateLabel: displayText(item.dateLabel) || undefined,
    defaultOpen: Boolean(item.defaultOpen),
    details: displayText(item.details) || undefined,
    href: link.href,
    linkText,
    openInNewTab: link.openInNewTab,
    registerLabel,
    title: displayText(item.title) || undefined,
  };

  if (
    !resolvedItem.dateLabel &&
    !resolvedItem.details &&
    !resolvedItem.href &&
    !resolvedItem.linkText &&
    !resolvedItem.registerLabel &&
    !resolvedItem.title
  ) {
    return null;
  }

  return resolvedItem;
}

function displayText(value?: string | null) {
  return stegaClean(value)?.trim() || "";
}
