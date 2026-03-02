// components/Footer.tsx
// Main footer component with contact info, newsletter form, navigation, and social links

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1a1a1a] text-white flex justify-center">
      <div className="flex flex-col items-center gap-12 w-full max-w-[1440px] px-6 md:px-20 lg:px-[120px] py-[88px]">
        {/* Top Section - Contact Info & Form */}
        <div className="w-full">
        <div className="grid-12-col">
          {/* Left Column - IMPACT Wordmark & Contact Info */}
          <div className="col-span-12 lg:col-start-1 lg:col-span-5 space-y-8">
            <h2 className="font-[Poppins] text-[48px] font-medium leading-[56px] tracking-[-1.728px] text-white pb-12 mb-0">
              IMPACT
            </h2>

            {/* Contact Info Blocks */}
            <div className="space-y-6">
              {/* Address */}
              <div className="pb-6 mb-0">
                <p className="text-white font-[IBM_Plex_Sans] text-base font-bold leading-normal">
                  Address
                </p>
                <p className="font-[IBM_Plex_Sans] text-base text-[#888] font-normal leading-normal">
                  89 South Street, Suite 600 Boston, MA
                </p>
              </div>

              {/* Email */}
              <div className="pb-6 mb-0">
                <p className="text-white font-[IBM_Plex_Sans] text-base font-bold leading-normal">
                  Email
                </p>
                <a
                  href="mailto:info@impactboston.org"
                  className="font-[IBM_Plex_Sans] text-base text-[#888] font-normal leading-normal hover:text-white transition-colors"
                >
                  info@impactboston.org
                </a>
              </div>

              {/* Call */}
              <div className="pb-0 mb-0">
                <p className="text-white font-[IBM_Plex_Sans] text-base font-bold leading-normal">
                  Call
                </p>
                <a
                  href="tel:+1234567890"
                  className="font-[IBM_Plex_Sans] text-base text-[#888] font-normal leading-normal hover:text-white transition-colors"
                >
                  +1 617-597-4945
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex flex-col justify-start items-start flex-1 self-stretch pt-20">
            <h3 className="font-[Poppins] text-base font-medium leading-normal text-white">
              Join Our Newsletter
            </h3>
            <p className="font-[IBM_Plex_Sans] text-sm text-gray-400 pb-5">
              Stay updated on programs, events, and community resources.
            </p>

            <form className="space-y-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex h-16 px-[19px] py-5 justify-between items-center self-stretch bg-[#1F2122] focus:border-gray-400 focus:outline-none text-white placeholder-gray-500 font-[IBM_Plex_Sans]"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="w-full flex h-16 px-[19px] py-5 justify-between items-center self-stretch bg-[#1F2122] hover:bg-[#2a2c2d] transition-colors text-white text-center font-[IBM_Plex_Sans] text-base font-medium leading-normal"
              >
                <span>Join</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        </div>

        {/* Bottom Nav Section */}
        <div className="w-full border-t border-gray-700 pt-6">
        <div className="grid-12-col">
          {/* About Column */}
          <div className="col-span-12 md:col-start-1 md:col-span-4 space-y-4">
            <h4 className="text-white font-[IBM_Plex_Sans] text-base font-medium leading-normal pb-3 mb-0">
              About
            </h4>
            <ul className="space-y-0">
              <li>
                <Link
                  href="/about"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  About Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/board-staff"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Board and Staff
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Column */}
          <div className="col-span-12 md:col-start-5 md:col-span-4 space-y-4">
            <h4 className="text-white font-[IBM_Plex_Sans] text-base font-medium leading-normal pb-3 mb-0">
              Programs
            </h4>
            <ul className="space-y-0">
              <li>
                <Link
                  href="/programs/self-defense"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Self-Defense Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/schools-colleges"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Schools & Colleges
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/disabilities"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  People With Disabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/de-escalation"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  De-escalation
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/community"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Community Organizations
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/workplace"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Workplace
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/activist-safety"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Know Your Rights & Activist Safety
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/customized"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Customized Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Approach Column */}
          <div className="col-span-12 md:col-start-9 md:col-span-4 space-y-4">
            <h4 className="text-white font-[IBM_Plex_Sans] text-base font-medium leading-normal pb-3 mb-0">
              Our Approach
            </h4>
            <ul className="space-y-0">
              <li>
                <Link
                  href="/fact-check-fridays"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Fact Check Fridays
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Books by Meg Stone
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="font-[IBM_Plex_Sans] text-base text-[#B7B7B7] font-normal leading-normal hover:text-white transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>

        {/* Footer Bar - Social & Copyright */}
        <div className="w-full border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M17.5 6.51L17.51 6.49889"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Twitter/X"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[#B7B7B7] text-right font-[Poppins] text-[15px] font-normal leading-normal">
            All rights reserved © IMPACT Inc. {year}
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
