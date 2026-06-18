import SideTabs, { type SideTab } from "@/components/TabsPanel/SideTabs";
import type { SideTabContentBlock } from "@/components/TabsPanel/types";
import { resolveCmsLink } from "@/cms/links";
import { resolveSideTabs } from "@/cms/normalize/blocks/sideTabs";
import type { CmsSideTabsBlock } from "@/cms/types/blocks";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type SideTabsBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsSideTabsBlock;
  fallbackTabs?: SideTab[];
};

type ResourceListContentBlock = Extract<
  SideTabContentBlock,
  { _type: "resourceList" }
>;
type TrainerListContentBlock = Extract<
  SideTabContentBlock,
  { _type: "trainerList" }
>;
type SideTabsLinkContentBlock = Extract<
  SideTabContentBlock,
  { _type: "sideTabsLink" }
>;

export default function SideTabsBlock({
  blockPath,
  dataAttribute,
  section,
  fallbackTabs,
}: SideTabsBlockProps) {
  const tabs = resolveSideTabs(section.tabs, fallbackTabs);
  const tabsWithDataAttributes = tabs.map((tab, index) => {
    const tabPath = getArrayItemPath(blockPath, "tabs", tab, index);

    return {
      ...tab,
      content: tab.content.map((contentBlock, contentIndex) =>
        withContentDataAttributes(
          contentBlock,
          getArrayItemPath(tabPath, "content", contentBlock, contentIndex),
          dataAttribute,
        ),
      ),
      dataAttributes: {
        label: getFieldDataAttribute(dataAttribute, extendPath(tabPath, "label")),
      },
    };
  });

  if (!tabsWithDataAttributes.length) {
    return null;
  }

  return (
    <section className="w-full bg-white">
      <SideTabs tabs={tabsWithDataAttributes} />
    </section>
  );
}

function withContentDataAttributes(
  block: SideTabContentBlock,
  blockPath: CmsFieldPath,
  dataAttribute?: CmsDataAttribute,
): SideTabContentBlock {
  if (!("_type" in block) || block._type === "block") {
    return block;
  }

  if (isResourceListContentBlock(block)) {
    return {
      ...block,
      items: block.items?.map((item) => {
        const titleLink = resolveCmsLink(item.titleLinkTarget, item.href);
        const detailLink = resolveCmsLink(item.detailLinkTarget, item.detailHref);

        return {
          ...item,
          href: titleLink.href,
          openInNewTab: titleLink.openInNewTab,
          detailHref: detailLink.href,
          detailOpenInNewTab: detailLink.openInNewTab,
        };
      }),
      dataAttributes: {
        eyebrow: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "eyebrow"),
        ),
        items: block.items?.map((item, index) => {
          const itemPath = getArrayItemPath(blockPath, "items", item, index);

          return {
            description: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "description"),
            ),
            detail: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "detail"),
            ),
            expandedDescription: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "expandedDescription"),
            ),
            href: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "href")),
            title: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "title")),
          };
        }),
      },
    };
  }

  if (isTrainerListContentBlock(block)) {
    return {
      ...block,
      items: block.items?.map((item) => {
        const contactLink = resolveCmsLink(item.contactLinkTarget, item.contactHref);

        return {
          ...item,
          contactHref: contactLink.href,
          contactOpenInNewTab: contactLink.openInNewTab,
        };
      }),
      dataAttributes: {
        items: block.items?.map((item, index) => {
          const itemPath = getArrayItemPath(blockPath, "items", item, index);

          return {
            contact: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "contact"),
            ),
            name: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "name")),
            organization: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "organization"),
            ),
            state: getFieldDataAttribute(dataAttribute, extendPath(itemPath, "state")),
          };
        }),
      },
    };
  }

  if (isSideTabsLinkContentBlock(block)) {
    const link = resolveCmsLink(block.linkTarget, block.href);

    return {
      ...block,
      href: link.href,
      openInNewTab: link.openInNewTab,
      dataAttributes: {
        href: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "href")),
        text: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "text")),
      },
    };
  }

  return block;
}

function isResourceListContentBlock(
  block: SideTabContentBlock,
): block is ResourceListContentBlock {
  return "_type" in block && block._type === "resourceList";
}

function isTrainerListContentBlock(
  block: SideTabContentBlock,
): block is TrainerListContentBlock {
  return "_type" in block && block._type === "trainerList";
}

function isSideTabsLinkContentBlock(
  block: SideTabContentBlock,
): block is SideTabsLinkContentBlock {
  return "_type" in block && block._type === "sideTabsLink";
}
