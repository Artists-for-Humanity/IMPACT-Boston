import ActionPanel from "@/components/Action/ActionPanel";
import type {
  CmsActionPanelBlock,
  SanityActionPanelFields,
} from "@/cms/types/blocks";

type ActionPanelBlockProps = {
  fallback?: SanityActionPanelFields;
  section: CmsActionPanelBlock;
};

export default function ActionPanelBlock({
  fallback,
  section,
}: ActionPanelBlockProps) {
  return (
    <ActionPanel
      title={section.title ?? fallback?.title}
      subtext={section.subtext ?? fallback?.subtext}
      cards={section.cards ?? fallback?.cards}
    />
  );
}
