// shared schema objects
import {linkTargetType} from './linkTarget'

// page schemas
import {blogPostType} from './blogPostType'
import {cmsPageType, legacyCmsPageTypes} from './cmsPageType'
import {schoolsAndCollegesPageType} from './schoolsAndCollegesPageType'

// blocks
import {actionPanelBlockType} from './blocks/actionPanelBlock'
import {articleCalloutBlockType} from './blocks/articleCalloutBlock'
import {classDescriptionsBlockType} from './blocks/classDescriptionsBlock'
import {contentBlockType} from './blocks/contentBlock'
import {ctaSectionBlockType} from './blocks/ctaSectionBlock'
import {doubleContentBlockType} from './blocks/doubleContentBlock'
import {heroBlockType} from './blocks/heroBlock'
import {hero3BlockType} from './blocks/hero3Block'
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
  blogPostType,
  // Legacy aliases keep existing Sanity documents editable while content migrates to cmsPage.
  ...legacyCmsPageTypes,
  schoolsAndCollegesPageType,

  // blocks
  heroBlockType,
  hero3BlockType,
  articleCalloutBlockType,
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
