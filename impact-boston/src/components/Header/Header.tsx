import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex space-x-9 py-4 px-8 justify-between items-center">
      <Image
        src="/images/logos/logo-full-color.png"
        alt="logo"
        width={100}
        height={100}
      />
      <div className="flex gap-8">
        <div className="flex gap-4">
          <div className="flex gap-1">
            About
            <Image
              src="/icons/chevron-right.svg"
              alt="chevron-right"
              width={16}
              height={16}
            />
          </div>
          <div className="flex gap-1">
            Programs
            <Image
              src="/icons/chevron-right.svg"
              alt="chevron-right"
              width={16}
              height={16}
            />
          </div>
          <div className="flex gap-1">
            Learn More
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
          <div className="bg-size-300 bg-purple-700 border-1 rounded-lg">
            Register
          </div>
          <div className="bg-size-300 bg-white-500 border-1 rounded-lg">
            Donate
          </div>
        </div>
      </div>
    </nav>
  );
}
