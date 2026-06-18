import Link from "next/link";
import type { ReactNode } from "react";

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

export type ClassDescriptionsProps = {
  title?: string;
  description?: string;
  items?: ClassDescriptionItem[];
  noPaddingTop?: boolean;
  seeAllLink?: ClassDescriptionsLink;
  dataAttributes?: {
    description?: string;
    seeAllLinkText?: string;
    title?: string;
  };
};

export default function ClassDescriptions({
  title,
  description,
  items = [],
  noPaddingTop = false,
  seeAllLink,
  dataAttributes,
}: ClassDescriptionsProps) {
  const hasHeader = Boolean(title || description || seeAllLink);

  return (
    <Grid noPaddingTop={noPaddingTop}>
      <section className="col-span-full flex flex-col gap-8 md:gap-12 lg:gap-16">
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
                  {description}
                </p>
              ) : null}
            </div>

            {seeAllLink ? (
              <div className="hidden pt-1 lg:block">
                <ClassDescriptionsAnchor
                  dataAttribute={dataAttributes?.seeAllLinkText}
                  link={seeAllLink}
                />
              </div>
            ) : null}
          </div>
        ) : null}

        <div>
          {items.map((item, index) => (
            <ClassDescriptionArticle
              item={item}
              key={item._key ?? `${item.name ?? "class-description"}-${index}`}
            />
          ))}
        </div>

        {seeAllLink ? (
          <div className="lg:hidden">
            <ClassDescriptionsAnchor
              dataAttribute={dataAttributes?.seeAllLinkText}
              link={seeAllLink}
            />
          </div>
        ) : null}
      </section>
    </Grid>
  );
}

function ClassDescriptionArticle({ item }: { item: ClassDescriptionItem }) {
  return (
    <article className="grid gap-7 border-b border-line-divider py-8 first:pt-0 md:gap-8 md:py-10 lg:grid-cols-2 lg:gap-12 lg:py-12">
      <dl className="grid grid-cols-[96px_minmax(0,1fr)] gap-x-5 gap-y-4 md:grid-cols-[160px_minmax(0,1fr)]">
        <DetailRow dataAttribute={item.dataAttributes?.name} label="Name">
          {item.name}
        </DetailRow>
        <DetailRow dataAttribute={item.dataAttributes?.summary} label="Summary">
          {item.summary}
        </DetailRow>
        <DetailRow dataAttribute={item.dataAttributes?.cost} label="Cost">
          {item.cost}
        </DetailRow>
        <DetailRow dataAttribute={item.dataAttributes?.dateTime} label="Date/Time">
          {item.dateTime}
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
        <div>
          <h3 className="p1-bold text-black">Description</h3>
          <p
            className="p1 mt-4 whitespace-pre-line text-black"
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
      <dt className="p1-bold text-black">{label}</dt>
      <dd
        className="p1 min-w-0 whitespace-pre-line text-black"
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
      className="link text-secondary underline transition hover:text-primary"
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
