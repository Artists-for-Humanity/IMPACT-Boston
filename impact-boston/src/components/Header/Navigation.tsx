"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { ROUTES } from "@/routes";

export interface NavItem {
  label: string;
  link: string;
  subItems?: { label: string; link: string; description: string }[];
}

interface NavigationProps {
  items?: NavItem[];
  activeItem?: string;
}

interface SearchItem {
  label: string;
  link: string;
  description: string;
  category: string;
  keywords?: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    link: ROUTES.ABOUT,
    subItems: [
      {
        label: "About Impact",
        link: ROUTES.ABOUT_IMPACT,
        description: "Building confidence for personal & community safety.",
      },
      {
        label: "Board and Staff",
        link: ROUTES.BOARD_AND_STAFF,
        description: "Meet the people leading our mission forward.",
      },
      {
        label: "Resources",
        link: ROUTES.RESOURCES,
        description: "Tools and guidance to support safer communities.",
      },
      {
        label: "Blog",
        link: ROUTES.BLOG,
        description: "Stories, insights, and updates from our work.",
      },
      {
        label: "Accessibility",
        link: ROUTES.ACCESSIBILITY,
        description: "Self-defense program disability accommodations overview.",
      },
    ],
  },
  {
    label: "Programs",
    link: ROUTES.PROGRAMS,
    subItems: [
      {
        label: "Public Classes",
        link: ROUTES.PUBLIC_CLASSES,
        description: "Register as an individual for a self-defense class",
      },
      {
        label: "Schools & Colleges",
        link: ROUTES.SCHOOLS_AND_COLLEGES,
        description: "Explore program options for schools and colleges",
      },
      {
        label: "People with Disabilities",
        link: ROUTES.PEOPLE_WITH_DISABILITIES,
        description:
          "Explore programs for people with disabilities and trainings for those who support them",
      },
      {
        label: "De-escalation",
        link: ROUTES.DE_ESCALATION,
        description: "Hire us for a de-escalation workshop",
      },
      {
        label: "Community Organizations",
        link: ROUTES.COMMUNITY_ORGANIZATIONS,
        description: "Explore training options that strengthen communities",
      },
      {
        label: "Workplace Programs",
        link: ROUTES.WORKPLACE_PROGRAMS,
        description: "Hire us for a dynamic workshop for your team",
      },
      {
        label: "Know Your Rights",
        link: ROUTES.KNOW_YOUR_RIGHTS,
        description:
          "Learn about our trauma-informed approach to practicing know your rights scenarios",
      },
      {
        label: "Healthy Relationships & Sex Education",
        link: ROUTES.HEALTHY_RELATIONSHIPS,
        description:
          "For schools, after-school programs, and summer youth programs",
      },
    ],
  },
  {
    label: "Learn More",
    link: ROUTES.LEARN_MORE,
    subItems: [
      {
        label: "Fact Check Fridays",
        link: ROUTES.FACT_CHECK_FRIDAY,
        description: "Stay informed with our weekly fact checks.",
      },
      {
        label: "Books by Meg Stone",
        link: ROUTES.BOOKS_BY_MEG_STONE,
        description: "Explore the works of our founder.",
      },
      {
        label: "Press",
        link: ROUTES.PRESS,
        description: "Read our latest press releases and media coverage.",
      },
      {
        label: "What is Empowerment Self-Defense?",
        link: ROUTES.EMPOWERMENT,
        description: "Learn about the principles of empowerment.",
      },
    ],
  },
];

