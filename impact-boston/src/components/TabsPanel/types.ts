import type { PortableTextBlock } from "next-sanity";

export type ResourceListItem = {
  title: string;
  href?: string;
  detail?: string;
  detailHref?: string;
  description?: string;
  expandedDescription?: string;
  meta?: string[];
  icon?: "external" | "chevron";
};

export type TrainerListItem = {
  name: string;
  organization: string;
  state: string;
  contact?: string;
  contactHref?: string;
};

export type TabContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string; bold?: boolean }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[]; bold?: boolean }
  | { type: "list"; items: string[]; bold?: boolean }
  | { type: "numberedList"; items: string[] }
  | { type: "columns"; items: string[][] }
  | { type: "divider" }
  | {
      type: "resourceList";
      eyebrow: string;
      previewCount?: number;
      items: ResourceListItem[];
    }
  | {
      type: "trainerList";
      state: string;
      sortLabel: string;
      previewCount?: number;
      items: TrainerListItem[];
    }
  | { type: "link"; text: string; href: string };

export type SanityColumn = {
  items?: string[];
};

export type SanityTabContentBlock =
  | { _key?: string; _type: "columns"; items?: Array<SanityColumn | string[]> }
  | { _key?: string; _type: "divider" }
  | {
      _key?: string;
      _type: "resourceList";
      eyebrow?: string;
      previewCount?: number;
      items?: ResourceListItem[];
    }
  | {
      _key?: string;
      _type: "trainerList";
      state?: string;
      sortLabel?: string;
      previewCount?: number;
      items?: TrainerListItem[];
    }
  | { _key?: string; _type: "sideTabsLink"; text?: string; href?: string };

export type SideTabContentBlock =
  | TabContentBlock
  | SanityTabContentBlock
  | PortableTextBlock;

export type SideTab = {
  label: string;
  content: SideTabContentBlock[];
};
