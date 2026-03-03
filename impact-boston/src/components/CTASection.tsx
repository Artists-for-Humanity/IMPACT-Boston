// components/CTASection.tsx
// Call-to-action section with three action cards for registration, classes, and donations

import Link from "next/link";
import { GraduationCap, DollarSign, ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-[#F0EEF5] flex justify-center">
      <div className="flex flex-col gap-12 w-full max-w-[1440px] px-6 md:px-20 lg:px-[120px] py-[88px]">
        {/* Header Row */}
        <div className="grid-12-col">
          {/* Title */}
          <h2 className="col-span-12 lg:col-span-4 font-[Poppins] text-[48px] font-bold leading-[56px] tracking-[-1.728px] text-gray-900">
            Everything You Need to Get Involved.
          </h2>

          {/* Empty Middle */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Subtext */}
          <p className="col-span-12 lg:col-span-4 lg:col-start-9 font-[IBM_Plex_Sans] text-base text-gray-600 lg:text-right">
            Register for classes, make donations, or explore programs.
          </p>
        </div>

        {/* Cards Row - No gap between cards on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {/* Card 1 - Sign up Today */}
          <Link
            href="/register"
            className="flex flex-col justify-between bg-[#4B2E83] p-10 aspect-square hover:opacity-90 transition-opacity"
          >
            {/* Top - Title and Chevron */}
            <div className="flex justify-between items-start">
              <h3 className="font-[Poppins] text-2xl font-semibold text-white">
                Sign up Today
              </h3>
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Body */}
            <p className="font-[IBM_Plex_Sans] text-base text-white leading-relaxed">
              Sign up in minutes. Secure and simple registration.
            </p>
          </Link>

          {/* Card 2 - Classes & Programs */}
          <Link
            href="/programs"
            className="flex flex-col justify-between bg-[#D4541A] p-10 aspect-square hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start">
              <GraduationCap className="w-10 h-10 text-white" strokeWidth={1.5} />
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Title and Body */}
            <div className="space-y-2">
              <h3 className="font-[Poppins] text-2xl font-semibold text-white">
                Classes & Programs
              </h3>
              <p className="font-[IBM_Plex_Sans] text-base text-white leading-relaxed">
                See what we offer. Find the right class for you.
              </p>
            </div>
          </Link>

          {/* Card 3 - Make a Donation */}
          <Link
            href="/donate"
            className="flex flex-col justify-between bg-[#2E7D4F] p-10 aspect-square hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start">
              <DollarSign className="w-10 h-10 text-white" strokeWidth={1.5} />
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Title and Body */}
            <div className="space-y-2">
              <h3 className="font-[Poppins] text-2xl font-semibold text-white">
                Make a Donation
              </h3>
              <p className="font-[IBM_Plex_Sans] text-base text-white leading-relaxed">
                Support our mission. Every gift makes an impact.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
