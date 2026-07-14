import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import BlogPost from "@/cms/render/BlogPost";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/sanity/blogPosts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug, false);

  if (!post) {
    return {
      title: "Blog Post | IMPACT Boston",
    };
  }

  return {
    title: `${post.title ?? "Blog Post"} | IMPACT Boston`,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const post = await getBlogPostBySlug(slug, isEnabled);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
