import type { CmsSideTabsBlock } from "@/cms/types/blocks";
import type { SideTab } from "@/components/TabsPanel/SideTabs";
import { CMS_FALLBACK_COPY } from "./copy";

export const DEFAULT_SIDE_TABS_BLOCK_FALLBACK: SideTab[] = [
  {
    label: "Tab One",
    content: [
      { type: "heading", text: CMS_FALLBACK_COPY.title },
      { type: "paragraph", bold: true, text: CMS_FALLBACK_COPY.subtitle },
      { type: "divider" },
      { type: "subheading", text: CMS_FALLBACK_COPY.title },
      { type: "paragraph", text: CMS_FALLBACK_COPY.body },
    ],
  },
  {
    label: "Tab Two",
    content: [
      { type: "heading", text: CMS_FALLBACK_COPY.title },
      { type: "paragraph", bold: true, text: CMS_FALLBACK_COPY.subtitle },
      { type: "divider" },
      { type: "subheading", text: CMS_FALLBACK_COPY.title },
      { type: "paragraph", text: CMS_FALLBACK_COPY.body },
    ],
  },
  {
    label: "Tab Three",
    content: [
      { type: "heading", text: CMS_FALLBACK_COPY.title },
      {
        type: "bullets",
        items: [
          CMS_FALLBACK_COPY.body,
          CMS_FALLBACK_COPY.body,
          CMS_FALLBACK_COPY.body,
        ],
      },
    ],
  },
];

export const DEFAULT_SIDE_TABS_BLOCK: CmsSideTabsBlock = {
  _key: "fallback-side-tabs",
  _type: "sideTabsBlock",
  tabs: DEFAULT_SIDE_TABS_BLOCK_FALLBACK,
};
