// components/CTASection.tsx
// Call-to-action section with three action cards for registration, classes, and donations

import Link from "next/link";
import { GraduationCap, DollarSign, ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-[#F0EEF5] flex justify-center">
      <div className="flex flex-col gap-14 w-full max-w-[1440px] px-6 md:px-20 lg:px-[120px] py-[88px]">
        {/* Header Row */}
        <div className="grid-12-col">
          {/* Title */}
          <h3 className="col-span-12 lg:col-span-4 font-[Poppins] text-[32px] font-medium leading-[40px] tracking-[-1.28px] text-[#000]">
            Everything You Need <br></br> to Get Involved.
          </h3>

          {/* Empty Middle */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Subtext */}
          <p className="col-span-12 lg:col-span-3 lg:col-start-10 font-[IBM_Plex_Sans] text-base text-gray-600 lg:text-right self-end">
            Register for classes, make donations, or explore programs.
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid-12-col gap-0">
          {/* Card 1 - Sign up Today */}
          <Link
            href="/register"
            className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-start gap-4 p-8 self-stretch bg-[#4B2E83] hover:opacity-90 transition-opacity"
            style={{ flex: '1 0 0', height: '325px' }}
          >
            {/* Top - Title and Chevron */}
            <div className="flex justify-between items-start w-full">
              <h3 className="font-[Poppins] text-[32px] font-medium text-white">
                Sign up Today
              </h3>
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Body */}
            <p className="font-[Poppins] text-base text-[#AFC5DE] font-normal leading-normal max-w-[75%]">
              Sign up in minutes. Secure and simple registration.
            </p>
          </Link>

          {/* Card 2 - Classes & Programs */}
          <Link
            href="/programs"
            className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-start justify-between p-8 self-stretch bg-[#D4541A] hover:opacity-90 transition-opacity"
            style={{ flex: '1 0 0', height: '325px' }}
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <GraduationCap className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2">
              <h4 className="font-[Poppins] text-[24px] font-medium text-white">
                Classes & Programs
              </h4>
              <p className="font-[IBM_Plex_Sans] text-base text-white leading-relaxed max-w-[75%]">
                See what we offer. Find the right class for you.
              </p>
            </div>
          </Link>

          {/* Card 3 - Make a Donation */}
          <Link
            href="/donate"
            className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-start justify-between p-8 self-stretch bg-[#2E7D4F] hover:opacity-90 transition-opacity"
            style={{ flex: '1 0 0', height: '325px' }}
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <DollarSign className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2">
              <h4 className="font-[Poppins] text-[24px] font-medium text-white">
                Make a Donation
              </h4>
              <p className="font-[IBM_Plex_Sans] text-base text-white leading-relaxed max-w-[75%]">
                Support our mission. Every gift makes an impact.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
