import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex space-x-9 py-6 px-8 justify-between items-center">
      <Image
        src="/images/logos/logo-full-color.png"
        alt="logo"
        width={100}
        height={100}
      />
      <div className="flex gap-8 items-center">
        <div className="flex">
          <div className="flex ml-[8px] mr-[8px]">
            <div className="link text-[#000000] ml-[4px] mr-[4px]">About</div>
            <Image
              src="/icons/chevron-right.svg"
              alt="chevron-right"
              width={16}
              height={16}
            />
          </div>
          <div className="flex ml-[8px] mr-[8px]">
            <div className="link text-[#000000] ml-[4px] mr-[4px]">
              Programs
            </div>
            <Image
              src="/icons/chevron-right.svg"
              alt="chevron-right"
              width={16}
              height={16}
            />
          </div>
          <div className="flex ml-[8px] mr-[8px]">
            <div className="link text-[#000000] ml-[4px] mr-[4px]">
              Learn More
            </div>
            <Image
              src="/icons/chevron-right.svg"
              alt="chevron-right"
              width={16}
              height={16}
            />
          </div>
        </div>
        <div className="flex">
          <Image src="/icons/search.svg" alt="search" width={20} height={20} />
        </div>
        <div className="flex gap-2">
          <div className="pb-[3px] pt-[3px] pl-[16px] pr-[16px] bg-[#000000] link text-[#ffffff] border-1 rounded-sm">
            Register
          </div>
          <div className="pb-[3px] pt-[3px] pl-[16px] pr-[16px] bg-[#ffffff] link text-[#000000] border-1 border-[#959595] rounded-sm">
            Donate
          </div>
        </div>
      </div>
    </nav>
  );
}
