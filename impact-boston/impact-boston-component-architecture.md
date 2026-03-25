# Impact Boston — Component Folder Architecture

> This document reflects components defined for the landing page (Phase 2).
> As new pages are designed and handed off, this architecture should be updated to reflect new additions.
> Last Updated: February 2026

---

## Folder Structure

```
components/
│
├── common/                          # Reusable primitives used across multiple sections
│   ├── Button.tsx                   # Primary CTA button
│   ├── BulletList.tsx               # Formatted list component
│   ├── ContentBlock.tsx             # Structured content (heading + paragraphs + lists)
│   └── SectionHeading.tsx           # "What We Offer", "How It Works" style headings
│
├── Header/                          # Site-wide header
│   ├── Header.tsx                   # Main container — composes all header elements
│   ├── SiteBanner.tsx               # Announcement/alert banner at the very top
│   ├── Logo.tsx                     # IMPACT Boston logo (reusable elsewhere)
│   └── Navigation.tsx               # Primary navigation menu
│
├── sections/                        # Full-width page sections
│   │
│   ├── Hero/                        # Landing page hero (split-screen layout)
│   │   ├── HeroSection.tsx          # Main container — orchestrates layout
│   │   ├── HeroContent.tsx          # Left side — headline, body text, CTA
│   │   ├── HeroImage.tsx            # Right side — image container
│   │   └── HeroHeadline.tsx         # Optional — reusable multi-colored headline treatment
│   │
│   ├── CallToAction/                # "Everything You Need to Get Involved" section
│   │   ├── CallToActionSection.tsx  # Main container with headline and description
│   │   └── ActionCard.tsx           # Individual colored cards (reusable component)
│   │
│   ├── Offerings/                   # "What We Offer / How It Works / Why Choose IMPACT"
│   │   ├── OfferingsSection.tsx     # Main container
│   │   ├── TabNavigation.tsx        # "What/How/Why" selector on the left
│   │   ├── TabPanel.tsx             # Content area that changes based on selected tab
│   │   └── ContentBlock.tsx         # → shared with components/common/
│   │
│   ├── Testimonials/                # "What People Are Saying" section
│   │   ├── TestimonialsSection.tsx  # Main container with heading and carousel
│   │   ├── TestimonialCarousel.tsx  # Carousel container with navigation controls
│   │   ├── TestimonialCard.tsx      # Individual card — quote, colored top border
│   │   └── CarouselNav.tsx          # Prev/next arrow buttons (top right)
│   │
│   ├── FeatureBreak/                # Mission/feature highlight section
│   │   ├── FeatureBreak.tsx         # Main container — title, paragraph, background image
│   │   └── → Button.tsx             # Shared from components/common/
│   │
│   └── Initiatives/                 # "Safety & Prevention Initiatives" section
│       ├── InitiativesSection.tsx   # Main container — title, side text, card grid
│       └── InitiativeCard.tsx       # Reusable card — image, title, description
│
└── Footer/                          # Site-wide footer (Contact / Footer hybrid)
    ├── Footer.tsx                   # Main container — composes all footer elements
    ├── ContactForm.tsx              # Form — fields, message, submit button
    ├── ContactInfo.tsx              # "Get in touch" title + contact methods
    ├── SocialMedia.tsx              # Social media icons
    ├── FooterNav.tsx                # Footer navigation links
    └── FooterLegal.tsx              # Legal/copyright text
```

---

## Component Reference

### `components/common/`

Primitives and utilities shared across multiple sections. If a component is used in more than one place, it lives here.

| Component | Description |
|---|---|
| `Button.tsx` | Primary CTA button — used in Hero, FeatureBreak, and elsewhere |
| `BulletList.tsx` | Formatted list — used inside ContentBlock and Offerings |
| `ContentBlock.tsx` | Structured content block — heading, paragraphs, lists |
| `SectionHeading.tsx` | Section-level headings with consistent styling |

---

### `components/Header/`

| Component | Description |
|---|---|
| `Header.tsx` | Main container — composes SiteBanner, Logo, Navigation |
| `SiteBanner.tsx` | Announcement/alert banner rendered above the nav |
| `Logo.tsx` | IMPACT Boston logo — reusable outside the header |
| `Navigation.tsx` | Primary nav menu — About, Programs, Workplace, Resources, Donate |

