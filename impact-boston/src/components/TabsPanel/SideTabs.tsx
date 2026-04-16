"use client";
import { useRef, useState, useEffect } from "react";
import Grid from "../common/Grid";

type TabContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[] };

type Tab = {
  label: string;
  content: TabContentBlock[];
};

export default function SideTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  const updateIndicator = (idx: number) => {
    const el = tabRefs.current[idx];
    if (el) {
      if (window.innerWidth < 1024) {
        // Horizontal (mobile)
        setIndicatorStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          top: undefined,
          height: 4,
          bottom: 0,
          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        });
      } else {
        // Vertical (desktop)
        setIndicatorStyle({
          top: el.offsetTop,
          height: el.offsetHeight,
          left: 0,
          width: 4,
          right: undefined,
          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        });
      }
    }
  };

  useEffect(() => {
    updateIndicator(active);
    const onResize = () => updateIndicator(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line
  }, [active, tabs.length]);

  const handleTabClick = (idx: number) => {
    setActive(idx);
    tabRefs.current[idx]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    updateIndicator(idx);
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-36 py-8 md:py-10 lg:py-18">
      <Grid>
        <div className="relative col-span-full overflow-x-auto overflow-y-hidden flex scrollbar-hide lg:col-span-5 lg:flex-col">
          {/* Animated indicator */}
          <div
            className="absolute bg-complementary rounded z-10"
            style={indicatorStyle}
          />
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              ref={el => { tabRefs.current[idx] = el; }}
              className={`h3 cursor-pointer whitespace-nowrap px-4 py-2 border-b-4 lg:border-b-0 lg:border-l-4 transition-colors duration-150 lg:text-left ${ active === idx ? "border-transparent font-bold" : "border-gray-300 text-gray-500"}`}
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
                return <h2 className="h2" key={i}>{block.text}</h2>;
              case "subheading":
                return <h3 className="font-bold text-lg" key={i}>{block.text}</h3>;
              case "paragraph":
                return <p className="p1" key={i}>{block.text}</p>;
              case "bullets":
                return (
                  <ul className="list-disc pl-6" key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
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