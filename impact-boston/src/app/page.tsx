// all of your imports go here
import Image from 'next/image';
import hero from "../../public/images/aboutImpact/group1.png"
import Hero from "../../public/images/aboutImpact/group2.png"
import ero from "../../public/images/aboutImpact/group3.png"
import ro from "../../public/images/aboutImpact/group4.png"
import logo from "../../public/images/logos/logo-full-color.png"

export default function IndexPage() {
  return (
    <main>
      {/* all of your main code goes in here */}
        <Image src={logo} alt="IMPACT Logo" className="w-[70px] h-[20px] mt-[10 ml-[15px]"/>
        <h1 className="h1 font-bold text-center mt-8 font-thin">About <span className="text-[#6c3789]">IMPACT</span></h1>
        <p className="p1 flex justify-center text-center mt-4 max-w-[1000px] mx-auto"> Everyone deserves to feel safe in their body, their relationships, and their community. IMPACT builds that safety through practical, inclusive self-defense programs for individuals and communities; organizational tools that help disrupt abuse before it starts; and educational programs that give young people the knowledge to recognize healthy relationships, understand consent, and advocate for themselves.</p>
        <Image src={hero} alt="Group Image" className="mx-auto mt-10 max-w-[1400px] h-[600px]"/>
         {/* */}
         
        <h2 className="h3 font-bold ml-[250px] mt-[150]">Our Vision</h2>
        <p className="p2 flex ml-[250px] mt-4 max-w-[610px] mx-auto">IMPACT works to end violence and abuse by centering the leadership of those most affected — building a healing-centered, justice-driven world where everyone has access to safe, healthy relationships.</p>
        <h2 className="h3 font-bold ml-[1000px] mt-[-135] max-w-[200px]">Our Vision</h2>
        <p className="p2 flex ml-[1000px] mt-4 max-w-[640px] mx-auto">IMPACT works to prevent violence and abuse by giving people the skills to advocate for healthy relationships, sexual respect, and personal and community safety.</p>
        <Image src={Hero} alt="Group Image" className="mx-auto mt-10 max-w-[1000px] h-[300px] ml-[250px]"/>
        <Image src={ero} alt="Group Image" className="mx-auto mt-10 max-w-[625px] h-[300px] ml-[1000px] mt-[-300px]"/>
         {/* */}

        <div className="w-[1900px] h-[650px] bg-[#FAF6FD] mt-[50px] "></div>
        <h2 className="h3 font-bold ml-[250px] mt-[-600px] font-thin max-w-[500px]">Violence is not inevitable. We all have the ability to stop it.</h2>
        <p className="p1 flex ml-[250px] mt-[100] max-w-[600px] mx-auto text-[#333333]">IMPACT has been teaching solutions for safe living since 1971.  We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT’s prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don’t feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others.</p>
        <p className='p1 flex ml-[250px] mt-[100] max-w-[600px] mx-auto text-[#412152] font-bold underline'>Purchase from Bookshop.org. IMPACT receives 10% of all proceeds. </p>
        <Image src={ro} alt="Group Image" className="w-[800px] h-[500px] bg-[#ffffff] mt-[-550px] ml-[1000px]"/>
          {/* */}

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
         {/* */}
         <h4 className="h3 font-bold mt-[90px] ml-[260px]">Success Stories</h4>
         <h4 className="p2 mt-[20px] ml-[260px] max-w-[500px] max-w-[800px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut lorem porttitor.</h4>
         <h4 className="p1 font-bold mt-[90px] ml-[260px]">Take Your Power: A Graduate’s Story</h4>
          <h4 className="p2 mt-[20px] ml-[260px] max-w-[500px] max-w-[800px]">I was on a 4th date with a charming grad student I met at a lecture. We were sipping wine in his ...</h4>
          <hr className='max-w-[1300px] ml-[260px] mt-[20px]'></hr>
         {/* */}
        
          <div className='ml-[900px] max-w-[750px] mt-[30px]'> 
          <h2 className="h3 font-bold ml-[250px] mt-[150] font-thin">Empowerment through Education</h2>
          <h2 className='sub2 ml-[250] mt-[20]'>Giving youth and people with disabilities the tools they need to lead healthy lives.</h2>
          <h2 className='p1 ml-[250px] mt-[20] max-w-[500px] mx-auto text-[#333333]'>Beyond its self-defense classes, IMPACT Boston offers a wide range of educational programs designed to equip students of all abilities and community leaders with the knowledge and the skills to lead healthy lives and prevent abuse. Our healthy relationships curriculum provides youth with the information they need to identify unsafe behaviors and dynamics, builds emotional awareness and communication skills, and empowers students to set their own standards and boundaries. Our sex education curriculum equips students with the information and tools they need to have healthy sexual connections if they choose to, while avoiding unwanted outcomes. Our online safety curriculum helps youth and adults with disabilities stay safe and avoid scams while using the internet. IMPACT also works with schools and community organizations to develop comprehensive abuse prevention policies and plans</h2>
          </div>
          <div className="w-[750px] h-[800px] bg-[#faf6fd] mt-[-640] ml-[200px]"></div>
          


          {/* */}
         <div className="w-[950px] h-[650px] bg-[#e86834] mt-[50px] "></div>
         <div className="w-[955px] h-[750px] bg-[#6c3789] mt-[-650px] ml-[950px]"></div>
           <div>
           <h1 className='h3 text-white mt-[-600px] ml-[250] max-w-[300px]  -translate-y-1/2 margin-down-[20px]'>IMPACT Boston Strategic Plan</h1>
           <h2 className='p2 text-white mt-[-20px] ml-[250] max-w-[300px]' >Learn more about our goals and priorities.</h2>
           <button className=" link w-[270px] h-[56px] mt-[60px] bg-[white] ml-[250px]"><span className='ml-[-75]'>Download Now</span></button>
             </div>
             <div>
           <h1 className='h3 text-white mt-[-200px] ml-[1200] max-w-[300px] -translate-y-1/2'>IMPACT Boston Strategic Plan</h1>
           <h2 className='p2 text-white mt-[-20] ml-[1200] max-w-[300px]'>Learn more about our goals and priorities.</h2>
           <button className=" link w-[270px] h-[56px] mt-[60px] bg-[white] ml-[1200px]"><span className='ml-[-75]'>Donate Today</span></button>
           </div>
          {/* */}


         <div className="w-[1905px] h-[850px] bg-[black] mt-[50px] "></div>
         <h1 className='h2 text-white mt-[-700px] ml-[250] max-w-[300px]'>IMPACT</h1>
          <h2 className='p2 text-white mt-[50px] ml-[250] max-w-[300px] font-bold'>Address</h2>
          <h2 className='p2 text-[#fdfdfd] mt-4 ml-[250] max-w-[300px]'>89 South Street, Suite 600 Boston, MA</h2>
          <h2 className='p2 text-white mt-[50px] ml-[250] max-w-[300px] font-bold'>Email</h2>
          <h2 className='p2 text-[#fdfdfd] mt-4 ml-[250] max-w-[300px]'>info@impactboston.org</h2>
          <h2 className='p2 text-white mt-[120px] ml-[250] max-w-[300px] font-bold'>About</h2>
          <h2 className='p2 text-[#fdfdfd] mt-4 ml-[250] max-w-[150px]'>About Impact Board and Staff Accessibility Blog</h2>

          <h2 className='p1 text-white mt-[-500px] ml-[1100] max-w-[300px] font-bold'>Join our Newsletter</h2>
          <h2 className='p2 text-[#fdfdfd] mt-4 ml-[1100] max-w-[300px]'>We’re here to help, reach out anytime.</h2>
          <div className="ml-[1100px] mt-6 flex flex-col gap-3 max-w-[320px]">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full p-3  text-white bg-[#333333]"
  />

  <button
    className=" w-full p-3  bg-[#333333] text-[#fdfdfd] font-semibold text-left"
  >
    Submit
  </button>
</div>

          <h2 className='p1 text-white mt-[175px] ml-[820] max-w-[300px] font-bold'>Programs</h2>
          <ul className='p2 text-[#fdfdfd] mt-4 ml-[820] max-w-[300px]'>
           <li>Self-Defense Classes</li>
           <li>Schools & Colleges</li>
           <li>People With Disabilities</li>
           <li>De-escalation</li>
           <li>Community Organizations</li>
           <li>Workplace Programs</li>
           <li>Know Your Rights & Activist Safety</li>
           <li>Healthy Relationships & Sex Educations</li>
          </ul>

           <h2 className='p1 text-white mt-[-240px] ml-[1500] max-w-[300px] font-bold'>Learn More</h2>
            <ul className='p2 text-[#fdfdfd] mt-[20] ml-[1500] max-w-[300px]'>
             <li>Fact Check Fridays</li>
             <li>Books by Meg Stone</li>
             <li>Press</li>
             <li>What is Empowerment Self Defense</li>
           </ul>
           <h2 className='p2 text-[#fdfdfd] mt-[75px] ml-[1500] max-w-[300px]'>all rights reserved©IMPACT Inc.</h2> 
           
    </main>
  );
}


