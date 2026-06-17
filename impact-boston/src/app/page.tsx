// all of your imports go here
import Grid from '../components/common/Grid';
import Image from 'next/image';

export default function IndexPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Grid>
        <h1 className="h1 col-span-4 md:col-span-8 lg:col-span-12 text-center">
          <span className="text-black">About</span>{' '}
          <span className="text-secondary">IMPACT</span>
        </h1>

        <p className="p1 col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3 text-center">
          Everyone deserves to feel safe in their body, their relationships, and their community. IMPACT builds that safety through practical,
          inclusive self-defense programs for individuals and communities; organizational tools that help disrupt abuse before it starts; and educational programs that give young people the knowledge to recognize healthy relationships, understand consent, and advocate for themselves.
        </p>

        {/* expand image to span from col 2 -> col 12 on large screens */}
        <div className="col-span-4 md:col-span-8 lg:col-start-1 lg:col-end-13 mx-auto w-full">
          <Image
            src="/images/aboutImpact/container.png"
            alt="Impact container"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
        {/* two-column row: Vision (left) and Mission (right) */}
        <div className="col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col">
            <p className="h3 text-left">
              Our Vision
            </p>
            <p className="p2 mt-2">
              IMPACT is dedicated to ending violence and abuse by supporting the leadership of those most affected. We work to build a healing-centered, social justice-driven world where everyone has access to safe and healthy relationships.
            </p>
           
          <Image
            src="/images/aboutImpact/leftside.png"
            alt="Impact container"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
       
          </div>

          <div className="flex flex-col">
            <p className="h3 text-left">
              Our Mission
            </p>
            <p className="p2 mt-2">
              IMPACT works to prevent violence and abuse by giving people the skills to advocate for healthy relationships, sexual respect, and personal and community safety.
            </p>
         
          <Image
            src="/images/aboutImpact/rightside.png"
            alt="Impact container"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        
          </div>
        </div>
        <div className = "flex flex-col">
        <p className ="sub-2"  >
   our vision
        </p>
        </div>
      </Grid>
    </main>
  );
}
