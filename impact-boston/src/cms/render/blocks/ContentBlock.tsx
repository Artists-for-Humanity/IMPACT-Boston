import { stegaClean } from "@sanity/client/stega";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import SingleContent from "@/components/Content/Single";
import { urlFor } from "@/sanity/image";
import type { CmsContentBlock } from "@/cms/types/blocks";
import { resolveCmsLink, type CmsLinkTarget } from "@/cms/links";
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
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-6 pl-6 lg:col-span-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-4 pl-6 lg:col-span-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="p1">{children}</li>,
    number: ({ children }) => <li className="p1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const link = resolveCmsLink(
        getObjectField(value, "linkTarget"),
        getStringField(value, "href"),
      );
      const href = link.href;

      if (!href) {
        return <>{children}</>;
      }

      return (
        <a
          href={href}
          className="link text-secondary underline underline-offset-2 hover:text-primary hover:no-underline"
          target={link.openInNewTab ? "_blank" : undefined}
          rel={link.openInNewTab ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
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
  const buttonText = stegaClean(section.buttonText)?.trim();
  const buttonLink = resolveCmsLink(section.buttonLinkTarget, section.buttonLink);
  const ctaLink = resolveCmsLink(section.ctaLinkTarget, section.ctaHref);
  const buttonColor = getHexColor(section.buttonColor);

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
      subtitleFirst={section.subtitleFirst ?? false}
      paragraphs={[]}
      bodyContent={bodyContent}
      imageSrc={imageSrc}
      imageAlt={section.imageAlt ?? ""}
      reverse={section.reverse ?? false}
      cta={
        section.ctaText && ctaLink.href
          ? {
              text: section.ctaText,
              href: ctaLink.href,
              openInNewTab: ctaLink.openInNewTab,
            }
          : undefined
      }
      button={
        buttonText && buttonLink.href
          ? {
              text: buttonText,
              href: buttonLink.href,
              backgroundColor: buttonColor,
              openInNewTab: buttonLink.openInNewTab,
            }
          : undefined
      }
      backgroundColor={stegaClean(section.backgroundColor) ?? undefined}
      dataAttributes={{
        body: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "body")),
        buttonText: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "buttonText"),
        ),
        ctaText: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "ctaText")),
        image: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "image")),
        subtitle: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "subtitle")),
        title: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "title")),
      }}
    />
  );
}

function getHexColor(value?: string | null) {
  const color = stegaClean(value)?.trim();

  return color && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color)
    ? color
    : undefined;
}

function getStringField(value: unknown, field: string) {
  if (typeof value !== "object" || value === null || !(field in value)) {
    return "";
  }

  const fieldValue = (value as Record<string, unknown>)[field];

  return typeof fieldValue === "string" ? fieldValue.trim() : "";
}

function getObjectField(value: unknown, field: string): CmsLinkTarget | undefined {
  if (typeof value !== "object" || value === null || !(field in value)) {
    return undefined;
  }

  const fieldValue = (value as Record<string, unknown>)[field];

  return typeof fieldValue === "object" && fieldValue !== null
    ? (fieldValue as CmsLinkTarget)
    : undefined;
}
