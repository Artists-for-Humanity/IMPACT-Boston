'use client';

import Hero2 from '@/components/Hero/Hero2';
import SideTabs from '@/components/TabsPanel/SideTabs';
import Highlight2 from '@/components/Highlights/Highlight2';
import CenterImage from '@/components/common/CenterImage';

export default function SchoolAndColleges() {
  return (
    <>
     <Hero2
        // tag='Community Organizations'
        title="Community Organizations"
        description="IMPACT helps people experience the power of their bodies and voices while gaining practical and useful safety skills. We teach self-defense that is designed for people of all body types and fitness levels. IMPACT programs are trauma-informed. We emphasize verbal skills to avoid a physical altercation, team building, and mutual support.."
        imageSrc="/images/communityOrganizations/placeholder.png"
        imageAlt="Placeholder Image"
      />
<SideTabs
  tabs={[
    {
      label: "Basic Self-defense",
      content: [
        {
          type: "heading",
          text: "Empowerment Self-Defense",
        },
        {
          type: "paragraph",
          text: "Introductory workshops or longer courses empower participants with practical skills, confidence, and awareness to protect themselves and communicate effectively in real-world situations. Each class follows the same format: Instructors demonstrate realistic scenarios and model strategies for responding. These strategies could include de-escalation skills, assertiveness and boundary-setting, verbal self-defense strategies, or physical self-defense skills, depending on the scenario and the class. Participants then have the opportunity to practice the skills in the scenario with an instructor who plays the role of an aggressor, an escalated person, a familiar person who is crossing a boundary, etc. This experiential practice helps participants think on their feet and learn to manage their own stress response in order to respond effectively in the moment of confrontation.",
        },
      ],
    },
    {
      label: "Resisting Sexual Violence",
      content: [
        {
          type: "heading",
          text: "Resisting Sexual Violence",
        },
        {
          type: "paragraph",
          text: "IMPACT instructors have the skill and sensitivity to address the realities of sexual violence. We present a range of techniques that are relevant to sexual assaults from friends, dating partners, and other people we know. Our training actively challenges victim blame and presents self-defense as a choice. Participants also learn strategies to help friends and community members who are experiencing threats and intimidation.",
        },
        {
          type: "paragraph",
          text: "This content is only included in day-long and multi-sessions courses. This gives instructors enough time to build trust with the group and the participants enough time with the basic self-defense material to build confidence before we move into sexual violence scenarios.",
        },
      ],
    },
    {
      label: "Challenging Conversations",
      content: [
        {
          type: "heading",
          text: "Challenging Conversations",
        },
        {
          type: "paragraph",
          text: "Participants learn strategies for direct, clear communication about difficult issues or concerns. Whether we're asking hard questions or calling attention to inappropriate situations that could escalate to overt abuse, maintaining calm and focus is key. This training also presents strategies to navigate challenging responses from the other party, including minimizing and defensiveness.",
        },
      ],
    },
    {
      label: "De-escalation",
      content: [
        {
          type: "heading",
          text: "De-escalation",
        },
        {
          type: "paragraph",
          text: "IMPACT De-Escalation Training teaches skills to create and maintain safety when someone is angry, threatening or disruptive. Our trauma-informed approach leads with empathy and problem solving while also maintaining strong boundaries and awareness of physical safety. Participants learn how stress affects our brains and bodies so they can manage stress responses in the moment.",
        },
      ],
    },
    {
      label: "Boundary Setting",
      content: [
        {
          type: "heading",
          text: "Assertiveness & Boundary Setting",
        },
        {
          type: "paragraph",
          text: "Participants learn practical steps to identify, communicate, and reinforce their boundaries. Interactive workshops give people the opportunity to practice effective communication and negotiation in stressful situations.",
        },
      ],
    },
  ]}
/>

<CenterImage     
    imageSrc="/images/de-escalation/placeholder.png"
    imageAlt="Group Pictures" 
/>



      
 <Highlight2
      title="Customized Programs"
      body={[
        "Specialized training to meet your needs. Many communities and organizations have specific safety needs or concerns. Whether you’re addressing an incident, responding to hate speech and threats, or preparing for community events, IMPACT can help.",
        "We work with you to develop customized classes, facilitate stakeholder meetings, or create a detailed abuse prevention plan.",
        "Our collaborators include social service agencies, domestic violence and sexual assault programs, home visitors, youth development programs, community centers, activist groups, adult education centers, counseling centers, performance venues and many others."
      ]}
      ctaLabel="Get in Touch"
      ctaHref="/Sessions"
    />
    
  
    </>
  );
}   


    
