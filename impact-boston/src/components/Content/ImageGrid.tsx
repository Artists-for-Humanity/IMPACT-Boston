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
        <div className="col-span-full grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12" style={{ overflow: 'hidden' }}>
          <div className="col-span-full lg:col-span-6 min-w-0 overflow-hidden" style={{ minWidth: 0 }}>
            <h3 className="h3 break-all" style={{ wordBreak: 'break-all', overflowWrap: 'anywhere', maxWidth: '100%' }}>{title}</h3>
          </div>
          {description?.map((para, idx) => (
            <div className="col-span-full lg:col-start-7 lg:col-span-6 min-w-0 overflow-hidden" style={{ minWidth: 0 }} key={idx}>
              <p className="p2 break-all" style={{ wordBreak: 'break-all', overflowWrap: 'anywhere', maxWidth: '100%' }}>
                {para}
              </p>
            </div>
          ))}
        </div>

        {members.map((member, idx) => (
          <MemberCard key={idx} {...member} />
        ))}
      </Grid>
    </div>
  );
}
