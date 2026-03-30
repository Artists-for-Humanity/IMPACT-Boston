// components/CTASection.tsx
// Call-to-action section with three action cards for registration, classes, and donations

import Link from "next/link";
import {
  GraduationCap,
  DollarSign,
  ChevronRight,
  Handshake,
  User as UserIcon,
} from "lucide-react";
import Grid from "./common/Grid";

export default function CTASection() {
  return (
    <section className="w-full bg-[#F0EEF5] flex justify-center">
      <div className="flex flex-col gap-10 w-full max-w-[1440px] mx-auto py-6 md:py-[88px]">
        {/* Header Row */}
        <Grid>
          {/* Title */}
          <h2 className="col-span-4 md:col-span-8 lg:col-span-4 h2 text-[#183B63] md:text-[#000] lg:text-[#000] text-left">
            Everything You Need <br className="hidden md:inline lg:hidden"></br>{" "}
            to Get Involved.
          </h2>

          {/* Empty Middle */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Subtext */}
          <p className="col-span-4 md:col-span-4 lg:col-span-3 lg:col-start-10 p2 font-semibold text-gray-600 md:text-left lg:text-right self-end">
            Register for classes, make donations, or explore programs.
          </p>
        </Grid>

        {/* Cards Row */}
        <Grid className="flex-col md:flex-row">
          {/* Card 1 - Sign up Today */}
          <Link
            href="/programs"
            className="col-span-4 md:col-span-8 lg:col-span-4 flex flex-col items-start gap-14 md:gap-0 md:justify-between md:h-[245px] lg:h-[325px] p-6 md:p-8 lg:p-8 bg-[#E86834] hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <Handshake className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight
                className="w-8 h-8 text-white flex-shrink-0"
                strokeWidth={2}
              />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2 mt-auto md:mt-0">
              <h4 className="sub-1 text-white">
                Hire Us to Come to You
              </h4>
              <p className="p2 text-white max-w-[100%]">
                If you're a school, organization, workplace, or other group,
                explore our classes and programs.
              </p>
            </div>
          </Link>

          {/* Card 2 - Classes & Programs */}
          <Link
            href="/programs"
            className="col-span-4 md:col-span-8 lg:col-span-4 flex flex-col items-start gap-14 md:gap-0 md:justify-between md:h-[256px] lg:h-[325px] p-6 md:p-8 lg:p-8 bg-[#563672] hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <UserIcon className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight
                className="w-8 h-8 text-white flex-shrink-0"
                strokeWidth={2}
              />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2 mt-auto md:mt-0">
              <h4 className="sub-1 text-white">
                Join a Class Today
              </h4>
              <p className="p2 text-white max-w-[100%]">
                If you're an individual seeking a self-defense class, explore
                options and register here online today.
              </p>
            </div>
          </Link>

          {/* Card 3 - Make a Donation */}
          <Link
            href="/donate"
            className="col-span-4 md:col-span-8 lg:col-span-4 flex flex-col items-start gap-14 md:gap-0 md:justify-between md:h-[260px] lg:h-[325px] p-6 md:p-8 lg:p-8 bg-[#311E41] hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <DollarSign className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight
                className="w-8 h-8 text-white flex-shrink-0"
                strokeWidth={2}
              />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2 mt-auto md:mt-0">
              <h4 className="sub-1 text-white">
                Make a Donation
              </h4>
              <p className="p2 text-white max-w-[100%]">
                Support our mission. Every gift makes an impact. Help bring self
                defense training to all folks today!
              </p>
            </div>
          </Link>
        </Grid>
      </div>
    </section>
  );
}
