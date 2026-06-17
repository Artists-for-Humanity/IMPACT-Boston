"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Grid from "@/components/common/Grid";
import Link from "next/link";

export interface MediaGridItem {
  title: string;
  description: string;
  subtext?: string;
  href: string;
  linkText?: string;
}

export interface MediaGridProps {
  title: string;
  subheader?: string;
  items: MediaGridItem[];
  backgroundColor?: string;
}

const PAGE_SIZE = 6;

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
];

export default function MediaGrid({
  title,
  subheader,
  items,
  backgroundColor,
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
    <div className={backgroundColor ?? ""}>
      <Grid className="gap-y-8 md:gap-y-10 lg:gap-y-16">
        {/* Header row */}
        <div className="col-span-full grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12 lg:items-end">
          <div className="col-span-full lg:col-span-6 flex flex-col gap-3">
            <h1 className="h1">{title}</h1>
            {subheader && <p className="p1 lg:w-2/3">{subheader}</p>}
          </div>

          {featured && (
            <div
              className="col-span-full lg:col-start-7 lg:col-span-6 flex flex-col gap-3 p-4 md:p-6 lg:p-8"
              style={{
                border: "1px solid var(--Line-Divider, #DDD)",
                background: "var(--Complimentary-Light, #FFFAF7)",
              }}
            >
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
              <p className="sub-1">{featured.title}</p>
              <p className="p2">{featured.description}</p>
              {featured.subtext && (
                <p className="p2" style={{ color: "var(--color-black-60)" }}>{featured.subtext}</p>
              )}
              <Link
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p2 underline"
              >
                {featured.linkText ?? "Read Full Article"}
              </Link>
            </div>
          )}
        </div>

        {/* All Blogs bar */}
        <div className="col-span-full flex items-center justify-between">
          <h3 className="h3">All Blogs</h3>
          <div className="flex items-center gap-4">
            <span className="p2" style={{ color: "var(--color-black-60)" }}>
              {sorted.length > 0 ? `${rangeStart}–${rangeEnd} of ${sorted.length}` : "0 articles"}
            </span>
            <select
              value={sort}
              onChange={(e) => { setSort(e.target.value); setPage(0); }}
              className="p2 border border-[#DDD] rounded px-3 py-1.5 bg-white"
              aria-label="Sort blogs"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80 disabled:opacity-30"
                aria-label="Previous page"
              >
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" className="absolute">
                  <circle cx="23" cy="23" r="22.5" stroke="#dddddd" fill="white" />
                </svg>
                <ChevronLeft className="w-6 h-6 text-black relative z-10" strokeWidth={2} />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className="w-12 h-12 relative flex items-center justify-center transition-opacity hover:opacity-80 disabled:opacity-30"
                aria-label="Next page"
              >
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" className="absolute">
                  <circle cx="23" cy="23" r="22.5" stroke="#dddddd" fill="white" />
                </svg>
                <ChevronRight className="w-6 h-6 text-black relative z-10" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Blog grid */}
        {pageItems.map((item, idx) => (
          <div
            key={idx}
            className="col-span-full lg:col-span-4 flex flex-col justify-between p-4 md:p-6 lg:p-8 lg:min-h-[371px] lg:items-start lg:[flex:1_0_0] lg:self-stretch"
            style={{ border: "1px solid var(--Line-Divider, #DDD)" }}
          >
            <div className="flex flex-col gap-3">
              <p className="sub-1">{item.title}</p>
              <p className="p2">{item.description}</p>
              {item.subtext && <p className="p2" style={{ color: "var(--color-black-60)" }}>{item.subtext}</p>}
            </div>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p2 underline"
            >
              {item.linkText ?? "Read more"}
            </Link>
          </div>
        ))}
      </Grid>
    </div>
  );
}
