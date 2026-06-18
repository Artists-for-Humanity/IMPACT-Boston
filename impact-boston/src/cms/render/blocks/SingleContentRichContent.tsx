import Link from "next/link";
import {
  PortableText,
  type PortableTextComponents,
} from "next-sanity";

import Button from "@/components/common/Button";
import { resolveCmsLink, type CmsLinkTarget } from "@/cms/links";
import type { SanitySingleContentContentBlock } from "@/cms/types/blocks";

const fullWidth = "lg:col-span-5";

const TEXT_COLOR_CLASS_MAP: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  custom_purple: "text-secondary",
  complementary: "text-complementary",
  black: "text-black",
  white: "text-white",
};

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className={`h1 ${fullWidth}`}>{children}</h1>,
    h2: ({ children }) => <h2 className={`h2 ${fullWidth}`}>{children}</h2>,
    h3: ({ children }) => <h3 className={`h3 ${fullWidth}`}>{children}</h3>,
    h4: ({ children }) => (
      <h4 className={`text-lg font-bold ${fullWidth}`}>{children}</h4>
    ),
    sub1: ({ children }) => <p className={`sub-1 ${fullWidth}`}>{children}</p>,
    sub2: ({ children }) => (
      <p className={`sub-2 text-secondary ${fullWidth}`}>{children}</p>
    ),
    normal: ({ children }) => <p className={`p1 ${fullWidth}`}>{children}</p>,
    p1: ({ children }) => <p className={`p1 ${fullWidth}`}>{children}</p>,
    p1Bold: ({ children }) => (
      <p className={`p1-bold ${fullWidth}`}>{children}</p>
    ),
    p2: ({ children }) => <p className={`p2 ${fullWidth}`}>{children}</p>,
    mediumLabel: ({ children }) => (
      <p className={`medium-label text-secondary ${fullWidth}`}>{children}</p>
    ),
    link: ({ children }) => (
      <p className={`link text-secondary underline ${fullWidth}`}>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className={`border-l-4 border-complementary pl-4 ${fullWidth}`}
      >
        <p className="p1">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className={`list-disc space-y-6 pl-6 ${fullWidth}`}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className={`list-decimal space-y-4 pl-6 ${fullWidth}`}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="p1">{children}</li>,
    number: ({ children }) => <li className="p1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="p1-bold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const link = resolveCmsLink(getObjectField(value, "linkTarget"), getStringField(value, "href"));
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
  types: {
    singleContentCta: ({ value }) => {
      const text = getStringField(value, "text");
      const link = resolveCmsLink(getObjectField(value, "linkTarget"), getStringField(value, "href"));
      const href = link.href;

      if (!text || !href) {
        return null;
      }

      return (
        <Button
          href={href}
          openInNewTab={link.openInNewTab}
          variant="primary"
          showChevron
          className={`box-border md:box-content h-[8px] md:h-[25px] py-6 w-full md:w-auto md:self-start ${fullWidth} justify-self-start gap-x-16`}
        >
          {text}
        </Button>
      );
    },
    singleContentSupportingLink: ({ value }) => {
      const text = getStringField(value, "text");
      const link = resolveCmsLink(getObjectField(value, "linkTarget"), getStringField(value, "href"));
      const href = link.href;
      const color = getStringField(value, "color") || "secondary";
      const colorClass =
        TEXT_COLOR_CLASS_MAP[color] ?? TEXT_COLOR_CLASS_MAP.secondary;

      if (!text || !href) {
        return null;
      }

      return (
        <Link
          href={href}
          target={link.openInNewTab ? "_blank" : undefined}
          rel={link.openInNewTab ? "noopener noreferrer" : undefined}
          className={`p1-bold underline ${colorClass} ${fullWidth}`}
        >
          {text}
        </Link>
      );
    },
  },
};

type SingleContentRichContentProps = {
  content: SanitySingleContentContentBlock[];
};

export default function SingleContentRichContent({
  content,
}: SingleContentRichContentProps) {
  return <PortableText value={content} components={portableTextComponents} />;
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
