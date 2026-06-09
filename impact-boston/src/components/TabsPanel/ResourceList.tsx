"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

import type { ResourceListItem } from "./types";

export default function ResourceList({
  eyebrow,
  items,
  previewCount = 5,
}: {
  eyebrow: string;
  items: ResourceListItem[];
  previewCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  );
  const hasToggle = items.length > previewCount;
  const visibleItems = expanded ? items : items.slice(0, previewCount);

  const toggleItem = (title: string) => {
    setExpandedItems((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between border-b border-line-divider pb-3">
        <p className="p1 text-dusty-purple">{eyebrow}</p>
        {hasToggle ? (
          <button
            className="p1 cursor-pointer text-secondary underline underline-offset-2"
            onClick={() => setExpanded((current) => !current)}
            type="button"
          >
            {expanded ? "Close" : `See all ${items.length}`}
          </button>
        ) : null}
      </div>

      <ul>
        {visibleItems.map((item) => {
          const isExpandable = Boolean(item.expandedDescription);
          const isItemExpanded = Boolean(expandedItems[item.title]);

          return (
            <li
              key={item.title}
              className="border-b border-line-divider py-4 last:border-b-0"
            >
              {isExpandable ? (
                <button
                  aria-expanded={isItemExpanded}
                  className="group flex w-full cursor-pointer gap-4 text-left"
                  onClick={() => toggleItem(item.title)}
                  type="button"
                >
                  <ResourceListItemContent
                    expanded={isItemExpanded}
                    item={item}
                    titleAsText
                  />
                  <ChevronRight
                    className={`mt-1 size-5 shrink-0 text-grey transition-transform group-hover:text-secondary ${
                      isItemExpanded ? "rotate-90" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <div className="flex gap-4">
                  <ResourceListItemContent item={item} />

                  {item.icon === "external" ? (
                    <ExternalLink
                      className="mt-1 size-5 shrink-0 text-grey"
                      aria-hidden="true"
                    />
                  ) : null}
                  {item.icon === "chevron" ? (
                    <ChevronRight
                      className="mt-1 size-5 shrink-0 text-grey"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ResourceListItemContent({
  expanded = false,
  item,
  titleAsText = false,
}: {
  expanded?: boolean;
  item: ResourceListItem;
  titleAsText?: boolean;
}) {
  const description =
    expanded && item.description && item.expandedDescription
      ? `${item.description.replace(/\.\.\.$/, "")}${item.expandedDescription}`
      : item.description;

  return (
    <div className="min-w-0 flex-1">
      {item.href && !titleAsText ? (
        <a
          href={item.href}
          className="p1-bold block cursor-pointer text-black hover:text-secondary hover:underline"
        >
          {item.title}
        </a>
      ) : (
        <p className="p1-bold text-black group-hover:text-secondary">
          {item.title}
        </p>
      )}

      {item.detail && item.detailHref ? (
        <a
          href={item.detailHref}
          className="p1 block cursor-pointer text-secondary hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          {item.detail}
        </a>
      ) : null}
      {item.detail && !item.detailHref ? (
        <p className="p1 text-secondary">{item.detail}</p>
      ) : null}
      {description ? (
        <p className="p1 text-text-grey-light">{description}</p>
      ) : null}
      {item.meta?.map((metaLine) => (
        <p className="p1 text-text-grey-light" key={metaLine}>
          {metaLine}
        </p>
      ))}
    </div>
  );
}
