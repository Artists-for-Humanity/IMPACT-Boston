"use client";
import Grid from "../Grid";
import Image from "next/image";
import ContentBox from "@/components/utility/Content-Box";
import blackArrow from "../../../../public/images/BlackArrow.svg";
import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    `“My therapist introduced me to IMPACT back in 1989 and I went through the course back then. Gratefully, I have never been in a situation where I have had to use the physical skills I learned during that time. (Although I still feel like they are within me). However, the course was as much mental as physical, and I think it gave me my “voice” which I have confidently used over the years. In the last... read more`,
    `“I have been working with IMPACT for several years now, and it has truly transformed my life. The skills I have learned have helped me in ways I never thought possible.”`,
    `“IMPACT has been a game-changer for me. The program is well-designed and the instructors are knowledgeable and supportive. I have gained so much confidence and self-esteem since starting the program.”`,
  ];
  const total = testimonials.length;
  const getIndex = (i: number) => (i + total) % total;
  const next = () => setCurrentIndex((current) => getIndex(current + 1));
  const prev = () => setCurrentIndex((current) => getIndex(current - 1));

  const visibleTestimonials = [
    testimonials[getIndex(currentIndex - 1)],
    testimonials[currentIndex],
    testimonials[getIndex(currentIndex + 1)],
  ];
  return (
    <>
      <Grid>
        <div className="col-start-0 col-span-7 flex flex-col ">
          <h2 className="h2">What People are Saying</h2>
          <p className="p1">Hear from 20 people who worked with us.</p>
        </div>
        <div className="col-start-11 col-span-full  flex items-center gap-6">
          <button
            className="w-[46px] h-[46px] border-1 border-[#DDDDDD] rounded-full flex justify-center items-center"
            onClick={prev}
          >
            <Image
              draggable={false}
              src={blackArrow}
              className="rotate-[180deg]"
              alt="Black Arrow"
              height={24}
              width={24}
            />
          </button>
          <button
            className="w-[46px] h-[46px] border-1 border-[#DDDDDD] rounded-full flex justify-center items-center"
            onClick={next}
          >
            <Image
              draggable={false}
              src={blackArrow}
              alt="Black Arrow"
              height={24}
              width={24}
            />
          </button>
        </div>
      </Grid>
      <div className=" flex gap-6 pb-[72px] overflow-hidden">
        {visibleTestimonials.map((testimonial, index) => (
          <ContentBox
            key={`${currentIndex}-${index}`}
            description={testimonial}
            className={index === 1 ? "opacity-100" : "opacity-50"}
          ></ContentBox>
        ))}
      </div>
    </>
  );
}
