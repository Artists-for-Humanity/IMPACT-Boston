import { MetadataRoute } from "next";

import { getBlogPostSlugs } from "@/sanity/blogPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    "/",
    "/about",
    "/board-and-staff",
    "/accessibility",
    "/public-classes",
    "/schools-and-colleges",
    "/people-with-disabilities",
    "/people-with-disabilities/ability",
    "/people-with-disabilities/asap",
    "/people-with-disabilities/abuse-prevention",
    "/community-organizations",
    "/workplace-programs",
    "/de-escalation",
    "/know-your-rights",
    "/healthy-relationships",
    "/what-is-empowerment-self-defense",
    "/books-by-meg-stone",
    "/fact-check-fridays",
    "/press",
    "/blog",
    "/resources",
    "/resources/abuse-survivors",
  ].map((path) => ({
    url: `https://impactboston.org${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const slugs = await getBlogPostSlugs();
    blogPages = slugs.map((slug) => ({
      url: `https://impactboston.org/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // If Sanity fetch fails, omit blog pages from sitemap
  }

  return [...staticPages, ...blogPages];
}
