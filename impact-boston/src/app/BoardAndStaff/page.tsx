
import Hero2 from '@/components/Hero/Hero2';
import SingleContent from '@/components/Content/Single';
import GridContent from '@/components/Content/Grid';
import { Grid } from 'lucide-react';



export default function AboutImpact() {
  return (
    <>
      <Hero2
        title="Board & Staff"
        description="IMPACT instructors will travel to your school and work with you to design a program that best fits your educational goals and schedule.  Programming schedules can vary from an intensive one-day workshop to year-long classes. We have experience collaborating with educators in Physical Education, Health, Wellness, Guidance & Counseling, English, Social Studies, and extracurricular programs."
        imageSrc="/images/boardAndStaff/group.png"
        imageAlt="Group Pictures"
      />
      <SingleContent className='bg-bg-lavender'
        title="Meg Stone"
        subtitle="IMPACT Executive Director"
        paragraphs={[
          {text: "Meg Stone has been with IMPACT since 2002 and became Executive Direct in 2005. She has created customized safety training programs for schools, community groups, workplaces, and activists. She has led organizational abuse prevention initiatives in schools, disability services, sports, and performing arts.", bold:true},
          {text: "She is the author of two books,  The Cost of Fear: Why Most Safety Advice is Sexist and How We Can Stop Gender-based Violence and “Don’t Fight Back” and 10 Other Myths About Crime, Personal Safety, and Gender-based Violence. Meg is a recipient of the Visionary Voice Award from the National Sexual Violence Resource Center, and was chosen by the US Centers for Disease Control and Prevention as an expert panelist aiding in the development of their standards for preventing sexual abuse in youth-serving organizations. Her writing has been published in Huffington Post, Newsweek, Washington Post, Boston Globe, Dame, and Ms. Meg lives in Cambridge, Massachusetts, with her partner, Mal, and a shockingly large collection of musical theater cast albums."}
        ]}
        imageSrc="/images/boardAndStaff/meg-headshot.png"
        imageAlt="Team Picture"
      />
      <GridContent
        title="IMPACT Board of Directors"
        description={[
          "IMPACT Boston's Board of Directors is a diverse group of dedicated professionals united by a shared commitment to inclusion, empowerment, and community well-being. Led by Board President Elizabeth (Beth) Yancy Bostic, the board includes educators, advocates, attorneys, and community leaders with deep expertise spanning special education, disability rights, social policy, workforce development, and social justice. Together, they bring a wealth of lived experience and professional knowledge to guide IMPACT's mission of building safer, more inclusive communities for all.",
        ]}
        members={
            [
            {
                imageSrc: "/images/boardAndStaff/headshots/headshot-1.png",
                imageAlt: "IMPACT Board of Directors",
                name: "Elizabeth (Beth) Yancy Bostic",
                role: "Board President",
                bio: "Beth has over 15 years of experience as a Special Education Advocate, serving Massachusetts and New Hampshire families and as well as those relocating to Massachusetts from other states. As a parent of children with special needs, she understands the often daunting task of securing and coordinating appropriate academic, medical, functional and recreational supports and services."
            },
            {
                imageSrc: "/images/boardAndStaff/headshots/headshot-2.png",
                imageAlt: "IMPACT Board of Directors",
                name: "Elizabeth (Beth) Yancy Bostic",
                role: "Board President",
                bio: "Elizabeth (Beth) Yancy Bostic is a passionate advocate for education and social justice, with over 20 years of experience in the field. She has dedicated her career to empowering marginalized communities and promoting inclusive practices in schools."
            },
               {
                imageSrc: "/images/boardAndStaff/headshots/headshot-3.png",
                imageAlt: "IMPACT Board of Directors",
                name: "Elizabeth (Beth) Yancy Bostic",
                role: "Board President",
                bio: "Elizabeth (Beth) Yancy Bostic is a passionate advocate for education and social justice, with over 20 years of experience in the field. She has dedicated her career to empowering marginalized communities and promoting inclusive practices in schools."
            },
               {
                imageSrc: "/images/boardAndStaff/headshots/headshot-4.png",
                imageAlt: "IMPACT Board of Directors",
                name: "Elizabeth (Beth) Yancy Bostic",
                role: "Board President",
                bio: "Elizabeth (Beth) Yancy Bostic is a passionate advocate for education and social justice, with over 20 years of experience in the field. She has dedicated her career to empowering marginalized communities and promoting inclusive practices in schools."
            },
               {
                imageSrc: "/images/boardAndStaff/headshots/headshot-5.png",
                imageAlt: "IMPACT Board of Directors",
                name: "Elizabeth (Beth) Yancy Bostic",
                role: "Board President",
                bio: "Elizabeth (Beth) Yancy Bostic is a passionate advocate for education and social justice, with over 20 years of experience in the field. She has dedicated her career to empowering marginalized communities and promoting inclusive practices in schools."
            },
               {
                imageSrc: "/images/boardAndStaff/headshots/headshot-6.png",
                imageAlt: "IMPACT Board of Directors",
                name: "Elizabeth (Beth) Yancy Bostic",
                role: "Board President",
                bio: "Elizabeth (Beth) Yancy Bostic is a passionate advocate for education and social justice, with over 20 years of experience in the field. She has dedicated her career to empowering marginalized communities and promoting inclusive practices in schools."
            },
               {
                imageSrc: "/images/boardAndStaff/headshots/headshot-7.png",
                imageAlt: "IMPACT Board of Directors",
                name: "Elizabeth (Beth) Yancy Bostic",
                role: "Board President",
                bio: "Elizabeth (Beth) Yancy Bostic is a passionate advocate for education and social justice, with over 20 years of experience in the field. She has dedicated her career to empowering marginalized communities and promoting inclusive practices in schools."
            },
               {
                imageSrc: "/images/boardAndStaff/headshots/headshot-8.png",
                imageAlt: "IMPACT Board of Directors",
                name: "Elizabeth (Beth) Yancy Bostic",
                role: "Board President",
                bio: "Elizabeth (Beth) Yancy Bostic is a passionate advocate for education and social justice, with over 20 years of experience in the field. She has dedicated her career to empowering marginalized communities and promoting inclusive practices in schools."
            },
        ]
        }
    />


    </>
  );
}


    