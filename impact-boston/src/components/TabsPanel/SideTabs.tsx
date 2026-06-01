"use client";
import { useRef, useState, useEffect } from "react";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import Grid from "../common/Grid";

export type StructuredTabContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "list"; items: string[] }
  | { type: "columns"; items: string[][] };

export type SideTab = {
  label: string;
  content: StructuredTabContentBlock[] | PortableTextBlock[];
};

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h2 className="h2">{children}</h2>,
    h2: ({ children }) => <h2 className="h2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
    normal: ({ children }) => <p className="p1">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-1 pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-1 pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="p1">{children}</li>,
    number: ({ children }) => <li className="p1">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";

      return (
        <a className="underline hover:opacity-80" href={href}>
          {children}
        </a>
      );
    },
  },
};

function isPortableTextContent(
  content: StructuredTabContentBlock[] | PortableTextBlock[]
): content is PortableTextBlock[] {
  return content.some((block) => "_type" in block && typeof block._type === "string");
}

export default function SideTabs({ tabs }: { tabs: SideTab[] }) {
  const [active, setActive] = useState(0);
  const safeActive = tabs.length && active < tabs.length ? active : 0;
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
    updateIndicator(safeActive);

    const onResize = () => updateIndicator(safeActive);
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [safeActive, tabs.length]);

  const handleTabClick = (idx: number) => {
    setActive(idx);
    tabRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    updateIndicator(idx);
  };

  if (!tabs.length) {
    return null;
  }

  const activeTab = tabs[safeActive] ?? tabs[0];
  const activeContent = activeTab.content;

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
                safeActive === idx
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
          {isPortableTextContent(activeContent) ? (
            <PortableText
              components={portableTextComponents}
              value={activeContent}
            />
          ) : (
            activeContent.map((block, i) => {
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

              default:
                return null;
            }
          })
          )}
        </div>
      </Grid>
    </div>
  );
}
