import type { SideTab } from "@/components/TabsPanel/SideTabs";
import { ROUTES } from "@/routes";
import type { CmsPageBlock } from "@/cms/types/blocks";
import type { CmsPageFallbacks, HeroFallback } from "@/cms/types/page";

export const HOME_HERO_FALLBACK: HeroFallback = {
  headlineParts: [
    { text: "Courage", color: "black" },
    { text: "safer", color: "custom_purple" },
  ],
  body: "IMPACT believes everyone has the right to be safe. Our self-defense and abuse prevention programs equip individuals and communities with practical, inclusive safety skills.",
  ctaText: "Learn More",
  ctaHref: ROUTES.ABOUT,
  imageSrc: "/images/hero-place-holder-a.png",
  imageAlt: "IMPACT Boston self-defense training",
};

export const HOME_ACTION_PANEL_FALLBACK: NonNullable<
  CmsPageFallbacks["actionPanel"]
> = {
  title: "Everything You Need to Get Involved.",
  subtext: "Register for classes, make donations, or explore programs.",
  cards: [
    {
      title: "Hire Us to Come to You",
      body: "If you're a school, organization, workplace, or other group, explore our classes and programs.",
      href: ROUTES.PROGRAMS,
      bgColor: "#E86834",
      icon: "handshake",
    },
    {
      title: "Join a Class Today",
      body: "If you're an individual seeking a self-defense class, explore options and register here online today.",
      href: ROUTES.REGISTER,
      bgColor: "#563672",
      icon: "user",
    },
    {
      title: "Make a Donation",
      body: "Support our mission. Every gift makes an impact. Help bring self-defense training to all folks today!",
      href: ROUTES.DONATE,
      bgColor: "#311E41",
      icon: "dollar",
    },
  ],
};

export const HOME_SIDE_TABS_FALLBACK: SideTab[] = [
  {
    label: "The What",
    content: [
      { type: "heading", text: "What We Offer" },
      {
        type: "paragraph",
        bold: true,
        text: "IMPACT offers hands-on self-defense, bystander, effective communication, and de-escalation trainings, healthy relationships and sex education courses, and other trainings designed to meet the needs of individuals, schools, and organizations.",
      },
      { type: "divider" },
      {
        type: "subheading",
        text: "1. Hands-On: Self-Defense, Bystander, Effective Communication, and De-Escalation",
      },
      {
        type: "paragraph",
        text: "We focus on empowering participants with practical skills, confidence, and awareness to protect themselves and communicate effectively in real-world situations. Our instructors bring extensive experience in empowerment self-defense, traditional martial arts, and trauma-informed care, ensuring high-quality guidance in every session. Programs are suitable for all ages and skill levels. IMPACT collaborates with schools, community organizations, human service agencies, and other workplaces to create customized workshops that address specific safety concerns. Our goal is to foster safer environments and equip individuals with the tools to respond effectively under pressure.",
      },
      { type: "divider" },
      {
        type: "subheading",
        text: "2. Classroom-Based: Healthy Relationships, Sex Education, and other Abuse Prevention Programs",
      },
      {
        type: "paragraph",
        text: "At IMPACT, we see individual safety skills as part of a broad ecosystem of violence prevention. Another vital component of that ecosystem is education that works toward positive cultural change. Our healthy relationships, sex education, and other abuse prevention programs empower students with the knowledge and skills they need to make choices that are safe for themselves and others, raising the bar for what is acceptable and what is not. We collaborate with schools and youth organizations to create customized programs that meet your educational goals.",
      },
    ],
  },
  {
    label: "The How",
    content: [
      { type: "heading", text: "How We Teach" },
      {
        type: "paragraph",
        bold: true,
        text: "Just as you wouldn't learn how to ride a bike by reading a manual, you don't learn self-defense or practical de-escalation skills just by watching. Students in our hands-on classes will learn how to protect themselves by really using their bodies and their voices.",
      },
      { type: "divider" },
      {
        type: "subheading",
        text: "1. Class Format",
      },
      {
        type: "paragraph",
        text: "Each class follows the same format: Instructors demonstrate realistic scenarios and model strategies for responding. These strategies could include de-escalation skills, assertiveness and boundary-setting, verbal self-defense strategies, or physical self-defense skills, depending on the scenario and the class. Participants then have the opportunity to practice the skills in the scenario with an instructor who plays the role of an aggressor, an escalated person, a familiar person who is crossing a boundary, etc. This experiential practice helps participants think on their feet and learn to manage their own stress response in order to respond effectively in the moment of confrontation.",
      },
      { type: "divider" },
      {
        type: "subheading",
        text: "2. Class Scenarios",
      },
      {
        type: "paragraph",
        text: "Scenarios are based on the unique needs of each group--our public classes are designed to address the kinds of harm likely faced by students in the class, whether they are women, LGBTQ+ folks, young people, etc. Our customized workshops are designed specifically for your program. We have designed programs for schools, libraries, performance venues, emergency shelters, domestic violence programs, retail environments, private groups of kids/teens, and many others.",
      },
    ],
  },
  {
    label: "The Why",
    content: [
      { type: "heading", text: "Why Choose IMPACT?" },
      {
        type: "bullets",
        items: [
          "We teach Empowerment Self-Defense, which means our goal is not to fear-monger but to help you build confidence in your skills and your intuition so you can live the life you want to live. What is Empowerment Self-Defense?",
          "We teach skills that are practical. You don't need to be an athlete or have extensive training to be able to execute them.",
          "Our training is scenario-based. You will practice each skill in a realistic scenario in which you might use it. This helps prepare your body and voice to be able to react appropriately in a real-life situation.",
          "Our instructors are highly trained and trauma-informed. Instructors receive up to 200 hours of training in the IMPACT method and in working with students of various backgrounds and life experiences.",
          'The IMPACT program is included in the book The Body Keeps the Score (referred to by our old name, "Model Mugging") as one of several body-based programs that can have therapeutic benefits to those who have experienced trauma.',
          "Graduates of our self-defense program feel more confident, less afraid, more capable, and less willing to compromise their safety and boundaries for the sake of others.",
          "Our educational programs are taught by educators with extensive experience in youth education, education for people with disabilities, sex education, and wellness.",
        ],
      },
    ],
  },
];

