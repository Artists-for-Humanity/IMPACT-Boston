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
        headline: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "headline"),
        ),
        image: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "image")),
        subheader: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "subheader"),
        ),
      }}
    />
  );
}
