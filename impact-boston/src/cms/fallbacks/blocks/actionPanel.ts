import type {
  CmsActionPanelBlock,
  SanityActionPanelFields,
} from "@/cms/types/blocks";
import { CMS_FALLBACK_COPY } from "./copy";

export const DEFAULT_ACTION_PANEL_BLOCK_FALLBACK: SanityActionPanelFields = {
  title: CMS_FALLBACK_COPY.title,
  subtext: CMS_FALLBACK_COPY.subtitle,
  cards: [
    {
      title: CMS_FALLBACK_COPY.title,
      body: CMS_FALLBACK_COPY.cardBody,
      href: "#",
      bgColor: "#e86834",
      icon: "handshake",
    },
    {
      title: CMS_FALLBACK_COPY.title,
      body: CMS_FALLBACK_COPY.cardBody,
      href: "#",
      bgColor: "#563672",
      icon: "user",
    },
    {
      title: CMS_FALLBACK_COPY.title,
      body: CMS_FALLBACK_COPY.cardBody,
      href: "#",
      bgColor: "#311e41",
      icon: "dollar-sign",
    },
  ],
};

export const DEFAULT_ACTION_PANEL_BLOCK: CmsActionPanelBlock = {
  _key: "fallback-action-panel",
  _type: "actionPanelBlock",
  ...DEFAULT_ACTION_PANEL_BLOCK_FALLBACK,
};
