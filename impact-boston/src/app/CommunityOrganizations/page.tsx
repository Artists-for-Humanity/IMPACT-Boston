'use client';

import Hero2 from '@/components/Hero/Hero2';
import SideTabs from '@/components/TabsPanel/SideTabs';
import Highlight2 from '@/components/Highlights/Highlight2';
import CenterImage from '@/components/common/CenterImage';
import List from '@/components/CommunityCollab/List';

const collaborators = [
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
  "Woburn High School"
];

export default function SchoolAndColleges() {
  return (
    <>
     <Hero2
        tag='Community Organizations'
        title="Strategies for Safer Living"
        description="IMPACT helps people experience the power of their bodies and voices while gaining practical and useful safety skills. We teach self-defense that is designed for people of all body types and fitness levels. IMPACT programs are trauma-informed. We emphasize verbal skills to avoid a physical altercation, team building, and mutual support.."
        imageSrc="/images/communityOrganizations/placeholder.png"
        imageAlt="Placeholder Image"
      />
<SideTabs
  tabs={[
    {
      label: "Line Drawn",
      content: [
        {
          type: "heading",
          text: "Preventing harassment and abuse in New England performing arts.",
        },
        {
          type: "paragraph",
          text: "Founded in 2018 by IMPACT and StageSource, LINE DRAWN is a collaboration of performing arts organizations that have committed to a unified set of abuse prevention standards.",
        },
   
        {
          type: "paragraph",
          text: "Theatre is a workplace unlike most others – it’s more intimate, more physical, and most jobs don’t last more than a few months. LINE DRAWN fits the unique realities of performing arts. It offers organizations of all sizes a set of practical, impactful tools to create a safer, more equitable environment.",
        },
        {
          type: "paragraph",
          text: "The Line Drawn community standards are a unified set of practices developed over three years by the New England performing arts community in collaboration with IMPACT Boston to address and prevent harassment. These nine standards were developed through a collaborative process of summits, surveys, and community meetings. By adopting at least eight of the nine standards, a company can receive a Line Drawn Designation.",
        },
      ],
    },
    {
      label: "Shelter In Safety",
      content: [
        {
          type: "heading",
          text: "Shelter In Safety is a place to share our bravery and creativity.",
        },
        {
          type: "paragraph",
          text: "In this time when many of us are sheltering in place, our options for staying safe have changed, but they have not disappeared. There is a lot we can do to make ourselves, our loved ones, and our communities safer.",
        },
        {
          type: "paragraph",
          text: "To help ourselves and those we love stay as safe as possible in circumstances that nobody should have to face, ever. If you have a #ShelterInSafety story you would like to share with us, please use the contact form at the bottom of this page.",
        },
      ],
    },
    {
      label: "Community Collaborators",
      content: [
        {
          type: "heading",
          text: "Shelter In Safety is a place to share our bravery and creativity.",
        },
        {
          type: "paragraph",
          text: "In this time when many of us are sheltering in place, our options for staying safe have changed, but they have not disappeared. There is a lot we can do to make ourselves, our loved ones, and our communities safer.",
        },
        {
          type: "paragraph",
          text: "To help ourselves and those we love stay as safe as possible in circumstances that nobody should have to face, ever. If you have a #ShelterInSafety story you would like to share with us, please use the contact form at the bottom of this page..",
        },
      ],
    },
    {
      label: "How to sign up",
      content: [
        {
          type: "heading",
          text: "Getting started",
        },
        {
          type: "paragraph",
          text: "Booking a session is straightforward. IMPACT works directly with your organization to understand your environment, your team's specific challenges, and what a successful training looks like for you. From there, a customized session is scheduled at a time and format that works at your location or online via Zoom.",
        },
        {
          type: "paragraph",
          text: "Most workshops run two hours. Larger organizations often combine multiple programs into a half-day or full-day format. Group rates are available, and IMPACT has experience working with teams of all sizes, from small frontline crews to organization-wide rollouts.",
        },
        {
          type: "paragraph",
          text: "To get started, reach out to IMPACT at info@impactboston.org. Someone will follow up to talk through your needs and find the right fit.",
        },
      ],
    },
  ]}
/>

<CenterImage     
    imageSrc="/images/de-escalation/placeholder.png"
    imageAlt="Group Pictures" 
/>

    <List
      heading="Community Collaborators"
      buttonText="See All"
      backgroundColor="bg-complementary-light"
      listItems={collaborators}
    />

      
 <Highlight2
      title="Book a Session"
      body={[
        "The situations that escalate fastest are the ones no one feels prepared for. IMPACT has spent over 50 years giving people the skills to respond — not freeze — when it matters most. This training doesn't just teach your team what to do. It builds the confidence to actually do it.",
        "If your organization works with the public, this is the training that stays with people long after the session ends.",
      ]}
      ctaLabel="Book a session"
      ctaHref="/Sessions"
      supportingText="Subtitle or secondary line of text that helps the CTA"
    />
    
  
    </>
  );
}   


    