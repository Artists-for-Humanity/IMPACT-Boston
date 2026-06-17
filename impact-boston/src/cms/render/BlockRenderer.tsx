import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsBlockFallbacks } from "@/cms/types/page";
import type { CmsDataAttribute, CmsFieldPath } from "@/cms/visualEditing";
import ActionPanelBlock from "./blocks/ActionPanelBlock";
import ContentBlock from "./blocks/ContentBlock";
import CtaSectionBlock from "./blocks/CtaSectionBlock";
import DoubleContentBlock from "./blocks/DoubleContentBlock";
import HighlightBannerBlock from "./blocks/HighlightBannerBlock";
import HeroBlock from "./blocks/HeroBlock";
import HighlightsBlock from "./blocks/HighlightsBlock";
import ImageGridBlock from "./blocks/ImageGridBlock";
import ListBlock from "./blocks/ListBlock";
import SideTabsBlock from "./blocks/SideTabsBlock";
import SingleContentBlock from "./blocks/SingleContentBlock";
import TestimonialsBlock from "./blocks/TestimonialsBlock";
import TripleContentBlock from "./blocks/TripleContentBlock";

type BlockRendererProps = {
  block: CmsPageBlock;
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  fallbacks?: CmsBlockFallbacks;
};

export default function BlockRenderer({
  block,
  blockPath,
  dataAttribute,
  fallbacks,
}: BlockRendererProps) {
  switch (block._type) {
    case "hero1Block":
    case "hero2Block":
      return (
        <HeroBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
          fallback={fallbacks?.hero}
        />
      );

    case "actionPanelBlock":
      return (
        <ActionPanelBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
          fallback={fallbacks?.actionPanel}
        />
      );

    case "ctaSectionBlock":
      return (
        <CtaSectionBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
          fallback={fallbacks?.ctaSection}
        />
      );

    case "singleContentBlock":
      return (
        <SingleContentBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
        />
      );

    case "doubleContentBlock":
      return (
        <DoubleContentBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
        />
      );

    case "tripleContentBlock":
      return (
        <TripleContentBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
        />
      );

    case "listBlock":
      return (
        <ListBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
        />
      );

    case "sideTabsBlock":
      return (
        <SideTabsBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
          fallbackTabs={fallbacks?.sideTabs}
        />
      );

    case "highlightBannerBlock":
      return (
        <HighlightBannerBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
        />
      );

    case "highlightsBlock":
      return (
        <HighlightsBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
          fallback={fallbacks?.highlights}
        />
      );

    case "testimonialsCarouselBlock":
    case "testimonialsSpotlightBlock":
      return (
        <TestimonialsBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
          fallback={fallbacks?.testimonials}
        />
      );

    case "contentBlock":
      return (
        <ContentBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
        />
      );

    case "imageGridBlock":
      return (
        <ImageGridBlock
          blockPath={blockPath}
          dataAttribute={dataAttribute}
          section={block}
        />
      );

    default:
      return null;
  }
}
