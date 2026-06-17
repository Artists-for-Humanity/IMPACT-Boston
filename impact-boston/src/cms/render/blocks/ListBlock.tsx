import List from "@/components/List/List";
import { resolveListBlock } from "@/cms/normalize/blocks/list";
import type { CmsListBlock } from "@/cms/types/blocks";

type ListBlockProps = {
  section: CmsListBlock;
};

export default function ListBlock({ section }: ListBlockProps) {
  return <List {...resolveListBlock(section)} />;
}
