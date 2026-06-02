import { draftMode } from 'next/headers'
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { type PortableTextBlock } from 'next-sanity'

import Hero1, { Hero1Headline, Hero1HeadlinePart } from '@/components/Hero/Hero1'
import ActionPanel, { type ActionPanelCard } from '@/components/Action/ActionPanel'
import SideTabs, { type SideTab } from '@/components/TabsPanel/SideTabs'
import HighlightsSection, { type HighlightSlide } from '@/components/HighlightsSection'
import TestimonialsSection, { type Testimonial } from '@/components/TestimonialsSection'
import { client } from '@/sanity/client'
import { LANDING_PAGE_QUERY } from '@/sanity/queries'

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null

const COLOR_MAP: Record<string, 'primary' | 'complementary' | 'black'> = {
  primary: 'primary',
  complementary: 'complementary',
  black: 'black',
}

const FALLBACK_HERO = {
  headlineParts: [
    { text: 'Courage ', color: 'black' },
    { text: 'safer', color: 'custom_purple' },
  ],
  body: 'IMPACT believes everyone has the right to be safe. Our self-defense and abuse prevention programs equip individuals and communities with practical, inclusive safety skills.',
  ctaText: 'Learn More',
  ctaHref: '/register',
  imageSrc: '/images/hero-place-holder-a.png',
  imageAlt: 'IMPACT Boston self-defense training',
}

const FALLBACK_SIDE_TABS: SideTab[] = [
  {
    label: "The What",
    content: [
      { type: "heading", text: "What We Offer" },
      { type: "paragraph", text: "IMPACT offers self-defense education and training designed to meet the needs of individuals, schools, and organizations. Our programs are open to the public and tailored for a wide range of communities, with classes and workshops available throughout the year." },
      { type: "paragraph", text: "We focus on empowering participants with practical skills, confidence, and awareness to protect themselves in real-world situations. Our instructors bring extensive experience in safety, martial arts, and personal protection, ensuring high-quality guidance in every session. In addition to traditional self-defense techniques, our curriculum covers situational awareness, conflict de-escalation, and mental preparedness. Programs are suitable for all ages and skill levels, from beginners to advanced practitioners. IMPACT also collaborates with schools, workplaces, and community organizations to create customized workshops that address specific safety concerns. Our goal is to foster safer environments and equip individuals with the tools to respond effectively under pressure. Our offerings include:" },
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
      { type: "paragraph", text: "Content coming soon. This section will explain our methodology and approach to self-defense training." },
    ],
  },
  {
    label: "The Why",
    content: [
      { type: "paragraph", text: "Content coming soon. This section will explain why IMPACT's approach is effective and important." },
    ],
  },
]

type SanityHeroHeadlinePart = {
  text?: string | null;
  color?: string | null;
}

type SanityHighlight = {
  heading?: string | null;
  body?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  additionalText?: string | null;
  image?: SanityImageSource | null;
  imageAlt?: string | null;
}

type SanitySideTab = {
  label?: string | null;
  content?: PortableTextBlock[] | null;
}

type SanityHeroFields = {
  headlineParts?: SanityHeroHeadlinePart[] | null;
  body?: string | null;
  ctaText?: string | null;
  ctaHref?: string | null;
  image?: SanityImageSource | null;
  imageAlt?: string | null;
}

type SanityActionPanelFields = {
  title?: string | null;
  subtext?: string | null;
  cards?: ActionPanelCard[] | null;
}

type HomeSectionBase = {
  _key?: string | null;
}

type HomeHeroSection = HomeSectionBase &
  SanityHeroFields & {
    _type: 'homeHeroSection';
  }

type HomeActionPanelSection = HomeSectionBase &
  SanityActionPanelFields & {
    _type: 'homeActionPanelSection';
  }

type HomeSideTabsSection = HomeSectionBase & {
  _type: 'homeSideTabsSection';
  tabs?: SanitySideTab[] | null;
}

type HomeHighlightsSection = HomeSectionBase & {
  _type: 'homeHighlightsSection';
  label?: string | null;
  slides?: SanityHighlight[] | null;
}

type HomeTestimonialsSection = HomeSectionBase & {
  _type: 'homeTestimonialsSection';
  heading?: string | null;
  subtext?: string | null;
  testimonials?: Testimonial[] | null;
}

type HomePageSection =
  | HomeHeroSection
  | HomeActionPanelSection
  | HomeSideTabsSection
  | HomeHighlightsSection
  | HomeTestimonialsSection

type LandingPageData = {
  sections?: HomePageSection[] | null;
  hero?: SanityHeroFields | null;
  actionPanel?: SanityActionPanelFields | null;
  sideTabs?: SanitySideTab[] | null;
  highlightsLabel?: string | null;
  highlights?: SanityHighlight[] | null;
  testimonialsHeading?: string | null;
  testimonialsSubtext?: string | null;
  testimonials?: Testimonial[] | null;
}

function resolveSideTabs(sideTabs?: SanitySideTab[] | null): SideTab[] {
  const normalizedTabs = sideTabs
    ?.filter(
      (tab): tab is { label: string; content: PortableTextBlock[] } =>
        Boolean(tab?.label && Array.isArray(tab.content))
    )
    .map((tab) => ({
      label: tab.label,
      content: tab.content as unknown as SideTab['content'],
    }))

  return normalizedTabs?.length ? normalizedTabs : FALLBACK_SIDE_TABS
}

