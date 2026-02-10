// import { PortableText, type SanityDocument } from "next-sanity";
// import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
// import { client } from "@/sanity/client";
// import Link from "next/link";

// const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

// const { projectId, dataset } = client.config();
// const urlFor = (source: SanityImageSource) =>
//   projectId && dataset
//     ? createImageUrlBuilder({ projectId, dataset }).image(source)
//     : null;

// const options = { next: { revalidate: 30 } };

// export default async function PostPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
//   const postImageUrl = post.image
//     ? urlFor(post.image)?.width(550).height(310).url()
//     : null;

//   return (
//     <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
//       <Link href="/" className="hover:underline">
//         ← Back to posts
//       </Link>
//       {postImageUrl && (
//         <img
//           src={postImageUrl}
//           alt={post.title}
//           className="aspect-video rounded-xl"
//           width="550"
//           height="310"
//         />
//       )}
//       <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
//       <div className="prose">
//         <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
//         {Array.isArray(post.body) && <PortableText value={post.body} />}
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import { PortableText, type SanityDocument, defineQuery } from "next-sanity";
import { draftMode } from "next/headers";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";

const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    isEnabled
      ? {
          perspective: "drafts",
          useCdn: false,
          stega: true,
          // In preview you generally don't want Next caching
          cache: "no-store",
        }
      : {
          // For published pages keep your existing ISR behavior
          next: { revalidate: 30 },
        }
  );

  if (!post) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <Link href="/" className="hover:underline">← Back to posts</Link>
        <h1 className="text-2xl font-bold mt-6">Post not found</h1>
      </main>
    );
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>

      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}

      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

      <div className="prose">
        {post.publishedAt && (
          <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        )}
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}