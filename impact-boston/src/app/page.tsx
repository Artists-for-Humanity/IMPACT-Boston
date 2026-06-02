import Grid from "@/components/common/Grid";

export default function IndexPage() {
  return (
    <Grid >
      
      <h1 className="flex justify-center h1 col-span-full ">About <span className="text-primary">IMPACT</span></h1>
      <p className="col-start-3 col-span-8 text-center">Everyone deserves to feel safe in their body, their relationships, and their community. IMPACT builds that safety through practical, inclusive self-defense programs for individuals and communities; organizational tools that help disrupt abuse before it starts; and educational programs that give young people the knowledge to recognize healthy relationships, understand consent, and advocate for themselves.</p>
      <img className=" col-span-13 flex justify-center " src="../../images/Container.png" alt="IMPACT Boston Group Photo" />
      <h2 className="flex col-start-1 col-span-3  h2 ">Our Vision</h2>
      <p className="col-start-1 p2 row-start-5  col-span-6 text-left">IMPACT is dedicated to ending violence and abuse by supporting the leadership of those most affected. We work to build a healing-centered, social justice-driven world where everyone has access to safe and healthy relationships.</p>
      <h2 className="flex row-start-4 col-start-7 col-span-3  h2">Our Mission</h2>
      <p className="col-start-7 p2 row-start-5 col-span-6 text-left">IMPACT works to prevent violence and abuse by giving people the skills to advocate for healthy relationships, sexual respect, and personal and community safety.</p>
    </Grid>
  
  );
}
