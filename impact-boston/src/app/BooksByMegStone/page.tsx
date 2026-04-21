import Grid from '@/components/common/Grid';
import Image from 'next/image';

import Hero2 from '@/components/Hero/Hero2';
import SingleContent from '@/components/Content/Single';


export default function BooksByMeg() {
  return (
    <>
      <Hero2
        title="Books by"
        highlight='Meg'
        description="Meg Stone is  the Executive Director of IMPACT Boston, an abuse prevention and empowerment self-defense organization. Her writing has been published in Huffington Post, Newsweek, Washington Post, Boston Globe, Dame, and  Ms.. She has received numerous awards for her work over the past 30 years. Meg lives in Cambridge, MA with her partner Mal and a shockingly large collection of musical theatre cast albums."
      />

      <SingleContent
        title="The Cost of Fear"
        paragraphs={[
          { text: "IMPACT has been teaching solutions for safe living since 1971.  We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT’s prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don’t feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others." }
        ]}
        imageSrc="/images/booksByMegStone/cost-of-fear-book.png"
        imageAlt="The Cost of Fear book cover"
      />

      <SingleContent
        title="Don’t Fight Back"
        paragraphs={[
          { text: "IMPACT has been teaching solutions for safe living since 1971.  We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT’s prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don’t feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others." }
        ]}
        imageSrc="/images/booksByMegStone/dont-fight-back-book.png"
        imageAlt="Don’t Fight Back book cover"
        reverse
      />
    </>
  );
}


