import Hero2 from "@/components/Hero/Hero2";
import SideTabs from "@/components/TabsPanel/SideTabs";
import CenterImage from "@/components/common/CenterImage";
import Highlight2 from "@/components/Highlights/Highlight2";

export default function PublicClasses() {
  return (
    <>
      <Hero2
        title="Self Defense for Everyone"
        description="IMPACT classes teach self-defense strategies that are effective regardless of size, age, or fitness level. Our training programs give people the tools to stay calm and focused in unsafe situations. Instructors are trained to recreate common assault scenarios. In response most students feel fear. The training process helps you manage your body’s natural stress response so you can defend yourself effectively.
IMPACT instructors use special protective gear that allows students to safely practice physical techniques by striking with the amount of physical force needed to incapacitate an attacker.  You learn to swim by getting in the water. Similarly, the most effective way to learn to defend yourself by actually doing it."
        imageSrc="/images/publicClasses/placeholder.png"
        imageAlt="Placeholder"
      />
      <SideTabs
        tabs={[
          {
            label: "Adult Classes",
            content: [
              {
                type: "heading",
                text: "Comprehensive skills for grown-ups",
              },
              {
                type: "subheading",
                text: "Women’s Core Program",
              },
              {
                type: "paragraph",
                text: "This 20-hour weekend course is our most comprehensive self-defense course for women (cis & trans women welcome), teen girls ages 16+, and nonbinary folks who would be comfortable in a women’s class. In a supportive, trauma-informed environment, students develop physical and verbal skills to resist threats, intimidation, and violence perpetrated by both strangers and familiar people. Scenarios students learn to defend themselves against include front confrontations, attacks from behind, attempted sexual assault, and ground fighting. The lead instructors of this class identify as women.",
              },
              {
                type: "subheading",
                text: "Women of Color Core Program",
              },
              {
                type: "paragraph",
                text: "This 20-hour weekend course is specifically designed for women of color (cis & trans women welcome), teen girls of color ages 16+, and nonbinary folks of color who would be comfortable in a women’s class. In a supportive, trauma-informed environment, students develop physical and verbal skills to resist threats, intimidation, violence and acts of discrimination perpetrated by both strangers and familiar people. Scenarios students learn to defend themselves against include front confrontations, verbal assault/harassment, attacks from behind, attempted sexual assaults, and ground fighting. This class also addresses harm reduction strategies in response to state violence. The lead instructors of this class identify as women of color.",
              },
              {
                type: "subheading",
                text: "All Gender LGBTQ Core Program",
              },
              {
                type: "paragraph",
                text: "This 20-hour weekend course is specifically designed for people of all genders who identify as part of the LGBTQ+ community and are 16 or older. In a supportive, trauma-informed environment, students develop physical and verbal skills to resist threats, intimidation, and violence perpetrated by both strangers and familiar people. Self-defense scenarios include front confrontations, attacks from behind, attempted sexual assault, and ground fighting. Taught by instructors familiar with the LGBTQ+ community and LGBTQ+ violence prevention, this course offers practical skills to fight back against the specific ways in which LGBTQ individuals are targeted for violence as well as assertive communication skills that can be used in many life circumstances.",
              },
              {
                type: "link",
                text: "See all Adult Classes",
                href: "/adult-classes",
              },
            ],
          },
          {
            label: "Survivor Classes",
            content: [
              {
                type: "heading",
                text: "Trauma-informed, healing-centered safety",
              },
              {
                type: "subheading",
                text: "Introduction to IMPACT for Trauma Survivors",
              },
              {
                type: "paragraph",
                text: "This 6-hour class is designed for survivors of trauma of all genders ages 14+ who are interested in taking an IMPACT class. This is a good option for those who are not sure which class best suits their needs, those who would like to take a class that moves through the material at a slower pace, or those who would like to establish a foundation in IMPACT skills before jumping into a longer class. This course introduces students to IMPACT principles and basic techniques, while helping students manage their adrenaline through breathing and body awareness exercises.",
              },
              {
                type: "subheading",
                text: "Take Your Power",
              },
              {
                type: "paragraph",
                text: "Take Your Power is designed specifically to address the long-term effects of abuse on intimate relationships and sexual health. Take Your Power combines IMPACT’s physical and verbal safety skills with a unique curriculum focused on healthy relationships and negotiation skills, healthy sexuality, and HIV/STD risk reduction.",
              },
              {
                type: "paragraph",
                text: "[Note: We are not currently running Take Your Power. If you are interested in hearing from us when Take Your Power becomes a course we are offering again, please reach out at info@impactboston.org]",
              },
            ],
          },
          {
            label: "Youth Classes",
            content: [
              {
                type: "heading",
                text: "Age-appropriate safety for kids",
              },
              {
                type: "subheading",
                text: "Kidsafe (ages 7-9, all genders)",
              },
              {
                type: "paragraph",
                text: "In this course, children are taught to call attention to threatening situations, distinguish between safe and unsafe adults, and ask a trusted adult for help. In a fun, trauma-informed environment, students learn physical and verbal skills to respond to unsafe strangers and familiar people. Scenarios students practice include lures from a stranger, being grabbed by a stranger or unsafe familiar person, unsafe touch from an adult or older child, and bullying.",
              },
              {
                type: "subheading",
                text: "Middle School Safety (ages 10-13, all genders)",
              },
              {
                type: "paragraph",
                text: "This course helps students develop the skills to respond to potentially dangerous situations. Students learn to avoid altercations, resist intimidation, assert themselves in the face of peer pressure and escape potential assaults. They are also taught how to report dangerous situations to a safe adult. Scenarios focus on issues relevant to their lives such as bullying, dating situations, and increasing independence, as well as violence perpetrated by strangers.",
              },
              {
                type: "subheading",
                text: "Young Teen IMPACT (ages 13-15, all genders)",
              },
              {
                type: "paragraph",
                text: "In this 8-hour course, students learn self-defense strategies for threatening situations with strangers, as well as how to keep themselves safe around peers and familiar adults who may be unsafe. In a supportive, trauma-informed environment, students develop physical and verbal skills to resist threats, intimidation, and violence perpetrated by both strangers and familiar people. This course also emphasizes the importance of assertiveness and boundary setting to ensure safety and comfort among friends and dating partners. Upon completion of the course, students will know how to use their body to defend themselves, be able to recognize red flags, be able to assertively communicate when they feel uncomfortable, and have a clearer understanding of what they want and deserve from relationships.",
              },
              {
                type: "link",
                text: "See all Adult Classes",
                href: "/adult-classes",
              },
            ],
          },
          {
            label: "Advanced Classes",
            content: [
              {
                type: "heading",
                text: "Next-level skills, graduates only",
              },
              {
                type: "subheading",
                text: "Defense Against Firearms",
              },
              {
                type: "paragraph",
                text: "This updated advanced course teaches strategies for the unarmed person to disarm a potential assailant who is carrying a pistol or rifle. The course combines practical physical skills with a basic overview of how firearms work.",
              },
              {
                type: "subheading",
                text: "Defense Against Knives & Edged Weapons",
              },
              {
                type: "paragraph",
                text: "This updated advanced course presents students with practical skills for protecting themselves against assailants that are armed with knives or other edged weapons. Strategies for creating physical distance are addressed as well as an overview of the most common crimes committed with edged weapons in our region.",
              },
              {
                type: "paragraph",
                text: "We are not currently running our advanced classes. If you are interested in hearing from us when we are running them again, please reach out at info@impactboston.org",
              },
            ],
          },
        ]}
      />

      <CenterImage
        imageSrc="/images/publicClasses/placeholder.png"
        imageAlt="Placeholder"
      />

      <Highlight2
        title="Scholarship Opportunities"
        body={[
          "Cost should never be a barrier to safety. Thanks to the generosity of our donors, IMPACT Boston offers full and partial scholarships for all public classes, so that everyone who wants to learn has the opportunity to do so. All classes are also offered on a sliding scale, with pricing based on what you can afford. To apply, download the scholarship application and email your completed form to classes@impactboston.org.",
          "We encourage you to reach out,  we're here to help make it work.",
        ]}
        ctaLabel="IMPACT Scholarship Application 2023"
        ctaHref="/Sessions"
        supportingText="Download the scholarship application and email your completed form to classes@impactboston.org."
        textColor="white"
        backgroundColor="var(--color-secondary)"
        buttonBgColor="white"
        buttonTextColor="black"
      />
    </>
  );
}
