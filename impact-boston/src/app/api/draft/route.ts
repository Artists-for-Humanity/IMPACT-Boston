import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { client } from "@/sanity/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // Check the secret
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  // Verify the slug exists
  if (slug) {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]`,
      { slug }
    );

    if (!post) {
      return new Response("Post not found", { status: 404 });
    }
  }

  // Enable draft mode
  const draft = await draftMode();
  draft.enable();

  // Redirect to the post or home page
  redirect(slug ? `/${slug}` : "/");
}
