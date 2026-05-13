import React from 'react';

type GridProps = {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

const Grid: React.FC<GridProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <div
      className={`grid grid-cols-4 gap-10 md:grid-cols-8 md:gap-4 lg:grid-cols-12 lg:gap-6 px-4 md:px-[clamp(2rem,calc(-6rem+16.667vw),9rem)] ${noPadding ? '' : 'py-8 md:py-10 lg:py-18'} ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;
