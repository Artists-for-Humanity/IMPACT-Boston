import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsBlockFallbacks } from "@/cms/types/page";
import ActionPanelBlock from "./blocks/ActionPanelBlock";
import ContentBlock from "./blocks/ContentBlock";
import CtaSectionBlock from "./blocks/CtaSectionBlock";
import DoubleContentBlock from "./blocks/DoubleContentBlock";
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

    case "singleContentBlock":
      return <SingleContentBlock section={block} />;

    case "doubleContentBlock":
      return <DoubleContentBlock section={block} />;

    case "tripleContentBlock":
      return <TripleContentBlock section={block} />;

    case "listBlock":
      return <ListBlock section={block} />;

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

    case "imageGridBlock":
      return <ImageGridBlock section={block} />;

    default:
      return null;
  }
}
