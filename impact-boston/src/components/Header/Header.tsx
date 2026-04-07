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
          <div className="">About</div>
          <div className="">Programs</div>
          <div className="">Learn More</div>
        </div>
        <div className="">
          <Image src="/icons/search.svg" alt="search" width={20} height={20} />
        </div>
        <div className="flex gap-2">
          <div className="">Register</div>
          <div className="">Donate</div>
        </div>
      </div>
    </nav>
  );
}
