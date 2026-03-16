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
          <h3 className="col-span-12 lg:col-span-4 font-[Poppins] text-[24px] min-[744px]:text-[40px] md:text-[32px] font-medium leading-normal min-[744px]:leading-[48px] md:leading-[40px] min-[744px]:tracking-[-0.64px] md:tracking-[-1.28px] text-[#183B63] min-[744px]:text-[#000] md:text-[#000] text-center min-[744px]:text-left md:text-left">
            Everything You Need <br className="hidden min-[744px]:inline lg:hidden"></br> to Get Involved.
          </h3>

          {/* Empty Middle */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Subtext */}
          <p className="col-span-12 lg:col-span-3 lg:col-start-10 font-[IBM_Plex_Sans] text-base text-gray-600 min-[744px]:text-left lg:text-right self-end">
            Register for classes, make donations, or explore programs.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col items-start gap-6 min-[744px]:grid min-[744px]:grid-cols-1 md:grid md:grid-cols-12 md:gap-6 lg:grid-cols-12">
          {/* Card 1 - Sign up Today */}
          <Link
            href="/programs"
            className="w-full min-[744px]:col-span-1 md:col-span-6 lg:col-span-4 flex flex-col items-start gap-14 md:gap-0 md:justify-between min-[744px]:h-[245px] md:h-[325px] p-6 min-[744px]:p-8 md:p-8 bg-[#E86834] hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <Handshake className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2 mt-auto md:mt-0">
              <h4 className="font-[Poppins] text-[20px] min-[744px]:text-[30px] md:text-[24px] font-medium leading-normal text-white">
                Hire Us to Come to You
              </h4>
              <p className="font-[IBM_Plex_Sans] text-base text-white leading-relaxed max-w-[100%]">
                If you're a school, organization, workplace, or other group, explore our classes and programs.
              </p>
            </div>
          </Link>

          {/* Card 2 - Classes & Programs */}
          <Link
            href="/programs"
            className="w-full min-[744px]:col-span-1 md:col-span-6 lg:col-span-4 flex flex-col items-start gap-14 md:gap-0 md:justify-between min-[744px]:h-[256px] md:h-[325px] p-6 min-[744px]:p-8 md:p-8 bg-[#563672] hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <UserIcon className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2 mt-auto md:mt-0">
              <h4 className="font-[Poppins] text-[20px] min-[744px]:text-[30px] md:text-[24px] font-medium leading-normal text-white">
                Join a Class Today
              </h4>
              <p className="font-[IBM_Plex_Sans] text-base text-white leading-relaxed max-w-[100%]">
                If you're an individual seeking a self-defense class, explore options and register here online today.
              </p>
            </div>
          </Link>

          {/* Card 3 - Make a Donation */}
          <Link
            href="/donate"
            className="w-full min-[744px]:col-span-1 md:col-span-6 lg:col-span-4 flex flex-col items-start gap-14 md:gap-0 md:justify-between min-[744px]:h-[260px] md:h-[325px] p-6 min-[744px]:p-8 md:p-8 bg-[#311E41] hover:opacity-90 transition-opacity"
          >
            {/* Top - Icon and Chevron */}
            <div className="flex justify-between items-start w-full">
              <DollarSign className="w-14 h-14 text-white" strokeWidth={1} />
              <ChevronRight className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
            </div>

            {/* Bottom - Title and Body */}
            <div className="flex flex-col gap-2 mt-auto md:mt-0">
              <h4 className="font-[Poppins] text-[20px] min-[744px]:text-[30px] md:text-[24px] font-medium leading-normal text-white">
                Make a Donation
              </h4>
              <p className="font-[IBM_Plex_Sans] text-base text-white leading-relaxed max-w-[100%]">
                Support our mission. Every gift makes an impact. Help bring self defense training to all folks today!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
