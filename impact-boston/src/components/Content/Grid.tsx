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
      <Grid>
        <h3 className="h3 col-span-full lg:col-span-6">{title}</h3>

        {description.map((para, idx) => (
          <p className="p2 pb-2 col-span-full lg:col-start-7 lg:col-span-6" key={idx}>
            {para}
          </p>
        ))}

        {members?.map((member, idx) =>
          renderCard ? renderCard(member, idx) : <MemberCard key={idx} {...member} />
        )}

        {children}
      </Grid>
    </div>
  );
}
