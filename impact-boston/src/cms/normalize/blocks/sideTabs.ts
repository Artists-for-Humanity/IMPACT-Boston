import type { SideTab } from "@/components/TabsPanel/SideTabs";
import type { SanitySideTab } from "@/cms/types/blocks";

export function resolveSideTabs(
  sideTabs?: SanitySideTab[] | null,
  fallbackTabs: SideTab[] = [],
): SideTab[] {
  const normalizedTabs = sideTabs
    ?.filter((tab): tab is { label: string; content: SideTab["content"] } =>
      Boolean(tab?.label && Array.isArray(tab.content)),
    )
    .map((tab) => ({
      label: tab.label,
      content: tab.content,
    }));

  return normalizedTabs?.length ? normalizedTabs : fallbackTabs;
}
