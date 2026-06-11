import {createElement, type CSSProperties, type ReactNode} from 'react'

export const blockPreviewImageUrls: Record<string, string> = {
  hero1Block: '/static/block-previews/hero-1.svg',
  hero2Block: '/static/block-previews/hero-2.svg',
  actionPanelBlock: '/static/block-previews/action-panel.svg',
  ctaSectionBlock: '/static/block-previews/cta-section.svg',
  sideTabsBlock: '/static/block-previews/side-tabs.svg',
  highlightsBlock: '/static/block-previews/highlights.svg',
  testimonialsCarouselBlock: '/static/block-previews/testimonials-carousel.svg',
  testimonialsSpotlightBlock: '/static/block-previews/testimonials-spotlight.svg',
}

const blockPreviewImageStyle: CSSProperties = {
  background: '#ffffff',
  display: 'block',
  height: '100%',
  objectFit: 'contain',
  width: '100%',
}

function createBlockPreviewMedia(src: string, alt: string): ReactNode {
  return createElement('img', {
    alt,
    src,
    style: blockPreviewImageStyle,
  })
}

export const blockPreviewMedia = {
  hero1Block: createBlockPreviewMedia(blockPreviewImageUrls.hero1Block, 'Hero 1 block preview'),
  hero2Block: createBlockPreviewMedia(blockPreviewImageUrls.hero2Block, 'Hero 2 block preview'),
  actionPanelBlock: createBlockPreviewMedia(
    blockPreviewImageUrls.actionPanelBlock,
    'Action grid block preview',
  ),
  ctaSectionBlock: createBlockPreviewMedia(
    blockPreviewImageUrls.ctaSectionBlock,
    'CTA panels block preview',
  ),
  sideTabsBlock: createBlockPreviewMedia(
    blockPreviewImageUrls.sideTabsBlock,
    'Side tabs block preview',
  ),
  highlightsBlock: createBlockPreviewMedia(
    blockPreviewImageUrls.highlightsBlock,
    'Highlights carousel block preview',
  ),
  testimonialsCarouselBlock: createBlockPreviewMedia(
    blockPreviewImageUrls.testimonialsCarouselBlock,
    'Testimonials carousel block preview',
  ),
  testimonialsSpotlightBlock: createBlockPreviewMedia(
    blockPreviewImageUrls.testimonialsSpotlightBlock,
    'Testimonials spotlight block preview',
  ),
} as const
