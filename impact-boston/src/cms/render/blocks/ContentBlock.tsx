import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import SingleContent from "@/components/Content/Single";
import { urlFor } from "@/sanity/image";
import type { CmsContentBlock } from "@/cms/types/blocks";
import {
  extendPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type ContentBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsContentBlock;
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="p1 lg:col-span-5">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};

export default function ContentBlock({
  blockPath,
  dataAttribute,
  section,
}: ContentBlockProps) {
  const imageSrc = section.image
    ? (urlFor(section.image)?.width(1000).fit("max").url() ?? undefined)
    : undefined;

  const bodyContent =
    Array.isArray(section.body) && section.body.length > 0 ? (
      <PortableText
        value={section.body as PortableTextBlock[]}
        components={bodyComponents}
      />
    ) : typeof section.body === "string" && section.body ? (
      <p className="p1 lg:col-span-5">{section.body}</p>
    ) : undefined;

  return (
    <SingleContent
      title={section.title ?? ""}
      subtitle={section.subtitle ?? undefined}
      paragraphs={[]}
      bodyContent={bodyContent}
      imageSrc={imageSrc}
      imageAlt={section.imageAlt ?? ""}
      reverse={section.reverse ?? false}
      cta={
        section.ctaText && section.ctaHref
          ? { text: section.ctaText, href: section.ctaHref }
          : undefined
      }
      backgroundColor={section.backgroundColor ?? undefined}
      dataAttributes={{
        body: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "body")),
        ctaText: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "ctaText")),
        image: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "image")),
        subtitle: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "subtitle")),
        title: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "title")),
      }}
    />
  );
}
