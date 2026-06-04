"use client";
import { useRef, useState, useEffect, type CSSProperties } from "react";
import Grid from "../common/Grid";
import SideTabsContent from "./SideTabsContent";
import type { SideTab } from "./types";

export type {
  ResourceListItem,
  SanityTabContentBlock,
  SideTab,
  SideTabContentBlock,
  TabContentBlock,
  TrainerListItem,
} from "./types";

export default function SideTabs({ tabs }: { tabs: SideTab[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({});
  const activeContent = tabs[active]?.content ?? [];

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
          <SideTabsContent content={activeContent} />
        </div>
      </Grid>
    </div>
  );
}
