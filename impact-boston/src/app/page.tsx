import { draftMode } from 'next/headers'
import { createImageUrlBuilder } from '@sanity/image-url'

import Hero1, { Hero1Headline, Hero1HeadlinePart } from '@/components/Hero/Hero1'
import ActionPanel from '@/components/Action/ActionPanel'
import SideTabs from '@/components/TabsPanel/SideTabs'
import HighlightsSection from '@/components/HighlightsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import { client } from '@/sanity/client'
import { LANDING_PAGE_HERO_QUERY } from '@/sanity/queries'

const { projectId, dataset } = client.config()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const urlFor = (source: any) =>
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

export default async function IndexPage() {
  const { isEnabled } = await draftMode()

  const data = await client.fetch(
    LANDING_PAGE_HERO_QUERY,
    {},
    isEnabled
      ? { perspective: 'drafts', useCdn: false, stega: true, cache: 'no-store' }
      : { next: { revalidate: 60 } }
  )

  const hero = data?.hero ?? null

  const headlineParts = hero?.headlineParts ?? FALLBACK_HERO.headlineParts
  const body = hero?.body ?? FALLBACK_HERO.body
  const ctaText = hero?.ctaText ?? FALLBACK_HERO.ctaText
  const ctaHref = hero?.ctaHref ?? FALLBACK_HERO.ctaHref
  const imageAlt = hero?.imageAlt ?? FALLBACK_HERO.imageAlt
  const imageSrc = hero?.image
    ? urlFor(hero.image)?.width(1400).height(1088).fit('crop').url() ?? FALLBACK_HERO.imageSrc
    : FALLBACK_HERO.imageSrc

  const headline = (
    <Hero1Headline>
      {headlineParts.map((part: { text: string; color: string }, idx: number) =>
        part.color === 'custom_purple' ? (
          <Hero1HeadlinePart key={idx} customColor="#6D3386">
            {part.text}
          </Hero1HeadlinePart>
        ) : (
          <Hero1HeadlinePart key={idx} color={COLOR_MAP[part.color] ?? 'black'}>
            {part.text}
          </Hero1HeadlinePart>
        )
      )}
    </Hero1Headline>
  )

  return (
    <main>
      <Hero1
        headline={headline}
        body={body}
        ctaText={ctaText}
        ctaHref={ctaHref}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
      <ActionPanel />
      <section className="w-full bg-white">
        <SideTabs tabs={[
          {
            label: "The What",
            content: [
              { type: "heading", text: "What We Offer" },
              { type: "paragraph", text: "IMPACT offers self-defense education and training designed to meet the needs of individuals, schools, and organizations. Our programs are open to the public and tailored for a wide range of communities, with classes and workshops available throughout the year." },
              { type: "paragraph", text: "We focus on empowering participants with practical skills, confidence, and awareness to protect themselves in real-world situations. Our instructors bring extensive experience in safety, martial arts, and personal protection, ensuring high-quality guidance in every session. In addition to traditional self-defense techniques, our curriculum covers situational awareness, conflict de-escalation, and mental preparedness. Programs are suitable for all ages and skill levels, from beginners to advanced practitioners. IMPACT also collaborates with schools, workplaces, and community organizations to create customized workshops that address specific safety concerns. Our goal is to foster safer environments and equip individuals with the tools to respond effectively under pressure. Our offerings include:" },
              { type: "list", items: [
                "Public self-defense classes: Open to the community and held year-round. View the In-Person Class Schedule for upcoming sessions or explore Class Descriptions for more details.",
                "Customized workshops: Designed for schools, disability service organizations, community groups, businesses, human service agencies, and survivors of domestic violence and sexual assault. Workshops can cover topics such as Abuse prevention, Self-defense, Assertive communication & Conflict de-escalation.",
              ]},
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
        ]} />
      </section>
      <HighlightsSection />
      <TestimonialsSection />
    </main>
  )
}
