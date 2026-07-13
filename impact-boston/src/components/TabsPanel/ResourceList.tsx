"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

import type { ResourceListItem } from "./types";

export default function ResourceList({
  eyebrow,
  eyebrowDataSanity,
  items,
  previewCount = 5,
}: {
  eyebrow: string;
  eyebrowDataSanity?: string;
  items: ResourceListItem[];
  previewCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  );
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
        <p className="p1 text-dusty-purple" data-sanity={eyebrowDataSanity}>
          {eyebrow}
        </p>
        <button
          className="p1 cursor-pointer text-secondary underline underline-offset-2"
          onClick={() => setExpanded((current) => !current)}
          type="button"
        >
          {expanded ? "Close" : `See all ${items.length}`}
        </button>
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
              ) : item.href ? (
                <a
                  href={item.href}
                  className="group flex gap-4"
                  rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                  target={item.openInNewTab ? "_blank" : undefined}
                >
                  <ResourceListItemContent item={item} titleAsText />
                  {item.icon === "external" ? (
                    <ExternalLink
                      className="mt-1 size-5 shrink-0 text-grey group-hover:text-secondary"
                      aria-hidden="true"
                    />
                  ) : null}
                  {item.icon === "chevron" ? (
                    <ChevronRight
                      className="mt-1 size-5 shrink-0 text-grey group-hover:text-secondary"
                      aria-hidden="true"
                    />
                  ) : null}
                </a>
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
          data-sanity={item.dataAttributes?.title ?? item.dataAttributes?.href}
          rel={item.openInNewTab ? "noopener noreferrer" : undefined}
          target={item.openInNewTab ? "_blank" : undefined}
        >
          {item.title}
        </a>
      ) : (
        <p
          className="p1-bold text-black group-hover:text-secondary group-hover:underline"
          data-sanity={item.dataAttributes?.title}
        >
          {item.title}
        </p>
      )}

      {item.detail ? (
        <p className="p1 text-light-grey-text" data-sanity={item.dataAttributes?.detail}>
          {item.detail}
        </p>
      ) : null}

      {description ? (
        <p
          className="p1 text-text-grey-light"
          data-sanity={
            expanded
              ? item.dataAttributes?.expandedDescription ??
                item.dataAttributes?.description
              : item.dataAttributes?.description
          }
        >
          {description}
        </p>
      ) : null}
      {item.phoneNumber ? (
        <p className="p1 text-text-grey-light">{item.phoneNumber}</p>
      ) : null}
      {item.meta?.map((metaLine) => (
        <p className="p1 text-text-grey-light" key={metaLine}>
          {metaLine}
        </p>
      ))}
    </div>
  );
}
