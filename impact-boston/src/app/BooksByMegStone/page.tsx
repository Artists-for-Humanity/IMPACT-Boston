import Grid from '@/components/common/Grid';
import Image from 'next/image';

import Hero2 from '@/components/Hero/Hero2';
import SingleContent from '@/components/Content/Single';
import ParticipantSpotlight from '@/components/Highlights/Testimonials/ParticipantSpotlight';


export default function BooksByMeg() {
  return (
    <>
      <Hero2
        title="Books by"
        highlight='Meg'
        description="Meg Stone is  the Executive Director of IMPACT Boston, an abuse prevention and empowerment self-defense organization. Her writing has been published in Huffington Post, Newsweek, Washington Post, Boston Globe, Dame, and  Ms.. She has received numerous awards for her work over the past 30 years. Meg lives in Cambridge, MA with her partner Mal and a shockingly large collection of musical theatre cast albums."
      />

      <SingleContent
        backgroundColor='bg-primary-light'
        title="The Cost of Fear"
        paragraphs={[
          { text: "IMPACT has been teaching solutions for safe living since 1971.  We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT’s prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don’t feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others." }
        ]}
        imageSrc="/images/booksByMegStone/cost-of-fear-book.png"
        imageAlt="The Cost of Fear book cover"
        purchaseLink={{
          href: "https://bookshop.org/p/books/the-cost-of-fear-why-most-safety-advice-is-sexist-and-how-we-can-stop-gender-based-violence-meg-stone/48bcef1feccc069e?ean=9780807016220&next=t&next=t&affiliate=108885",
          text: "Click here to purchase from Bookshop.org. IMPACT receives 10% of all proceeds.",
        }}
      />

      <SingleContent
        backgroundColor='bg-primary-light'
        title="Don’t Fight Back"
        paragraphs={[
          { text: "IMPACT has been teaching solutions for safe living since 1971.  We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT’s prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don’t feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others." }
        ]}
        imageSrc="/images/booksByMegStone/dont-fight-back-book.png"
        imageAlt="Don’t Fight Back book cover"
        reverse
        purchaseLink={{
          href: "https://bookshop.org/p/books/don-t-fight-back-and-10-other-myths-about-crime-personal-safety-and-gender-based-violence-meg-stone/1b6e3986f412c99c?ean=9780807016244&next=t&next=t&affiliate=108885",
          text: "Click here to purchase from Bookshop.org. IMPACT receives 10% of all proceeds.",
        }}
      />

      <ParticipantSpotlight
            heading="Participant Spotlight"
            subheading="Hear From One of Our Participants"
            quote="Meg Stone has written a powerful, accessible, and devastatingly acute analysis of the pervasiveness of gender-based violence and why our efforts to prevent it have failed, packed with expert insight drawn from her decades-long career and practical tips to empower women and others who are targeted. The Cost of Fear moved me, enraged me, and educated me. I don’t think I’ll ever stop thinking about it. I wish this book weren’t necessary. But until we live in a better world, get this book."
            author="Alex Marzano-Lesnevich"
            authorTitle={'author of \u2018The Fact of a Body\u2019'}
            backgroundColor='bg-complementary-light'
          />
    </>
  );
}


