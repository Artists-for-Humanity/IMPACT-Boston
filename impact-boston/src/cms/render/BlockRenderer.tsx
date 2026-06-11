import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsBlockFallbacks } from "@/cms/types/page";
import ActionPanelBlock from "./blocks/ActionPanelBlock";
import ContentBlock from "./blocks/ContentBlock";
import CtaSectionBlock from "./blocks/CtaSectionBlock";
import HeroBlock from "./blocks/HeroBlock";
import HighlightsBlock from "./blocks/HighlightsBlock";
import SideTabsBlock from "./blocks/SideTabsBlock";
import TestimonialsBlock from "./blocks/TestimonialsBlock";

type BlockRendererProps = {
  block: CmsPageBlock;
  fallbacks?: CmsBlockFallbacks;
};

export default function BlockRenderer({
  block,
  fallbacks,
}: BlockRendererProps) {
  switch (block._type) {
    case "hero1Block":
    case "hero2Block":
      return <HeroBlock section={block} fallback={fallbacks?.hero} />;

    case "actionPanelBlock":
      return (
        <ActionPanelBlock section={block} fallback={fallbacks?.actionPanel} />
      );

    case "ctaSectionBlock":
      return (
        <CtaSectionBlock section={block} fallback={fallbacks?.ctaSection} />
      );

    case "sideTabsBlock":
      return (
        <SideTabsBlock section={block} fallbackTabs={fallbacks?.sideTabs} />
      );

    case "highlightsBlock":
      return (
        <HighlightsBlock section={block} fallback={fallbacks?.highlights} />
      );

    case "testimonialsCarouselBlock":
    case "testimonialsSpotlightBlock":
      return (
        <TestimonialsBlock section={block} fallback={fallbacks?.testimonials} />
      );

    case "contentBlock":
      return <ContentBlock section={block} />;

    default:
      return null;
  }
}
