import Hero2 from '@/components/Hero/Hero2';
import SideTabs from '@/components/TabsPanel/SideTabs';
import SingleContent from '@/components/Content/Single';
import TestimonialsSection from '@/components/TestimonialsSection';

const survivorTestimonials = [
  {
    quote:
      "People who have been traumatized in the past often struggle to summon effective responses to threatening situations in the present. They tend to react as if the traumatic event is happening once again, instead of remaining in their most strong and capable adult self.\n\nIMPACT provides an invaluable safe space where traumatized people can learn how to move with confidence, assert their boundaries, and protect themselves when necessary. The skilled IMPACT workers shepherd people through their initial trauma-based reactions to strong and capable responses that allow the survivor to feel empowered and grounded in the present.",
    author: "Robin Zachary, LICSW",
    authorTitle:
      "Group Therapy Coordinator, Victims of Violence Program, Cambridge Health Alliance",
  },
  {
    quote:
      "IMPACT is a thoughtful and comprehensive self-defense program that can aid in the complicated process of recovery for trauma survivors. I recommend IMPACT to some of my clients because it is a body-centered approach to healing and empowerment. The instructors are aware of some of the effects of trauma on women and are sensitive to the struggles trauma survivors often have in doing this kind of work. It is important to have a support system in place while going through the IMPACT training, preferably one that includes a trained trauma therapist. This can help the trauma survivor to fully embrace the challenges she will face, and the strength she can gain from IMPACT trainings.",
    author: "Tracey A. McHugh, LICSW",
    authorTitle:
      "Private Practice and Clinical Supervisor, Center for Violence Prevention and Recovery, Beth Israel Deaconess Medical Center",
  },
  {
    quote:
      "IMPACT gives survivors an opportunity to practice safety skills in a supportive environment. The process helps people reconnect with choice, boundaries, and confidence in ways that can support long-term healing.",
    author: "Erin Miller, LICSW",
    authorTitle: "Trauma clinician",
  },
];

const presentationItems = [
  {
    title: "Winsor Boundaries Presentation",
    detail: "Sep 2, 2022",
    href: "#",
    icon: "external" as const,
  },
  {
    title: "Weaving the Knots: AAPI, Asian & Asian-American Women for Empowered Safety",
    detail: "Aug 19, 2022",
    href: "#",
    icon: "external" as const,
  },
  {
    title: "Assertiveness and Boundary Setting Workshop for Boston University QAC",
    detail: "Mar 25, 2022",
    href: "#",
    icon: "external" as const,
  },
  {
    title: "De-escalation Workshop for Nobis Engineering",
    detail: "Feb 2, 2022",
    href: "#",
    icon: "external" as const,
  },
  {
    title: "Bystander Intervention: Building Skills to Create Safer Communities",
    detail: "Dec 8, 2021",
    href: "#",
    icon: "external" as const,
  },
  ...Array.from({ length: 47 }, (_, index) => {
    const itemNumber = index + 6;

    return {
      title: `Community Safety Presentation #${itemNumber}`,
      detail: `2021 Resource Archive`,
      href: "#",
      icon: "external" as const,
    };
  }),
];

const impactOrganizationItems = [
  {
    title: "California - San Francisco Bay Area",
    detail: "www.impactbayarea.org",
    detailHref: "https://www.impactbayarea.org",
    meta: ["IMPACT Bay Area (formerly BAMM)", "510-208-0474"],
  },
  {
    title: "Illinois",
    detail: "www.impactchicago.org",
    detailHref: "https://www.impactchicago.org",
    meta: ["IMPACT Chicago", "773-338-4545"],
  },
  {
    title: "Massachusetts",
    detail: "www.impactboston.org",
    detailHref: "https://www.impactboston.org",
    meta: ["IMPACT Boston", "781-321-3900"],
  },
  {
    title: "New Mexico",
    detail: "www.impactpersonalsafety.org",
    detailHref: "https://www.impactpersonalsafety.org",
    meta: ["IMPACT Personal Safety", "505-992-8833"],
  },
  {
    title: "New York",
    detail: "www.prepareinc.com",
    detailHref: "https://www.prepareinc.com",
    meta: ["PREPARE, INC.", "800-442-7273"],
  },
  {
    title: "Oregon",
    detail: "www.impactnorthwest.org",
    detailHref: "https://www.impactnorthwest.org",
    meta: ["IMPACT Northwest", "503-555-0148"],
  },
  {
    title: "Pennsylvania",
    detail: "www.impactphilly.org",
    detailHref: "https://www.impactphilly.org",
    meta: ["IMPACT Philadelphia", "215-555-0182"],
  },
  {
    title: "Washington",
    detail: "www.impactseattle.org",
    detailHref: "https://www.impactseattle.org",
    meta: ["IMPACT Seattle", "206-555-0196"],
  },
];

