// shared schema objects
import {linkTargetType} from './linkTarget'

// page schemas
import {cmsPageType, legacyCmsPageTypes} from './cmsPageType'

// blocks
import {actionPanelBlockType} from './blocks/actionPanelBlock'
import {classDescriptionsBlockType} from './blocks/classDescriptionsBlock'
import {contentBlockType} from './blocks/contentBlock'
import {ctaSectionBlockType} from './blocks/ctaSectionBlock'
import {doubleContentBlockType} from './blocks/doubleContentBlock'
import {heroBlockType} from './blocks/heroBlock'
import {highlightBannerBlockType} from './blocks/highlightBannerBlock'
import {highlightsBlockType} from './blocks/highlightsBlock'
import {imageGridBlockType} from './blocks/imageGridBlock'
import {listBlockType} from './blocks/listBlock'
import {mediaGridBlockType} from './blocks/mediaGridBlock'
import {sideTabsBlockType} from './blocks/sideTabsBlock'
import {singleContentBlockType} from './blocks/singleContentBlock'
import {testimonialsBlockType} from './blocks/testimonialsBlock'
import {tripleContentBlockType} from './blocks/tripleContentBlock'

export const schemaTypes = [
  // shared schema objects
  linkTargetType,

  // page schemas
  cmsPageType,
  // Legacy aliases keep existing Sanity documents editable while content migrates to cmsPage.
  ...legacyCmsPageTypes,

  // blocks
  heroBlockType,
  contentBlockType,
  actionPanelBlockType,
  ctaSectionBlockType,
  singleContentBlockType,
  doubleContentBlockType,
  tripleContentBlockType,
  listBlockType,
  classDescriptionsBlockType,
  sideTabsBlockType,
  highlightBannerBlockType,
  highlightsBlockType,
  imageGridBlockType,
  mediaGridBlockType,
  testimonialsBlockType,
]
