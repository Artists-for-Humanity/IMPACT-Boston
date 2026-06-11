import SideTabs, { type SideTab } from "@/components/TabsPanel/SideTabs";
import { resolveSideTabs } from "@/cms/normalize/blocks/sideTabs";
import type { CmsSideTabsBlock } from "@/cms/types/blocks";

type SideTabsBlockProps = {
  section: CmsSideTabsBlock;
  fallbackTabs?: SideTab[];
};

export default function SideTabsBlock({
  section,
  fallbackTabs,
}: SideTabsBlockProps) {
  const tabs = resolveSideTabs(section.tabs, fallbackTabs);

  if (!tabs.length) {
    return null;
  }

  return (
    <section className="w-full bg-white">
      <SideTabs tabs={tabs} />
    </section>
  );
}
