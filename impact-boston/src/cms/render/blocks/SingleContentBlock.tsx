import SingleContent from "@/components/Content/Single";
import { resolveSingleContentBlock } from "@/cms/normalize/blocks/singleContent";
import type { CmsSingleContentBlock } from "@/cms/types/blocks";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";
import SingleContentRichContent from "./SingleContentRichContent";

type SingleContentBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsSingleContentBlock;
};

export default function SingleContentBlock({
  blockPath,
  dataAttribute,
  section,
}: SingleContentBlockProps) {
  const props = resolveSingleContentBlock(section);
  const bodyContent = section.content?.length ? (
    <SingleContentRichContent content={section.content} />
  ) : undefined;

  if (!props) {
    return null;
  }

  const paragraphDataAttributes = section.body
    ? (props.paragraphs ?? []).map(() => ({
        text: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "body"),
        ),
      }))
    : section.paragraphs
        ?.filter((paragraph) => Boolean(paragraph?.text?.trim()))
        .map((paragraph, index) => ({
          text: getFieldDataAttribute(
            dataAttribute,
            extendPath(
              getArrayItemPath(blockPath, "paragraphs", paragraph, index),
              "text",
            ),
          ),
        }));

  return (
    <SingleContent
      {...props}
      bodyContent={bodyContent}
      dataAttributes={{
        body: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "content"),
        ),
        ctaText: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "ctaText"),
        ),
        eyebrow: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "eyebrow"),
        ),
        image: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "image"),
        ),
        paragraphs: paragraphDataAttributes,
        purchaseLinkText: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "purchaseLinkText"),
        ),
        thumbnails: section.mediaCards
          ?.filter((card) => Boolean(card?.title?.trim()))
          .map((card, index) => {
            const cardPath = getArrayItemPath(
              blockPath,
              "mediaCards",
              card,
              index,
            );

            return {
              image: getFieldDataAttribute(
                dataAttribute,
                extendPath(cardPath, "image"),
              ),
              outlet: getFieldDataAttribute(
                dataAttribute,
                extendPath(cardPath, "outlet"),
              ),
              title: getFieldDataAttribute(
                dataAttribute,
                extendPath(cardPath, "title"),
              ),
            };
          }),
        subtitle: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "subtitle"),
        ),
        title: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "title"),
        ),
      }}
    />
  );
}
