import Link from "next/link";
import {defineQuery} from 'next-sanity'
import {draftMode} from 'next/headers'
import {client} from '@/sanity/client'

type Post = {
  _id: string
  title?: string | null
  slug?: string | null
  publishedAt?: string | null
}

const postsQuery = defineQuery(`*[_type == "post"]|order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt
}`)

export default async function Home() {
  const {isEnabled} = await draftMode()

  const posts = await client.fetch<Post[]>(
    postsQuery,
    {},
    isEnabled ? {perspective: 'drafts', useCdn: false, stega: true} : undefined
  )

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-8 py-24 px-8 bg-white dark:bg-black sm:items-start">
        <header className="flex w-full flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Posts
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Latest posts from Sanity
          </p>
        </header>
        <ul className="flex w-full flex-col gap-4">
          {posts?.length ? (
            posts.map((post) => (
              <li
                key={post._id}
                className="rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800"
              >
                <Link
                  className="text-lg font-medium text-black hover:underline dark:text-zinc-50"
                  href={`/${post.slug ?? ''}`}
                >
                  {post.title ?? 'Untitled'}
                </Link>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Unpublished'}
                </p>
              </li>
            ))
          ) : (
            <li className="text-zinc-600 dark:text-zinc-400">
              No posts yet.
            </li>
          )}
        </ul>
      </main>
    </div>
  );
}
