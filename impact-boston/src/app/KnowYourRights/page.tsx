import Hero2 from "@/components/Hero/Hero2";
import Highlight2 from "@/components/Highlights/Highlight2";
import ParticipantSpotlight from "@/components/Highlights/Testimonials/ParticipantSpotlight";
import { ROUTES } from "@/routes";

const coalitionQuote = `“The IMPACT Know Your Rights workshops strengthened organizational sustainability across the coalition at a moment when that sustainability and stability is intentionally under attack. In the current climate, executive directors and boards are navigating uncertainty without clear guidance, often oscillating between pre-compliance and responses shaped by fear and silence.

By creating a structured space for leaders to come together, this work normalizes uncertainty as a shared leadership experience while building meaningful connection and collective grounding. Advocates and leaders gained practical tools that support their physical and emotional regulation, clarity in decision-making, and the ability to act with integrity under pressure.

Programs like these have the power to not only reduce burnout, but increase capacity for values-aligned leadership and resistance. Executive directors and advocates are better equipped to speak up, assert their rights, and navigate situations where power is weaponized with concrete tools and skills.

This work is foundational to workforce sustainability and retention. It centers the needs and leadership of advocates of color, queer and trans leaders, and others from marginalized communities who are disproportionately impacted by both systemic harm and the weight of leading through crisis. By investing in their resilience and leadership, we strengthen the entire field’s ability to sustain our work and move towards the conditions of safety and healing we want for all of our communities.”`;

export default function KnowYourRights() {
  return (
    <>
      <Hero2
        title="Know Your Rights"
        description="Getting the facts about first amendment rights or search warrants is important, but how do we make sure people can assert those rights under stress? IMPACT programs give educators, advocates, activists and human service workers the skills to respond to coercion, threats, and intimidation in the moment. We have created customized workshops for schools, domestic violence agencies, community organizers, ICE verification activists, and others. Some workshops pair Know Your Rights practice with empowerment self-defense training."
        mediaClassName="col-span-full mx-auto h-[240px] w-full max-w-[1150px] md:h-[360px] lg:h-[500px]"
        showMediaPlaceholder
      />

      <ParticipantSpotlight
        backgroundColor="bg-complementary-light"
        heading="Know Your Rights. De-escalate. Resist Intimidation."
        quote={coalitionQuote}
        author="- Hema Sarang-Sieminski"
        authorTitle="Executive Director, Jane Doe, the Massachusetts Coalition Against Sexual Assault and Domestic Violence"
        cardClassName="mx-auto max-w-[850px] gap-8 px-6 py-8 md:px-10 lg:px-12 lg:py-9"
        contentClassName="lg:gap-10"
        inlineAuthorTitle
        quoteClassName="p2 text-black"
      />

      <Highlight2
        title="The right training changes everything."
        body={[
          "Most workplace incidents don't happen without warning. There are moments before tension that builds, a conversation that shifts, a situation that could go either way. IMPACT has spent over 50 years teaching people to recognize those moments and respond with confidence instead of fear.",
          "This isn't compliance training. It's the kind of preparation that changes how your employees carry themselves every day, how they set boundaries, handle conflict, and show up for each other when things get hard. Teams that train with IMPACT don't just learn what to do. They leave trusting themselves to actually do it.",
        ]}
        ctaLabel="Get in Touch"
        ctaHref={ROUTES.CONTACT}
        supportingText="Custom scheduling available. Most organizations book 4–6 weeks out."
      />
    </>
  );
}
