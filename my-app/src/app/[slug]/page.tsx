import {defineQuery} from "next-sanity";
import {draftMode} from "next/headers";
import {notFound} from "next/navigation";
import {client} from "@/sanity/client";

const query = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{title}`
);

export default async function Page({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  const {isEnabled} = await draftMode();

  const data = await client.fetch(
    query,
    {slug},
    isEnabled
      ? {
          perspective: "drafts",
          useCdn: false,
          stega: true,
        }
      : undefined
  );

  if (!data?.title) {
    notFound();
  }

  return <h1>{data.title}</h1>;
}