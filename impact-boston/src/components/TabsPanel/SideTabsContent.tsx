"use client";

import { type Key, type ReactNode } from "react";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "next-sanity";

import ResourceList from "./ResourceList";
import TrainerList from "./TrainerList";
import { resolveCmsLink } from "@/cms/links";
import type {
  ResourceListItem,
  SideTab,
  SideTabContentBlock,
  SanityTabContentBlock,
  TabContentBlock,
  TrainerListItem,
} from "./types";

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="h1 pb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="h2 pb-6">{children}</h2>,
    h3: ({ children }) => <h3 className="h3">{children}</h3>,
    h4: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
    sub1: ({ children }) => <p className="sub-1">{children}</p>,
    sub2: ({ children }) => <p className="sub-2">{children}</p>,
    normal: ({ children }) => <p className="p1">{children}</p>,
    p1: ({ children }) => <p className="p1">{children}</p>,
    p1Bold: ({ children }) => <p className="p1-bold">{children}</p>,
    p2: ({ children }) => <p className="p2">{children}</p>,
    mediumLabel: ({ children }) => <p className="medium-label">{children}</p>,
    link: ({ children }) => <p className="link">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-complementary pl-4">
        <p className="p1">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-4 pl-6">{children}</ol>
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
      const link = resolveCmsLink(
        typeof value?.linkTarget === "object" ? value.linkTarget : undefined,
        typeof value?.href === "string" ? value.href : "",
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

function isPortableTextBlock(
  block: SideTabContentBlock,
): block is PortableTextBlock {
  return (
    typeof block === "object" &&
    block !== null &&
    "_type" in block &&
    block._type === "block"
  );
}

function getStructuredBlockType(
  block: TabContentBlock | SanityTabContentBlock,
) {
  if ("_type" in block) {
    return block._type;
  }

  return block.type;
}

function getStructuredBlockKey(
  block: TabContentBlock | SanityTabContentBlock,
  index: number,
) {
  return "_key" in block && block._key ? block._key : index;
}

function getBlockDataAttributes(
  block: TabContentBlock | SanityTabContentBlock,
) {
  return "dataAttributes" in block ? block.dataAttributes : undefined;
}

function getColumns(block: TabContentBlock | SanityTabContentBlock) {
  if ("type" in block && block.type === "columns") {
    return block.items;
  }

  if (
    "_type" in block &&
    block._type === "columns" &&
    Array.isArray(block.items)
  ) {
    return block.items
      .map((column) => (Array.isArray(column) ? column : column.items))
      .filter(
        (column): column is string[] =>
          Array.isArray(column) && column.length > 0,
      );
  }

  return [];
}

function renderStructuredContentBlock(
  block: TabContentBlock | SanityTabContentBlock,
  key: Key,
) {
  const blockType = getStructuredBlockType(block);
  const dataAttributes = getBlockDataAttributes(block);

  switch (blockType) {
    case "heading":
      return (
        <h2 className="h2 pb-10" data-sanity={dataAttributes?.text} key={key}>
          {"text" in block ? block.text : ""}
        </h2>
      );

    case "subheading":
      return (
        <h3
          className="text-lg font-bold"
          data-sanity={dataAttributes?.text}
          key={key}
        >
          {"text" in block ? block.text : ""}
        </h3>
      );

    case "paragraph":
      return (
        <p
          className={`p1${"bold" in block && block.bold ? " font-bold" : ""}`}
          data-sanity={dataAttributes?.text}
          key={key}
        >
          {"text" in block ? block.text : ""}
        </p>
      );

    case "bullets":
    case "list":
      if (!("items" in block)) {
        return null;
      }

      const listItems = block.items as string[];

      return (
        <ul
          className="list-disc"
          data-sanity={dataAttributes?.text}
          key={key}
        >
          {listItems.map((item, j) => (
            <li
              key={j}
              className={`p1${"bold" in block && block.bold ? " font-bold" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "numberedList":
      if (!("items" in block)) {
        return null;
      }

      const numberedListItems = block.items as string[];

      return (
        <ol
          className="list-decimal space-y-4 pl-6"
          data-sanity={dataAttributes?.text}
          key={key}
        >
          {numberedListItems.map((item, j) => (
            <li key={j} className="p1">
              {item}
            </li>
          ))}
        </ol>
      );

    case "columns": {
      const columns = getColumns(block);

      if (!columns.length) {
        return null;
      }

      return (
        <div key={key} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {columns.map((column, colIdx) => (
            <ul key={colIdx} className="space-y-1">
              {column.map((item, itemIdx) => (
                <li key={itemIdx} className="p1">
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      );
    }

    case "divider":
      return <hr className="border-line-divider" key={key} />;

    case "resourceList": {
      const items =
        "items" in block && Array.isArray(block.items)
          ? (block.items as ResourceListItem[])
          : [];

      if (!items.length) {
        return null;
      }

      return (
        <ResourceList
          eyebrow={"eyebrow" in block && block.eyebrow ? block.eyebrow : ""}
          eyebrowDataSanity={dataAttributes?.eyebrow}
          items={items.map((item, index) => ({
            ...item,
            dataAttributes: {
              ...item.dataAttributes,
              ...dataAttributes?.items?.[index],
            },
          }))}
          key={key}
          previewCount={
            "previewCount" in block ? block.previewCount : undefined
          }
        />
      );
    }

    case "trainerList": {
      const items =
        "items" in block && Array.isArray(block.items)
          ? (block.items as TrainerListItem[])
          : [];

      if (!items.length) {
        return null;
      }

      return (
        <TrainerList
          items={items.map((item, index) => ({
            ...item,
            dataAttributes: {
              ...item.dataAttributes,
              ...dataAttributes?.items?.[index],
            },
          }))}
          key={key}
          previewCount={
            "previewCount" in block ? block.previewCount : undefined
          }
          sortLabel={
            "sortLabel" in block && block.sortLabel
              ? block.sortLabel
              : "Alphabetically"
          }
          state={
            "state" in block && block.state ? block.state : "Massachusetts"
          }
        />
      );
    }

    case "quote": {
      const quoteText = "quote" in block ? block.quote : "";
      const attribution = "attribution" in block ? block.attribution : undefined;

      if (!quoteText) return null;

      return (
        <div
          key={key}
          style={{
            display: "flex",
            padding: "16px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            alignSelf: "stretch",
            background: "var(--BG-lavender, #FAF6FD)",
          }}
        >
          <p
            style={{
              color: "#000",
              fontFamily: '"IBM Plex Sans"',
              fontSize: "16px",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {quoteText}
          </p>
          {attribution && (
            <p
              style={{
                color: "var(--Light-Grey-Text, #888)",
                fontFamily: '"IBM Plex Sans"',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                alignSelf: "flex-start",
              }}
            >
              {attribution}
            </p>
          )}
        </div>
      );
    }

    case "link":
    case "sideTabsLink": {
      const text = "text" in block ? block.text : "";
      const link = resolveCmsLink(
        "linkTarget" in block ? block.linkTarget : undefined,
        "href" in block ? block.href : "",
      );
      const href = link.href;

      if (!text || !href) {
        return null;
      }

      return (
        <a
          key={key}
          href={href}
          className="link inline-block text-primary underline transition hover:text-secondary"
          data-sanity={dataAttributes?.text}
          target={link.openInNewTab ? "_blank" : undefined}
          rel={link.openInNewTab ? "noopener noreferrer" : undefined}
        >
          {text}
        </a>
      );
    }

    default:
      return null;
  }
}

function renderTabContent(content: SideTab["content"]) {
  const nodes: ReactNode[] = [];
  let portableTextGroup: PortableTextBlock[] = [];
  let portableTextGroupKey: Key | null = null;

  const flushPortableTextGroup = () => {
    if (!portableTextGroup.length) {
      return;
    }

    nodes.push(
      <PortableText
        key={`portable-text-${String(portableTextGroupKey ?? nodes.length)}`}
        value={portableTextGroup}
        components={portableTextComponents}
      />,
    );
    portableTextGroup = [];
    portableTextGroupKey = null;
  };

  content.forEach((block, index) => {
    if (isPortableTextBlock(block)) {
      portableTextGroupKey ??= block._key ?? index;
      portableTextGroup.push(block);
      return;
    }

    flushPortableTextGroup();
    nodes.push(
      renderStructuredContentBlock(block, getStructuredBlockKey(block, index)),
    );
  });

  flushPortableTextGroup();

  return nodes;
}

export default function SideTabsContent({
  content,
}: {
  content: SideTab["content"];
}) {
  return <>{renderTabContent(content)}</>;
}
