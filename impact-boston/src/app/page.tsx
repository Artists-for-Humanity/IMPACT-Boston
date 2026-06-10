import { draftMode } from "next/headers";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { Fragment } from "react";

import Hero1, {
  Hero1Headline,
  Hero1HeadlinePart,
} from "@/components/Hero/Hero1";
import Hero2 from "@/components/Hero/Hero2";
import ActionPanel, {
  type ActionPanelCard,
} from "@/components/Action/ActionPanel";
import SideTabs, { type SideTab } from "@/components/TabsPanel/SideTabs";
import HighlightsSection, {
  type HighlightSlide,
} from "@/components/HighlightsSection";
import TestimonialsSection, {
  type Testimonial,
} from "@/components/Highlights/Testimonials/Carousel";
import { client } from "@/sanity/client";
import { LANDING_PAGE_QUERY } from "@/sanity/queries";
import { ROUTES } from "@/routes";

// Extract projectId and dataset from the Sanity client configuration to construct image URLs. The urlFor function takes a SanityImageSource and returns a URL for the image, applying transformations for width, height, and cropping as needed. This allows for dynamic image handling based on the content stored in Sanity.
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Map Sanity color values to the hero text color tokens.
const COLOR_MAP: Record<
  string,
  "primary" | "secondary" | "complementary" | "black"
> = {
  primary: "primary",
  secondary: "secondary",
  custom_purple: "secondary",
  complementary: "complementary",
  black: "black",
};

//Fallback content to use if Sanity data is missing or incomplete. This ensures the homepage remains functional and visually appealing even if there are issues with the CMS data.
const FALLBACK_HERO = {
  headlineParts: [
    { text: "Courage ", color: "black" },
    { text: "safer", color: "custom_purple" },
  ],
  body: "IMPACT believes everyone has the right to be safe. Our self-defense and abuse prevention programs equip individuals and communities with practical, inclusive safety skills.",
  ctaText: "Learn More",
  ctaHref: ROUTES.REGISTER,
  imageSrc: "/images/hero-place-holder-a.png",
  imageAlt: "IMPACT Boston self-defense training",
};

const FALLBACK_SIDE_TABS: SideTab[] = [
  {
    label: "The What",
    content: [
      { type: "heading", text: "What We Offer" },
      {
        type: "paragraph",
        text: "IMPACT offers self-defense education and training designed to meet the needs of individuals, schools, and organizations. Our programs are open to the public and tailored for a wide range of communities, with classes and workshops available throughout the year.",
      },
      {
        type: "paragraph",
        text: "We focus on empowering participants with practical skills, confidence, and awareness to protect themselves in real-world situations. Our instructors bring extensive experience in safety, martial arts, and personal protection, ensuring high-quality guidance in every session. In addition to traditional self-defense techniques, our curriculum covers situational awareness, conflict de-escalation, and mental preparedness. Programs are suitable for all ages and skill levels, from beginners to advanced practitioners. IMPACT also collaborates with schools, workplaces, and community organizations to create customized workshops that address specific safety concerns. Our goal is to foster safer environments and equip individuals with the tools to respond effectively under pressure. Our offerings include:",
      },
      {
        type: "list",
        items: [
          "Public self-defense classes: Open to the community and held year-round. View the In-Person Class Schedule for upcoming sessions or explore Class Descriptions for more details.",
          "Customized workshops: Designed for schools, disability service organizations, community groups, businesses, human service agencies, and survivors of domestic violence and sexual assault. Workshops can cover topics such as Abuse prevention, Self-defense, Assertive communication & Conflict de-escalation.",
        ],
      },
    ],
  },
  {
    label: "The How",
    content: [
      {
        type: "paragraph",
        text: "Content coming soon. This section will explain our methodology and approach to self-defense training.",
      },
    ],
  },
  {
    label: "The Why",
    content: [
      {
        type: "paragraph",
        text: "Content coming soon. This section will explain why IMPACT's approach is effective and important.",
      },
    ],
  },
];

// Define TypeScript types for the Sanity data structures. These types mirror the expected structure of the data returned from Sanity and are used for type checking and IntelliSense in the codebase.
type SanityHeroFields = {
  variant?: string | null;
  headlineParts?: SanityHeroHeadlinePart[] | null;
  body?: string | null;
  ctaText?: string | null;
  ctaHref?: string | null;
  image?: SanityImageSource | null;
  imageAlt?: string | null;
  title?: string | null;
  highlight?: string | null;
  highlightColor?: string | null;
  description?: string | null;
};

