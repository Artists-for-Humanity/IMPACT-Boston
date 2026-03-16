// components/CTASection.tsx
// Call-to-action section with three action cards for registration, classes, and donations

import Link from "next/link";
import { GraduationCap, DollarSign, ChevronRight, Handshake, User as UserIcon } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-[#F0EEF5] flex justify-center">
      <div className="flex flex-col gap-10 w-full max-w-[1440px] py-6 px-4 md:px-20 lg:px-[120px] md:py-[88px]">
        {/* Header Row */}
        <div className="grid-12-col">
          {/* Title */}
          <h3 className="col-span-12 lg:col-span-4 font-[Poppins] text-[24px] md:text-[32px] lg:text-[32px] font-medium leading-[24px] md:leading-[32px] lg:leading-[40px] tracking-[0px] md:tracking-[0px] lg:tracking-[-1.28px] text-[#183B63] md:text-[#000] lg:text-[#000] text-center md:text-left lg:text-left">
            Everything You Need <br className="hidden md:inline lg:hidden"></br> to Get Involved.
          </h3>

          {/* Empty Middle */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Subtext */}
          <p className="col-span-12 lg:col-span-3 lg:col-start-10 font-[IBM_Plex_Sans] text-[14px] md:text-[14px] lg:text-base font-normal leading-[14px] md:leading-[14px] lg:leading-[18px] tracking-[0px] text-gray-600 md:text-left lg:text-right self-end">
            Register for classes, make donations, or explore programs.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col items-start gap-6 md:grid md:grid-cols-12 md:gap-6 lg:grid-cols-12">
          {/* Card 1 - Sign up Today */}
          <Link
            href="/programs"
            className="w-full md:col-span-6 lg:col-span-4 flex flex-col items-start gap-14 md:gap-0 md:justify-between md:h-[245px] lg:h-[325px] p-6 md:p-8 lg:p-8 bg-[#E86834] hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <Handshake className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2 mt-auto md:mt-0">
              <h4 className="font-[Poppins] text-[20px] md:text-[20px] lg:text-[24px] font-medium leading-[20px] md:leading-[20px] lg:leading-[24px] tracking-[0px] text-white">
                Hire Us to Come to You
              </h4>
              <p className="font-[IBM_Plex_Sans] text-[14px] md:text-[14px] lg:text-base font-normal leading-[14px] md:leading-[14px] lg:leading-[18px] tracking-[0px] text-white max-w-[100%]">
                If you're a school, organization, workplace, or other group, explore our classes and programs.
              </p>
            </div>
          </Link>

          {/* Card 2 - Classes & Programs */}
          <Link
            href="/programs"
            className="w-full md:col-span-6 lg:col-span-4 flex flex-col items-start gap-14 md:gap-0 md:justify-between md:h-[256px] lg:h-[325px] p-6 md:p-8 lg:p-8 bg-[#563672] hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <UserIcon className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2 mt-auto md:mt-0">
              <h4 className="font-[Poppins] text-[20px] md:text-[20px] lg:text-[24px] font-medium leading-[20px] md:leading-[20px] lg:leading-[24px] tracking-[0px] text-white">
                Join a Class Today
              </h4>
              <p className="font-[IBM_Plex_Sans] text-[14px] md:text-[14px] lg:text-base font-normal leading-[14px] md:leading-[14px] lg:leading-[18px] tracking-[0px] text-white max-w-[100%]">
                If you're an individual seeking a self-defense class, explore options and register here online today.
              </p>
            </div>
          </Link>

          {/* Card 3 - Make a Donation */}
          <Link
            href="/donate"
            className="w-full md:col-span-6 lg:col-span-4 flex flex-col items-start gap-14 md:gap-0 md:justify-between md:h-[260px] lg:h-[325px] p-6 md:p-8 lg:p-8 bg-[#311E41] hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <DollarSign className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2 mt-auto md:mt-0">
              <h4 className="font-[Poppins] text-[20px] md:text-[20px] lg:text-[24px] font-medium leading-[20px] md:leading-[20px] lg:leading-[24px] tracking-[0px] text-white">
                Make a Donation
              </h4>
              <p className="font-[IBM_Plex_Sans] text-[14px] md:text-[14px] lg:text-base font-normal leading-[14px] md:leading-[14px] lg:leading-[18px] tracking-[0px] text-white max-w-[100%]">
                Support our mission. Every gift makes an impact. Help bring self defense training to all folks today!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
