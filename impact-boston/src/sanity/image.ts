// optimizes any images coming from sanity, and provides helper functions (urlFor) for working with them.
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { client } from "./client";

const { dataset, projectId } = client.config();

export function urlFor(source: SanityImageSource) {
  return projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;
}

export type { SanityImageSource };