type SanityHeroHeadlinePart = {
  text?: string | null;
  color?: string | null;
};

type SanityActionPanelFields = {
  title?: string | null;
  subtext?: string | null;
  cards?: ActionPanelCard[] | null;
};

type SanitySideTab = {
  label?: string | null;
  content?: SideTab["content"] | null;
};

type SanityHighlight = {
  heading?: string | null;
  body?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  additionalText?: string | null;
  image?: SanityImageSource | null;
  imageAlt?: string | null;
};

type PageBlockBase = {
  _key?: string | null;
};

type HeroBlock = PageBlockBase &
  SanityHeroFields & {
    _type:
      | "heroBlock"
      | "hero1Block"
      | "hero2Block"
      | "heroSplitBlock"
      | "heroCenteredBlock"
      | "heroStackedBlock";
  };

type ActionPanelBlock = PageBlockBase &
  SanityActionPanelFields & {
    _type: "actionPanelBlock";
  };

type SideTabsBlock = PageBlockBase & {
  _type: "sideTabsBlock";
  tabs?: SanitySideTab[] | null;
};

type HighlightsBlock = PageBlockBase & {
  _type: "highlightsBlock";
  label?: string | null;
  slides?: SanityHighlight[] | null;
};

type TestimonialsBlock = PageBlockBase & {
  _type:
    | "testimonialsBlock"
    | "testimonialsCarouselBlock"
    | "testimonialsSpotlightBlock"
    | "testimonialsGridBlock";
  variant?: string | null;
  heading?: string | null;
  subtext?: string | null;
  testimonials?: Testimonial[] | null;
};

type LandingPageBlock =
  | HeroBlock
  | ActionPanelBlock
  | SideTabsBlock
  | HighlightsBlock
  | TestimonialsBlock;

type LandingPageData = {
  sections?: LandingPageBlock[] | null;
  hero?: SanityHeroFields | null;
  actionPanel?: SanityActionPanelFields | null;
  sideTabs?: SanitySideTab[] | null;
  highlightsLabel?: string | null;
  highlights?: SanityHighlight[] | null;
  testimonialsHeading?: string | null;
  testimonialsSubtext?: string | null;
  testimonials?: Testimonial[] | null;
};

function resolveSideTabs(sideTabs?: SanitySideTab[] | null): SideTab[] {
  const normalizedTabs = sideTabs
    ?.filter((tab): tab is { label: string; content: SideTab["content"] } =>
      Boolean(tab?.label && Array.isArray(tab.content)),
    )
    .map((tab) => ({
      label: tab.label,
      content: tab.content,
    }));

  return normalizedTabs?.length ? normalizedTabs : FALLBACK_SIDE_TABS;
}

function resolveHighlights(
  highlights?: SanityHighlight[] | null,
): HighlightSlide[] | undefined {
  if (!highlights?.length) {
    return undefined;
  }

  return highlights.map((highlight) => ({
    heading: highlight.heading,
    body: highlight.body,
    ctaText: highlight.ctaText,
    ctaLink: highlight.ctaLink,
    additionalText: highlight.additionalText,
    imageSrc: highlight.image
      ? urlFor(highlight.image)?.width(1200).height(675).fit("crop").url()
      : undefined,
    imageAlt:
      highlight.imageAlt || highlight.heading || "IMPACT Boston highlight",
  }));
}

function resolveHeadlineParts(headlineParts?: SanityHeroHeadlinePart[] | null) {
  const validHeadlineParts = headlineParts?.filter(
    (part): part is { text: string; color?: string | null } =>
      Boolean(part?.text),
  );

  return validHeadlineParts?.length
    ? validHeadlineParts
    : FALLBACK_HERO.headlineParts;
}

function resolveHero2HighlightColor(
  color?: string | null,
): "primary" | "secondary" | "complementary" | undefined {
  return color === "primary" ||
    color === "secondary" ||
    color === "complementary"
    ? color
    : undefined;
}

