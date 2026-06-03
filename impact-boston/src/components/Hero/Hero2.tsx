import React from "react";
import Image from "next/image";

export default function Hero2() {
  return (
    <div className="flex px-[144px] justify-start flex-col">
      <div className="justify-start pt-[72px] justify-center gap-[48px]">
        <div className="text-center pb-[48px] p1-bold">Schools and Classes</div>
        <div className="text-center pb-[32px] h1">
          Safety Skills are Life Skills
        </div>
        <div className="text-center p1">
          IMPACT instructors will travel to your school and work with you to
          design a program that best fits your educational goals and schedule. 
          Programming schedules can vary from an intensive one-day workshop to
          year-long classes. We have experience collaborating with educators in
          Physical Education, Health, Wellness, Guidance & Counseling, English,
          Social Studies, and extracurricular programs.
        </div>
      </div>
      <div className="flex mt-[80px] mb-[80px] justify-center"></div>
    </div>
  );
}
