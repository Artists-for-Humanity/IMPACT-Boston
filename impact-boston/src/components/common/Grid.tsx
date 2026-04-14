import React from 'react';

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

const Grid: React.FC<GridProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`grid grid-cols-4 gap-10 md:grid-cols-8 md:gap-4 lg:grid-cols-12 lg:gap-6 max-w-[1440px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;
