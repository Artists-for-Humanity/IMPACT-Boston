import type { PortableTextBlock } from "next-sanity";
import type { CmsLinkTarget } from "@/cms/links";

export type DirectoryItem = {
  _key?: string | null;
  name: string;
  detail?: string;
};

export type ResourceListItem = {
  _key?: string | null;
  title: string;
  href?: string;
  titleLinkTarget?: CmsLinkTarget | null;
  openInNewTab?: boolean | null;
  detail?: string;
  description?: string;
  phoneNumber?: string;
  expandedDescription?: string;
  meta?: string[];
  icon?: "external" | "chevron";
  dataAttributes?: {
    description?: string;
    detail?: string;
    expandedDescription?: string;
    href?: string;
    title?: string;
  };
};

export type TrainerListItem = {
  _key?: string | null;
  name: string;
  organization: string;
  state: string;
  contact?: string;
  contactHref?: string;
  contactLinkTarget?: CmsLinkTarget | null;
  contactOpenInNewTab?: boolean | null;
  dataAttributes?: {
    contact?: string;
    name?: string;
    organization?: string;
    state?: string;
  };
};

type ContentBlockDataAttributes = {
  eyebrow?: string;
  href?: string;
  items?: Array<
    | {
        contact?: string;
        description?: string;
        detail?: string;
        expandedDescription?: string;
        href?: string;
        name?: string;
        organization?: string;
        state?: string;
        title?: string;
      }
    | undefined
  >;
  text?: string;
};

export type TabContentBlock =
  | { type: "heading"; text: string; dataAttributes?: ContentBlockDataAttributes }
  | {
      type: "paragraph";
      text: string;
      bold?: boolean;
      dataAttributes?: ContentBlockDataAttributes;
    }
  | { type: "subheading"; text: string; dataAttributes?: ContentBlockDataAttributes }
  | {
      type: "bullets";
      items: string[];
      bold?: boolean;
      dataAttributes?: ContentBlockDataAttributes;
    }
  | {
      type: "list";
      items: string[];
      bold?: boolean;
      dataAttributes?: ContentBlockDataAttributes;
    }
  | {
      type: "numberedList";
      items: string[];
      dataAttributes?: ContentBlockDataAttributes;
    }
  | { type: "columns"; items: string[][] }
  | { type: "divider" }
  | {
      type: "resourceList";
      eyebrow: string;
      previewCount?: number;
      items: ResourceListItem[];
      dataAttributes?: ContentBlockDataAttributes;
    }
  | {
      type: "trainerList";
      state: string;
      sortLabel: string;
      previewCount?: number;
      items: TrainerListItem[];
      dataAttributes?: ContentBlockDataAttributes;
    }
  | {
      type: "link";
      text: string;
      href: string;
      linkTarget?: CmsLinkTarget | null;
      openInNewTab?: boolean | null;
      dataAttributes?: ContentBlockDataAttributes;
    }
  | { type: "quote"; quote: string; attribution?: string }
  | {
      type: "directory";
      title?: string;
      previewCount?: number;
      items: DirectoryItem[];
    };

export type SanityColumn = {
  items?: string[];
};

export type SanityTabContentBlock =
  | { _key?: string; _type: "columns"; items?: Array<SanityColumn | string[]> }
  | { _key?: string; _type: "divider" }
  | { _key?: string; _type: "quote"; quote?: string; attribution?: string }
  | {
      _key?: string;
      _type: "resourceList";
      eyebrow?: string;
      previewCount?: number;
      items?: ResourceListItem[];
      dataAttributes?: ContentBlockDataAttributes;
    }
  | {
      _key?: string;
      _type: "trainerList";
      state?: string;
      sortLabel?: string;
      previewCount?: number;
      items?: TrainerListItem[];
      dataAttributes?: ContentBlockDataAttributes;
    }
  | {
      _key?: string;
      _type: "directory";
      title?: string;
      previewCount?: number;
      items?: DirectoryItem[];
    }
  | {
      _key?: string;
      _type: "sideTabsLink";
      text?: string;
      href?: string;
      linkTarget?: CmsLinkTarget | null;
      openInNewTab?: boolean | null;
      dataAttributes?: ContentBlockDataAttributes;
    };

export type SideTabContentBlock =
  | TabContentBlock
  | SanityTabContentBlock
  | PortableTextBlock;

export type SideTab = {
  _key?: string | null;
  label: string;
  content: SideTabContentBlock[];
  dataAttributes?: {
    label?: string;
  };
};