function resolveHighlights(highlights?: SanityHighlight[] | null): HighlightSlide[] | undefined {
  if (!highlights?.length) {
    return undefined
  }

  return highlights.map((highlight) => ({
    heading: highlight.heading,
    body: highlight.body,
    ctaText: highlight.ctaText,
    ctaLink: highlight.ctaLink,
    additionalText: highlight.additionalText,
    imageSrc: highlight.image
      ? urlFor(highlight.image)?.width(1200).height(675).fit('crop').url()
      : undefined,
    imageAlt: highlight.imageAlt || highlight.heading || 'IMPACT Boston highlight',
  }))
}

function resolveHeadlineParts(headlineParts?: SanityHeroHeadlinePart[] | null) {
  const validHeadlineParts = headlineParts?.filter(
    (part): part is { text: string; color?: string | null } => Boolean(part?.text)
  )

  return validHeadlineParts?.length ? validHeadlineParts : FALLBACK_HERO.headlineParts
}

function getLegacySections(data: LandingPageData | null): HomePageSection[] {
  return [
    {
      _key: 'legacy-home-hero',
      _type: 'homeHeroSection',
      ...(data?.hero ?? {}),
    },
    {
      _key: 'legacy-home-action-panel',
      _type: 'homeActionPanelSection',
      ...(data?.actionPanel ?? {}),
    },
    {
      _key: 'legacy-home-side-tabs',
      _type: 'homeSideTabsSection',
      tabs: data?.sideTabs,
    },
    {
      _key: 'legacy-home-highlights',
      _type: 'homeHighlightsSection',
      label: data?.highlightsLabel,
      slides: data?.highlights,
    },
    {
      _key: 'legacy-home-testimonials',
      _type: 'homeTestimonialsSection',
      heading: data?.testimonialsHeading,
      subtext: data?.testimonialsSubtext,
      testimonials: data?.testimonials,
    },
  ]
}

function getHomeSections(data: LandingPageData | null): HomePageSection[] {
  return data?.sections?.length ? data.sections : getLegacySections(data)
}

function HomeHero({ section }: { section: HomeHeroSection }) {
  const headlineParts = resolveHeadlineParts(section.headlineParts)
  const body = section.body ?? FALLBACK_HERO.body
  const ctaText = section.ctaText ?? FALLBACK_HERO.ctaText
  const ctaHref = section.ctaHref ?? FALLBACK_HERO.ctaHref
  const imageAlt = section.imageAlt ?? FALLBACK_HERO.imageAlt
  const imageSrc = section.image
    ? urlFor(section.image)?.width(1400).height(1088).fit('crop').url() ?? FALLBACK_HERO.imageSrc
    : FALLBACK_HERO.imageSrc

  const headline = (
    <Hero1Headline>
      {headlineParts.map((part, idx) => {
        const color = part.color ?? 'black'

        return color === 'custom_purple' ? (
          <Hero1HeadlinePart key={idx} customColor="#6D3386">
            {part.text}
          </Hero1HeadlinePart>
        ) : (
          <Hero1HeadlinePart key={idx} color={COLOR_MAP[color] ?? 'black'}>
            {part.text}
          </Hero1HeadlinePart>
        )
      })}
    </Hero1Headline>
  )

  return (
    <Hero1
      headline={headline}
      body={body}
      ctaText={ctaText}
      ctaHref={ctaHref}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
    />
  )
}

function HomeSection({ section }: { section: HomePageSection }) {
  switch (section._type) {
    case 'homeHeroSection':
      return <HomeHero section={section} />

    case 'homeActionPanelSection':
      return (
        <ActionPanel
          title={section.title}
          subtext={section.subtext}
          cards={section.cards}
        />
      )

    case 'homeSideTabsSection':
      return (
        <section className="w-full bg-white">
          <SideTabs tabs={resolveSideTabs(section.tabs)} />
        </section>
      )

    case 'homeHighlightsSection':
      return (
        <HighlightsSection
          label={section.label}
          slides={resolveHighlights(section.slides)}
        />
      )

    case 'homeTestimonialsSection':
      return (
        <TestimonialsSection
          heading={section.heading ?? undefined}
          subheading={section.subtext ?? undefined}
          testimonials={section.testimonials ?? undefined}
        />
      )

    default:
      return null
  }
}

async function getLandingPageData(isDraftModeEnabled: boolean): Promise<LandingPageData | null> {
  try {
    return await client.fetch<LandingPageData | null>(
      LANDING_PAGE_QUERY,
      {},
      isDraftModeEnabled
        ? { perspective: 'drafts', useCdn: false, stega: true, cache: 'no-store' }
        : { next: { revalidate: 60 } }
    )
  } catch (error) {
    console.error('Failed to fetch landing page content from Sanity.', error)
    return null
  }
}

export default async function IndexPage() {
  const { isEnabled } = await draftMode()
  const data = await getLandingPageData(isEnabled)
  const sections = getHomeSections(data)

  return (
    <main>
      {sections.map((section, index) => (
        <HomeSection
          key={section._key || `${section._type}-${index}`}
          section={section}
        />
      ))}
    </main>
  )
}