---

### `components/sections/Hero/`

Split-screen hero layout — branded headline on the left, image on the right.

| Component | Description |
|---|---|
| `HeroSection.tsx` | Main container — orchestrates the split-screen layout |
| `HeroContent.tsx` | Left side — headline, body copy, CTA button |
| `HeroImage.tsx` | Right side — image container |
| `HeroHeadline.tsx` | Optional — multi-colored headline treatment (reusable) |

---

### `components/sections/CallToAction/`

Three-card grid — "Sign Up Today", "Classes & Programs", "Make a Donation".

| Component | Description |
|---|---|
| `CallToActionSection.tsx` | Main container — headline, description, card grid |
| `ActionCard.tsx` | Individual colored card — reusable with different content |

---

### `components/sections/Offerings/`

Tabbed section — "What We Offer / How It Works / Why Choose IMPACT".

| Component | Description |
|---|---|
| `OfferingsSection.tsx` | Main container |
| `TabNavigation.tsx` | Left-side tab selector — What/How/Why |
| `TabPanel.tsx` | Right-side content area — updates based on active tab |
| `ContentBlock.tsx` | Shared with `components/common/` |

---

### `components/sections/Testimonials/`

Testimonial carousel — "What People Are Saying".

| Component | Description |
|---|---|
| `TestimonialsSection.tsx` | Main container — heading and carousel |
| `TestimonialCarousel.tsx` | Carousel wrapper with navigation controls |
| `TestimonialCard.tsx` | Individual card — quote, author, colored top border |
| `CarouselNav.tsx` | Prev/next arrow buttons rendered top right |

---

### `components/sections/FeatureBreak/`

Full-width feature highlight — mission statement with background image.

| Component | Description | Props |
|---|---|---|
| `FeatureBreak.tsx` | Main container | `title`, `paragraph`, `backgroundImg` |

> Uses `Button.tsx` from `components/common/` — do not duplicate it here.

---

### `components/sections/Initiatives/`

"Safety & Prevention Initiatives" — card grid with side text.

| Component | Description | Props |
|---|---|---|
| `InitiativesSection.tsx` | Main container | `title`, `sideText` |
| `InitiativeCard.tsx` | Reusable card | `image`, `title`, `description` |

---

### `components/Footer/`

Contact / Footer hybrid — form, contact info, nav, and legal.

| Component | Description |
|---|---|
| `Footer.tsx` | Main container — composes all footer elements |
| `ContactForm.tsx` | Contact form — fields, message textarea, submit button |
| `ContactInfo.tsx` | "Get in touch" heading + phone, email, address |
| `SocialMedia.tsx` | Social media icon links |
| `FooterNav.tsx` | Footer navigation — Company, Programs columns |
| `FooterLegal.tsx` | Copyright and legal text |

---

## Conventions

### Naming
- All component files use **PascalCase**: `HeroSection.tsx`, `ActionCard.tsx`
- Folders use **PascalCase** for component groups: `Header/`, `Footer/`
- Folders use **lowercase** for section groupings: `sections/`, `common/`

### Shared Components
- If a component is used in **more than one section**, it belongs in `components/common/` — not duplicated inside each section folder
- `ContentBlock.tsx` and `Button.tsx` are already shared — reference them via import, never copy them

### Adding New Pages
As new pages are designed and handed off, add new section folders under `components/sections/`. If a new section introduces a component that could be reused elsewhere, move it to `components/common/` from the start.

---

## Status

| Section | Design | Components Defined | Built |
|---|---|---|---|
| Header | ✅ | ✅ | — |
| Hero | ✅ | ✅ | — |
| Call to Action | ✅ | ✅ | — |
| Offerings | ✅ | ✅ | — |
| Testimonials | ✅ | ✅ | — |
| Feature Break | ✅ | ✅ | — |
| Initiatives | ✅ | ✅ | — |
| Footer | ✅ | ✅ | — |

> Update the **Built** column as components are completed and merged into `main`.