function getLegacyBlocks(data: LandingPageData | null): LandingPageBlock[] {
  return [
    {
      _key: "legacy-home-hero",
      _type: "heroBlock",
      ...(data?.hero ?? {}),
    },
    {
      _key: "legacy-home-action-panel",
      _type: "actionPanelBlock",
      ...(data?.actionPanel ?? {}),
    },
    {
      _key: "legacy-home-side-tabs",
      _type: "sideTabsBlock",
      tabs: data?.sideTabs,
    },
    {
      _key: "legacy-home-highlights",
      _type: "highlightsBlock",
      label: data?.highlightsLabel,
      slides: data?.highlights,
    },
    {
      _key: "legacy-home-testimonials",
      _type: "testimonialsBlock",
      heading: data?.testimonialsHeading,
      subtext: data?.testimonialsSubtext,
      testimonials: data?.testimonials,
    },
  ];
}

function getPageBlocks(data: LandingPageData | null): LandingPageBlock[] {
  return data?.sections?.length ? data.sections : getLegacyBlocks(data);
}

function HomeHero({ section }: { section: HeroBlock }) {
  const headlineParts = resolveHeadlineParts(section.headlineParts);
  const imageAlt = section.imageAlt ?? FALLBACK_HERO.imageAlt;
  const imageSrc = section.image
    ? (urlFor(section.image)?.width(1400).height(1088).fit("crop").url() ??
      FALLBACK_HERO.imageSrc)
    : FALLBACK_HERO.imageSrc;

  if (section._type === "hero2Block" || section.variant === "hero2") {
    return (
      <Hero2
        title={
          section.title ??
          headlineParts.map((part) => part.text.trim()).join(" ") ??
          "Courage makes us safer"
        }
        highlight={section.highlight ?? undefined}
        highlightColor={resolveHero2HighlightColor(section.highlightColor)}
        description={section.description ?? section.body ?? FALLBACK_HERO.body}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
    );
  }

  const body = section.body ?? FALLBACK_HERO.body;
  const ctaText = section.ctaText ?? FALLBACK_HERO.ctaText;
  const ctaHref = section.ctaHref ?? FALLBACK_HERO.ctaHref;

  const headline = (
    <Hero1Headline>
      {headlineParts.map((part, idx) => {
        const color = part.color ?? "black";
        const text = part.text.trim();

        return (
          <Fragment key={idx}>
            {idx > 0 ? " " : null}
            <Hero1HeadlinePart color={COLOR_MAP[color] ?? "black"}>
              {text}
            </Hero1HeadlinePart>
          </Fragment>
        );
      })}
    </Hero1Headline>
  );

  return (
    <Hero1
      headline={headline}
      body={body}
      ctaText={ctaText}
      ctaHref={ctaHref}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
    />
  );
}

function PageBlock({ section }: { section: LandingPageBlock }) {
  switch (section._type) {
    case "heroBlock":
    case "hero1Block":
    case "hero2Block":
    case "heroSplitBlock":
    case "heroCenteredBlock":
    case "heroStackedBlock":
      return <HomeHero section={section} />;

    case "actionPanelBlock":
      return (
        <ActionPanel
          title={section.title}
          subtext={section.subtext}
          cards={section.cards}
        />
      );

    case "sideTabsBlock":
      return (
        <section className="w-full bg-white">
          <SideTabs tabs={resolveSideTabs(section.tabs)} />
        </section>
      );

    case "highlightsBlock":
      return (
        <HighlightsSection
          label={section.label}
          slides={resolveHighlights(section.slides)}
        />
      );

    case "testimonialsBlock":
    case "testimonialsCarouselBlock":
    case "testimonialsSpotlightBlock":
    case "testimonialsGridBlock":
      return (
        <TestimonialsSection
          heading={section.heading ?? undefined}
          subheading={section.subtext ?? undefined}
          testimonials={section.testimonials ?? undefined}
        />
      );

    default:
      return null;
  }
}

async function getLandingPageData(
  isDraftModeEnabled: boolean,
): Promise<LandingPageData | null> {
  try {
    return await client.fetch<LandingPageData | null>(
      LANDING_PAGE_QUERY,
      {},
      isDraftModeEnabled
        ? {
            perspective: "drafts",
            useCdn: false,
            stega: true,
            cache: "no-store",
          }
        : { next: { revalidate: 60 } },
    );
  } catch (error) {
    console.error("Failed to fetch landing page content from Sanity.", error);
    return null;
  }
}

export default async function IndexPage() {
  const { isEnabled } = await draftMode();
  const data = await getLandingPageData(isEnabled);
  const blocks = getPageBlocks(data);

  return (
    <main>
      {blocks.map((block, index) => (
        <PageBlock
          key={block._key || `${block._type}-${index}`}
          section={block}
        />
      ))}
    </main>
  );
}
