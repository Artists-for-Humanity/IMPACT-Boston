import SingleContent from "@/components/Content/Single";
import { resolveSingleContentBlock } from "@/cms/normalize/blocks/singleContent";
import type { CmsSingleContentBlock } from "@/cms/types/blocks";
import SingleContentRichContent from "./SingleContentRichContent";

type SingleContentBlockProps = {
  section: CmsSingleContentBlock;
};

export default function SingleContentBlock({
  section,
}: SingleContentBlockProps) {
  const props = resolveSingleContentBlock(section);

  if (!props) {
    return null;
  }

  return (
    <SingleContent {...props}>
      {section.content?.length ? (
        <SingleContentRichContent content={section.content} />
      ) : null}
    </SingleContent>
  );
}
