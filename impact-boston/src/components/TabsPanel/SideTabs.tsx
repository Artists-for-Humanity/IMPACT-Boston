"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
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

type TrainerListItem = {
  name: string;
  organization: string;
  state: string;
  contact?: string;
  contactHref?: string;
};

type TabContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string; bold?: boolean }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[]; bold?: boolean }
  | { type: "list"; items: string[]; bold?: boolean }
  | { type: "numberedList"; items: string[] }
  | { type: "columns"; items: string[][] }
  | { type: "divider" }
  | {
      type: "resourceList";
      eyebrow: string;
      previewCount?: number;
      items: ResourceListItem[];
    }
  | {
      type: "trainerList";
      state: string;
      sortLabel: string;
      previewCount?: number;
      items: TrainerListItem[];
    }
  | { type: "link"; text: string; href: string };

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
                  <h2 className="h2 pb-10" key={i}>
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
                  <p className={`p1${block.bold ? " font-bold" : ""}`} key={i}>
                    {block.text}
                  </p>
                );

              case "bullets":
              case "list":
                return (
                  <ul className="list-disc space-y-1 pl-6" key={i}>
                    {block.items.map((item, j) => (
                      <li key={j} className={`p1${block.bold ? " font-bold" : ""}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                );

              case "numberedList":
                return (
                  <ol className="list-decimal space-y-4 pl-6" key={i}>
                    {block.items.map((item, j) => (
                      <li key={j} className="p1">
                        {item}
                      </li>
                    ))}
                  </ol>
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

              case "trainerList":
                return (
                  <TrainerList
                    items={block.items}
                    key={i}
                    previewCount={block.previewCount}
                    sortLabel={block.sortLabel}
                    state={block.state}
                  />
                );

              case "link":
                return (
                  <a
                    key={i}
                    href={block.href}
                    className="text-primary underline hover:text-primary-dark transition p1 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {block.text}
                  </a>
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

function TrainerList({
  items,
  previewCount = 5,
  sortLabel,
  state,
}: {
  items: TrainerListItem[];
  previewCount?: number;
  sortLabel: string;
  state: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [selectedState, setSelectedState] = useState(state);
  const [sortValue, setSortValue] = useState(getInitialSortValue(sortLabel));
  const filteredItems = items.filter((item) => item.state === selectedState);
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortValue === "nameDesc") {
      return b.name.localeCompare(a.name);
    }

    if (sortValue === "organization") {
      return (
        a.organization.localeCompare(b.organization) ||
        a.name.localeCompare(b.name)
      );
    }

    return a.name.localeCompare(b.name);
  });
  const hasToggle = sortedItems.length > previewCount;
  const visibleItems = expanded ? sortedItems : sortedItems.slice(0, previewCount);

  const handleStateChange = (nextState: string) => {
    setSelectedState(nextState);
    setExpanded(false);
  };

  const handleSortChange = (nextSort: string) => {
    setSortValue(nextSort);
    setExpanded(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 border-b border-line-divider pb-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-2 md:flex-row">
          <TrainerListSelect
            label="State"
            onChange={handleStateChange}
            options={usStates.map((stateName) => ({
              label: stateName,
              value: stateName,
            }))}
            value={selectedState}
          />
          <TrainerListSelect
            label="Sort"
            onChange={handleSortChange}
            options={trainerSortOptions}
            value={sortValue}
          />
        </div>

        {hasToggle ? (
          <button
            className="p2 cursor-pointer text-left text-secondary underline underline-offset-2 md:ml-auto"
            onClick={() => setExpanded((current) => !current)}
            type="button"
          >
            {expanded ? "Close" : `See all ${sortedItems.length}`}
          </button>
        ) : null}
      </div>

      {visibleItems.length > 0 ? (
        <ul>
          {visibleItems.map((item) => {
            const contactHref = getTrainerContactHref(item);

            return (
              <li className="border-b border-line-divider py-4 last:border-b-0" key={`${item.state}-${item.name}`}>
                <p className="p2 text-black">{item.name}</p>
                <p className="p2 text-text-grey-light">{item.organization}</p>
                {item.contact && contactHref ? (
                  <a
                    className="p2 text-secondary underline underline-offset-2"
                    href={contactHref}
                  >
                    {item.contact}
                  </a>
                ) : null}
                {item.contact && !contactHref ? (
                  <p className="p2 text-secondary">{item.contact}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="p2 border-b border-line-divider py-4 text-text-grey-light">
          No certified ASAP trainers are listed for {selectedState} yet.
        </p>
      )}
    </div>
  );
}

function TrainerListSelect({
  label,
  onChange,
  options,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  value: string;
}) {
  return (
    <label className="p2 relative flex h-10 w-full items-center border border-line-divider bg-white px-4 transition-colors focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 hover:border-secondary md:w-56">
      <span className="shrink-0 text-black">{label}: </span>
      <select
        aria-label={label}
        className="min-w-0 flex-1 cursor-pointer appearance-none bg-transparent pl-1 pr-8 text-dusty-purple outline-none"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 size-4 text-grey" aria-hidden="true" />
    </label>
  );
}

const trainerSortOptions = [
  { label: "Alphabetically", value: "nameAsc" },
  { label: "Reverse Alphabetically", value: "nameDesc" },
  { label: "Organization", value: "organization" },
];

const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function getInitialSortValue(sortLabel: string) {
  return (
    trainerSortOptions.find((option) => option.label === sortLabel)?.value ??
    trainerSortOptions[0].value
  );
}

function getTrainerContactHref(item: TrainerListItem) {
  if (item.contactHref) {
    return item.contactHref;
  }

  const emailMatch = item.contact?.match(
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
  );

  if (emailMatch) {
    return `mailto:${emailMatch[0]}`;
  }

  return undefined;
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
