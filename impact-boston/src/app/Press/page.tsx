import Hero2 from '@/components/Hero/Hero2';
import SingleContent from '@/components/Content/Single';
import GridContent from '@/components/Content/Grid';
import MediaCard from '@/components/Content/MediaCard';

export default function Press() {
  return (
    <>
      <Hero2
        title="In The Press"
        description="Press features and media coverage of IMPACT Boston's self-defense and violence prevention work, including interviews, articles, and news segments from outlets like WBUR, Boston Globe, and NBC Boston."
      />

      <SingleContent
        backgroundColor='bg-primary-light'
        title="Media Coverage"
        paragraphs={[
          { text: "IMPACT Boston has earned widespread recognition across local and national media for its innovative approach to personal safety and community empowerment. From in-depth features in the Boston Globe and Washington Post to broadcast segments on WBUR, NBC Boston, and CBS Boston, the organization's programs have consistently drawn attention for their impact. Coverage spans a broad range of topics — self-defense for students with disabilities, de-escalation training for essential workers, bystander intervention, and fitness-based recovery for survivors of sexual assault. These stories reflect IMPACT Boston's reach across schools, workplaces, shelters, and communities throughout the region and beyond." }
        ]}
        imageSrc="/images/booksByMegStone/cost-of-fear-book.png"
        imageAlt="The Cost of Fear book cover"
        gridClassName="gap-y-6 md:gap-y-10 lg:gap-y-6"
        thumbnails={[
          { type: 'video', label: "WGBH News", videoSrc: "https://www.youtube.com/embed/F1p9Ra-VxH0?si=0EGdUB4OWuP54LjD", title: "YouTube video player" },
          { type: 'embed', label: "NBC Boston", scriptSrc: "https://nbcboston.com/portableplayer/?CID=1:5:1985589&videoID=1097649219598&origin=nbcboston.com&fullWidth=y&autoplay=true" },
          { type: 'video', label: "Boston.com", videoSrc: "https://player.vimeo.com/video/113345921?h=46aceb8c55", title: "Boston.com coverage" },
        ]}
      />

      <GridContent
        title="Press Articles"
        description={[
          "IMPACT Boston's work has been featured in leading local and national outlets. Browse recent coverage below.",
        ]}
      >
        <MediaCard
          outlet="Boston Globe"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          href="#"
          linkText="Read the article"
        />
        <MediaCard
          outlet="WBUR"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          href="#"
          linkText="Read the article"
        />
        <MediaCard
          outlet="Washington Post"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          href="#"
          linkText="Read the article"
        />
        <MediaCard
          outlet="CBS Boston"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          href="#"
          linkText="Read the article"
        />
        <MediaCard
          outlet="Newsweek"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          href="#"
          linkText="Read the article"
        />
        <MediaCard
          outlet="Ms. Magazine"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          href="#"
          linkText="Read the article"
        />
      </GridContent>

    </>
  );
}
