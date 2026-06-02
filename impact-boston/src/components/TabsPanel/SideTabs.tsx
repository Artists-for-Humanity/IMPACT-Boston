"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import Grid from "../common/Grid";

type ResourceListItem = {
  title: string;
  href?: string;
  detail?: string;
  detailHref?: string;
  description?: string;
  expandedDescription?: string;
  meta?: string[];
  icon?: "external" | "chevron";
};

type TabContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "list"; items: string[] }
  | { type: "columns"; items: string[][] }
  | { type: "divider" }
  | {
      type: "resourceList";
      eyebrow: string;
      previewCount?: number;
      items: ResourceListItem[];
    };

export type SideTab = {
  label: string;
  content: TabContentBlock[];
};

type Tab = SideTab;

export default function SideTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  const updateIndicator = (idx: number) => {
    const el = tabRefs.current[idx];
    if (!el) return;

    if (window.innerWidth < 1024) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        top: undefined,
        right: undefined,
        height: 4,
        bottom: 0,
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
      });
    } else {
      setIndicatorStyle({
        top: el.offsetTop,
        height: el.offsetHeight,
        left: 0,
        bottom: undefined,
        width: 4,
        right: undefined,
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
      });
    }
  };

  useEffect(() => {
    updateIndicator(active);

    const onResize = () => updateIndicator(active);
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [active, tabs.length]);

  const handleTabClick = (idx: number) => {
    setActive(idx);
    tabRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    updateIndicator(idx);
  };

  return (
    <div className="">
      <Grid>
        <div className="scrollbar-hide relative col-span-full flex overflow-x-auto overflow-y-hidden lg:col-span-5 lg:flex-col">
          <div
            className="absolute z-10 rounded bg-complementary"
            style={indicatorStyle}
          />

          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              className={`h3 cursor-pointer whitespace-nowrap lg:whitespace-normal border-b-4 px-4 py-2 transition-colors duration-150 lg:border-b-0 lg:border-l-4 lg:text-left ${
                tabs.length <= 3 ? "flex-1 lg:flex-none" : ""
              } ${
                active === idx
                  ? "border-transparent font-bold"
                  : "border-gray-300 text-gray-500"
              }`}
              onClick={() => handleTabClick(idx)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="col-span-full mt-6 space-y-4 lg:col-span-7 lg:mt-0">
          {tabs[active].content.map((block, i) => {
            switch (block.type) {
              case "heading":
                return (
                  <h2 className="h2" key={i}>
                    {block.text}
                  </h2>
                );

              case "subheading":
                return (
                  <h3 className="text-lg font-bold" key={i}>
                    {block.text}
                  </h3>
                );

              case "paragraph":
                return (
                  <p className="p1" key={i}>
                    {block.text}
                  </p>
                );

              case "bullets":
              case "list":
                return (
                  <ul className="list-disc space-y-1 pl-6" key={i}>
                    {block.items.map((item, j) => (
                      <li key={j} className="p1">
                        {item}
                      </li>
                    ))}
                  </ul>
                );

              case "columns":
                return (
                  <div
                    key={i}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2"
                  >
                    {block.items.map((column, colIdx) => (
                      <ul key={colIdx} className="space-y-1">
                        {column.map((item, itemIdx) => (
                          <li key={itemIdx} className="p1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                );

              case "divider":
                return <hr className="border-line-divider" key={i} />;

              case "resourceList":
                return (
                  <ResourceList
                    eyebrow={block.eyebrow}
                    items={block.items}
                    key={i}
                    previewCount={block.previewCount}
                  />
                );

              default:
                return null;
            }
          })}
        </div>
      </Grid>
    </div>
  );
}

function ResourceList({
  eyebrow,
  items,
  previewCount = 5,
}: {
  eyebrow: string;
  items: ResourceListItem[];
  previewCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
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
            <li key={item.title} className="border-b border-line-divider py-4 last:border-b-0">
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
                    <ExternalLink className="mt-1 size-5 shrink-0 text-grey" aria-hidden="true" />
                  ) : null}
                  {item.icon === "chevron" ? (
                    <ChevronRight className="mt-1 size-5 shrink-0 text-grey" aria-hidden="true" />
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
        <a href={item.href} className="p1-bold block cursor-pointer text-black hover:text-secondary hover:underline">
          {item.title}
        </a>
      ) : (
        <p className="p1-bold text-black group-hover:text-secondary">{item.title}</p>
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
      {item.detail && !item.detailHref ? <p className="p1 text-secondary">{item.detail}</p> : null}
      {description ? <p className="p1 text-text-grey-light">{description}</p> : null}
      {item.meta?.map((metaLine) => (
        <p className="p1 text-text-grey-light" key={metaLine}>
          {metaLine}
        </p>
      ))}
    </div>
  );
}
