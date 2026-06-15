import { stegaClean } from "next-sanity";

import type {
  ListDetailItem,
  ListItem,
  ListProps,
} from "@/components/List/List";
import type { CmsListBlock } from "@/cms/types/blocks";

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut lorem porttitor.";

const DEFAULT_ACCORDION_BODY =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ultrices massa a lacinia. Praesent sit amet ipsum dapibus, eleifend dui vel, fringilla orci. Donec et dui conLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ultrices massa a lacinia. Praesent sit amet ipsum dapibus, eleifend dui vel, fringilla orci. Donec et dui conLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ultrices massa a lacinia. Praesent sit amet ipsum dapibus, eleifend dui vel, fringilla orci. Donec et dui con";

const DEFAULT_LIST_ITEMS: ListItem[] = [
  {
    title: "Static List Item",
    description: DEFAULT_DESCRIPTION,
    href: "#",
  },
  {
    title: "Accordion - Collapsed",
    description: DEFAULT_DESCRIPTION,
    href: "#",
    accordionContent: DEFAULT_ACCORDION_BODY,
  },
  {
    title: "Accordion - Expanded",
    description: DEFAULT_DESCRIPTION,
    accordionContent: DEFAULT_ACCORDION_BODY,
    defaultOpen: true,
  },
  {
    title: "List with Information Icon",
    description: DEFAULT_DESCRIPTION,
    href: "#",
    showInfoIcon: true,
  },
  {
    title: "Accordion with Information Icon",
    description: DEFAULT_DESCRIPTION,
    href: "#",
    showInfoIcon: true,
    accordionContent: DEFAULT_ACCORDION_BODY,
  },
  ...Array.from({ length: 8 }, () => ({
    title: "Item",
    description: DEFAULT_DESCRIPTION,
    href: "#",
  })),
];

const DEFAULT_DETAIL_FIELDS = [
  { label: "Name", value: "Middle School Safety" },
  { label: "Summary", value: "7-hour class, all genders, ages 10-13" },
  { label: "Cost", value: "Course Fee: $150. Scholarships always available!" },
  { label: "Date/Time", value: "6/6/26 10am-5pm" },
  { label: "Location", value: "Brighton, MA" },
  {
    label: "Link",
    value: "http://www.sample.org/head",
    href: "http://www.sample.org/head",
  },
];

const DEFAULT_DETAIL_ITEMS: ListDetailItem[] = Array.from(
  { length: 5 },
  () => ({
    fields: DEFAULT_DETAIL_FIELDS,
    descriptionTitle: "Description",
    description:
      "This course helps students develop the skills to respond to potentially dangerous situations. Students learn to avoid altercations, resist intimidation, assert themselves in the face of peer pressure and escape potential assaults. They are also taught how to report dangerous situations to a safe adult. Scenarios focus on issues relevant to their lives such as bullying, dating situations, and increasing independence, as well as violence perpetrated by strangers.",
  }),
);

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
    title: cleanText(section.title) || "List Component",
    description: cleanText(section.description) || DEFAULT_DESCRIPTION,
    linkText: cleanText(section.linkText) || "See all 14 services",
    linkHref: cleanText(section.linkHref) || "#",
    items: listItems?.length ? listItems : DEFAULT_LIST_ITEMS,
    detailItems: detailItems?.length ? detailItems : DEFAULT_DETAIL_ITEMS,
  };
}

function resolveListItem(item: ListItem): ListItem | null {
  const title = cleanText(item.title);
  const description = cleanText(item.description);

  if (!title || !description) {
    return null;
  }

  return {
    title,
    description,
    href: cleanText(item.href) || undefined,
    showInfoIcon: Boolean(item.showInfoIcon),
    accordionContent:
      cleanText(item.accordionContent) ||
      cleanText(item.paragraph) ||
      undefined,
    defaultOpen: Boolean(item.defaultOpen),
  };
}

function resolveDetailItem(item: ListDetailItem): ListDetailItem | null {
  const fields = item.fields
    ?.map((field) => ({
      label: cleanText(field.label),
      value: cleanText(field.value),
      href: cleanText(field.href) || undefined,
    }))
    .filter((field) => field.label && field.value);
  const description = cleanText(item.description);

  if (!fields?.length || !description) {
    return null;
  }

  return {
    fields,
    descriptionTitle: cleanText(item.descriptionTitle) || "Description",
    description,
  };
}

function cleanText(value?: string | null) {
  return stegaClean(value)?.trim() ?? "";
}
