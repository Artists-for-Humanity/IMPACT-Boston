// components/Header/Navigation.tsx
// Primary navigation — matches nav-a.png design:
// - 3 nav items with dropdowns: About, Programs, Learn more
// - Active item is bold + purple
// - Register (filled purple button) + Donate (outlined button) on the right
// - Search icon far right

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
interface NavItem {
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
      { label: "About Impact", link: "/AboutImpact", description: "Learn about our mission, vision and approach to self-defense." },
      { label: "Board and Staff", link: "/BoardAndStaff", description: "Meet the people behind Impact." },
      { label: "Resources", link: "/Resources", description: "Explore our collection of self-defense resources." },
      { label: "Blog", link: "/Blog", description: "Read our latest articles and updates." },
      { label: "Accessibility", link: "/Accessibility", description: "Learn about our commitment to accessibility." },
    ],
  },
  {
    label: "Programs",
    link: "/programs",
    subItems: [
      { label: "Self-Defense Classes", link: "/SelfDefense", description: "Learn about our self-defense classes." },
      { label: "Schools & Colleges", link: "/SchoolsAndColleges", description: "Explore our programs for schools and colleges." },
      { label: "People With Disabilities", link: "/PeopleWithDisabilities", description: "Discover resources for people with disabilities." },
      { label: "De-escalation", link: "/De-escalation", description: "Learn about de-escalation techniques." },
      { label: "Community Organizations", link: "/CommunityOrganizations", description: "Find out about our community partnerships." },
      { label: "Workplace Programs", link: "/WorkplacePrograms", description: "Explore our workplace self-defense programs." },
      { label: "Know Your Rights", link: "/KnowYourRights", description: "Learn about your rights in self-defense situations." },
      { label: "Customized Programs", link: "/CustomizedPrograms", description: "Discover our customized self-defense programs." },
    ],
  },
  {
    label: "Learn more",
    link: "/learn-more",
    subItems: [
      { label: "Fact Check Fridays", link: "/FactCheckFriday", description: "Stay informed with our weekly fact checks." },
      { label: "Books by Meg Stone", link: "/BooksByMegStone", description: "Explore the works of our founder." },
      { label: "Press", link: "/Press", description: "Read our latest press releases and media coverage." },
      { label: "What is Empowerment", link: "/WhatIsEmpowerment", description: "Learn about the principles of empowerment." },
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
                      activeDropdown === item.label ? "rotate-[270deg]" : ""
                    }`}
                  />
                )}
              </button>

              {/* Dropdown */}
              {item.subItems && activeDropdown === item.label && (
                <ul className="absolute top-full right-[-30] mt-1 min-w-xl bg-white border border-gray-100 shadow-lg py-1 z-50 px-8 py-4 rounded-2xl grid grid-cols-2">
                  {item.subItems.map((sub) => (
                    <li key={sub.label}>
                      <a
                        href={sub.link}
                        className="link block px-4 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150 rounded-lg"
                      >
                        <p className="p1-bold text-secondary">{sub.label}</p>
                        <p className="p2">{sub.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      {/* ── CTA buttons ─────────────────────────────────────────── */}
      <div className="hidden lg:flex items-center gap-2">
        {/* Register — filled purple */}
        <Link
          href="/register"
          className="link flex items-center gap-0.5 px-4 py-1 text-[#FFF] bg-[#6E3388] hover:bg-brand-primary rounded-[5px] transition-colors duration-150"
        >
          Register
        </Link>

        {/* Donate — outlined */}
        <Link
          href="/donate"
          className="link flex items-center gap-0.5 px-4 py-1 text-black border border-[#959595] rounded-[5px] hover:border-gray-400 hover:text-gray-900 transition-colors duration-150"
        >
          Donate
        </Link>
      </div>

      {/* ── Search icon ─────────────────────────────────────────── */}
      <button
        aria-label="Search"
        className="hidden lg:flex p-1.5 text-gray-400 hover:text-gray-700 transition-colors duration-150"
      >
        <Image src="/icons/search.svg" width={18} height={18} alt="Search" />
      </button>

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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50">
          <ul className="px-4 py-3 flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.link}
                  className="link block px-3 py-3 text-gray-700 hover:text-brand-primary-shade border-b border-gray-50 transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {item.subItems?.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.link}
                    className="link block px-6 py-2 text-gray-500 hover:text-gray-800 transition-colors duration-150"
                    onClick={() => setMobileOpen(false)}
                  >
                    {sub.label}
                  </a>
                ))}
              </li>
            ))}
          </ul>
          <div className="px-4 py-4 flex flex-col gap-2 border-t border-gray-100">
            <Link
              href="/register"
              className="link w-full text-center px-5 py-2.5 text-white bg-brand-primary-shade"
            >
              Register
            </Link>
            <Link
              href="/donate"
              className="link w-full text-center px-5 py-2.5 text-gray-700 border border-gray-300"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
