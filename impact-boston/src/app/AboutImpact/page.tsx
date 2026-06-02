import Grid from '@/components/common/Grid';
import Image from 'next/image';
import Hero2 from '@/components/Hero/Hero2';
import ContentDouble from '@/components/Content/Double';
import ContentTriple from '@/components/Content/Triple';
import SingleContent from '@/components/Content/Single';
import CtaSection from '@/components/Action/CtaSection';



export default function AboutImpact() {
  return (
    <>
      <Hero2
        title="About"
        highlight="IMPACT"
        highlightColor="secondary"
        description="Everyone deserves to feel safe in their body, their relationships, and their community. IMPACT builds that safety through practical, inclusive self-defense programs for individuals and communities; organizational tools that help disrupt abuse before it starts; and educational programs that give young people the knowledge to recognize healthy relationships, understand consent, and advocate for themselves."
        imageSrc="/images/aboutImpact/group1.png"
        imageAlt="Group Pictures"
      />

      <ContentDouble
        cards={[
          {
            title: 'Our Vision',
            description:
              'IMPACT is dedicated to ending violence and abuse by supporting the leadership of those most affected. We work to build a healing-centered, social justice-driven world where everyone has access to safe and healthy relationships.',
            imageSrc: '/images/aboutImpact/group2.png',
            imageAlt: 'IMPACT vision',
          },
          {
            title: 'Our Mission',
            description:
              'IMPACT works to prevent violence and abuse by giving people the skills to advocate for healthy relationships, sexual respect, and personal and community safety.',
            imageSrc: '/images/aboutImpact/group3.png',
            imageAlt: 'IMPACT mission',
          },
        ]}
      />

      <StatementSection
        title="Violence is not inevitable. We all have the ability to stop it."
        description="IMPACT has been teaching solutions for safe living since 1971. We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT’s prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don’t feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others."
        imageSrc="/images/aboutImpact/defense.png"
        imageAlt="Self-defense training"
        backgroundClassName="bg-[#FAF6FD]"
      />

    <ContentTriple
      title="Our Approach to Self-Defense"
      subtitle="Realistic Scenarios, De-escalation Skills & Rebuilding Safety and Confidence"
      cards={[
        {
          bgClass: 'bg-complementary-light',
          content: [
            { type: "title", value: "Realistic Scenarios" },
            { type: "description", value: "Our self-defense classes simulate scenarios of threat, intimidation and violence perpetrated by strangers and people we know. Classes are taught by a team of two instructors, one of whom takes on the role of an aggressor. This instructor wears a full suit of body armor so students can safely defend themselves using the same force needed in a real attack." },
          ],
        },
        {
          bgClass: "bg-primary-light",
          content: [
            { type: "title", value: "A Fight Avoided is", line2: "a Fight Won" },
            { type: "description", value: "Physical self-defense is always a last resort. Students learn verbal skills to de-escalate conflict and avoid unnecessary violence. Many assailants use verbal threats to intimidate people, so IMPACT teaches students to stay calm and respond effectively to harassment." },
          ],
        },
        {
          bgClass: "bg-secondary-light",
          content: [
            { type: "title", value: "Building Confidence, Healing from Trauma" },
            { type: "description", value: "IMPACT gives people the opportunity to be effective and successful in the face of fear. Having this experience has helped people heal from past trauma and take on new challenges." },
          ],
        },
      ]}
    />

      


      <SingleContent
        title="Empowerment through Education"
        subtitle="Giving youth and people with disabilities the tools they need to lead healthy lives."
        paragraphs={[{ text: "Beyond its self-defense classes, IMPACT Boston offers a wide range of educational programs designed to equip students of all abilities and community leaders with the knowledge and the skills to lead healthy lives and prevent abuse. Our healthy relationships curriculum provides youth with the information they need to identify unsafe behaviors and dynamics, builds emotional awareness and communication skills, and empowers students to set their own standards and boundaries. Our sex education curriculum equips students with the information and tools they need to have healthy sexual connections if they choose to, while avoiding unwanted outcomes. Our online safety curriculum helps youth and adults with disabilities stay safe and avoid scams while using the internet. IMPACT also works with schools and community organizations to develop comprehensive abuse prevention policies and plans." }]}
        imageSrc="/images/aboutImpact/group1.png"
        reverse
        imageAlt="Placeholder image"
        subtitleClassName="text-grey"
      />

      <CtaSection
        panels={[
          {
            wrapperClassName: 'bg-complementary md:w-1/2 py-14 px-10 md:p-10 lg:py-[118px] lg:px-[144px]',
            title: 'IMPACT Boston',
            titleLine2: 'Strategic Plan 2025–2028',
            description: 'Learn more about our goals and priorities.',
            buttonText: 'Download Now',
            href: '/',
            iconSrc: '/icons/download.svg',
            iconWidth: 24,
            iconHeight: 24,
          },
          {
            wrapperClassName: 'bg-primary md:w-1/2 py-14 px-10 md:p-10 lg:py-[118px] lg:px-[144px]',
            title: 'Be Part of the',
            titleLine2: 'IMPACT Mission',
            description: 'Invest in violence prevention and community care.',
            buttonText: 'Donate Today',
            href: '/',
            iconSrc: '/icons/donate.svg',
            iconWidth: 13.09,
            iconHeight: 24,
          },
        ]}
      />
    </>
  );
}

function StatementSection({
  title,
  description,
  imageSrc,
  imageAlt,
  backgroundClassName = '',
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  backgroundClassName?: string;
}) {
  return (
    <div className={backgroundClassName}>
      <Grid className="gap-y-6 md:gap-y-10">
        <div className="col-span-full flex flex-col gap-6 lg:gap-8 lg:col-span-5">
          <h3 className="h3">{title}</h3>
          <p className="p1">{description}</p>
        </div>
        <div className="col-span-full lg:col-start-7 lg:col-span-6">
          <div
            style={{
              height: '8px',
              width: '100%',
              background:
                'linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)',
            }}
          />
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt={imageAlt}
            className="block h-auto w-full object-cover lg:h-100"
          />
        </div>
      </Grid>
    </div>
  );
}
