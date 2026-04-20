
import Hero2 from '@/components/Hero/Hero2';
// import SideTabsPanel from '@/components/SideTabsPanel';
import SideTabs from '@/components/TabsPanel/SideTabs';
import CtaSection from '@/components/Action/CtaSection';
import Split from '@/components/Content/Split';

export default function SchoolAndColleges() {
  return (
    <>
      <Hero2
        tag='Schools and Colleges'
        title="Safety Skills are Life Skills"
        description="IMPACT instructors will travel to your school and work with you to design a program that best fits your educational goals and schedule.  Programming schedules can vary from an intensive one-day workshop to year-long classes. We have experience collaborating with educators in Physical Education, Health, Wellness, Guidance & Counseling, English, Social Studies, and extracurricular programs."
        imageSrc="/images/schoolsAndColleges/group.png"
        imageAlt="Group Pictures"
      />
      <SideTabs
        tabs={[
            {
        label: "College",
        content: [
            {
            type: "heading",
            text: "College",
            },
            {
            type: "paragraph",
            text: "We all want students to speak up and intervene when they see an unsafe situation.",
            },
            {
            type: "paragraph",
            text: "At IMPACT we make sure they can do it safely. IMPACT programs give students the skills to interrupt threats and intimidation to keep themselves and their communities safer.",
            },
            {
            type: "subheading",
            text: "Empowerment Self-Defense",
            },
            {
            type: "paragraph",
            text: "IMPACT teaches practical self-defense skills that are relevant to the realities of campus safety. Our programs are trauma-informed and relevant to sexual violence from acquaintances, friends, and dating partners.",
            },
            {
            type: "subheading",
            text: "Bystander Intervention & De-escalation",
            },
            {
            type: "paragraph",
            text: "IMPACT’s bystander programs help students and administrators manage their stress response so they can maintain their own safety while helping others.",
            },
            {
            type: "subheading",
            text: "Hate Speech and Harassment",
            },
            {
            type: "paragraph",
            text: "IMPACT programs help students respond constructively to hate speech and harassment, maintaining calm and safety while advocating for a respectful campus climate.",
            },
            {
            type: "subheading",
            text: "Students learn to:",
            },
            {
            type: "list",
            items: [
                "Identify situations that require challenging conversations.",
                "Address defensive and dismissive responses.",
                "Communicate calm and confidence.",
                "Create safe and positive expectations in friend and student groups.",
            ],
            },
        ],
        },
        {
        label: "High School",
        content: [
            {
            type: "heading",
            text: "High School",
            },
            {
            type: "paragraph",
            text: "IMPACT training addresses a broad range of safety concerns. Some scenarios simulate imminent danger while others equip teens to communicate assertively in daily interactions with people they know. Through realistic scenarios with trained instructors, students practice resisting bullying, refusing unwanted attention, and communicating their limits.",
            },
            {
            type: "subheading",
            text: "Age-appropriate safety skills include:",
            },
            {
            type: "list",
            items: [
                "Deescalating potentially threatening situations.",
                "Resisting peer pressure and bullying.",
                "Self-protection strategies for sexual assault scenarios.",
                "Physical self-protection skills.",
                "Specific content focused on date/acquaintance rape.",
            ],
            },
        ],
        },
        {
        label: "Middle School",
        content: [
            {
            type: "heading",
            text: "Middle School",
            },
            {
            type: "paragraph",
            text: "IMPACT programs help students develop the skills to respond to potentially dangerous situations. Students learn to avoid altercations, resist intimidation, assert themselves in the face of peer pressure and escape potential assaults. Middle school students also learn to identify safe adults and ask for help. Scenarios focus on issues relevant to students’ lives and helps them navigate increasing independence.",
            },
            {
            type: "paragraph",
            text: "IMPACT creates a fun, interactive environment that builds students’ confidence. Trainers have experience collaborating with teachers in health and wellness, physical education, extracurricular and other subjects.",
            },
            {
            type: "subheading",
            text: "Age-appropriate safety skills include:",
            },
            {
            type: "list",
            items: [
                "De-escalating potentially threatening situations.",
                "Responding to peer pressure, bullying, and harassments.",
                "Essential self-protection skills.",
                "Assertiveness: knowing and communicating their boundaries.",
            ],
            },
        ],
        },
        {
        label: "Elementary School",
        content: [
            {
            type: "heading",
            text: "Elementary School",
            },
            {
            type: "paragraph",
            text: "It’s never too early to start teaching kids about safety. IMPACT’s Elementary School programs teach children to call attention to threatening situations, distinguish between safe and unsafe adults, and ask a trusted adult for help.",
            },
            {
            type: "paragraph",
            text: "IMPACT creates a fun, interactive environment that builds students’ confidence. Trainers have experience collaborating with teachers in health and wellness, physical education, extracurricular and other subjects.",
            },
            {
            type: "subheading",
            text: "Age-appropriate safety skills include:",
            },
            {
            type: "list",
            items: [
                "Using their voices for protection and to get help.",
                "Physical self-protection techniques that enable children to escape.",
                "Recognizing and reporting inappropriate touch and potentially harmful situations.",
                "How to communicate their boundaries and respect other people’s boundaries.",
            ],
            },
        ],
        },
        {
        label: "Teachers and School Leaders",
        content: [
            {
            type: "heading",
            text: "Teachers and School Leaders",
            },
            {
            type: "paragraph",
            text: "IMPACT helps school leaders and educators proactively prevent abuse. We offer everything from ongoing consulting on organizational policies and practices to one-time professional development workshops.",
            },
            {
            type: "paragraph",
            text: "IMPACT’s approach to organizational prevention builds and strengthens cultures that respect boundaries, welcome constructive challenge and ensure that every adult in the building has the skills to recognize and interrupt and report inappropriate, unsafe, and line-crossing actions in the moment so they don’t escalate to overt and prolonged abuse.",
            },
            {
            type: "subheading",
            text: "Teacher Training and Policy Development Topics:",
            },
            {
            type: "list",
            items: [
                "Boundaries: Creating a Safe (and sane!) School Environment.",
                "Challenging Conversations for Abuse Prevention.",
                "Management and Leadership for Abuse Prevention.",
                "De-Escalation.",
                "Bystander Intervention.",
            ],
            },
        ],
        },
        {
        label: "Youth Program Collaborators",
        content: [
            {
            type: "heading",
            text: "School & Youth Program Collaborators.",
            },
            {
            type: "columns",
            items: [
                [
                "Andover High School",
                "Babson College",
                "Belmonte Saugus Middle School",
                "Berklee School of Music",
                "Beverly High School",
                "Boston Community Leadership Academy",
                "Boston Green Academy",
                "Boston International High School",
                "Brighton High School",
                "Brimmer and May School",
                "Brockton High School",
                "Buckingham Browne & Nichols Summer Camp",
                "Buckingham Browne & Nichols School",
                "Cambridge School of Weston",
                "Camp Fernwood",
                "CASH High School",
                "Charlestown High School",
                "Commonwealth School",
                "Curley Middle School",
                "Dana Hall School",
                "East Boston High School",
                "Edwards Middle School",
                "The English High School",
                "Everett High School",
                "Excel High School",
                "Fenway High School",
                "Fontbonne Academy",
                "Frederick Middle School",
                "Gardner Pilot Academy",
                "Girls Reflecting Our World Mentorship (GROW)",
                "Groton School",
                "Harvard Business School",
                "Harvard Law School",
                "Haverhill High School",
                "Henderson Inclusion School",
                "Higginson-Lewis Middle School",
                "International School of Boston",
                "Jackson Mann Middle School",
                "Jeremiah E Burke High School",
                "Joseph Lee K-8 School",
                "Josiah Quincy Upper School",
                "Lasell University",
                "Lawrence Academy",
                "Lesley University",
                "Lincoln-Sudbury High School",
                "Lyndon Pilot School",
                "Madison Park Technical Vocational High School",
                "Malden Catholic High School",
                "Malden High School",
                "McCormack Middle School",
                "McKinley Elementary School",
                "McKinley South End Academy",
                "Medfield High School",
                "Medford High School",
                ],
                [
                "Middlesex School",
                "Mildred Ave Middle School",
                "Mt. Alvernia High School",
                "Nashoba Brooks School",
                "New Mission High School",
                "Newton Country Day School",
                "Newton North High School",
                "Okemo Mountain School",
                "Orchard Gardens Middle School",
                "Perkins School for the Blind",
                "Pinkerton Academy",
                "POST Academy",
                "Putnam Avenue Upper School",
                "Quincy Upper High School",
                "Richard J Murphy School",
                "Riverdale Elementary School",
                "Rivers School",
                "Salem State University",
                "Saugus High School",
                "SEEM Collaborative",
                "Simmons College",
                "Somerville High School",
                "Spaulding Hospital",
                "St. Mark’s School",
                "Stoneham High School",
                "TechBoston Academy",
                "Trotter Middle School",
                "Tufts University",
                "Umana Middle School",
                "Up Academy Dorchester",
                "Waltham High School",
                "Warren Prescott Middle School",
                "Wellesley High School",
                "Wheaton College",
                "Williams College",
                "Winsor School",
                "Woburn High School",
                ],
            ],
            },
        ],
        },
        {
        label: "Nonprofit",
        content: [
            {
            type: "heading",
            text: "Safety training that fits how nonprofits actually work",
            },
            {
            type: "paragraph",
            text: "IMPACT partners with nonprofit organizations to deliver flexible, customized safety and communication training that meets the unique demands of mission-driven work.",
            },
            {
            type: "paragraph",
            text: "From helping rape crisis counselors manage secondary trauma to equipping shelter workers with conflict de-escalation skills and empowering child care providers to challenge potential abusers, IMPACT tailors its programs to your organization's specific goals, offering large-group demonstrations or hands-on interactive sessions that integrate seamlessly into your existing training structure.",
            },
        ],
        },
        {
        label: "Home Visitors",
        content: [
            {
            type: "heading",
            text: "2 specialized programs for Home Visitors",
            },
            {
            type: "paragraph",
            text: "Home visitors face a unique challenge. You're in someone else's space, often alone, with no way to fully predict what you'll walk into. These 2 programs were built specifically for that reality.",
            },
            {
            type: "subheading",
            text: "Verbal Self-Defense & Assertive Communication",
            },
            {
            type: "paragraph",
            text: "This program covers everything you need to handle tension before it becomes danger. You'll practice de-escalation strategies for diffusing hostility in the moment, boundary-setting techniques for holding your ground with confidence, and skills for navigating difficult or uncomfortable conversations without backing down. Everything is learned through realistic scenario-based practice — not lectures, not handouts.",
            },
            {
            type: "paragraph",
            text: "Best for teams looking to build everyday communication confidence and a strong first line of response.",
            },
            {
            type: "subheading",
            text: "Verbal & Physical Self-Defense",
            },
            {
            type: "paragraph",
            text: "Everything in the verbal training, plus the physical skills to protect yourself if it ever comes to that. Physical defense is always the last resort; the goal is always to de-escalate and exit safely. But knowing you have those skills changes how you carry yourself in the field. Participants leave with more than techniques. They leave with a different kind of confidence.",
            },
            {
            type: "paragraph",
            text: "Best for home visitors in higher-risk environments, or organizations that want to give their teams the most complete preparation possible.",
            },
        ],
        },
         ]}
        />
        <Split
        backgroundColor='bg-bg-lavender'
        title="Safety Skills are Life Skills."
        description="IMPACT teaches age-appropriate comprehensive violence prevention programs and evidence-based safety trainings for Elementary, Middle, High School, and College-aged students. We teach students of all ages the skills to communicate their boundaries, foster healthy relationships, recognize and resist coercion, de-escalate conflicts, advocate for themselves and others and protect their bodies from harm."
        cards={[
            {
            title: "For Students",
            description:
                "Empowerment Self-Defense, Healthy Relationships, Sex Education, Bystander Intervention, Online Safety, Peer Leadership for Abuse Prevention",
            },
            {
            title: "For Educators",
            description:
                "De-escalation, Challenging Conversations for Abuse, Boundaries, Organizational Abuse Prevention Policy Development.",
            },
        ]}
        topImageSrc="/images/schoolsAndColleges/skills1.png"
        topImageAlt="Students participating in an IMPACT training session"
        bottomImageSrc="/images/schoolsAndColleges/skills2.png"
        bottomImageAlt="Children participating in an IMPACT workshop"
        />
        

      <CtaSection
        panels={[
          {
            wrapperClassName: 'bg-secondary md:w-1/2 lg:px-20 lg:py-27',
            title: 'IMPACT School',
            titleLine2: 'Brochure',
            description: 'Browse brochures for Elementary, Middle, and High School.',
            buttonText: 'Download School Brochure',
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


    