import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { stegaClean } from "next-sanity";

import {
  DEFAULT_CMS_BLOCK_FALLBACKS,
  DEFAULT_CMS_PAGE_BLOCKS,
} from "@/cms/fallbacks/blocks";
import { getCmsPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import type { CmsMediaGridItem, CmsPageBlock } from "@/cms/types/blocks";
import type { BlogPostSummary } from "@/cms/types/blog";
import { getBlogPostSummaries } from "@/sanity/blogPosts";
import { getCmsPageData } from "@/sanity/pageData";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest posts from IMPACT Boston on self-defense, safety, empowerment, and community well-being.",
  openGraph: {
    title: "Blog",
    description:
      "Read the latest posts from IMPACT Boston on self-defense, safety, empowerment, and community well-being.",
    url: "https://impactboston.org/blog",
  },
  alternates: {
    canonical: "https://impactboston.org/blog",
  },
};

const BLOG_PAGE_ID = "blog";

export default async function Blog() {
  const { isEnabled } = await draftMode();
  const [data, posts] = await Promise.all([
    getCmsPageData(BLOG_PAGE_ID, isEnabled),
    getBlogPostSummaries(isEnabled),
  ]);
  const blocks = getBlogPageBlocks(
    getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS),
    posts,
  );

  return (
    <CmsPage
      blocks={blocks}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}

function getBlogPageBlocks(
  blocks: CmsPageBlock[],
  posts: BlogPostSummary[],
): CmsPageBlock[] {
  const items = posts
    .map(getMediaGridItem)
    .filter((item): item is CmsMediaGridItem => Boolean(item));

  return blocks.map((block) =>
    block._type === "mediaGridBlock" ? { ...block, items } : block,
  );
}

function getMediaGridItem(post: BlogPostSummary): CmsMediaGridItem | null {
  const slug = stegaClean(post.slug)?.trim();
  const title = stegaClean(post.title)?.trim();
  const description = stegaClean(post.description)?.trim();

  if (!slug || !title || !description) {
    return null;
  }

  return {
    _key: post._id ?? slug,
    _id: post._id ?? undefined,
    _type: "blogPost",
    title,
    description,
    date: stegaClean(post.publishedAt)?.trim() || undefined,
    author: stegaClean(post.author)?.trim() || undefined,
    href: `/blog/${slug}`,
  };
}
