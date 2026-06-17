import { draftMode } from "next/headers";

import { DEFAULT_CMS_BLOCK_FALLBACKS } from "@/cms/fallbacks/blocks";
import { getCmsPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import type { CmsPageBlock } from "@/cms/types/blocks";
import { getCmsPageData } from "@/sanity/pageData";

const RESOURCES_PAGE_ID = "resources";

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
    href: "/files/Winsor-Boundaries.pdf",
    icon: "external" as const,
  },
  {
    title:
      "Weaving the Knots: AAPI, Asian & Asian-American Women for Empowered Safety",
    detail: "Aug 19, 2022",
    href: "#",
    icon: "external" as const,
  },
  {
    title:
      "Assertiveness and Boundary Setting Workshop for Boston University QAC",
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
    title:
      "Bystander Intervention: Building Skills to Create Safer Communities",
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

const RESOURCE_PAGE_FALLBACK_BLOCKS: CmsPageBlock[] = [
  {
    _key: "resources-hero",
    _type: "hero2Block",
    headlineParts: [{ text: "Resources", color: "black" }],
    description: "",
  },
  {
    _key: "resources-tabs",
    _type: "sideTabsBlock",
    tabs: [
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
    ],
  },
  {
    _key: "resources-survivors",
    _type: "singleContentBlock",
    backgroundColor: "lavender",
    ctaHref: "#",
    ctaText: "Read the Full Survivor Guide",
    imageAlt: "Survivors of Abuse and Trauma",
    paragraphs: [
      {
        text: "All IMPACT classes are taught with an awareness of the lasting effects of abuse and trauma. Survivors regularly participate in all our women's, men's, LGBTQ, and youth classes. Some survivors prefer IMPACT classes that are specifically designed for people who have experienced abuse. Survivor classes have a deeper focus on the ways in which abuse affects people's experiences of their bodies and their safety.",
      },
    ],
    showImagePlaceholder: true,
    title: "Survivors of Abuse & Trauma",
    titleAs: "h2",
  },
  {
    _key: "resources-survivor-testimonials",
    _type: "testimonialsCarouselBlock",
    authorPrefix: "",
    heading: "Hear firsthand from survivors and clinicians.",
    showAuthors: true,
    subtext: "3 perspectives on what IMPACT made possible.",
    testimonials: survivorTestimonials,
  },
];

export default async function Resources() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(RESOURCES_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, RESOURCE_PAGE_FALLBACK_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
