import React from 'react';

type GridProps = {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  noPaddingTop?: boolean;
};

const Grid: React.FC<GridProps> = ({ children, className = '', noPadding = false, noPaddingTop = false }) => {
  const verticalPadding = noPadding ? '' : noPaddingTop ? 'pb-8 md:pb-10 lg:pb-18' : 'py-8 md:py-10 lg:py-18';
  return (
    <div
      className={`grid grid-cols-4 gap-10 md:grid-cols-8 md:gap-4 lg:grid-cols-12 lg:gap-6 px-4 md:px-[max(clamp(2rem,calc(-6rem_+_16.667vw),9rem),calc((100vw_-_72rem)_/_2))] ${verticalPadding} ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;
