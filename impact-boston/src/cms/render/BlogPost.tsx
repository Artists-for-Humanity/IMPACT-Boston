import Image from "next/image";
import Link from "next/link";
import {
  PortableText,
  type PortableTextComponents,
} from "next-sanity";

import Grid from "@/components/common/Grid";
import { resolveCmsLink, type CmsLinkTarget } from "@/cms/links";
import type {
  BlogPost as BlogPostType,
  BlogPostImageBlock,
  SanityImageWithMetadata,
} from "@/cms/types/blog";
import { urlFor } from "@/sanity/image";

type BlogPostProps = {
  post: BlogPostType;
};

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h2 className="h2 text-black">{children}</h2>,
    h2: ({ children }) => <h2 className="h3 text-black">{children}</h2>,
    h3: ({ children }) => <h3 className="sub-1 text-black">{children}</h3>,
    h4: ({ children }) => <h4 className="p1-bold text-black">{children}</h4>,
    sub1: ({ children }) => <p className="sub-1 text-black">{children}</p>,
    sub2: ({ children }) => (
      <p className="sub-2 text-secondary">{children}</p>
    ),
    normal: ({ children }) => <p className="p1 text-black">{children}</p>,
    p1: ({ children }) => <p className="p1 text-black">{children}</p>,
    p1Bold: ({ children }) => <p className="p1-bold text-black">{children}</p>,
    p2: ({ children }) => <p className="p2 text-black">{children}</p>,
    mediumLabel: ({ children }) => (
      <p className="medium-label text-secondary">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-complementary pl-4">
        <p className="p1 text-black">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-6 pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-4 pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="p1 text-black">{children}</li>,
    number: ({ children }) => <li className="p1 text-black">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const link = resolveCmsLink(
        getObjectField(value, "linkTarget"),
        getStringField(value, "href"),
      );
      const href = link.href;

      if (!href) {
        return <>{children}</>;
      }

      return (
        <a
          href={href}
          className="link text-secondary underline underline-offset-2 hover:text-primary hover:no-underline"
          target={link.openInNewTab ? "_blank" : undefined}
          rel={link.openInNewTab ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    blogPostImage: ({ value }) => (
      <BlogPostImage value={value as BlogPostImageBlock} />
    ),
    image: ({ value }) => <BlogPostImage value={value as BlogPostImageBlock} />,
  },
};

export default function BlogPost({ post }: BlogPostProps) {
  const title = post.title?.trim() || "Blog Post";
  const meta = [
    post.publishedAt ? formatDisplayDate(post.publishedAt) : null,
    post.author,
  ].filter(Boolean);

  return (
    <main className="bg-white">
      <Grid className="items-start gap-y-12 md:gap-y-14 lg:gap-y-18">
        <Link
          href="/Blog"
          className="link col-span-full text-grey underline underline-offset-2 transition hover:text-primary hover:no-underline md:col-span-2 lg:col-span-2"
        >
          &lt; Back to Blogs
        </Link>

        <article className="col-span-full md:col-span-6 lg:col-span-7 lg:col-start-4">
          <header className="flex flex-col gap-6 pb-12 md:pb-14 lg:pb-18">
            <h1 className="h2 text-black">{title}</h1>

            {meta.length ? (
              <p className="p2 text-light-grey-text">{meta.join("  •  ")}</p>
            ) : null}
          </header>

          {post.content?.length ? (
            <div className="flex flex-col gap-8 md:gap-10">
              <PortableText
                value={post.content}
                components={portableTextComponents}
              />
            </div>
          ) : null}
        </article>
      </Grid>
    </main>
  );
}

function BlogPostImage({ value }: { value: BlogPostImageBlock }) {
  const imageUrl = getImageUrl(value, 1200);

  if (!imageUrl) {
    return null;
  }

  const dimensions = getImageDimensions(value, 1200);

  return (
    <figure className="flex flex-col gap-3">
      <Image
        src={imageUrl}
        alt={value.alt?.trim() || ""}
        width={dimensions.width}
        height={dimensions.height}
        className="h-auto w-full bg-image-placeholder object-cover"
      />
      {value.caption ? (
        <figcaption className="p2 text-light-grey-text">{value.caption}</figcaption>
      ) : null}
    </figure>
  );
}

function getImageUrl(image?: SanityImageWithMetadata | null, width = 1200) {
  if (!image) {
    return undefined;
  }

  return (
    urlFor(image)?.width(width).fit("max").url() ??
    image.asset?.url ??
    undefined
  );
}

function getImageDimensions(
  image?: SanityImageWithMetadata | null,
  fallbackWidth = 1200,
) {
  const dimensions = image?.asset?.metadata?.dimensions;

  if (dimensions?.width && dimensions.height) {
    return {
      width: Math.round(dimensions.width),
      height: Math.round(dimensions.height),
    };
  }

  return {
    width: fallbackWidth,
    height: Math.round(fallbackWidth * 0.5625),
  };
}

function formatDisplayDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);

  if (!year || !month || !day) {
    return date;
  }

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getStringField(value: unknown, field: string) {
  if (typeof value !== "object" || value === null || !(field in value)) {
    return "";
  }

  const fieldValue = (value as Record<string, unknown>)[field];

  return typeof fieldValue === "string" ? fieldValue.trim() : "";
}

function getObjectField(value: unknown, field: string): CmsLinkTarget | undefined {
  if (typeof value !== "object" || value === null || !(field in value)) {
    return undefined;
  }

  const fieldValue = (value as Record<string, unknown>)[field];

  return typeof fieldValue === "object" && fieldValue !== null
    ? (fieldValue as CmsLinkTarget)
    : undefined;
}
