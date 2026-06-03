import Grid from '@/components/common/Grid';
import MemberCard, { MemberCardProps } from './MemberCard';
import React from 'react';

interface GridContentProps {
  title: string;
  description: string[];
  className?: string;
  members?: MemberCardProps[];
  renderCard?: (member: MemberCardProps, idx: number) => React.ReactNode;
  children?: React.ReactNode;
}

export default function GridContent({
  title,
  description,
  className = '',
  members,
  renderCard,
  children,
}: GridContentProps) {
  return (
    <div className={` ${className}`}>
      <Grid className="gap-y-8 md:gap-y-10 lg:gap-y-16">
        <div className="col-span-full grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
          <h3 className="h3 col-span-full lg:col-span-6">{title}</h3>

          {description.map((para, idx) => (
            <p className="p2 col-span-full lg:col-start-7 lg:col-span-6" key={idx}>
              {para}
            </p>
          ))}
        </div>

        {members?.map((member, idx) =>
          renderCard ? renderCard(member, idx) : <MemberCard key={idx} {...member} />
        )}

        {children}
      </Grid>
    </div>
  );
}
