import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import { client } from "@/sanity/client";
import { DraftModeIndicator } from "@/components/DraftModeIndicator";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export default async function IndexPage() {
  const { isEnabled: isDraftMode } = await draftMode();
  const posts = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      next: { revalidate: isDraftMode ? 0 : 30 },
      perspective: isDraftMode ? "previewDrafts" : "published",
    }
  );

  return (
    <>
      <DraftModeIndicator />
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <h1 className="text-4xl font-bold">Posts</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Latest updates from IMPACT Boston
          </p>
        </div>

        <div className="col-span-12">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {posts.map((post) => (
              <li
                key={post._id}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50"
              >
                <Link href={`/${post.slug.current}`} className="block">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}