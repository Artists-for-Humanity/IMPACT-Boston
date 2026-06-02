"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface NavItem {
  label: string;
  link: string;
  subItems?: { label: string; link: string; description: string; }[];
}

interface NavigationProps {
  items?: NavItem[];
  activeItem?: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    link: "/about",
    subItems: [
      {
        label: "About Impact",
        link: "/AboutImpact",
        description: "Building confidence for personal & community safety.",
      },
      {
        label: "Board and Staff",
        link: "/BoardAndStaff",
        description: "Meet the people leading our mission forward.",
      },
      {
        label: "Resources",
        link: "/Resources",
        description: "Tools and guidance to support safer communities.",
      },
      {
        label: "Blog",
        link: "/Blog",
        description: "Stories, insights, and updates from our work.",
      },
      {
        label: "Accessibility",
        link: "/Accessibility",
        description: "Self-defense program disability accommodations overview.",
      },
    ],
  },
  {
    label: "Programs",
    link: "/programs",
    subItems: [
      {
        label: "Public Classes",
        link: "/SelfDefense",
        description: "Register as an individual for a self-defense class",
      },
      {
        label: "Schools & Colleges",
        link: "/SchoolsAndColleges",
        description: "Explore program options for schools and colleges",
      },
      {
        label: "People with Disabilities",
        link: "/PeopleWithDisabilities",
        description:
          "Explore programs for people with disabilities and trainings for those who support them",
      },
      {
        label: "De-escalation",
        link: "/De-escalation",
        description: "Hire us for a de-escalation workshop",
      },
      {
        label: "Community Organizations",
        link: "/CommunityOrganizations",
        description: "Explore training options that strengthen communities",
      },
      {
        label: "Workplace Programs",
        link: "/WorkplacePrograms",
        description: "Hire us for a dynamic workshop for your team",
      },
      {
        label: "Know Your Rights",
        link: "/KnowYourRights",
        description:
          "Learn about our trauma-informed approach to practicing know your rights scenarios",
      },
      {
        label: "Healthy Relationships & Sex Education",
        link: "/HealthyRelationships",
        description:
          "For schools, after-school programs, and summer youth programs",
      },
    ],
  },
  {
    label: "Learn More",
    link: "/learn-more",
    subItems: [
      {
        label: "Fact Check Fridays",
        link: "/FactCheckFriday",
        description: "Stay informed with our weekly fact checks.",
      },
      {
        label: "Books by Meg Stone",
        link: "/BooksByMegStone",
        description: "Explore the works of our founder.",
      },
      {
        label: "Press",
        link: "/Press",
        description: "Read our latest press releases and media coverage.",
      },
      {
        label: "What is Empowerment Self-Defense?",
        link: "/Empowerment",
        description: "Learn about the principles of empowerment.",
      },
    ],
  },
];

export default function Navigation({
  items = DEFAULT_NAV_ITEMS,
  activeItem,
}: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav aria-label="Main navigation" className="flex items-center gap-6">
      {/* ── Desktop nav items ────────────────────────────────────── */}
      <ul className="hidden lg:flex items-center gap-1">
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
                    width={12}
                    height={12}
                    alt=""
                    className={` transition-transform duration-150 ${
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
                  <ul className="relative z-10 min-w-xl bg-white border border-gray-100 px-8 py-4 rounded-2xl grid grid-cols-2 gap-x-6">
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
                            className="link block p-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150 rounded-lg"
                          >
                            <p className="p1-bold text-secondary">
                              {sub.label}
                            </p>
                            <p className="p2 text-[14px]">
                              {sub.description}
                            </p>
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
      <div className="hidden lg:flex items-center gap-2">

          {/* ── Search icon ─────────────────────────────────────────── */}
      <button
        aria-label="Search"
        className="hidden lg:flex p-1.5 text-gray-400 hover:text-gray-700 transition-colors duration-150"
      >
        <Image src="/icons/search.svg" width={18} height={18} alt="Search" />
      </button>

      {/* ── Register button ──────────────────────────────────────── */}
      <Link
        href="/register"
        className="link flex items-center gap-0.5 px-4 py-1 text-[#FFF] bg-[#000000] hover:bg-brand-primary rounded-[5px] transition-colors duration-150"
      >
        Register
      </Link>

      {/* ── Donate button ────────────────────────────────────────── */}
      <Link
          href="/donate"
          className="link flex items-center gap-0.5 px-4 py-1 text-black border border-[#959595] rounded-[5px] hover:border-gray-400 hover:text-gray-900 transition-colors duration-150"
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
          <ul className="px-6 py-8 md:px-10 md:py-10">
            {items.map((item, itemIdx) => (
              <li
                key={item.label}
                className={`${
                  itemIdx === items.length - 1
                    ? ""
                    : "mb-8 border-b border-line-divider pb-8 md:mb-9 md:pb-9"
                }`}
              >
                <Link
                  href={item.link}
                  className="sub-1 mb-7 block text-black hover:text-secondary transition-colors duration-150"
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
                          className="group block"
                          onClick={() => setMobileOpen(false)}
                        >
                          <p className="p1-bold text-secondary group-hover:underline group-hover:underline-offset-2">
                            {sub.label}
                          </p>
                          <p className="p2 mt-1 text-grey">
                            {sub.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-t border-line-divider px-6 py-6 md:flex-row md:px-10">
            <Link
              href="/register"
              className="link w-full text-center px-5 py-2.5 text-white bg-black hover:bg-brand-primary rounded-[5px] transition-colors duration-150 md:w-auto"
              onClick={() => setMobileOpen(false)}
            >
              Register
            </Link>
            <Link
              href="/donate"
              className="link w-full text-center px-5 py-2.5 text-black border border-[#959595] rounded-[5px] hover:border-gray-400 hover:text-gray-900 transition-colors duration-150 md:w-auto"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
