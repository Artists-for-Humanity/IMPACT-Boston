"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp, CircleHelp } from "lucide-react";
import { useId, useState } from "react";

import Grid from "../common/Grid";

export type ListVariant = "accordion" | "details";

export type ListItem = {
  title: string;
  description: string;
  paragraph?: string;
  showInfoIcon?: boolean;
  accordionContent?: string;
  defaultOpen?: boolean;
};

export type ListDetailField = {
  label: string;
  value: string;
  href?: string;
};

export type ListDetailItem = {
  fields: ListDetailField[];
  descriptionTitle?: string;
  description: string;
};

export type ListProps = {
  title?: string;
  description?: string;
  items?: ListItem[];
  detailItems?: ListDetailItem[];
  variant?: ListVariant;
  showToggle?: boolean;
  noPaddingTop?: boolean;
};

export default function List({
  title,
  description,
  items = [],
  detailItems = [],
  variant = "accordion",
  showToggle = true,
  noPaddingTop = false,
}: ListProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    () =>
      new Set(
        items
          .map((item, index) => (item.defaultOpen ? index : null))
          .filter((index): index is number => index !== null),
      ),
  );
  const [allOpen, setAllOpen] = useState(false);
  const visibleItems = variant === "details" ? detailItems : items;
  const serviceCount = visibleItems.length;
  const serviceLabel = serviceCount === 1 ? "service" : "services";
  const allOpenLabel = allOpen
    ? `Close all ${serviceCount} ${serviceLabel}`
    : `Show all ${serviceCount} ${serviceLabel}`;

  const toggleItem = (index: number) => {
    setOpenIndexes((current) => {
      const next = allOpen ? getAccordionIndexes(items) : new Set(current);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
    setAllOpen(false);
  };

  const toggleAll = () => {
    setAllOpen((current) => !current);
    setOpenIndexes(new Set());
  };

  const headerAction = showToggle && variant === "accordion" && serviceCount ? (
    <button
      className="link text-secondary underline transition hover:text-primary"
      onClick={toggleAll}
      type="button"
    >
      {allOpenLabel}
    </button>
  ) : null;
  const hasHeader = Boolean(title || description || headerAction);

  return (
    <Grid noPaddingTop={noPaddingTop}>
      <section className="col-span-full flex flex-col gap-8 md:gap-12 lg:gap-16">
        {hasHeader ? (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex max-w-[760px] flex-col gap-3">
              {title ? <h2 className="h3 text-[#071526]">{title}</h2> : null}
              {description ? (
                <p className="p2 text-grey">{description}</p>
              ) : null}
            </div>

            {headerAction ? (
              <div className="hidden pt-1 lg:block">{headerAction}</div>
            ) : null}
          </div>
        ) : null}

        {variant === "details" ? (
          <DetailList items={detailItems} />
        ) : (
          <AccordionList
            allOpen={allOpen}
            items={items}
            openIndexes={openIndexes}
            onToggleItem={toggleItem}
          />
        )}

        {headerAction ? <div className="lg:hidden">{headerAction}</div> : null}
      </section>
    </Grid>
  );
}

function AccordionList({
  allOpen,
  items,
  openIndexes,
  onToggleItem,
}: {
  allOpen: boolean;
  items: ListItem[];
  openIndexes: Set<number>;
  onToggleItem: (index: number) => void;
}) {
  const listId = useId();

  return (
    <div>
      {items.map((item, index) => {
        const accordionContent = item.accordionContent ?? item.paragraph;
        const hasAccordion = Boolean(accordionContent);
        const isOpen = allOpen || openIndexes.has(index);
        const contentId = `${listId}-accordion-${index}`;

        return (
          <article
            aria-controls={hasAccordion ? contentId : undefined}
            aria-expanded={hasAccordion ? isOpen : undefined}
            className={`border-b border-line-divider py-5 md:py-6 lg:py-7 ${
              hasAccordion
                ? "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-secondary"
                : ""
            }`}
            key={`${item.title}-${index}`}
            onClick={hasAccordion ? () => onToggleItem(index) : undefined}
            onKeyDown={
              hasAccordion
                ? (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onToggleItem(index);
                    }
                  }
                : undefined
            }
            role={hasAccordion ? "button" : undefined}
            tabIndex={hasAccordion ? 0 : undefined}
          >
            <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="sub-1 truncate text-black md:whitespace-normal">
                    {item.title}
                  </h3>
                  {item.showInfoIcon ? (
                    <CircleHelp
                      aria-label={`${item.title} information`}
                      className="size-4 shrink-0 text-grey"
                      strokeWidth={1.8}
                    />
                  ) : null}
                </div>
                <p className="p2 mt-2 max-w-[760px] text-black">
                  {item.description}
                </p>
              </div>

              <div className="flex items-start gap-5 pt-0.5">
                {hasAccordion ? (
                  <span aria-hidden="true" className="text-black">
                    {isOpen ? (
                      <ChevronUp className="size-5" strokeWidth={1.8} />
                    ) : (
                      <ChevronDown className="size-5" strokeWidth={1.8} />
                    )}
                  </span>
                ) : null}
              </div>

              {hasAccordion && isOpen ? (
                <p
                  className="p2 col-span-full max-w-[920px] whitespace-pre-line text-black"
                  id={contentId}
                >
                  {accordionContent}
                </p>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function DetailList({ items }: { items: ListDetailItem[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <article
          className="grid gap-8 border-b border-line-divider py-8 md:py-10 lg:grid-cols-2 lg:gap-12"
          key={index}
        >
          <dl className="grid gap-x-6 gap-y-4 md:grid-cols-[160px_1fr] lg:grid-cols-[160px_1fr]">
            {item.fields.map((field) => (
              <div className="contents" key={`${field.label}-${field.value}`}>
                <dt className="p1-bold text-black">{field.label}</dt>
                <dd className="p1 text-black">
                  {field.href ? (
                    <Link
                      className="text-secondary underline"
                      href={field.href}
                    >
                      {field.value}
                    </Link>
                  ) : (
                    field.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div>
            <h3 className="p1-bold text-black">
              {item.descriptionTitle || "Description"}
            </h3>
            <p className="p1 mt-4 whitespace-pre-line text-black">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function getAccordionIndexes(items: ListItem[]) {
  return new Set(
    items
      .map((item, index) =>
        item.accordionContent || item.paragraph ? index : null,
      )
      .filter((index): index is number => index !== null),
  );
}
