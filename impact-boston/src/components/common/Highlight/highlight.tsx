"use client";
import Grid from "../Grid";
import Image from "next/image";
import arrow from "../../../../public/images/HighlightArrow.svg";
import higlight1 from "../../../../public/images/highlights-1.png";
import higlight2 from "../../../../public/images/aboutImpact/highlight-2.png";
import higlight3 from "../../../../public/images/aboutImpact/highlight-3.png";
import HighlightContent from "./highlightContent";
import { useState } from "react";

export default function Highlight() {
  const [page, setPage] = useState(Number);
  if (page < 0) {
    setPage(2);
  } else if (page > 2) {
    setPage(0);
  }
  const handlePage = (n: number) => {
    if (n == 0) {
      return (
        <HighlightContent
          title="Find your courage and make the world safer."
          content="IMPACT has been teaching solutions for safe living since 1971. We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT’s prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don’t feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others."
          image={higlight1}
          index={1}
        ></HighlightContent>
      );
    }
    if (n == 1) {
      return (
        <HighlightContent
          title=" Sed ut perspiciatis unde omnis"
          content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
          image={higlight2}
          index={2}
        ></HighlightContent>
      );
    }
    if (n == 2) {
      return (
        <HighlightContent
          title="We focus on empowering participants with practical skills"
          image={higlight3}
          content=" We focus on empowering participants with practical skills,
                confidence, and awareness to protect themselves in real-world
                situations. Our instructors bring extensive experience in
                safety, martial arts, and personal protection, ensuring
                high-quality guidance in every session. In addition to
                traditional self-defense techniques, our curriculum covers
                situational awareness, conflict de-escalation, and mental
                preparedness. Programs are suitable for all ages and skill
                levels, from beginners to advanced practitioners. IMPACT also
                collaborates with schools, workplaces, and community
                organizations to create customized workshops that address
                specific safety concerns. Our goal is to foster safer
                environments and equip individuals with the tools to respond
                effectively under pressure. Our offerings include"
          index={3}
        ></HighlightContent>
      );
    }
  };
  return (
    <>
      <div className="bg-[#0F0F0F] w-full">
        <Grid>
          <div className="flex col-span-full w-full justify-between items-center">
            <p className="sub-2 text-white">Highlight</p>
            <div id="arrowCotain" className="flex gap-2 text-white">
              <button
                id="left"
                onClick={() => {
                  setPage(page - 1);
                  console.log(page);
                }}
              >
                <Image
                  src={arrow}
                  draggable={false}
                  className="rotate-180"
                  alt="arrow"
                ></Image>
              </button>
              <button
                id="right"
                onClick={() => {
                  setPage(page + 1);
                  console.log(page);
                }}
              >
                <Image src={arrow} draggable={false} alt="arrow"></Image>
              </button>
            </div>
          </div>
          {handlePage(page)}
        </Grid>
      </div>
    </>
  );
}
