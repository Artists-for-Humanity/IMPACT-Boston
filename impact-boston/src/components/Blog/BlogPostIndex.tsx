"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { stegaClean } from "next-sanity";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

import type { BlogPostSummary } from "@/cms/types/blog";
import Grid from "@/components/common/Grid";

type BlogPostIndexProps = {
  posts: BlogPostSummary[];
};

const PAGE_SIZE = 9;

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
] as const;

export default function BlogPostIndex({ posts }: BlogPostIndexProps) {
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]["value"]>(
    "newest",
  );
  const visiblePosts = useMemo(
    () =>
      posts
        .filter((post) =>
          Boolean(post.title?.trim() && getCleanSlug(post).trim()),
        )
        .sort((first, second) => {
          const firstTime = getPostTime(first);
          const secondTime = getPostTime(second);

          return sort === "newest"
            ? secondTime - firstTime
            : firstTime - secondTime;
        }),
    [posts, sort],
  );

  if (!visiblePosts.length) {
    return null;
  }

  const totalPages = Math.ceil(visiblePosts.length / PAGE_SIZE);
  const pageItems = visiblePosts.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );
  const rangeStart = page * PAGE_SIZE + 1;
  const rangeEnd = Math.min(page * PAGE_SIZE + PAGE_SIZE, visiblePosts.length);

  return (
    <section className="bg-white">
      <Grid noPaddingTop className="gap-y-8 md:gap-y-10 lg:gap-y-12">
        <div className="col-span-full flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="h3 text-black">All Blogs</h2>

          <div className="flex flex-wrap items-center gap-4">
            <select
              value={sort}
              onChange={(event) => {
                setSort(event.target.value as typeof sort);
                setPage(0);
              }}
              className="p2 rounded border border-line-divider bg-white px-3 py-1.5"
              aria-label="Sort blogs"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <span className="p2 text-light-grey-text">
              {rangeStart}-{rangeEnd} of {visiblePosts.length}
            </span>

            <div className="flex gap-2">
              <PaginationButton
                ariaLabel="Previous page"
                disabled={page === 0}
                onClick={() => setPage((current) => Math.max(0, current - 1))}
              >
                <ChevronLeft className="relative z-10 size-6 text-black" />
              </PaginationButton>
              <PaginationButton
                ariaLabel="Next page"
                disabled={page >= totalPages - 1}
                onClick={() =>
                  setPage((current) => Math.min(totalPages - 1, current + 1))
                }
              >
                <ChevronRight className="relative z-10 size-6 text-black" />
              </PaginationButton>
            </div>
          </div>
        </div>

        {pageItems.map((post) => (
          <article
            key={post._id || getCleanSlug(post)}
            className="col-span-full flex min-h-[320px] flex-col justify-between border border-line-divider p-6 md:p-7 lg:col-span-4 lg:min-h-[371px] lg:p-8"
          >
            <div className="flex flex-col gap-3">
              <h3 className="p1-bold text-black">{post.title}</h3>
              {post.excerpt ? <p className="p2 text-black">{post.excerpt}</p> : null}
              {post.publishedAt || post.author ? (
                <p className="p2 text-light-grey-text">
                  {[post.publishedAt ? formatDisplayDate(post.publishedAt) : null, post.author]
                    .filter(Boolean)
                    .join("  •  ")}
                </p>
              ) : null}
            </div>

            <Link
              href={`/Blog/${getCleanSlug(post)}`}
              className="link mt-8 self-start text-secondary underline underline-offset-2 transition hover:text-primary hover:no-underline"
            >
              Read Full Article
            </Link>
          </article>
        ))}
      </Grid>
    </section>
  );
}

function getCleanSlug(post: BlogPostSummary) {
  return stegaClean(post.slug)?.trim() ?? "";
}

function PaginationButton({
  ariaLabel,
  children,
  disabled,
  onClick,
}: {
  ariaLabel: string;
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="relative flex size-12 items-center justify-center rounded-full border border-line-divider bg-white transition hover:opacity-80 disabled:opacity-30"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

function getPostTime(post: BlogPostSummary) {
  if (!post.publishedAt) {
    return 0;
  }

  const [year, month, day] = post.publishedAt.split("-").map(Number);

  return year && month && day ? new Date(year, month - 1, day).getTime() : 0;
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
