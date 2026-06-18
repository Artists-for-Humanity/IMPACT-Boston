import { stegaClean } from "next-sanity";

import type {
  ListDetailItem,
  ListItem,
  ListProps,
} from "@/components/List/List";
import type { CmsListBlock } from "@/cms/types/blocks";

export function resolveListBlock(section: CmsListBlock): ListProps {
  const variant = section.variant === "details" ? "details" : "accordion";
  const listItems = section.listItems
    ?.map(resolveListItem)
    .filter((item): item is ListItem => Boolean(item));
  const detailItems = section.detailItems
    ?.map(resolveDetailItem)
    .filter((item): item is ListDetailItem => Boolean(item));

  return {
    variant,
    title: displayText(section.title) || undefined,
    description: displayText(section.description) || undefined,
    items: listItems?.length ? listItems : undefined,
    detailItems: detailItems?.length ? detailItems : undefined,
  };
}

function resolveListItem(item: ListItem): ListItem | null {
  const title = displayText(item.title);
  const description = displayText(item.description);
  const accordionContent =
    displayText(item.accordionContent) ||
    displayText(item.paragraph) ||
    undefined;

  if (!title && !description && !accordionContent) {
    return null;
  }

  return {
    _key: item._key,
    title: title || undefined,
    description: description || undefined,
    showInfoIcon: Boolean(item.showInfoIcon),
    accordionContent,
    defaultOpen: Boolean(item.defaultOpen),
  };
}

function resolveDetailItem(item: ListDetailItem): ListDetailItem | null {
  const fields = item.fields
    ?.map((field) => ({
      _key: field._key,
      label: displayText(field.label),
      value: displayText(field.value),
      href: controlText(field.href) || undefined,
    }))
    .filter((field) => hasText(field.label) && hasText(field.value));
  const description = displayText(item.description);

  if (!fields?.length || !description) {
    return null;
  }

  return {
    _key: item._key,
    fields,
    descriptionTitle: displayText(item.descriptionTitle) || "Description",
    description,
  };
}

function displayText(value?: string | null) {
  return hasText(value) ? (value?.trim() ?? "") : "";
}

function controlText(value?: string | null) {
  return stegaClean(value)?.trim() ?? "";
}

function hasText(value?: string | null) {
  return Boolean(stegaClean(value)?.trim());
}
