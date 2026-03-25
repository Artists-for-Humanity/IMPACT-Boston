// components/common/Grid.tsx
// Reusable grid component system for 12, 8, and 4 column layouts
// Mobile-first responsive grid with automatic container padding

import React from 'react'

type GridColumns = 4 | 8 | 12
type GapSize = 'sm' | 'md' | 'lg' | 'xl'

interface GridProps {
  children: React.ReactNode
  columns?: GridColumns
  gap?: GapSize
  className?: string
  containerClassName?: string
  as?: 'div' | 'section' | 'article' | 'main'
}

interface GridItemProps {
  children: React.ReactNode
  colSpan?: number
  colStart?: number
  className?: string
  as?: 'div' | 'article' | 'section' | 'aside'
}

/**
 * Grid - Main grid container component
 *
 * @param columns - Number of columns (4, 8, or 12). Default: 12
 *   - 4 cols: Simple 4-column grid on all screens
 *   - 8 cols: 4 cols mobile, 8 cols desktop
 *   - 12 cols: 4 cols mobile, 12 cols desktop (default)
 * @param gap - Gap size between grid items
 * @param className - Additional classes for the grid element
 * @param containerClassName - Additional classes for the container wrapper
 * @param as - HTML element to render as (default: 'div')
 *
 * @example
 * <Grid columns={12}>
 *   <GridItem colSpan={6}>Content</GridItem>
 * </Grid>
 */
export default function Grid({
  children,
  columns = 12,
  gap = 'md',
  className = '',
  containerClassName = '',
  as: Component = 'div',
}: GridProps) {
  // Map gap sizes to Tailwind classes
  const gaps: Record<GapSize, string> = {
    sm: 'gap-3 md:gap-4',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8',
    xl: 'gap-8 md:gap-10',
  }

  // Generate grid column classes based on column count
  const getGridClass = () => {
    switch (columns) {
      case 4:
        return 'grid grid-cols-4'
      case 8:
        return 'grid grid-cols-4 md:grid-cols-8'
      case 12:
      default:
        return 'grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12'
    }
  }

  const gridClasses = `${getGridClass()} ${gaps[gap]} ${className}`

  return (
    <Component className={`container-grid ${containerClassName}`}>
      <div className={gridClasses}>
        {children}
      </div>
    </Component>
  )
}

/**
 * GridItem - Grid item component for precise column control
 *
 * @param colSpan - Number of columns to span (uses Tailwind col-span-*)
 * @param colStart - Starting column position (uses Tailwind col-start-*)
 * @param className - Additional classes for styling
 * @param as - HTML element to render as (default: 'div')
 *
 * @example
 * <GridItem colSpan={6} colStart={1}>Content</GridItem>
 * <GridItem className="md:col-span-8">Responsive content</GridItem>
 */
export function GridItem({
  children,
  colSpan,
  colStart,
  className = '',
  as: Component = 'div',
}: GridItemProps) {
  const colSpanClass = colSpan ? `col-span-${colSpan}` : ''
  const colStartClass = colStart ? `col-start-${colStart}` : ''
  const classes = `${colSpanClass} ${colStartClass} ${className}`.trim()

  return (
    <Component className={classes}>
      {children}
    </Component>
  )
}

/**
 * GridContainer - Standalone container wrapper without grid
 * Useful when you need just the responsive padding without the grid layout
 *
 * @example
 * <GridContainer>
 *   <div>Content with responsive padding</div>
 * </GridContainer>
 */
export function GridContainer({
  children,
  className = '',
  as: Component = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main'
}) {
  return (
    <Component className={`container-grid ${className}`}>
      {children}
    </Component>
  )
}