export const HOME_HIGHLIGHTS_FALLBACK: NonNullable<
  CmsPageFallbacks["highlights"]
> = {
  label: "Highlights",
  slides: [
    {
      heading: "Safety in Sport: Adaptive Sports Abuse Prevention (ASAP)",
      body: "People with disabilities face higher risks of sexual violence, yet athletes with disabilities are often excluded from prevention conversations. Adaptive Sports Abuse Prevention (ASAP) provides a curriculum for coaches, trainers, volunteers, and program leaders to teach safe practices. Participants in this conference will learn to recognize abuse, interrupt unsafe interactions, foster healthy relationships, and report concerns in collaboration with local rape crisis centers. ASAP equips leaders with practical skills to facilitate critical conversations and help ensure every athlete in their programs can participate safely and confidently.",
      ctaText: "All Certified ASAP Trainers",
      ctaLink: ROUTES.PEOPLE_WITH_DISABILITIES_ASAP,
      additionalText:
        "FOR MORE INFO: Contact Shay Orent, Training Manager IMPACT Boston, sorent@impactboston.org",
      imageSrc: "/images/highlights-1.png",
      imageAlt: "ASAP award winners on a baseball field",
    },
  ],
};

export const HOME_TESTIMONIALS_FALLBACK: NonNullable<
  CmsPageFallbacks["testimonials"]
> = {
  heading: "What People are Saying",
  subtext: "Hear from 20 people who've worked with us.",
  testimonials: [
    {
      quote:
        "My therapist introduced me to IMPACT back in 1989 and I went through the course back then. Gratefully, I have never been in a situation where I have had to use the physical skills I learned during that time. (Although I still feel like they are within me). However, the course was as much mental as physical, and I think it gave me my 'voice' which I have confidently used over the years. In the last few decades, I have often thought about taking a refresher course...",
      author: "Anonymous",
      readMoreLink: "#",
    },
    {
      quote:
        "My therapist introduced me to IMPACT back in 1989 and I went through the course back then. The skills I learned have stayed with me throughout my life. The course was as much mental as physical, and I think it gave me my 'voice' which I have confidently used over the years. I cannot recommend this program enough for anyone looking to build confidence and practical safety skills...",
      author: "Anonymous",
      readMoreLink: "#",
    },
    {
      quote:
        "My therapist introduced me to IMPACT back in 1989 and I went through the course back then. Gratefully, I have never been in a situation where I have had to use the physical skills I learned during that time. However, the course was as much mental as physical, and I think it gave me my 'voice' which I have confidently used over the years. The mental preparedness and awareness I gained have been invaluable...",
      author: "Anonymous",
      readMoreLink: "#",
    },
  ],
};

export const HOME_PAGE_FALLBACKS: CmsPageFallbacks = {
  actionPanel: HOME_ACTION_PANEL_FALLBACK,
  hero: HOME_HERO_FALLBACK,
  highlights: HOME_HIGHLIGHTS_FALLBACK,
  sideTabs: HOME_SIDE_TABS_FALLBACK,
  testimonials: HOME_TESTIMONIALS_FALLBACK,
};

export const HOME_PAGE_FALLBACK_BLOCKS: CmsPageBlock[] = [
  {
    _key: "fallback-home-hero",
    _type: "hero1Block",
    headlineParts: HOME_HERO_FALLBACK.headlineParts,
    body: HOME_HERO_FALLBACK.body,
    ctaText: HOME_HERO_FALLBACK.ctaText,
    ctaHref: HOME_HERO_FALLBACK.ctaHref,
    imageAlt: HOME_HERO_FALLBACK.imageAlt,
  },
  {
    _key: "fallback-home-action-panel",
    _type: "actionPanelBlock",
    ...HOME_ACTION_PANEL_FALLBACK,
  },
  {
    _key: "fallback-home-side-tabs",
    _type: "sideTabsBlock",
    tabs: HOME_SIDE_TABS_FALLBACK,
  },
  {
    _key: "fallback-home-highlights",
    _type: "highlightsBlock",
    label: HOME_HIGHLIGHTS_FALLBACK.label,
    slides: HOME_HIGHLIGHTS_FALLBACK.slides,
  },
  {
    _key: "fallback-home-testimonials",
    _type: "testimonialsCarouselBlock",
    ...HOME_TESTIMONIALS_FALLBACK,
  },
];
