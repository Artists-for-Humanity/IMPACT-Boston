import Grid from "../common/Grid";
import buttonArrow from "../../../public/images/d0a740e31e5fc4c3270dab7d17f350cec17bac0f.svg";
import Image from "next/image";
import Hero from "../../../public/images/hero-place-holder.png";
export default function Hero1() {
  return (
    <Grid>
      <section
        id="HeroSection"
        className="grid grid-cols-subgrid col-span-full"
      >
        <div id="content" className="flex lg:col-span-4 gap-[10px]">
          <div id="container" className="lg:col-span-5 lg:col-start-1 ">
            <div id="container2" className="flex flex-col lg:items-start gap-8">
              <div className="flex flex-col gap-y-6  gap-[32px]">
                <div className="title">
                  <h1 className="h1">Courage makes us</h1>
                  <h1 className="h1 text-[#563672]">safer</h1>
                </div>
                <p className="p1 text-[#333]">
                  IMPACT believes everyone has the right to be safe. Our
                  self-defense and abuse prevention programs equip individuals
                  and communities with practical, inclusive safety skills.
                </p>
              </div>
              <div className="flex justfy-center lg:justify-start w-full">
                <div className="lg:grid lg:grid-cols-4 lg:gap-6 w-full">
                  <button
                    type="button"
                    className="flex bg-black lg:col-span-3 justify-between items-center p-[24px]"
                  >
                    <p className="link text-white">Learn More</p>
                    <Image src={buttonArrow} alt="buttonArrow"></Image>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image grid lg:col-start-6 lg:col-span-full">
          <div className="flex" id="colorTop">
            <div className="w-1/3 bg-[#E86834] h-[8px]"></div>
            <div className="w-1/3 bg-[#563672] h-[8px]"></div>
            <div className="w-1/3 bg-[#311E41] h-[8px]"></div>
          </div>
          <Image src={Hero} alt="Hero image" className=""></Image>
        </div>
      </section>
    </Grid>
  );
}
