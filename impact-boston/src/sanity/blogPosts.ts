import type { BlogPost, BlogPostSummary } from "@/cms/types/blog";

import { client } from "./client";
import {
  BLOG_POST_BY_SLUG_QUERY,
  BLOG_POST_SLUGS_QUERY,
  BLOG_POST_SUMMARIES_QUERY,
} from "./queries/blogPosts";

type BlogPostSlugResult = {
  slug?: string | null;
};

const draftFetchOptions = {
  perspective: "drafts" as const,
  useCdn: false,
  stega: true,
  cache: "no-store" as const,
};

const publishedFetchOptions = { next: { revalidate: 60 } };

export async function getBlogPostBySlug(
  slug: string,
  isDraftModeEnabled: boolean,
): Promise<BlogPost | null> {
  if (!slug) {
    return null;
  }

  try {
    return await client.fetch<BlogPost | null>(
      BLOG_POST_BY_SLUG_QUERY,
      { slug },
      isDraftModeEnabled ? draftFetchOptions : publishedFetchOptions,
    );
  } catch (error) {
    console.error(`Failed to fetch blog post for slug ${slug}.`, error);
    return null;
  }
}

export async function getBlogPostSummaries(
  isDraftModeEnabled: boolean,
): Promise<BlogPostSummary[]> {
  try {
    return await client.fetch<BlogPostSummary[]>(
      BLOG_POST_SUMMARIES_QUERY,
      {},
      isDraftModeEnabled ? draftFetchOptions : publishedFetchOptions,
    );
  } catch (error) {
    console.error("Failed to fetch blog post summaries.", error);
    return [];
  }
}

export async function getBlogPostSlugs(): Promise<string[]> {
  try {
    const results = await client.fetch<BlogPostSlugResult[]>(
      BLOG_POST_SLUGS_QUERY,
      {},
      publishedFetchOptions,
    );

    return results
      .map((result) => result.slug?.trim())
      .filter((slug): slug is string => Boolean(slug));
  } catch (error) {
    console.error("Failed to fetch blog post slugs.", error);
    return [];
  }
}
