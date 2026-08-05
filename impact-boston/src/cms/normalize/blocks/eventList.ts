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
    dateLabel: formatEventDate(item.dateLabel) || undefined,
    defaultOpen: Boolean(item.defaultOpen),
    details: item.details?.length ? item.details : undefined,
    href: link.href,
    linkText,
    openInNewTab: link.openInNewTab,
    registerLabel,
    title: displayText(item.title) || undefined,
  };

  if (
    !resolvedItem.dateLabel &&
    !resolvedItem.details?.length &&
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

function getOrdinal(n: number): string {
  const v = n % 100;
  if (v >= 11 && v <= 13) return "th";
  switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const FULL_MONTH_RE = /^(January|February|March|April|May|June|July|August|September|October|November|December)/;

function formatEventDate(value?: string | null): string {
  const raw = stegaClean(value)?.trim();
  if (!raw) return "";
  // ISO date from the date picker: YYYY-MM-DD
  const isoMatch = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const month = parseInt(isoMatch[2], 10);
    const day = parseInt(isoMatch[3], 10);
    return `${MONTH_NAMES[month - 1]} ${day}${getOrdinal(day)}`;
  }
  // Legacy string data — abbreviate any full month name to 3 letters
  return raw.replace(FULL_MONTH_RE, (m) => m.slice(0, 3));
}
