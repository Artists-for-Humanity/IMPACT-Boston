"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Grid from "@/components/common/Grid";
import Link from "next/link";

export interface MediaGridItem {
  title: string;
  description: string;
  date?: string;
  author?: string;
  href: string;
  openInNewTab?: boolean;
}

export interface MediaGridProps {
  title: string;
  subheader?: string;
  items: MediaGridItem[];
}

const PAGE_SIZE = 9;

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
];

export default function MediaGrid({
  title,
  subheader,
  items,
}: MediaGridProps) {
  const [featured, ...allRest] = items;
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("newest");

  const sorted = sort === "oldest" ? [...allRest].reverse() : allRest;
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const pageItems = sorted.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const rangeStart = page * PAGE_SIZE + 1;
  const rangeEnd = Math.min(page * PAGE_SIZE + PAGE_SIZE, sorted.length);

  return (
    <div>
      {/* Section 1: Header + Featured */}
      <Grid className="gap-y-8 md:gap-y-10 lg:gap-y-16">
        <div className="col-span-full grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12 lg:items-end">
          <div className="col-span-full lg:col-span-6 flex flex-col gap-12 lg:self-center">
            <h1 className="h1">{title}</h1>
            {subheader && <p className="p1 lg:w-2/3">{subheader}</p>}
          </div>

          {featured && (
            <div
              className="col-span-full lg:col-start-7 lg:col-span-6 flex flex-col gap-8 p-4 md:p-6 lg:p-8 lg:h-[386px] lg:justify-between"
              style={{
                border: "1px solid var(--Line-Divider, #DDD)",
                background: "var(--Complimentary-Light, #FFFAF7)",
              }}
            >
              <div className="flex flex-col" style={{ gap: "16px" }}>
                <span style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  padding: "2px 6px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "13px",
                  borderRadius: "8px",
                  border: "1px solid var(--Complimentary, #E86834)",
                  background: "var(--White, #FFF)",
                  color: "var(--Complimentary, #E86834)",
                  fontFamily: '"IBM Plex Sans"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}>Most Recent</span>
                <div className="flex flex-col gap-3">
                  <p className="p1-bold">{featured.title}</p>
                  <p className="p2">{featured.description}</p>
                  {(featured.date || featured.author) && (
                    <p className="p2" style={{ color: "var(--color-black-60)" }}>
                      {[featured.date ? formatDate(featured.date) : null, featured.author].filter(Boolean).join("  •  ")}
                    </p>
                  )}
                </div>
              </div>
              <Link
                href={featured.href}
                target={featured.openInNewTab ? "_blank" : undefined}
                rel={featured.openInNewTab ? "noopener noreferrer" : undefined}
                className="p2 underline"
              >
                Read Full Article
              </Link>
            </div>
          )}
        </div>
      </Grid>

      {/* Section 2: All Blogs bar + Cards */}
      <Grid className="gap-y-2 md:gap-y-4 lg:gap-y-6">
        {/* All Blogs bar */}
        <div className="col-span-full flex flex-col gap-6 py-4 md:flex-row md:items-center md:justify-between">
          <h3 className="h3">All Blogs</h3>
          <div className="flex items-center justify-between gap-4 md:justify-start">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-8 p-2 border border-[#DDD] rounded bg-white">
                <select
                  value={sort}
                  onChange={(e) => { setSort(e.target.value); setPage(0); }}
                  className="p2 appearance-none bg-transparent"
                  aria-label="Sort blogs"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 pointer-events-none shrink-0" />
              </div>
              <span className="p2" style={{ color: "var(--color-black-60)" }}>
                {sorted.length > 0 ? `${rangeStart}–${rangeEnd} of ${sorted.length}` : "0 articles"}
              </span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="w-8 h-8 lg:w-12 lg:h-12 relative flex items-center justify-center transition-opacity hover:opacity-80 disabled:opacity-30"
                aria-label="Previous page"
              >
                <svg viewBox="0 0 46 46" fill="none" className="absolute w-8 h-8 lg:w-[46px] lg:h-[46px]">
                  <circle cx="23" cy="23" r="22.5" stroke="#dddddd" fill="white" />
                </svg>
                <ChevronLeft className="w-6 h-6 text-black relative z-10" strokeWidth={2} />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className="w-8 h-8 lg:w-12 lg:h-12 relative flex items-center justify-center transition-opacity hover:opacity-80 disabled:opacity-30"
                aria-label="Next page"
              >
                <svg viewBox="0 0 46 46" fill="none" className="absolute w-8 h-8 lg:w-[46px] lg:h-[46px]">
                  <circle cx="23" cy="23" r="22.5" stroke="#dddddd" fill="white" />
                </svg>
                <ChevronRight className="w-6 h-6 text-black relative z-10" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Blog grid */}
        <div className="col-span-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-x-6 lg:gap-y-2">
          {pageItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-8 p-4 md:p-6 lg:p-8 lg:min-h-[371px] lg:items-start lg:[flex:1_0_0] lg:self-stretch lg:justify-between"
              style={{ border: "1px solid var(--Line-Divider, #DDD)" }}
            >
              <div className="flex flex-col gap-3">
                <p className="p1-bold">{item.title}</p>
                <p className="p2">{item.description}</p>
                {(item.date || item.author) && (
                  <p className="p2" style={{ color: "var(--color-black-60)" }}>
                    {[item.date ? formatDate(item.date) : null, item.author].filter(Boolean).join("  •  ")}
                  </p>
                )}
              </div>
              <Link
                href={item.href}
                target={item.openInNewTab ? "_blank" : undefined}
                rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                className="p2 underline"
              >
                Read Full Article
              </Link>
            </div>
          ))}
        </div>
      </Grid>
    </div>
  );
}
