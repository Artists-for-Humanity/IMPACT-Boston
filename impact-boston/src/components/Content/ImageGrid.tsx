import Grid from "@/components/common/Grid";
import MemberCard, { type MemberCardProps } from "./MemberCard";

export type { MemberCardProps };

export interface ImageGridProps {
  title: string;
  description?: string[];
  members: MemberCardProps[];
  className?: string;
  backgroundColor?: string;
}

export default function ImageGrid({
  title,
  description,
  members,
  className,
  backgroundColor,
}: ImageGridProps) {
  return (
    <div className={`${className ?? ""} ${backgroundColor ?? ""}`.trim()}>
      <Grid className="gap-y-8 md:gap-y-10 lg:gap-y-16">
        <div className="col-span-full grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
          <h3 className="h3 col-span-full lg:col-span-6">{title}</h3>
          {description?.map((para, idx) => (
            <p className="p2 col-span-full lg:col-start-7 lg:col-span-6" key={idx}>
              {para}
            </p>
          ))}
        </div>

        {members.map((member, idx) => (
          <MemberCard key={idx} {...member} />
        ))}
      </Grid>
    </div>
  );
}
