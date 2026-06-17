import Triple from "@/components/Content/Triple";
import { resolveTripleContentBlock } from "@/cms/normalize/blocks/tripleContent";
import type { CmsTripleContentBlock } from "@/cms/types/blocks";

type TripleContentBlockProps = {
  section: CmsTripleContentBlock;
};

export default function TripleContentBlock({
  section,
}: TripleContentBlockProps) {
  const props = resolveTripleContentBlock(section);

  return <Triple {...props} />;
}
