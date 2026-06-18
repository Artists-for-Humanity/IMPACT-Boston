import { draftMode } from "next/headers";

import { DEFAULT_CMS_BLOCK_FALLBACKS } from "@/cms/fallbacks/blocks";
import { getCmsPageBlocks } from "@/cms/normalize/page";
import { CmsPage } from "@/cms/render/CmsPage";
import type { CmsPageBlock } from "@/cms/types/blocks";
import { getCmsPageData } from "@/sanity/pageData";

const ABUSE_SURVIVORS_PAGE_ID = "abuseSurvivorsPage";

const courseTabs = [
  {
    label: "The Course",
    content: [
      {
        type: "heading" as const,
        text: "Intro to IMPACT for Trauma Survivors",
      },
      {
        type: "paragraph" as const,
        text: "This is a 6-hour introductory course that offers you space to get hands-on experience of IMPACT at a slow introductory pace. You'll learn more about IMPACT principles, practice grounding and breathing, and learn the physiology of the body's adrenaline response, as well as tools for managing adrenaline. Instructors can be a great resource in this class for helping you decide which follow up classes may be right for you.",
      },
    ],
  },
  {
    label: "Core Classes",
    content: [
      {
        type: "heading" as const,
        text: "Core Classes",
      },
      {
        type: "paragraph" as const,
        text: "Core classes give participants a chance to practice verbal boundary setting and physical self-defense skills in realistic scenarios, with instructors guiding the pace and offering trauma-informed support.",
      },
    ],
  },
  {
    label: "Boundary Setting",
    content: [
      {
        type: "heading" as const,
        text: "Boundary Setting",
      },
      {
        type: "paragraph" as const,
        text: "Boundary setting classes focus on noticing what you want, naming limits clearly, and practicing assertive communication in lower-intensity scenarios.",
      },
    ],
  },
  {
    label: "Reclaim Power",
    content: [
      {
        type: "heading" as const,
        text: "Reclaim Power",
      },
      {
        type: "paragraph" as const,
        text: "Reclaim Power is designed for survivors who want a class space focused on rebuilding confidence, choice, and embodied safety after experiences of abuse or trauma.",
      },
    ],
  },
];

const faqItems = [
  {
    title: "Do you have a therapist?",
    accordionContent:
      "If you are currently working with a therapist, it may be helpful to talk with them about whether this is a good time to take an IMPACT class and what support you may want before or after class.",
  },
  {
    title:
      "Will being in a space with other survivors help you feel more comfortable?",
    accordionContent:
      "Some people feel more at ease in a survivor-specific class; others prefer a mixed class. Think about which setting would help you stay present and supported.",
  },
  {
    title:
      "Do you respond to stressful or scary situations by becoming physically sick or having other physical symptoms? Do you find yourself disassociating (checking out) often when things are hard?",
    accordionContent:
      "Classes can bring up strong body responses. If this happens often, a slower introductory class or extra support before taking a core class may be a better fit.",
  },
  {
    title:
      "Is talking when you feel stressed helpful for you? Do you want the space to process what is coming up for you while learning self-defense?",
    accordionContent:
      "Some survivor-focused classes allow more room to pause, process, and name what is coming up. If that support helps you learn, it may be a good match.",
  },
  {
    title:
      "Will you feel more comfortable in a class with all other women students?",
    accordionContent:
      "If being with other women would help you feel safer and more present, look for women-centered class options.",
  },
  {
    title:
      "Will being in a space with other LGBTQ identified students help you feel more comfortable?",
    accordionContent:
      "If an LGBTQ-centered class would help you feel seen and supported, consider choosing that space or contacting us to talk through options.",
  },
];

const ABUSE_SURVIVORS_PAGE_FALLBACK_BLOCKS: CmsPageBlock[] = [
  {
    _key: "abuse-survivors-hero",
    _type: "hero2Block",
    headlineParts: [
      {
        _key: "abuse-survivors-hero-title",
        color: "black",
        text: "Guide for Abuse Survivors",
      },
    ],
    description:
      "Even though all our classes are trauma-informed and instructors have significant experience working with survivors, the nature of the material in a self-defense class can be triggering. This is not something that should necessarily scare you away, but something we think it is important that you understand when you are making the decision to take an IMPACT class. Being triggered does not feel great. But if in the moment of being triggered, you can stay present, confront, and work through that trigger, it has less power over you. In fact, one of the greatest things that some survivors take from this class is the bravery to confront something that has scared them, create a new ending, and thus be able to live in less fear.",
    imageAlt: "Guide for Abuse Survivors",
    // showImagePlaceholder: true,
    supportingText:
      "Take a moment to read our class descriptions and then take some time to ask yourself the questions below about what you are looking for in a class.",
  },
  {
    _key: "abuse-survivors-course-tabs",
    _type: "sideTabsBlock",
    tabs: courseTabs,
  },
  {
    _key: "abuse-survivors-faqs",
    _type: "listBlock",
    title: "FAQS",
    variant: "accordion",
    // showToggle: false,
    // noPaddingTop: true,
    listItems: faqItems,
  },
];

export default async function AbuseSurvivors() {
  const { isEnabled } = await draftMode();
  const data = await getCmsPageData(ABUSE_SURVIVORS_PAGE_ID, isEnabled);

  return (
    <CmsPage
      blocks={getCmsPageBlocks(data, ABUSE_SURVIVORS_PAGE_FALLBACK_BLOCKS)}
      data={data}
      fallbacks={DEFAULT_CMS_BLOCK_FALLBACKS}
    />
  );
}
