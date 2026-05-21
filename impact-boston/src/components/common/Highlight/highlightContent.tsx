import Image from "next/image";
import LearnMore from "@/components/utility/LearnMore";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface keyHighlight {
  title: string;
  index: number;
  image: string | StaticImport;
  content: string;
}

export default function HighlightContent({
  title,
  index,
  image,
  content,
}: keyHighlight) {
  const indexCheck = () => {
    if (index == 1)
      return (
        <section id="trackpoints" className="flex gap-2">
          <div className="w-2 h-2 rounded-xl bg-white"></div>
          <div className="w-2 h-2 rounded-xl bg-[#6C5778]"></div>
          <div className="w-2 h-2 rounded-xl bg-[#6C5778]"></div>
        </section>
      );
    if (index == 2)
      return (
        <section id="trackpoints" className="flex gap-2">
          <div className="w-2 h-2 rounded-xl bg-[#6C5778]"></div>
          <div className="w-2 h-2 rounded-xl bg-white"></div>
          <div className="w-2 h-2 rounded-xl bg-[#6C5778]"></div>
        </section>
      );
    if (index == 3)
      return (
        <section id="trackpoints" className="flex gap-2">
          <div className="w-2 h-2 rounded-xl bg-[#6C5778]"></div>
          <div className="w-2 h-2 rounded-xl bg-[#6C5778]"></div>
          <div className="w-2 h-2 rounded-xl bg-white"></div>
        </section>
      );
  };
  return (
    <>
      <section className="col-span-6 grid h-fit gap-[36px]">
        <h3 className="h3 h-fit text-white">{title}</h3>
        {indexCheck()}
      </section>
      <section className="col-start-7 col-span-full pb-6">
        <div className="grid gap-3">
          <div className="h-[212px] bg-[#D9D9D9]">
            <Image src={image} alt="highlight1" className="h-[212px]" />
          </div>
          <p className="p1 text-white">{content}</p>
        </div>
      </section>
      <section className="grid grid-cols-subgrid col-span-full gap-[12px]">
        <div className="col-start-7 col-span-3">
          <LearnMore color="white" textColor="black" desktop={3}></LearnMore>
        </div>
        <p className="p2 text-[#FFFFFF99] col-start-7 col-span-full ">
          Subtitle or secondary line of text that helps the CTA
        </p>
      </section>
    </>
  );
}
