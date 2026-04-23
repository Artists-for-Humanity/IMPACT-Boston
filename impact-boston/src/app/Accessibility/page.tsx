import Hero2 from "@/components/Hero/Hero2";
import SingleContent from "@/components/Content/Single";
import Triple from "@/components/Content/Triple";

export default function Accessibility() {
  return (
    <>
      <Hero2
        title="Accessibility"
        description="IIMPACT is committed to making our programs accessible. Some people with disabilities do best in classes where everyone has similar disabilities so that skills and strategies can be more closely matched to people’s ways of moving or taking in information. Other people with disabilities do best in classes for women, LGBTQ people, trauma survivors, or other mixed gender, mixed disability groups."
        imageSrc="/images/accessibility/placeholder.png"
        imageAlt="Accessibility Image"
      />

      <SingleContent
        title="Building Locations"
        paragraphs={[
          { text: "Classes in Boston are located on the first floor of the building. Classes in Brighton are location on the Lower Level. Both buildings have elevators and door-access buttons. In both buildings, the front door/main entrance is accessible. Both buildings have accessible restrooms. In Brighton accessible restrooms are on the same floor as the class. In Boston, an accessible stall in a multi-stall restroom is on the same floor, though this bathroom does not have double doors to access. There is also a single accessible restroom on a different floor from the class, accessible by elevator." },
        ]}
        imageSrc="/images/accessibility/placeholder.png"
        imageAlt="Accessibility Image"
        backgroundColor="bg-primary-light"
      />
    <Triple
    title="" 
    cards={[
        {
        type: "default",
        title: "Loud Noises",
        description:
            "IMPACT self-defense classes involve yelling “no” and using a loud voice. We can offer private lessons that do not involve yelling or we can work with you to make the experience of yelling more doable for you.",
        bgClass: "bg-complementary-light",
        },
        {
        type: "default",
        title: "Service Animals",
        description:
            "Service animals are welcome in class, but for safety reasons cannot be on the mat during self-defense practice. Participants may bring a support person to hold the leash, or ensure the animal is trained to stay off the mat; scenarios will be paused if the animal enters the practice area. While IMPACT can coordinate with trainers, they do not provide service animal training or incorporate animals into self-defense scenarios.",
        bgClass: "bg-secondary-light",
        },
        {
        type: "default",
        title: "ASL Interpreters",
        description:
            "IMPACT can provide ASL interpreters to support accessibility and will coordinate with them in advance to ensure safe participation during physical activities. During practice, interpreters may need to move out of view for safety, and instructors will work with participants to use touch or other cues when visual communication isn’t possible.",
        bgClass: "bg-primary-light",
        },
    ]}
    />

        <SingleContent
        title="Physical Classes"
        paragraphs={[
          { text: "IMPACT self-defense classes involve intensive physical skills, specifically, dynamic striking with the arms, stepping forward, and kicking with the legs. If you have a disability that affects your movement we are willing to work with you to make the class accessible. We may want to set up a private lesson before your class to test out the accommodations to make sure they work for you. We consider this a reasonable accommodation and offer it at no charge. Usually, people who walk with mobility aids learn similar physical techniques as people with no physical disabilities, while people who use wheelchairs all or most of the time are better served by classes that teach specific skills that can be used from a seated position. Since classes for wheelchair users are typically not open to the public, we will work with you to design a class that is best for you." },
        ]}
        imageSrc="/images/accessibility/placeholder.png"
        imageAlt="Accessibility Image"
        backgroundColor="bg-primary-light"
      />

          <Triple
            title="" 
            cards={[
                {
                type: "default",
                title: "Reading",
                description:
                    "Our Assertiveness & Boundary Setting class involves some reading of posters and handouts. Our Core program includes one handout that is circulated at the end of the first class. Please contact us if you need large print, Braille, plain language, or other accommodation.",
                bgClass: "bg-complementary-light",
                },
                {
                type: "default",
                title: "Service Animals",
                description:
                    "If you have low vision, instructors are able to use either verbal description or touch to support your learning. If you have total blindness you may be best served by techniques designed specifically for people with visual disabilities. Instructors may want to set up a meeting or private lesson before the class so we can learn more about best ways to work with your vision. This is a reasonable accommodation and will be offered at no cost to you.",
                bgClass: "bg-secondary-light",
                },
                {
                type: "default",
                title: "Disability-specific vs. Non-disability-specific Classess",
                description:
                    "IMPACT offers classes specifically designed for people with disabilities, often through schools and community groups, and can help form tailored programs with potential grant funding support. They are also committed to making all classes accessible and will work with participants to determine the best fit for their needs.",
                bgClass: "bg-primary-light",
                },
            ]}
            />

    </>
  );
}