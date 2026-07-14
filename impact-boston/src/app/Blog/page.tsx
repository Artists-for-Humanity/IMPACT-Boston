import { draftMode } from "next/headers";

import {
  DEFAULT_CMS_BLOCK_FALLBACKS,
  DEFAULT_CMS_PAGE_BLOCKS,
} from "@/cms/fallbacks/blocks";
import { getCmsPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import BlogPostIndex from "@/components/Blog/BlogPostIndex";
import { getBlogPostSummaries } from "@/sanity/blogPosts";
import { getCmsPageData } from "@/sanity/pageData";

const BLOG_PAGE_ID = "blog";

export default async function Blog() {
  const { isEnabled } = await draftMode();
  const [data, posts] = await Promise.all([
    getCmsPageData(BLOG_PAGE_ID, isEnabled),
    getBlogPostSummaries(isEnabled),
  ]);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, DEFAULT_CMS_PAGE_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    >
      <BlogPostIndex posts={posts} />
    </CmsPage>
  );
}
