# Grid Component Usage Examples

The Grid component system provides a consistent, reusable way to create responsive layouts using a 12, 8, or 4 column grid system.

## Quick Start

```tsx
import Grid, { GridItem, GridContainer } from '@/components/common/Grid'

// Basic 12-column grid (default)
<Grid>
  <div className="col-span-4 md:col-span-6">Left content</div>
  <div className="col-span-4 md:col-span-6">Right content</div>
</Grid>
```

## Component API

### Grid

Main grid container that combines the responsive container padding with a grid layout.

**Props:**
- `columns?: 4 | 8 | 12` - Number of columns (default: 12)
  - **12 cols**: 4 cols mobile → 12 cols desktop
  - **8 cols**: 4 cols mobile → 8 cols desktop
  - **4 cols**: 4 cols on all screens
- `gap?: 'sm' | 'md' | 'lg' | 'xl'` - Gap between items (default: 'md')
- `className?: string` - Additional classes for the grid element
- `containerClassName?: string` - Additional classes for the container wrapper
- `as?: 'div' | 'section' | 'article' | 'main'` - HTML element to render as

### GridItem

Optional wrapper for grid items with column positioning props.

**Props:**
- `colSpan?: number` - Number of columns to span
- `colStart?: number` - Starting column position
- `className?: string` - Additional Tailwind classes for responsive behavior
- `as?: 'div' | 'article' | 'section' | 'aside'` - HTML element to render as

### GridContainer

Standalone container with just the responsive padding (no grid).

**Props:**
- `className?: string` - Additional classes
- `as?: 'div' | 'section' | 'article' | 'main'` - HTML element to render as

---

## Examples

### Example 1: Hero Section with 12-Column Grid

```tsx
import Grid from '@/components/common/Grid'

<Grid columns={12} gap="lg" as="section" className="items-center md:min-h-[600px]">
  {/* Content - spans 4 cols on mobile, 4 cols starting at position 1 on desktop */}
  <div className="col-span-4 md:col-start-1 md:col-span-4">
    <HeroContent />
  </div>

  {/* Image - spans 4 cols on mobile, 7 cols starting at position 6 on desktop */}
  <div className="col-span-4 md:col-start-6 md:col-span-7">
    <HeroImage />
  </div>
</Grid>
```

**Before (with inline Tailwind):**
```tsx
<section className="w-full bg-brand-gray-light">
  <div className="container-grid">
    <div className="grid-12-col items-center md:min-h-[600px] !gap-10 md:!gap-6">
      <div className="col-span-4 md:col-start-1 md:col-span-4">...</div>
      <div className="col-span-4 md:col-start-6 md:col-span-7">...</div>
    </div>
  </div>
</section>
```

### Example 2: Three Column Feature Layout

```tsx
import Grid, { GridItem } from '@/components/common/Grid'

<Grid columns={12} gap="md">
  <GridItem className="col-span-4 md:col-span-4">
    <FeatureCard title="Feature 1" />
  </GridItem>
  <GridItem className="col-span-4 md:col-span-4">
    <FeatureCard title="Feature 2" />
  </GridItem>
  <GridItem className="col-span-4 md:col-span-4">
    <FeatureCard title="Feature 3" />
  </GridItem>
</Grid>
```

### Example 3: Two Column Layout (8-Column Grid)

```tsx
<Grid columns={8} gap="lg">
  <div className="col-span-4">
    <ContentSection />
  </div>
  <div className="col-span-4">
    <Sidebar />
  </div>
</Grid>
```

### Example 4: Simple 4-Column Gallery

```tsx
<Grid columns={4} gap="sm">
  {images.map((img) => (
    <div key={img.id} className="col-span-1">
      <Image src={img.src} alt={img.alt} />
    </div>
  ))}
</Grid>
```

### Example 5: Asymmetric Layout

```tsx
<Grid columns={12}>
  {/* Main content takes up 8 columns on desktop */}
  <div className="col-span-4 md:col-span-8">
    <Article />
  </div>

  {/* Sidebar takes up 4 columns on desktop */}
  <div className="col-span-4 md:col-span-4">
    <RelatedPosts />
  </div>
</Grid>
```

### Example 6: Centered Content

```tsx
<Grid columns={12}>
  {/* Content centered with margins on desktop */}
  <div className="col-span-4 md:col-start-3 md:col-span-8">
    <CenteredContent />
  </div>
</Grid>
```

### Example 7: Full Width with Custom Gap

```tsx
<Grid columns={12} gap="xl" className="items-start">
  <div className="col-span-4 md:col-span-12">
    <FullWidthBanner />
  </div>
  <div className="col-span-4 md:col-span-6">
    <LeftContent />
  </div>
  <div className="col-span-4 md:col-span-6">
    <RightContent />
  </div>
</Grid>
```

### Example 8: Using GridContainer (No Grid)

When you need just the responsive padding without the grid:

```tsx
import { GridContainer } from '@/components/common/Grid'

<GridContainer as="section" className="bg-brand-gray-light">
  <h1>Centered Content</h1>
  <p>This content has responsive padding but no grid layout.</p>
</GridContainer>
```

---

## Gap Sizes Reference

- `sm`: 12px mobile → 16px desktop
- `md`: 16px mobile → 24px desktop (default)
- `lg`: 24px mobile → 32px desktop
- `xl`: 32px mobile → 40px desktop

---

## Responsive Breakpoints

- `sm`: 390px
- `md`: 744px
- `lg`: 1024px
- `xl`: 1440px

---

## Tips

1. **Use standard Tailwind classes for responsive column spans:**
   ```tsx
   className="col-span-4 md:col-span-6 lg:col-span-8"
   ```

2. **Combine with other Tailwind utilities:**
   ```tsx
   <Grid className="items-center min-h-screen">
   ```

3. **Use semantic HTML elements:**
   ```tsx
   <Grid as="section">  // Renders as <section>
   <GridItem as="article">  // Renders as <article>
   ```

4. **Direct children can use Tailwind col-span classes:**
   ```tsx
   <Grid>
     <div className="col-span-4 md:col-span-6">...</div>
   </Grid>
   ```

5. **Mix GridItem with plain divs as needed:**
   ```tsx
   <Grid>
     <GridItem colSpan={6}>Using GridItem</GridItem>
     <div className="col-span-6">Using plain div</div>
   </Grid>
   ```