const EXTRA_SEARCH_ITEMS: SearchItem[] = [
  {
    label: "Home",
    link: ROUTES.HOME,
    description: "Return to the IMPACT Boston homepage.",
    category: "IMPACT",
    keywords: "impact boston safety self-defense",
  },
  {
    label: "ASAP",
    link: ROUTES.PEOPLE_WITH_DISABILITIES_ASAP,
    description: "Abuse prevention skills for people with disabilities.",
    category: "Programs",
    keywords: "abuse prevention accessibility disability disabilities",
  },
  {
    label: "Ability",
    link: ROUTES.PEOPLE_WITH_DISABILITIES_ABILITY,
    description: "Self-defense and safety training for people with disabilities.",
    category: "Programs",
    keywords: "accessibility disability disabilities self-defense",
  },
  {
    label: "Abuse Prevention",
    link: ROUTES.PEOPLE_WITH_DISABILITIES_ABUSE_PREVENTION,
    description: "Training that helps prevent abuse and support safer communities.",
    category: "Programs",
    keywords: "asap people with disabilities prevention safety",
  },
  {
    label: "Resources for Abuse Survivors",
    link: ROUTES.ABUSE_SURVIVORS,
    description: "Supportive information and resources for survivors.",
    category: "Resources",
    keywords: "abuse survivor support help resources",
  },
];

function buildSearchItems(items: NavItem[]): SearchItem[] {
  const uniqueItems = new Map<string, SearchItem>();

  const addItem = (item: SearchItem) => {
    if (!uniqueItems.has(item.link)) {
      uniqueItems.set(item.link, item);
    }
  };

  EXTRA_SEARCH_ITEMS.forEach(addItem);

  items.forEach((item) => {
    item.subItems?.forEach((subItem) => {
      addItem({
        label: subItem.label,
        link: subItem.link,
        description: subItem.description,
        category: item.label,
        keywords: `${item.label} ${subItem.label}`,
      });
    });

    addItem({
      label: item.label,
      link: item.link,
      description: `Browse ${item.label.toLowerCase()} pages and related information.`,
      category: "Navigation",
      keywords: item.subItems?.map((subItem) => subItem.label).join(" "),
    });
  });

  return Array.from(uniqueItems.values());
}

function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s&-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getSearchScore(item: SearchItem, query: string, terms: string[]) {
  const label = normalizeSearchText(item.label);
  const searchableText = normalizeSearchText(
    `${item.label} ${item.description} ${item.category} ${item.keywords ?? ""}`
  );

  if (label === query) return 100;
  if (label.startsWith(query)) return 90;
  if (label.includes(query)) return 80;
  if (searchableText.includes(query)) return 70;

  const matchingTerms = terms.filter((term) => searchableText.includes(term));

  if (matchingTerms.length === terms.length) {
    return 60 + matchingTerms.length;
  }

  if (matchingTerms.length > 0) {
    return 20 + matchingTerms.length;
  }

  return 0;
}

