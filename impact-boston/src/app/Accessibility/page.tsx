import Hero2 from "@/components/Hero/Hero2";
import List from "@/components/List/List";
import CtaSection from "@/components/Action/CtaSection";

export default function Accessibility() {
  return (
    <>
      <Hero2
        title="Accessibility Information"
        description="IMPACT is committed to making our programs accessible. Some people with disabilities do best in classes where everyone has similar disabilities so that skills and strategies can be more closely matched to people’s ways of moving or taking in information. Other people with disabilities do best in classes for women, LGBTQ people, trauma survivors, or other mixed gender, mixed disability groups."
        imageSrc="/images/accessibility/placeholder.png"
        imageAlt="Accessibility Image"
      />
      <List
        items={[
          {
            title: "ASL Interpreters",
            description: "IMPACT has taught classes with ASL interpreters and can work with you to find interpreters that can make the class accessible to you.",
            paragraph: "To ensure physical safety we will have to coordinate with interpreters ahead of time so that they understand the physical movement of the program. There will be times when they will have to move out of your sight during physical practice in order to ensure their safety and the instructors’ safety. We will work with you about whether you are comfortable with touch or other types of prompts during the parts of physical practice when looking at the interpreter may not be possible."
          },
          {
            title: "Reading",
            description: "Our Assertiveness & Boundary Setting class involves some reading of posters and handouts.",
            paragraph: "Our Core program includes one handout that is circulated at the end of the first class. Please contact us if you need large print, Braille, plain language, or other accommodation."
          },
          {
            title: "Visual disabilities",
            description: "If you have low vision, instructors are able to use either verbal description or touch to support your learning.",
            paragraph: "If you have total blindness you may be best served by techniques designed specifically for people with visual disabilities. Instructors may want to set up a meeting or private lesson before the class so we can learn more about best ways to work with your vision. This is a reasonable accommodation and will be offered at no cost to you."
          },
          {
            title: "Disability-specific vs. Non-disability-specific classes",
            description: "IMPACT offers numerous classes designed specifically for people with disabilities.",
            paragraph: "Most are offered through school and community groups. If it would work best for you to take a class that is tailored to your specific disability, we are willing to work with you to pull a group together and often have or can get grant funding for disability-specific classes. We are also committed to making non-disability-specific classes accessible and will work with you to help you decide which option is best for you."
          },
          {
            title: "Building locations",
            description: "Classes in Boston are located on the first floor of the building.",
            paragraph: "Classes in Brighton are location on the Lower Level. Both buildings have elevators and door-access buttons. In both buildings, the front door/main entrance is accessible. Both buildings have accessible restrooms. In Brighton accessible restrooms are on the same floor as the class. In Boston, an accessible stall in a multi-stall restroom is on the same floor, though this bathroom does not have double doors to access. There is also a single accessible restroom on a different floor from the class, accessible by elevator."
          },
          {
            title: "Physical Classes",
            description: "IMPACT self-defense classes involve intensive physical skills, specifically, dynamic striking with the arms, stepping forward, and kicking with the legs.",
            paragraph: "If you have a disability that affects your movement we are willing to work with you to make the class accessible. We may want to set up a private lesson before your class to test out the accommodations to make sure they work for you. We consider this a reasonable accommodation and offer it at no charge. Usually, people who walk with mobility aids learn similar physical techniques as people with no physical disabilities, while people who use wheelchairs all or most of the time are better served by classes that teach specific skills that can be used from a seated position. Since classes for wheelchair users are typically not open to the public, we will work with you to design a class that is best for you."
          },
          {
            title: "Loud Noises",
            description: "IMPACT self-defense classes involve yelling “no” and using a loud voice.",
            paragraph: "We can offer private lessons that do not involve yelling or we can work with you to make the experience of yelling more do-able for you."
          },
          {
            title: "Service animals",
            description: "Service animals are welcome in the class, but for safety reasons cannot be on the mat with you while you are practicing self-defense scenarios.",
            paragraph: "You are welcome to bring a support person to hold the animal’s leash while you practice scenarios. If you don’t bring a support person, we ask that the animal be trained and cued to stay off the mat while you practice scenarios. For safety reasons, we will have to stop a scenario if the animal comes onto the mat. We are willing to work with your service animal trainer if you would like to explore the possibility of involving your service animal in your self-defense, but we do not have the expertise to train animals, and we cannot safely practice with the animal assisting in self-defense."
          },
        ]}
      />
    <CtaSection
        panels={[
          {
            wrapperClassName: 'bg-complementary md:w-1/2 py-14 px-10 md:p-10 lg:py-[118px] lg:px-[144px]',
            title: 'Non-discrimination Policy ',
            titleLine2: 'and Grievance Procedure',
            description: 'Our commitment to equal treatment and how to report concerns.',
            buttonText: 'Read Document',
            href: '/',
            iconSrc: '/icons/download.svg',
            iconWidth: 24,
            iconHeight: 24,
          },
          {
            wrapperClassName: 'bg-primary md:w-1/2 py-14 px-10 md:p-10 lg:py-[118px] lg:px-[144px]',
            title: 'Language Access Policy',
            description: 'How we support participants who need language assistance.',
            buttonText: 'Read Document',
            href: '/',
            iconSrc: '/icons/download.svg',
            iconWidth: 13.09,
            iconHeight: 24,
          },
        ]}
      />

    </>
  );
}
