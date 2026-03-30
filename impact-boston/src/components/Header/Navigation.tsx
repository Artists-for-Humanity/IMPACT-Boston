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
  subItems?: { label: string; link: string }[];
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
      { label: "About Impact", link: "/AboutImpact" },
      { label: "Impact Blog", link: "/about/blog" },
      { label: "Employment", link: "/about/employment" },
      { label: "Supporters & Partners", link: "/about/partners" },
    ],
  },
  {
    label: "Programs",
    link: "/programs",
    subItems: [
      { label: "In-Person Class Schedule", link: "/programs/in-person" },
      { label: "Line Drawn", link: "/programs/line-drawn" },
      { label: "Shelter In Safety", link: "/programs/shelter-in-safety" },
      { label: "Community Collaborators", link: "/programs/community" },
    ],
  },
  {
    label: "Learn more",
    link: "/learn-more",
    subItems: [
      { label: "Class Descriptions", link: "/resources/class-descriptions" },
      { label: "Accessibility Information", link: "/resources/accessibility" },
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
                  flex items-center justify-center gap-1 px-2 py-0.5 text-base font-bold tracking-normal text-black
                  transition-colors duration-150
                  ${isActive ? "font-semibold" : ""}
                `}
                style={{ lineHeight: "25px" }}
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
                <ul className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 shadow-lg py-1 z-50">
                  {item.subItems.map((sub) => (
                    <li key={sub.label}>
                      <a
                        href={sub.link}
                        className="block px-4 py-2.5 text-sm font-body text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                      >
                        {sub.label}
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
          className="flex items-center gap-0.5 px-4 py-1 text-base font-nav font-normal text-[#FFF] bg-[#6E3388] hover:bg-brand-primary rounded-[5px] transition-colors duration-150"
          style={{ lineHeight: "25px" }}
        >
          Register
        </Link>

        {/* Donate — outlined */}
        <Link
          href="/donate"
          className="flex items-center gap-0.5 px-4 py-1 text-base font-nav font-normal text-black border border-[#959595] rounded-[5px] hover:border-gray-400 hover:text-gray-900 transition-colors duration-150"
          style={{ lineHeight: "25px" }}
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
        className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
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
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
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
                  className="block px-3 py-3 text-base text-gray-700 hover:text-brand-primary-shade font-body border-b border-gray-50 transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {item.subItems?.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.link}
                    className="block px-6 py-2 text-sm text-gray-500 hover:text-gray-800 transition-colors duration-150"
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
              className="w-full text-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-primary-shade"
            >
              Register
            </Link>
            <Link
              href="/donate"
              className="w-full text-center px-5 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