const supportServiceItems = [
  {
    title: "Boston Area Rape Crisis Center (BARCC)",
    detail: "+1 (800) 841 8371",
  },
  {
    title: "The Disabled Persons Protection Commission (DPPC)",
    detail: "+1 (800) 426 9009 or +1 (888) 822 0350",
  },
  {
    title: "Gay, Lesbian, Bisexual and Transgender National Hotline",
    detail: "+1 (888) 843 4564",
  },
  {
    title: "Jane Doe Inc.",
    detail: "janedoe.org/find_help",
  },
  {
    title: "National Alliance on Mental Illness (NAMI)",
    detail: "+1 (800) 950 6264",
  },
  {
    title: "A Safe Place Resource Line",
    detail: "+1 (800) 555 0114",
  },
  {
    title: "Community Healing Network",
    detail: "communityhealing.example.org",
  },
  {
    title: "Families for Safer Futures",
    detail: "+1 (888) 555 0167",
  },
  {
    title: "LGBTQ Youth Support Center",
    detail: "+1 (877) 555 0199",
  },
  {
    title: "Massachusetts Victim Assistance Line",
    detail: "+1 (866) 555 0102",
  },
  {
    title: "National Survivor Support Project",
    detail: "survivorsupport.example.org",
  },
  {
    title: "Peer Safety Collective",
    detail: "+1 (617) 555 0129",
  },
  {
    title: "Trauma Recovery Referral Network",
    detail: "traumarecovery.example.org",
  },
  {
    title: "Youth Advocacy Hotline",
    detail: "+1 (800) 555 0188",
  },
];

