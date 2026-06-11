import Grid from "@/components/common/Grid";

export default function IndexPage() {
  return (
    <>
    <Grid className=" ">
      <div className="col-span-full flex flex-col gap-6 my-[72px]">
        <h1 className="flex justify-center h1">About 
        <span className="text-primary">IMPACT</span></h1>
        <Grid className="!gap-y-8">      
          <p className="col-start-3 col-span-8 text-center">Everyone deserves to feel safe in their body, their relationships, and their community. IMPACT builds that safety through practical, inclusive self-defense programs for individuals and communities; organizational tools that help disrupt abuse before it starts; and educational programs that give young people the knowledge to recognize healthy relationships, understand consent, and advocate for themselves.</p>
          <img className="col-span-full flex justify-center" src="../../images/Container.png" alt="IMPACT Boston Group Photo" />
        </Grid>
      </div>
    </Grid>

    {/* the !gap-x-10 is prop not the best way to make that gap happen */}
    <Grid className=" !gap-x-10">
      <div className="flex flex-col gap-y-8 col-span-6 col-start-1 ">
        <div className="flex flex-col gap-2">
         <h2 className="flex h3">Our Vision</h2>
           <p className=" p2 col-span-6 text-left">IMPACT is dedicated to ending violence and abuse by supporting the leadership of those most affected. We work to build a healing-centered, social justice-driven world where everyone has access to safe and healthy relationships.</p>           
       </div>
       <img className="col-span-6 " src="../../images/aboutimpact/group2.png" alt="IMPACT Boston Group Photo" />
      </div>

      <div className=" flex flex-col gap-y-8 col-start-7 col-span-6">
        <div className="flex flex-col gap-2">
          <h2 className="flex h3">Our Mission</h2>
          <p className="p2 col-span-6 text-left">IMPACT works to prevent violence and abuse by giving people the skills to advocate for healthy relationships, sexual respect, and personal and community safety.</p>
        </div>
        <img className=" col-span-6" src="../../images/aboutimpact/group3.png" alt="IMPACT Boston Group Photo" />
      </div>
      <div className=" row-start-2"></div>

    </Grid>

    <div className="w-full bg-[#FAF6FD] col-span-full">
      <Grid>
        <div className="flex col-span-5">
          <p className=" sub-2 text-primary gap-6">Our Vision</p>
          <h2 className="col-span-6 h3 row-start-2">Violence is not inevitable. We all have the ability to stop it.</h2>
        </div>
        {/* <img className=" col-start-7 col-span-6 row-span-5" src="../../images/Color Branded Placeholder.png" alt="IMPACT Boston Group Photo" /> */}
      </Grid>
    </div>
    </>
  );
}