function getSearchResults(items: SearchItem[], query: string) {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery.split(" ").filter(Boolean);

  return items
    .map((item) => ({
      item,
      score: getSearchScore(item, normalizedQuery, terms),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.item.label.localeCompare(b.item.label);
    })
    .slice(0, 6)
    .map(({ item }) => item);
}

function SiteSearch({
  items,
  variant,
  isOpen: controlledOpen,
  onOpenChange,
  onNavigate,
}: {
  items: SearchItem[];
  variant: "desktop" | "mobile";
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onNavigate?: () => void;
}) {
  const isMobile = variant === "mobile";
  const [internalOpen, setInternalOpen] = useState(isMobile);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isOpen = controlledOpen ?? internalOpen;
  const results = useMemo(() => getSearchResults(items, query), [items, query]);
  const showResults = isOpen && query.trim().length > 0;
  const showCloseButton = !isMobile || query.length > 0;

  const setOpen = useCallback((open: boolean) => {
    if (isMobile) {
      setInternalOpen(true);
      return;
    }

    if (onOpenChange) {
      onOpenChange(open);
    } else {
      setInternalOpen(open);
    }
  }, [isMobile, onOpenChange]);

  const closeSearch = useCallback(() => {
    setQuery("");
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    if (isOpen && !isMobile) {
      inputRef.current?.focus();
    }
  }, [isMobile, isOpen]);

  useEffect(() => {
    if (!isOpen || isMobile) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        closeSearch();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [closeSearch, isOpen, isMobile]);

  if (!isOpen && !isMobile) {
    return (
      <button
        aria-label="Search"
        className="hidden lg:flex h-10 w-10 items-center justify-center rounded-[5px] text-black hover:bg-bg-lavender hover:text-secondary transition-colors duration-150"
        onClick={() => setOpen(true)}
        type="button"
      >
        <Search aria-hidden="true" size={19} strokeWidth={2} />
      </button>
    );
  }

  return (
    <div
      ref={rootRef}
      className={`relative ${isMobile ? "w-full" : "w-[min(42vw,480px)] min-w-[320px]"}`}
      role="search"
    >
      <label className="sr-only" htmlFor={`${variant}-site-search`}>
        Search IMPACT Boston
      </label>
      <div
        className={`flex ${isMobile ? "h-11" : "h-10"} items-center gap-3 rounded-[5px] border border-line-divider bg-white px-4 text-black focus-within:border-secondary focus-within:ring-2 focus-within:ring-bg-lavender`}
      >
        <Search aria-hidden="true" size={18} strokeWidth={2} className="shrink-0" />
        <input
          ref={inputRef}
          id={`${variant}-site-search`}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeSearch();
            }
          }}
          placeholder="Search ASAP, accessibility, programs..."
          className="link min-w-0 flex-1 border-0 bg-transparent text-black outline-none placeholder:text-light-grey-text"
          aria-controls={`${variant}-site-search-results`}
        />
        {showCloseButton && (
          <button
            aria-label={query ? "Clear search" : "Close search"}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[5px] text-black hover:bg-bg-lavender hover:text-secondary transition-colors duration-150"
            onClick={query ? () => setQuery("") : closeSearch}
            type="button"
          >
            <X aria-hidden="true" size={18} strokeWidth={2} />
          </button>
        )}
      </div>

      {showResults && (
        <div
          id={`${variant}-site-search-results`}
          className={`absolute left-0 right-0 top-full z-50 mt-3 rounded-[5px] border border-gray-100 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.14)] ${
            isMobile ? "" : "min-w-[320px]"
          }`}
        >
          {!isMobile && (
            <div
              aria-hidden="true"
              className="absolute -top-2 left-5 h-4 w-4 rotate-45 border-l border-t border-gray-100 bg-white"
            />
          )}
          <ul className="relative z-10 max-h-[360px] overflow-y-auto py-2">
            {results.length > 0 ? (
              results.map((result) => (
                <li key={result.link}>
                  <Link
                    href={result.link}
                    className="block px-5 py-3 text-black hover:bg-bg-lavender transition-colors duration-150"
                    onClick={() => {
                      closeSearch();
                      onNavigate?.();
                    }}
                  >
                    <span className="block text-[12px] font-medium uppercase tracking-[0.08em] text-dusty-purple">
                      {result.category}
                    </span>
                    <span className="p1-bold mt-1 block text-secondary">
                      {result.label}
                    </span>
                    <span className="p2 mt-1 block text-grey">
                      {result.description}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-5 py-4 text-[14px] text-grey">
                No related pages found.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Navigation({
  items = DEFAULT_NAV_ITEMS,
  activeItem,
}: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const searchItems = useMemo(() => buildSearchItems(items), [items]);

  return (
    <nav aria-label="Main navigation" className="flex flex-1 items-center justify-end gap-6">
      {/* ── Desktop nav items ────────────────────────────────────── */}
      <ul className={`${desktopSearchOpen ? "hidden" : "hidden lg:flex"} items-center gap-1`}>
        {items.map((item) => {
          const isActive = activeItem === item.label;
          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`
                  link flex items-center justify-center gap-1 px-2 py-0.5 text-black
                  transition-colors duration-150
                  ${isActive ? "font-semibold" : ""}
                `}
                aria-expanded={activeDropdown === item.label}
                aria-haspopup={item.subItems ? "true" : undefined}
              >
                {item.label}
                {item.subItems && (
                  <Image
                    src="/icons/chevron-right.svg"
                    width={10}
                    height={6}
                    alt=""
                    className={`h-auto w-3 transition-transform duration-150 ${
                      activeDropdown === item.label ? "" : ""
                    }`}
                  />
                )}
              </button>

              {/* Dropdown */}
              {item.subItems && activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 z-50 drop-shadow-lg">
                  <div
                    aria-hidden
                    className="absolute top-2 left-1/2 z-0 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-gray-100 bg-white shadow-sm"
                  />
                  <ul className="relative z-10 min-w-xl bg-white border border-gray-100 px-8 py-6 rounded-2xl grid grid-cols-2 gap-x-6">
                    {item.subItems.map((sub, subIdx) => {
                      // desktop dropdown uses 2 columns; compute which items are in the last row
                      const cols = 2;
                      const total = item.subItems!.length;
                      const lastRowCount =
                        total % cols === 0 ? cols : total % cols;
                      const firstIndexOfLastRow = total - lastRowCount;
                      const isInLastRow = subIdx >= firstIndexOfLastRow;

                      return (
                        <li
                          key={sub.label}
                          className={`border-solid border-gray-100 ${
                            isInLastRow ? "border-b-0" : "border-b-2"
                          }`}
                        >
                          <a
                            href={sub.link}
                            className="link block p-4 text-gray-600 hover:text-gray-900 hover:bg-bg-lavender transition-colors duration-150 rounded-lg"
                          >
                            <p className="p1-bold text-secondary">
                              {sub.label}
                            </p>
                            <p className="p2 text-[14px]">{sub.description}</p>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* ── CTA buttons ─────────────────────────────────────────── */}
      <div className="hidden lg:flex min-w-0 items-center gap-2">
        <SiteSearch
          items={searchItems}
          variant="desktop"
          isOpen={desktopSearchOpen}
          onOpenChange={setDesktopSearchOpen}
        />

        {/* ── Register button ──────────────────────────────────────── */}
        <Link
          href={ROUTES.REGISTER}
          className="link flex items-center gap-0.5 px-4 py-1 text-[#FFF] bg-[#000000] hover:bg-primary rounded-[5px] transition-colors duration-150"
        >
          Register
        </Link>

        {/* ── Donate button ────────────────────────────────────────── */}
        <Link
          href={ROUTES.DONATE}
          className="link flex items-center gap-0.5 px-4 py-1 text-black border border-[#959595] rounded-[5px] hover:border-gray-400 hover:text-gray-900 transition-colors duration-150"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </Link>
      </div>

      {/* ── Mobile hamburger ─────────────────────────────────────── */}
      <button
        className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? (
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 12H21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* ── Mobile panel ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 z-50 max-h-[calc(100vh-73px)] w-full overflow-y-auto bg-white border-t border-line-divider shadow-lg">
          <div className="px-6 pt-6 md:px-10">
            <SiteSearch
              items={searchItems}
              variant="mobile"
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
          <ul className="px-6 py-10 md:px-6 md:py-10 flex flex-col gap-8">
            {items.map((item, itemIdx) => (
              <li key={item.label} className="flex flex-col gap-8">
                <Link
                  href={item.link}
                  className="sub-1 block text-black hover:text-secondary transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>

                {item.subItems && (
                  <ul className="grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-16 md:gap-y-8">
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.link}
                          className="group block rounded-lg p-2 -mx-2 hover:bg-bg-lavender transition-colors duration-150"
                          onClick={() => setMobileOpen(false)}
                        >
                          <p className="p1-bold text-secondary">
                            {sub.label}
                          </p>
                          <p className="p2 mt-1 text-grey">{sub.description}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {itemIdx !== items.length - 1 && (
                  <div className="border-b border-line-divider -mx-6" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-t border-line-divider px-6 py-6 md:flex-row md:px-10">
            <Link
              href={ROUTES.REGISTER}
              className="link w-full text-center px-5 py-2.5 text-white bg-black hover:bg-primary rounded-[5px] transition-colors duration-150 md:w-auto"
              onClick={() => setMobileOpen(false)}
            >
              Register
            </Link>
            <Link
              href={ROUTES.DONATE}
              className="link w-full text-center px-5 py-2.5 text-black border border-[#959595] rounded-[5px] hover:border-gray-400 hover:text-gray-900 transition-colors duration-150 md:w-auto"
              onClick={() => setMobileOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
