// all of your imports go here
import Image from "next/image";
import Hero from "../../public/images/aboutImpact/group1.png";
import hero from "../../public/images/aboutImpact/group2.png";
import ero from "../../public/images/aboutImpact/group3.png";


export default function IndexPage() {
  return (
    <main>
      { /* all of your main code goes in here */}
          <h1 className="col-start-3 h1 mt-8 font-md text-center font-poppins  font-weight: 500">About <span className="text-[#6c3789] font-poppins ">IMPACT</span> </h1>
          <p className="flex justify-center text-center mt-4 max-w-[1000px] mx-auto">
          Everyone deserves to feel safe in their body, their relationships,
          and their community. IMPACT builds that safety through practical,
          inclusive self-defense programs for individuals and communities;
          organizational tools that help disrupt abuse before it starts; and
          educational programs that give young people the knowledge to recognize
          healthy relationships, understand consent, and advocate for themselves.
</p>
    <Image
  src={Hero}
  alt="Group Photo"
  className="mx-auto  mt-10 max-w-[1300px] h-[700px]"
/>
      <h2 className="h3 font-bold ml-[250px] mt-[150]">Our Vision</h2>
      <p className="p2 flex ml-[250px] mt-4 max-w-[610px] mx-auto">IMPACT works to end violence and abuse by centering the 
      leadership of those most affected — building a healing-centered, justice-driven world where everyone has access to safe, healthy relationships.</p>
      <h2 className="h3 font-bold ml-[1000px] mt-[-135] max-w-[200px]">Our Mission</h2>
      <p className="p2 flex ml-[1000px] mt-4 max-w-[640px] mx-auto">IMPACT works to prevent violence and abuse by giving people the skills to advocate for healthy
       relationships, sexual respect, and personal and community safety.</p>
       <Image src={hero} alt="Group Image" className="mx-auto mt-10 max-w-[1000] h-[300px] ml-[250px]"/>
       <Image src={ero} alt="Group Image" className="mx-auto mt-10 max-w-[625px] h-[300px] ml-[1000px] mt-[-300px]"/>
       <h2 className="h3 font-bold ml-[250px] mt-[150] font-thin">Our Approach to Self-Defense</h2>
    </main>
  );
}
