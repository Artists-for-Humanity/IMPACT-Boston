"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import { useId, useState } from "react";

import type { CmsLinkTarget } from "@/cms/links";
import { resolveCmsLink } from "@/cms/links";
import Grid from "@/components/common/Grid";

export type EventListItem = {
  _key?: string | null;
  dateLabel?: string;
  isoDate?: string; // YYYY-MM-DD, used for auto past/upcoming categorization
  defaultOpen?: boolean;
  details?: PortableTextBlock[];
  href?: string;
  linkTarget?: CmsLinkTarget | null;
  linkText?: string;
  openInNewTab?: boolean | null;
  registerLabel?: string;
  title?: string;
  dataAttributes?: {
    dateLabel?: string;
    details?: string;
    linkText?: string;
    registerLabel?: string;
    title?: string;
  };
};

export type EventListProps = {
  description?: string;
  events?: EventListItem[];
  noPaddingTop?: boolean;
  showChevrons?: boolean;
  title?: string;
  dataAttributes?: {
    description?: string;
    title?: string;
  };
};

const detailsComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="p2">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const link = resolveCmsLink(
        (value as { linkTarget?: CmsLinkTarget })?.linkTarget,
        (value as { href?: string })?.href,
      );
      if (!link.href) return <>{children}</>;
      return (
        <a
          href={link.href}
          target={link.openInNewTab ? "_blank" : undefined}
          rel={link.openInNewTab ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export default function EventList({
  description,
  events = [],
  noPaddingTop = false,
  showChevrons = true,
  title,
  dataAttributes,
}: EventListProps) {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => !e.isoDate || e.isoDate >= today);
  const past = events.filter((e) => e.isoDate && e.isoDate < today);
  const hasBoth = upcoming.length > 0 && past.length > 0;

  const [activeTab, setActiveTab] = useState<"upcoming" | "past">(
    upcoming.length > 0 ? "upcoming" : "past",
  );

  const displayedEvents = hasBoth
    ? activeTab === "upcoming" ? upcoming : past
    : events;

  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    () =>
      new Set(
        displayedEvents
          .map((event, index) => (event.defaultOpen ? index : null))
          .filter((index): index is number => index !== null),
      ),
  );
  const listId = useId();
  const hasHeader = Boolean(title || description);

  if (!events.length && !hasHeader) {
    return null;
  }

  const toggleEvent = (index: number) => {
    setOpenIndexes((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const handleTabChange = (tab: "upcoming" | "past") => {
    setActiveTab(tab);
    setOpenIndexes(new Set());
  };

  return (
    <Grid noPaddingTop={noPaddingTop}>
      <section className="col-span-full flex flex-col gap-8">
        {hasHeader ? (
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
        ) : null}

        <div>
          {hasBoth ? (
            <div className="mb-2 flex gap-6 border-b border-line-divider">
              <button
                className={`pb-3 sub-2 transition-colors border-b-2 -mb-px ${
                  activeTab === "upcoming"
                    ? "border-secondary text-secondary"
                    : "border-transparent text-grey hover:text-black"
                }`}
                onClick={() => handleTabChange("upcoming")}
                type="button"
              >
                Upcoming Events
              </button>
              <button
                className={`pb-3 sub-2 transition-colors border-b-2 -mb-px ${
                  activeTab === "past"
                    ? "border-secondary text-secondary"
                    : "border-transparent text-grey hover:text-black"
                }`}
                onClick={() => handleTabChange("past")}
                type="button"
              >
                Past Events
              </button>
            </div>
          ) : null}

          {displayedEvents.map((event, index) => {
            const detailsId = `${listId}-event-${index}`;
            const hasDetails = Boolean(event.details?.length);
            const isOpen = openIndexes.has(index);
            const isPast = event.isoDate ? event.isoDate < today : false;

            return (
              <article
                className="border-b border-line-divider pt-2 pb-8 md:py-6"
                key={event._key ?? `${event.title ?? "event"}-${index}`}
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-7 md:grid-cols-[78px_minmax(0,1fr)_auto] md:items-start md:gap-x-6 md:gap-y-3">
                  {event.dateLabel ? (
                    <div
                      className="medium-label inline-flex min-h-[34px] min-w-[72px] items-center justify-center rounded-[8px] bg-bg-lavender px-3 py-2 text-center text-secondary whitespace-nowrap md:col-start-1"
                      data-sanity={event.dataAttributes?.dateLabel}
                    >
                      <DateLabel label={event.dateLabel} />
                    </div>
                  ) : null}

                  {showChevrons ? (
                    <ChevronControl
                      detailsId={detailsId}
                      hasDetails={hasDetails}
                      isOpen={isOpen}
                      label={event.title || `Event ${index + 1}`}
                      onToggle={() => toggleEvent(index)}
                    />
                  ) : null}

                  <div className="col-span-full flex min-w-0 flex-col gap-2 md:col-span-1 md:col-start-2 md:row-start-1">
                    {event.title ? (
                      <h3
                        className="sub-1 max-w-[760px] text-black"
                        data-sanity={event.dataAttributes?.title}
                      >
                        {event.title}
                      </h3>
                    ) : null}

                    {event.href ? (
                      <p className="p2 max-w-[920px] text-black">
                        <Link
                          className="text-secondary underline underline-offset-auto transition-colors hover:no-underline"
                          data-sanity={event.dataAttributes?.registerLabel}
                          href={event.href}
                          rel={event.openInNewTab ? "noopener noreferrer" : undefined}
                          target={event.openInNewTab ? "_blank" : undefined}
                        >
                          {event.registerLabel || event.linkText || event.href}
                        </Link>
                      </p>
                    ) : (event.registerLabel || event.linkText) ? (
                      <p className="p2 max-w-[920px] text-black">
                        <span data-sanity={event.dataAttributes?.registerLabel}>
                          {event.registerLabel || event.linkText}
                        </span>
                      </p>
                    ) : !isPast ? (
                      <p className="p2 max-w-[920px] text-black">
                        <span data-sanity={event.dataAttributes?.registerLabel}>
                          Registration link coming soon!
                        </span>
                      </p>
                    ) : null}
                  </div>

                  {hasDetails && isOpen ? (
                    <div
                      className="p2 col-span-full max-w-[920px] text-black md:col-start-2 [&_a]:text-secondary [&_a]:underline [&_a:hover]:no-underline"
                      data-sanity={event.dataAttributes?.details}
                      id={detailsId}
                    >
                      <PortableText
                        value={event.details!}
                        components={detailsComponents}
                      />
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Grid>
  );
}

function ChevronControl({
  detailsId,
  hasDetails,
  isOpen,
  label,
  onToggle,
}: {
  detailsId: string;
  hasDetails: boolean;
  isOpen: boolean;
  label: string;
  onToggle: () => void;
}) {
  const icon = isOpen ? (
    <ChevronUp className="size-5" strokeWidth={1.8} />
  ) : (
    <ChevronDown className="size-5" strokeWidth={1.8} />
  );

  if (!hasDetails) {
    return (
      <span
        aria-hidden="true"
        className="justify-self-end pt-1 text-black md:col-start-3 md:row-start-1"
      >
        {icon}
      </span>
    );
  }

  return (
    <button
      aria-controls={detailsId}
      aria-expanded={isOpen}
      aria-label={`${isOpen ? "Hide" : "Show"} details for ${label}`}
      className="justify-self-end pt-1 text-black transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary md:col-start-3 md:row-start-1"
      onClick={onToggle}
      type="button"
    >
      {icon}
    </button>
  );
}

function DateLabel({ label }: { label: string }) {
  const match = label.match(/^(.*\d)(st|nd|rd|th)$/i);

  if (!match) {
    return label;
  }

  return (
    <>
      {match[1]}
      <sup className="text-[10px] leading-none">{match[2]}</sup>
    </>
  );
}
