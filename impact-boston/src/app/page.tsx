// all of your imports go here
import Image from 'next/image';
import hero from "../../public/images/aboutImpact/group1.png"
import Hero from "../../public/images/aboutImpact/group2.png"
import ero from "../../public/images/aboutImpact/group3.png"
import ro from "../../public/images/aboutImpact/group4.png"

export default function IndexPage() {
  return (
    <main>
      {/* all of your main code goes in here */}
        <h1 className="h1 font-bold text-center mt-8 font-thin">About <span className="text-[#6c3789]">IMPACT</span></h1>
        <p className="p1 flex justify-center text-center mt-4 max-w-[1000px] mx-auto"> Everyone deserves to feel safe in their body, their relationships, and their community. IMPACT builds that safety through practical, inclusive self-defense programs for individuals and communities; organizational tools that help disrupt abuse before it starts; and educational programs that give young people the knowledge to recognize healthy relationships, understand consent, and advocate for themselves.</p>
        <Image src={hero} alt="Group Image" className="mx-auto mt-10 max-w-[1400px] h-[600px]"/>

        <h2 className="h3 font-bold ml-[250px] mt-[150]">Our Vision</h2>
        <p className="p2 flex ml-[250px] mt-4 max-w-[610px] mx-auto">IMPACT works to end violence and abuse by centering the leadership of those most affected — building a healing-centered, justice-driven world where everyone has access to safe, healthy relationships.</p>
        <h2 className="h3 font-bold ml-[1000px] mt-[-135] max-w-[200px]">Our Vision</h2>
        <p className="p2 flex ml-[1000px] mt-4 max-w-[640px] mx-auto">IMPACT works to prevent violence and abuse by giving people the skills to advocate for healthy relationships, sexual respect, and personal and community safety.</p>
        <Image src={Hero} alt="Group Image" className="mx-auto mt-10 max-w-[1000px] h-[300px] ml-[250px]"/>
        <Image src={ero} alt="Group Image" className="mx-auto mt-10 max-w-[625px] h-[300px] ml-[1000px] mt-[-300px]"/>

        <h2 className="h3 font-bold ml-[250px] mt-[150] font-thin">Our Approach to Self-Defense</h2>
        <p className="p2 flex ml-[250px] mt-4 max-w-[610px] mx-auto text-[#333333]">Realistic Scenarios, De-escalation Skills & Rebuilding Safety and Confidence</p>

        <div className=" sub-1 w-[400px] h-[350px] bg-[#FFFAF7] ml-[260px] mt-[50px]"></div>
        <p className='sub-1 ml-[280px] mt-[-330px]'>Realistic Scenarios</p>
        <p className='p2 ml-[275px] mt-[160] max-w-[350px]'>Our self-defense classes are designed to prepare participants for real-life situations. We focus on practical techniques that can be applied in various scenarios, ensuring that individuals feel empowered and confident in their ability to protect themselves.</p>
        
        <div className=" sub-1 w-[400px] h-[350px] bg-[#FEFCFF] ml-[700px] mt-[-350px]"></div>
        <p className='sub-1 ml-[725px] mt-[-330px]'>De-escalation Skills</p>
        <p className='p2 ml-[725px] mt-[160] max-w-[350px]'>Physical self-defense is always a last resort. Students learn verbal skills to de-escalate conflict and avoid unnecessary violence. Many assailants use verbal threats to intimidate people, so IMPACT teaches students to stay calm and respond effectively to harassment.</p>

        <div className=" sub-1 w-[400px] h-[350px] bg-[#FCF9FF] ml-[1140px] mt-[-350px]"></div>
        <p className='sub-1 ml-[1160px] mt-[-330px] max-w-[350]'>Rebuilding Safety & Confidence</p>
        <p className='p2 ml-[1160px] mt-[120] max-w-[350px]'>We understand that trauma can have a profound impact on an individual's sense of safety and confidence. Our self-defense programs are designed to help participants rebuild their sense of safety and confidence, empowering them to take control of their lives and feel secure in their bodies.</p>

        <div className="w-[1900px] h-[650px] bg-[#FAF6FD] mt-[50px] "></div>
        <h2 className="h3 font-bold ml-[250px] mt-[-600px] font-thin max-w-[500px]">Violence is not inevitable. We all have the ability to stop it.</h2>
        <p className="p1 flex ml-[250px] mt-[100] max-w-[600px] mx-auto text-[#333333]">IMPACT has been teaching solutions for safe living since 1971.  We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT’s prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don’t feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others.</p>
        <Image src={ro} alt="Group Image" className="w-[800px] h-[500px] bg-[#ffffff] mt-[-400px] ml-[1000px]"/>
        
    </main>
  );
}
