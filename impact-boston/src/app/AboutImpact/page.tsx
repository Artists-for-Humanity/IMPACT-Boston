import Grid from '@/components/common/Grid';
import Image from 'next/image';

import Hero2 from '@/components/Hero/Hero2';
import ContentDouble from '@/components/Content/Double';
import ContentTriple from '@/components/Content/Triple';
import CtaSection from '@/components/Action/CtaSection';


export default function AboutImpact() {
  return (
    <>
      <Hero2
        title="About"
        highlight="Impact"
        highlightColor="secondary"
        description="IMPACT believes everyone has the right to be safe. Our self-defense programs equip individuals and communities with practical, inclusive safety skills. Our abuse prevention programs equip organizations with the tools to create safe environments and disrupt abuse. And our educational programs equip youth with the knowledge to identify healthy relationships and sexual encounters, as well as advocate for themselves in unhealthy situations."
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

    <ContentTriple
      title="Our Approach to Self-Defense"
      subtitle="Realistic Scenarios, De-escalation Skills & Rebuilding Safety and Confidence"
      cards={[
        {
          type: "default",
          title: "Realistic",
          titleLine2: "Scenarios",
          description: "Our self-defense classes simulate scenarios of threat, intimidation and violence perpetrated by strangers and people we know. Classes are taught by a team of two instructors, one of whom takes on the role of a perpetrator. They wear a full suit of body armor so students can safely defend themselves using the same force needed in a real attack.",
          bgClass: 'bg-complementary-light',
        },
        {
          type: "default",
          title: "De-escalation Skills",
          description: "Our self-defense classes simulate scenarios of threat, intimidation and violence perpetrated by strangers and people we know. Classes are taught by a team of two instructors, one of whom takes on the role of a perpetrator. They wear a full suit of body armor so students can safely defend themselves using the same force needed in a real attack.",
          bgClass: "bg-primary-light",
        },
        {
          type: "default",
          title: "Rebuilding Safety and Confidence",
          description: "IMPACT - formerly known as \"Model Mugging\" - helps survivors heal from trauma, retrain their bodies and nervous systems, and regain safety and control.",
          bgClass: "bg-secondary-light",
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
        title="Empowerment through Education"
        subtitle="Building skills, confidence, and safer communities through targeted education"
        intro="Beyond its core self-defense classes, IMPACT Boston offers a wide range of educational programs designed to equip people with the skills and confidence to advocate for their own safety and the well-being of their communities. Through workshops in schools, community organizations, and workplaces, participants learn practical tools such as assertive communication, conflict de-escalation, and bystander intervention. Programs are tailored for diverse groups—including youth, people with disabilities, and professionals in human service fields—using realistic, scenario-based training that helps individuals respond effectively in challenging situations. By combining physical self-protection with education about healthy relationships, boundaries, and community responsibility, IMPACT empowers participants to build safer environments for themselves and others."
        cards={[
          {
            type: "tagList",
            title: "8+ Programs Strengthening Safer Communities",
            tags: [
              "Self-Defense Classes",
              "Schools & Colleges",
              "De-escalation",
              "People With Disabilities",
              "Community Organizations",
              "Know Your Rights & Activist Safety",
              "Customized Programs",
            ],
            bgClass: "bg-complementary-light",
          },
          {
            type: "stat",
            title: "70,000+ lives impacted since 1992",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis nisl sed luctus laoreet.",
            bgClass: "bg-primary-light",
          },
          {
            type: "stat",
            title: "600+ classes annually, reaching 1,800+ students.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis nisl sed luctus laoreet.",
            bgClass: "bg-secondary-light",
          },
        ]}
      />

      <CtaSection
        panels={[
          {
            wrapperClassName: 'bg-complementary md:w-1/2 lg:px-20 lg:py-27',
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
            wrapperClassName: 'bg-primary md:w-1/2 lg:px-20 lg:py-27',
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
      <div className="mx-4 md:mx-8 lg:mx-36 py-8 md:py-10 lg:py-18 "> 
      <Grid >
        <h2 className="h2 col-span-full">{title}</h2>
        <p className="p1 col-span-full">{description}</p>
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt={imageAlt}
          className="col-span-full h-[35vh] w-auto object-cover md:w-full md:h-auto"
        />
      </Grid>
      </div>
    </div>
  );
}

