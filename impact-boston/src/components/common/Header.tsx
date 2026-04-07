import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logos/logo-full-color.png";
import arrow from "../../../public/images/db3f48bf9064c5d796699534020c25f6564065f4.svg";
import search from "../../../public/icons/search.svg";

export default function Header() {
  return (
    <>
      <nav className="navigation px-[32px] py-[24px] flex justify-between">
        <div className="logo flex items-center">
          <Image
            className="w-[107px] h-[24px]"
            src={logo}
            draggable={false}
            alt="logo"
          ></Image>
        </div>
        <div className="flex">
          <ul className="section flex gap-[8px] link ">
            <li className="items flex items-center">
              <div className="about">About</div>
              <Image
                alt="more"
                className="arrow"
                draggable={false}
                src={arrow}
              ></Image>
            </li>

            <li className="items flex items-center">
              <div className="about">Programs</div>
              <Image
                alt="more"
                className="arrow"
                draggable={false}
                src={arrow}
              ></Image>
            </li>

            <li className="items flex items-center">
              <div className="about">Learn More</div>
              <Image
                alt="more"
                className="arrow"
                draggable={false}
                src={arrow}
              ></Image>
            </li>
          </ul>

          <Image
            alt="search"
            className="mx-[36px]"
            draggable={false}
            src={search}
          ></Image>

          <div className="outstanding flex gap-[6px] link">
            <button
              type="button"
              className="px-[16px] py-[4px] rounded-[5px] bg-[#6E3388] text-white"
            >
              Register
            </button>
            <button
              type="button"
              className="px-[16px] py-[4px] border border-[#959595] rounded-[5px]"
            >
              Donate
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
