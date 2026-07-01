import Hero3 from "@/components/Hero/Hero3";
import { resolveHero3Block } from "@/cms/normalize/blocks/hero3";
import type { CmsHero3Block } from "@/cms/types/blocks";
import {
  extendPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type Hero3BlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsHero3Block;
};

export default function Hero3Block({
  blockPath,
  dataAttribute,
  section,
}: Hero3BlockProps) {
  return (
    <Hero3
      {...resolveHero3Block(section)}
      dataAttributes={{
        description: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "description"),
        ),
        featuredAuthor: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "featuredAuthor"),
        ),
        featuredDate: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "featuredDate"),
        ),
        featuredDescription: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "featuredDescription"),
        ),
        featuredLabel: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "featuredLabel"),
        ),
        featuredLinkText: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "featuredLinkText"),
        ),
        featuredTitle: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "featuredTitle"),
        ),
        headline: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "headline"),
        ),
      }}
    />
  );
}
