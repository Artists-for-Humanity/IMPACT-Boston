import Grid from '@/components/common/Grid';
import Image from 'next/image';
import Button from '@/components/common/Button';

export default function AboutImpact() {
  return (
    <>

      <HeroSection
        title={
          <>
            About <span className="text-secondary uppercase">Impact</span>
          </>
        }
        description="IMPACT believes everyone has the right to be safe. Our self-defense programs equip individuals and communities with practical, inclusive safety skills. Our abuse prevention programs equip organizations with the tools to create safe environments and disrupt abuse. And our educational programs equip youth with the knowledge to identify healthy relationships and sexual encounters, as well as advocate for themselves in unhealthy situations."
        imageSrc="/images/aboutImpact/group1.png"
        imageAlt="Group Pictures"
      />

      <VisionMissionSection
        cards={[
          {
            title: 'Our Vision',
            description:
              'IMPACT is dedicated to ending violence and abuse by supporting the leadership of those most affected. We work to build a healing-centered, social justice-driven world where everyone has access to safe and healthy relationships.',
            imageSrc: '/images/aboutImpact/group2.png',
          },
          {
            title: 'Our Mission',
            description:
              'IMPACT works to prevent violence and abuse by giving people the skills to advocate for healthy relationships, sexual respect, and personal and community safety.',
            imageSrc: '/images/aboutImpact/group3.png',
          },
        ]}
      />

      <ApproachSection
        title="Our Approach to Self-Defense"
        subtitle="Realistic Scenarios, De-escalation Skills & Rebuilding Safety and Confidence"
        cards={[
          {
            title: (
              <>
                Realistic <br /> Scenarios
              </>
            ),
            description:
              'Our self-defense classes simulate scenarios of threat, intimidation and violence perpetrated by strangers and people we know. Classes are taught by a team of two instructors, one of whom takes on the role of a perpetrator. They wear a full suit of body armor so students can safely defend themselves using the same force needed in a real attack.',
            bgClass: 'bg-[#FFFAF7]',
          },
          {
            title: 'De-escalation Skills',
            description:
              'Our self-defense classes simulate scenarios of threat, intimidation and violence perpetrated by strangers and people we know. Classes are taught by a team of two instructors, one of whom takes on the role of a perpetrator. They wear a full suit of body armor so students can safely defend themselves using the same force needed in a real attack.',
            bgClass: 'bg-[#FCF9FF]',
          },
          {
            title: 'Rebuilding Safety and Confidence',
            description:
              'Recognized in The Body Keeps the Score as an effective means toward somatic healing, IMPACT - formerly known as "Model Mugging" - helps survivors heal from trauma, retrain their bodies and nervous systems, and regain safety and control.',
            bgClass: 'bg-[#FEFCFF]',
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

      <EducationSection
        title="Empowerment through Education"
        subtitle="Building skills, confidence, and safer communities through targeted education"
        description="Beyond its core self-defense classes, IMPACT Boston offers a wide range of educational programs designed to equip people with the skills and confidence to advocate for their own safety and the well-being of their communities. Through workshops in schools, community organizations, and workplaces, participants learn practical tools such as assertive communication, conflict de-escalation, and bystander intervention. Programs are tailored for diverse groups—including youth, people with disabilities, and professionals in human service fields—using realistic, scenario-based training that helps individuals respond effectively in challenging situations. By combining physical self-protection with education about healthy relationships, boundaries, and community responsibility, IMPACT empowers participants to build safer environments for themselves and others."
        tagCard={{
          title: '8+ Programs Strengthening Safer Communities',
          tags: [
            'Self-Defense Classes',
            'Schools & Colleges',
            'De-escalation',
            'People With Disabilities',
            'Community Organizations',
            'Know Your Rights & Activist Safety',
            'Customized Programs',
          ],
          className:
            'col-span-full lg:col-span-4 bg-[#FFFAF7] py-8 px-4 flex flex-col gap-4',
        }}
        statCards={[
          {
            title: '70,000+ lives impacted since 1992',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis nisl sed luctus laoreet.',
            className:
              'col-span-full lg:col-span-4 bg-[#FCF9FF] py-8 px-4 flex flex-col gap-4 lg:justify-between',
          },
          {
            title: '600+ classes annually, reaching 1,800+ students.',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis nisl sed luctus laoreet.',
            className:
              'col-span-full lg:col-span-4 bg-[#FEFCFF] py-8 px-4 flex flex-col gap-4 lg:justify-between',
          },
        ]}
      />

      <CtaSection
        panels={[
          {
            wrapperClassName: 'bg-accent md:w-1/2 lg:px-20 lg:py-27',
            title: (
              <>
                IMPACT Boston <br /> Strategic Plan 2025–2028
              </>
            ),
            description: 'Learn more about our goals and priorities.',
            buttonText: 'Download Now',
            href: '/',
            iconSrc: '/icons/download.svg',
            iconWidth: 24,
            iconHeight: 24,
          },
          {
            wrapperClassName: 'bg-primary md:w-1/2 lg:px-20 lg:py-27',
            title: (
              <>
                Be Part of the <br /> IMPACT Mission
              </>
            ),
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

function HeroSection({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <Grid className="pt-10 pb-10">
      <h1 className="h1 col-span-full text-center text-black">{title}</h1>
      <p className="p1 col-span-full text-center text-grey-dark">{description}</p>
      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt={imageAlt}
        className="col-span-full w-full h-auto"
      />
    </Grid>
  );
}

function VisionMissionSection({
  cards,
}: {
  cards: {
    title: string;
    description: string;
    imageSrc: string;
  }[];
}) {
  return (
    <Grid className="mb-10">
      {cards.map((card) => (
        <VisionMissionCard
          key={card.title}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
          className="col-span-full flex flex-col gap-y-4 justify-between lg:col-span-6"
        />
      ))}
    </Grid>
  );
}

function VisionMissionCard({
  title,
  description,
  imageSrc,
  className = '',
}: {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-y-4">
        <h3 className="h3 text-black">{title}</h3>
        <p className="p2">{description}</p>
      </div>
      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt={title}
        className="w-full h-auto"
      />
    </div>
  );
}

function ApproachSection({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: {
    title: React.ReactNode;
    description: string;
    bgClass: string;
  }[];
}) {
  return (
    <Grid className="my-10">
      <h2 className="h2 col-span-full">{title}</h2>
      <p className="p2 col-span-full">{subtitle}</p>

      <div className="col-span-full md:grid md:grid-cols-3 md:gap-x-4">
        {cards.map((card, index) => (
          <ApproachCard
            key={index}
            title={card.title}
            description={card.description}
            bgClass={card.bgClass}
          />
        ))}
      </div>
    </Grid>
  );
}

function ApproachCard({
  title,
  description,
  bgClass,
}: {
  title: React.ReactNode;
  description: string;
  bgClass: string;
}) {
  return (
    <div className={`${bgClass} py-8 px-4 flex flex-col gap-4`}>
      <p className="sub-1">{title}</p>
      <p className="p2">{description}</p>
    </div>
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
      <Grid className="py-10">
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
  );
}

function EducationSection({
  title,
  subtitle,
  description,
  tagCard,
  statCards,
}: {
  title: string;
  subtitle: string;
  description: string;
  tagCard: {
    title: string;
    tags: string[];
    className?: string;
  };
  statCards: {
    title: string;
    description: string;
    className?: string;
  }[];
}) {
  return (
    <Grid className="py-10">
      <h2 className="h2 col-span-full">{title}</h2>
      <p className="p1-bold col-span-full">{subtitle}</p>
      <p className="p1 col-span-full">{description}</p>

      <TagListCard
        title={tagCard.title}
        tags={tagCard.tags}
        className={tagCard.className}
      />

      {statCards.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          description={stat.description}
          className={stat.className}
        />
      ))}
    </Grid>
  );
}

function TagListCard({
  title,
  tags,
  className = '',
}: {
  title: string;
  tags: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="sub-1">{title}</p>
      {tags.map((tag) => (
        <p
          key={tag}
          className="p2 self-start bg-white px-1.5 border border-[#DDDDDD] rounded"
        >
          {tag}
        </p>
      ))}
    </div>
  );
}

function StatCard({
  title,
  description,
  className = '',
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="sub-1">{title}</p>
      <p className="p2">{description}</p>
    </div>
  );
}

function CtaSection({
  panels,
}: {
  panels: {
    wrapperClassName: string;
    title: React.ReactNode;
    description: string;
    buttonText: string;
    href: string;
    iconSrc: string;
    iconWidth: number;
    iconHeight: number;
  }[];
}) {
  return (
    <div className="md:flex">
      {panels.map((panel, index) => (
        <CtaPanel key={index} {...panel} />
      ))}
    </div>
  );
}

function CtaPanel({
  wrapperClassName,
  title,
  description,
  buttonText,
  href,
  iconSrc,
  iconWidth,
  iconHeight,
}: {
  wrapperClassName: string;
  title: React.ReactNode;
  description: string;
  buttonText: string;
  href: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
}) {
  return (
    <div className={wrapperClassName}>
      <div className="py-14 px-10 flex flex-col gap-4 h-full justify-between">
        <h3 className="h3 text-white">{title}</h3>
        <p className="p1 text-white">{description}</p>
        <Button
          className="col-span-full bg-white flex justify-between cursor-pointer py-4 lg:w-1/2"
          href={href}
        >
          <p className="p1-bold text-black">{buttonText}</p>
          <Image src={iconSrc} width={iconWidth} height={iconHeight} alt="" />
        </Button>
      </div>
    </div>
  );
}