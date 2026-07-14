"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

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

export default function SideTabs({ tabs, noPaddingTop }: { tabs: SideTab[]; noPaddingTop?: boolean }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({});
  const activeContent = tabs[active]?.content ?? [];

  const updateIndicator = (idx: number) => {
    const el = tabRefs.current[idx];
    if (!el) return;

    if (window.innerWidth < 1024) {
      const container = el.parentElement as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - containerRect.left + container.scrollLeft,
        width: elRect.width,
        top: elRect.bottom - containerRect.top + container.scrollTop - 4,
        right: undefined,
        height: 4,
        bottom: undefined,
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
    const hash = window.location.hash.slice(1);
    if (hash) {
      const idx = tabs.findIndex((t) => t.sectionId === hash);
      if (idx !== -1) setActive(idx);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    <div>
      <Grid noPaddingTop={noPaddingTop} className="gap-y-12 md:gap-y-12">
        <div className="scrollbar-hide relative col-span-full flex overflow-x-auto overflow-y-hidden shadow-[inset_0_-4px_0_0_#d1d5db] lg:shadow-none lg:col-span-5 lg:flex-col lg:gap-y-4 lg:self-start lg:sticky lg:top-[120px] lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
          <div className="hidden lg:absolute lg:left-0 lg:top-0 lg:block lg:h-full lg:w-[4px] lg:bg-gray-300" />
          <div
            className="absolute z-10 rounded bg-complementary"
            style={indicatorStyle}
          />

          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              id={tab.sectionId ?? undefined}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              className={`h3 flex cursor-pointer items-center gap-x-4 whitespace-nowrap transition-colors duration-150 md:gap-x-8 lg:gap-x-2 lg:whitespace-normal lg:text-left ${
                tabs.length <= 3 ? "flex-1 lg:flex-none" : ""
              } ${
                active === idx
                  ? "font-medium text-primary"
                  : "text-inactive-tab"
              }`}
              onClick={() => handleTabClick(idx)}
              type="button"
            >
              <span aria-hidden="true" />
              <span data-sanity={tab.dataAttributes?.label}>{tab.label}</span>
              <span aria-hidden="true" className="lg:hidden" />
            </button>
          ))}
        </div>

        <div className="col-span-full flex flex-col gap-6 lg:gap-16 lg:col-span-7">
          <SideTabsContent content={activeContent} />
        </div>
      </Grid>
    </div>
  );
}
