import { createDataAttribute, type CreateDataAttribute } from "next-sanity";
import type { Path, StudioPathLike } from "@sanity/client/csm";

import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsPageData } from "@/cms/types/page";

export type CmsDataAttribute = CreateDataAttribute<{
  id: string;
  type: string;
}>;

export type CmsFieldPath = Path;

export function createCmsDataAttribute(
  data?: CmsPageData | null,
): CmsDataAttribute | undefined {
  if (!data?._id || !data?._type) {
    return undefined;
  }

  return createDataAttribute({
    baseUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    id: data._id,
    projectId:
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder-project-id",
    type: data._type,
  });
}

export function getBlockPath(block: CmsPageBlock, index: number): CmsFieldPath {
  return ["sections", block._key ? { _key: block._key } : index];
}

export function extendPath(
  basePath: CmsFieldPath,
  ...segments: Path[number][]
): CmsFieldPath {
  return [...basePath, ...segments];
}

export function getArrayItemPath(
  basePath: CmsFieldPath,
  fieldName: string,
  item: unknown,
  index: number,
): CmsFieldPath {
  const key =
    typeof item === "object" &&
    item !== null &&
    "_key" in item &&
    typeof item._key === "string"
      ? item._key
      : undefined;

  return extendPath(basePath, fieldName, key ? { _key: key } : index);
}

export function getFieldDataAttribute(
  dataAttribute: CmsDataAttribute | undefined,
  path: StudioPathLike,
) {
  return dataAttribute ? dataAttribute(path) : undefined;
}
