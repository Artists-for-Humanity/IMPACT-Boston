import React from 'react';

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

const Grid: React.FC<GridProps> = ({ children, className = '' }) => {
  return (
    <div className="w-full">
      <div
        className={`grid grid-cols-4 gap-4 mx-4 md:grid-cols-8 md:gap-4 md:mx-8 lg:grid-cols-12 lg:gap-6 h-full max-w-300 m-auto ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Grid;
