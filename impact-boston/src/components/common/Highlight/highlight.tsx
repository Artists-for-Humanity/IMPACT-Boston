"use client";
import React from "react";
import Grid from "../Grid";
import Image from "next/image";
import arrow from "../../../../public/images/HighlightArrow.svg";
import LearnMore from "@/components/utility/LearnMore";
import { useState } from "react";
export default function Highlight() {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className="bg-[#0F0F0F] w-full">
        <Grid>
          <div className="flex col-span-full w-full justify-between items-center">
            <p className="sub-2 text-white">Highlight</p>
            <div id="arrowCotain" className="flex gap-2 text-white">
              <button id="left">
                <Image src={arrow} className="rotate-180" alt="arrow"></Image>
              </button>
              <button id="right">
                <Image src={arrow} alt="arrow"></Image>
              </button>
            </div>
          </div>
          <section className="col-span-6 grid h-fit gap-[36px]">
            <h3 className="h3 h-fit text-white">
              Find your courage and make the world safer.
            </h3>
            <section id="trackpoints" className="flex gap-2">
              <div className="w-2 h-2 rounded-xl bg-white"></div>
              <div className="w-2 h-2 rounded-xl bg-[#6C5778]"></div>
              <div className="w-2 h-2 rounded-xl bg-[#6C5778]"></div>
            </section>
          </section>
          <section className="col-start-7 col-span-full pb-6">
            <div className="grid gap-3">
              <div className="h-[212px] bg-[#D9D9D9]"></div>
              <p className="p1 text-white">
                IMPACT has been teaching solutions for safe living since 1971.
                We provide realistic personal safety training that gives people
                the skills to respond appropriately to threatening situations in
                the moment of fear or intimidation. We also collaborate with
                schools and organizations to create programs that proactively
                prevent abuse. IMPACT’s prevention programs emphasize giving
                people the tools to manage their stress responses so they can
                intervene effectively when they observe risky situations. Too
                often abuse goes unchallenged because people don’t feel safe
                speaking up. IMPACT programs help people increase their ability
                to safely advocate for themselves and others.
              </p>
            </div>
          </section>
          <section className="grid grid-cols-subgrid col-span-full gap-[12px]">
            <div className="col-start-7 col-span-3">
              <LearnMore
                color="white"
                textColor="black"
                desktop={3}
              ></LearnMore>
            </div>
            <p className="p2 text-[#FFFFFF99] col-start-7 col-span-full ">
              Subtitle or secondary line of text that helps the CTA
            </p>
          </section>
        </Grid>
      </div>
    </>
  );
}
