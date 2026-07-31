"use client";

import Link from "next/link";
import React, { useState, type ReactNode } from "react";

import type { CmsLinkTarget } from "@/cms/links";
import Grid from "@/components/common/Grid";

export type ClassDescriptionItem = {
  _key?: string | null;
  name?: string;
  summary?: string;
  cost?: string;
  dateTime?: string;
  location?: string;
  linkText?: string;
  href?: string;
  linkTarget?: CmsLinkTarget | null;
  openInNewTab?: boolean | null;
  description?: string;
  dataAttributes?: {
    cost?: string;
    dateTime?: string;
    description?: string;
    linkText?: string;
    location?: string;
    name?: string;
    summary?: string;
  };
};

export type ClassDescriptionsLink = {
  href: string;
  openInNewTab?: boolean | null;
  text: string;
};

export type DescriptionLink = {
  keyword: string;
  href: string;
  openInNewTab?: boolean;
};

function renderDescription(text: string, links?: DescriptionLink[]) {
  if (!links?.length) return text;
  const parts: (string | React.ReactElement)[] = [text];
  for (const { keyword, href, openInNewTab } of links) {
    const next: (string | React.ReactElement)[] = [];
    for (const part of parts) {
      if (typeof part !== "string") { next.push(part); continue; }
      const idx = part.toLowerCase().indexOf(keyword.toLowerCase());
      if (idx === -1) { next.push(part); continue; }
      next.push(part.slice(0, idx));
      next.push(<a key={href} href={href} className="underline hover:no-underline" target={openInNewTab ? "_blank" : undefined} rel={openInNewTab ? "noopener noreferrer" : undefined}>{part.slice(idx, idx + keyword.length)}</a>);
      next.push(part.slice(idx + keyword.length));
    }
    parts.splice(0, parts.length, ...next);
  }
  return parts;
}

export type ClassDescriptionsProps = {
  title?: string;
  description?: string;
  descriptionLinks?: DescriptionLink[];
  items?: ClassDescriptionItem[];
  noPaddingTop?: boolean;
  seeAllLink?: ClassDescriptionsLink;
  dataAttributes?: {
    description?: string;
    seeAllLinkText?: string;
    title?: string;
  };
};

const DEFAULT_VISIBLE = 3;

export default function ClassDescriptions({
  title,
  description,
  descriptionLinks,
  items = [],
  noPaddingTop = false,
  seeAllLink,
  dataAttributes,
}: ClassDescriptionsProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > DEFAULT_VISIBLE;
  const visibleItems = hasMore && !expanded ? items.slice(0, DEFAULT_VISIBLE) : items;
  const hasHeader = Boolean(title || description || seeAllLink);

  return (
    <Grid noPaddingTop={noPaddingTop}>
      <section className="col-span-full flex flex-col gap-y-8">
        {hasHeader ? (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex max-w-[760px] flex-col gap-3">
              {title ? (
                <h2
                  className="h3 text-[#071526]"
                  data-sanity={dataAttributes?.title}
                >
                  {title}
                </h2>
              ) : null}
              {description ? (
                <p
                  className="p2 text-grey"
                  data-sanity={dataAttributes?.description}
                >
                  {renderDescription(description, descriptionLinks)}
                </p>
              ) : null}
            </div>

            {hasMore ? (
              <div className="hidden pt-1 lg:block text-right">
                <button
                  className="p2 text-secondary underline underline-offset-auto hover:no-underline transition-colors"
                  onClick={() => setExpanded((v) => !v)}
                  type="button"
                >
                  {expanded ? "See less" : `See all ${items.length} classes`}
                </button>
              </div>
            ) : null}
          </div>
        ) : null}

        <div>
          {visibleItems.map((item, index) => (
            <ClassDescriptionArticle
              item={item}
              key={item._key ?? `${item.name ?? "class-description"}-${index}`}
            />
          ))}
        </div>

        {hasMore ? (
          <div className="lg:hidden">
            <button
              className="p2 text-secondary underline underline-offset-auto hover:no-underline transition-colors"
              onClick={() => setExpanded((v) => !v)}
              type="button"
            >
              {expanded ? "See less" : "See all"}
            </button>
          </div>
        ) : null}
      </section>
    </Grid>
  );
}

function ClassDescriptionArticle({ item }: { item: ClassDescriptionItem }) {
  return (
    <article className="grid gap-7 border-b border-line-divider pt-[16px] pb-8 last:border-b-0 md:gap-8 lg:grid-cols-2 lg:gap-12">
      <dl className="grid grid-cols-4 gap-x-5 gap-y-4 md:grid-cols-[160px_minmax(0,1fr)]">
        <DetailRow dataAttribute={item.dataAttributes?.name} label="Name">
          {item.name}
        </DetailRow>
        <DetailRow dataAttribute={item.dataAttributes?.summary} label="Summary">
          {item.summary}
        </DetailRow>
        <DetailRow dataAttribute={item.dataAttributes?.cost} label="Course Fee">
          {item.cost}
        </DetailRow>
        <DetailRow dataAttribute={item.dataAttributes?.dateTime} label="Date/Time">
          {item.dateTime?.replace(/^- /gm, "• ")}
        </DetailRow>
        <DetailRow dataAttribute={item.dataAttributes?.location} label="Location">
          {item.location}
        </DetailRow>
        {item.href || item.linkText ? (
          <DetailRow label="Link">
            {item.href ? (
              <Link
                className="text-secondary underline"
                data-sanity={item.dataAttributes?.linkText}
                href={item.href}
                rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                target={item.openInNewTab ? "_blank" : undefined}
              >
                {item.linkText || item.href}
              </Link>
            ) : (
              <span data-sanity={item.dataAttributes?.linkText}>
                {item.linkText}
              </span>
            )}
          </DetailRow>
        ) : null}
      </dl>

      {item.description ? (
        <div className="flex flex-col gap-y-2">
          <h3 className="p1-bold text-black">Description</h3>
          <p
            className="p2 whitespace-pre-line text-black"
            data-sanity={item.dataAttributes?.description}
          >
            {item.description}
          </p>
        </div>
      ) : null}
    </article>
  );
}

function DetailRow({
  children,
  dataAttribute,
  label,
}: {
  children?: ReactNode;
  dataAttribute?: string;
  label: string;
}) {
  if (!hasContent(children)) {
    return null;
  }

  return (
    <>
      <dt className="sub-2 text-black col-span-2 md:col-span-1">{label}</dt>
      <dd
        className="p2 min-w-0 whitespace-pre-line text-black col-start-3 col-span-2 md:col-start-auto md:col-span-1"
        data-sanity={dataAttribute}
      >
        {children}
      </dd>
    </>
  );
}

function ClassDescriptionsAnchor({
  dataAttribute,
  link,
}: {
  dataAttribute?: string;
  link: ClassDescriptionsLink;
}) {
  return (
    <Link
      className="p2 text-secondary underline underline-offset-auto hover:no-underline transition-colors"
      data-sanity={dataAttribute}
      href={link.href}
      rel={link.openInNewTab ? "noopener noreferrer" : undefined}
      target={link.openInNewTab ? "_blank" : undefined}
    >
      {link.text}
    </Link>
  );
}

function hasContent(value?: ReactNode) {
  return !(
    value === undefined ||
    value === null ||
    value === false ||
    (typeof value === "string" && value.trim() === "")
  );
}
