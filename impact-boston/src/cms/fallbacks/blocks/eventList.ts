import type { CmsEventListBlock, SanityEventListFields } from "@/cms/types/blocks";

const DEFAULT_REGISTRATION_URL =
  "https://impactboston.app.neoncrm.com/np/clients/impactboston/eventRegistration.jsp?event=481&";

export const DEFAULT_EVENT_LIST_BLOCK_FALLBACK: SanityEventListFields = {
  events: [
    {
      dateLabel: "Jul 10th",
      title: "Stranger Danger with Paul Renfro and Shameka Gregory",
      registerLabel: "Register here:",
      linkTarget: {
        _type: "linkTarget",
        type: "url",
        url: DEFAULT_REGISTRATION_URL,
        openInNewTab: true,
      },
    },
  ],
  noPaddingTop: true,
  showChevrons: true,
};

export const DEFAULT_EVENT_LIST_BLOCK: CmsEventListBlock = {
  _key: "fallback-event-list",
  _type: "eventListBlock",
  ...DEFAULT_EVENT_LIST_BLOCK_FALLBACK,
};
