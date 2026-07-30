"use client";

import { useState } from "react";

import type { DirectoryItem } from "./types";

export default function Directory({
  title,
  items,
  previewCount = 10,
}: {
  title?: string;
  items: DirectoryItem[];
  previewCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasToggle = items.length > previewCount;
  const visibleItems = expanded ? items : items.slice(0, previewCount);

  const mid = Math.ceil(visibleItems.length / 2);
  const leftColumn = visibleItems.slice(0, mid);
  const rightColumn = visibleItems.slice(mid);

  return (
    <div className="flex flex-col gap-3">
      {title && (
        <div className="border-b border-line-divider pb-3">
          <p className="p1 text-dusty-purple">{title}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-x-6 gap-y-1 md:grid-cols-2">
        <ul className="space-y-1">
          {leftColumn.map((item, i) => (
            <li key={item._key ?? i}>
              <p className="p2">{item.name}</p>
              {item.detail && (
                <p className="p2 text-text-grey-light">{item.detail}</p>
              )}
            </li>
          ))}
        </ul>
        <ul className="space-y-1">
          {rightColumn.map((item, i) => (
            <li key={item._key ?? `r-${i}`}>
              <p className="p2">{item.name}</p>
              {item.detail && (
                <p className="p2 text-text-grey-light">{item.detail}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {hasToggle && (
        <button
          className="p2 cursor-pointer self-start text-secondary underline underline-offset-2"
          onClick={() => setExpanded((c) => !c)}
          type="button"
        >
          {expanded ? "View Less" : "View All"}
        </button>
      )}
    </div>
  );
}