const successStoryItems = [
  {
    title: "Take Your Power: A Graduate's Story",
    description:
      "I was on a 4th date with a charming grad student I met at a lecture. We were sipping wine in his apartment when a dumb joke led to a sweet first kiss...",
    expandedDescription:
      " when the moment changed. I remembered that I had choices. I slowed down, named what I wanted, and moved myself toward the door. It was not dramatic, but it was powerful. The class helped me trust the signals in my body and act before I felt trapped.",
    icon: "chevron" as const,
  },
  {
    title: "Community Programs: Lilian",
    description:
      "When Lilian Calderon participated in an IMPACT workshop last Fall she never believed that only two hours of training would gi...",
    expandedDescription:
      "ve her practical language for boundaries and help her practice using a steady voice. Weeks later, she used those skills during a difficult conversation with a neighbor and was surprised by how calm and clear she felt.",
    icon: "chevron" as const,
  },
  {
    title: "IMPACT:Ability: Getting Help",
    description:
      "After taking our IMPACT:Ability course, a woman with an intellectual disability used the skills she learned in class to try to prevent a male...",
    expandedDescription:
      " staff member from crossing her boundaries. She recognized that the situation did not feel right, moved toward a safer public area, and asked a trusted staff person for help. Her support team said the class gave her a concrete script and enough practice to use it under stress.",
    icon: "chevron" as const,
  },
  {
    title: "KidSafe: Jack",
    description:
      "My 6-year old son Jack participated in a two-day KidSafe program. The class addressed a variety of issues from bullying to how to...",
    expandedDescription:
      " identify safe adults and use a loud voice when play became too rough. His parent shared that he seemed more confident asking for help and naming what he needed.",
    icon: "chevron" as const,
  },
  {
    title: "Women's Basics: Vicky and Jamie",
    description:
      "Before my 16-year-old daughter Jamie traveled to Ghana to take part in a veterinary assisting program this summer...",
    expandedDescription:
      ", I wanted her to have practical tools for travel, friendship, and unfamiliar situations. We took class together and left with shared language for safety planning, boundaries, and checking in with each other.",
    icon: "chevron" as const,
  },
  {
    title: "College Safety: Maya",
    description:
      "Maya brought IMPACT skills back to campus after a workshop helped her name her boundaries and ask friends for support...",
    expandedDescription:
      ". She used the workshop to start a peer conversation about party safety that did not rely on blame or fear. Her group created a simple check-in plan and practiced ways to interrupt concerning behavior early.",
    icon: "chevron" as const,
  },
  {
    title: "Workplace Programs: Jordan",
    description:
      "After a de-escalation training, Jordan felt prepared to slow down a tense client interaction and keep the whole team safer...",
    expandedDescription:
      ". Jordan noticed early signs of escalation, changed position in the room, and used a calm boundary statement. The situation cooled down, and the team later used the example to update their safety plan.",
    icon: "chevron" as const,
  },
  {
    title: "Youth Programs: Sam",
    description:
      "Sam practiced using a strong voice in class and later used that skill to get help from a trusted adult...",
    expandedDescription:
      ". The practice helped Sam understand that asking for help can be part of safety, not a failure. His teacher shared that he became more willing to speak up when classmates crossed a line.",
    icon: "chevron" as const,
  },
  {
    title: "Survivor Class: Elena",
    description:
      "Elena described the class as the first place she could practice safety skills while feeling believed, respected, and in control...",
    expandedDescription:
      ". She chose which activities felt right for her and opted out when she needed to. That ability to choose was central to the class experience and helped her reconnect with a sense of agency.",
    icon: "chevron" as const,
  },
  {
    title: "Community Workshop: Priya",
    description:
      "Priya joined a community workshop with friends and left with practical tools for setting limits in everyday conversations...",
    expandedDescription:
      ". She said the most useful part was practicing words out loud. She left with phrases she could actually imagine using with family, coworkers, and people she cared about.",
    icon: "chevron" as const,
  },
];

export default function Resources() {
  return (
    <>
      <Hero2
        title="Resources"
        imageSrc="/images/resources/placeholder.png"
        imageAlt=""
      />

      <SideTabs
        tabs={[
          {
            label: "Presentations",
            content: [
              {
                type: "heading",
                text: "Most Recent Presentations & Talks",
              },
              {
                type: "resourceList",
                eyebrow: "Latest First",
                items: presentationItems,
              },
            ],
          },
          {
            label: "IMPACT Organizations",
            content: [
              {
                type: "heading",
                text: "Other IMPACT Organizations",
              },
              {
                type: "resourceList",
                eyebrow: "Alphabetically by state",
                items: impactOrganizationItems,
              },
            ],
          },
          {
            label: "Support Services",
            content: [
              {
                type: "heading",
                text: "Support Services",
              },
              {
                type: "resourceList",
                eyebrow: "Alphabetically by organization name",
                items: supportServiceItems,
              },
            ],
          },
          {
            label: "Success Stories",
            content: [
              {
                type: "heading",
                text: "Success Stories",
              },
              {
                type: "resourceList",
                eyebrow: "Latest First",
                items: successStoryItems,
              },
            ],
          },
        ]}
      />

      <SingleContent
        backgroundColor="bg-bg-lavender"
        title="Survivors of Abuse & Trauma"
        paragraphs={[
          {
            text: "All IMPACT classes are taught with an awareness of the lasting effects of abuse and trauma. Survivors regularly participate in all our women's, men's, LGBTQ, and youth classes. Some survivors prefer IMPACT classes that are specifically designed for people who have experienced abuse. Survivor classes have a deeper focus on the ways in which abuse affects people's experiences of their bodies and their safety.",
          },
        ]}
        imageSrc="/images/resources/placeholder.png"
        imageAlt=""
        cta={{
          href: "#",
          text: "Read the Full Survivor Guide",
        }}
      />

      <TestimonialsSection
        heading="Hear firsthand from survivors and clinicians."
        subheading=""
        testimonials={survivorTestimonials}
        showAuthors
        authorPrefix=""
      />
    </>
  );
}
