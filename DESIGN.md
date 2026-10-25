---
name: Teemane Cranes
description: Precision engineered heavy lifting, mobile crane hire, and specialized rigging
colors:
  primary: "oklch(0.469344 0.112698 242.6308)"
  primary-foreground: "oklch(0.985 0 0)"
  background: "oklch(1 0 0)"
  foreground: "oklch(0.5 0 0)"
  card: "oklch(1 0 0)"
  card-foreground: "oklch(0.269 0 0)"
  muted: "oklch(0.97 0 0)"
  muted-foreground: "oklch(0.556 0 0)"
  border: "oklch(0.922 0 0)"
  accent: "oklch(0.603 0.019 79.16)"
  dark-background: "oklch(0.222 0 0)"
  dark-card: "oklch(0.205 0 0)"
  dark-foreground: "oklch(0.985 0 0)"
  dark-border: "oklch(1 0 0 / 10%)"
typography:
  display:
    fontFamily: "Montserrat Variable, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: "1.05"
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Montserrat Variable, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 800
    lineHeight: "1.15"
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Montserrat Variable, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: "1.3"
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "0.15em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  2xl: "18px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "oklch(0.42 0.12 242.6)"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-secondary:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  card-default:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Teemane Cranes

## Overview

**Creative North Star: "The Industrial Monolith"**

The visual language of Teemane Cranes communicates monumental heavy-duty authority, CAD-backed engineering rigor, and unwavering operational certainty. Every surface feels structured like an engineered steel rigging frame—defined by hairline structural gridlines, clean geometric rhythm, and massive typography that conveys physical scale and lifting power up to 440 tons.

The system firmly rejects generic SaaS corporate gradients, flashy cartoonish safety badges, and cheap construction marketing tropes. Instead, it balances stark, technical restraint with authentic heavy machinery photography, crisp high-contrast data readouts, and purposeful interactive feedback.

**Key Characteristics:**
- **Monumental Headings & Technical Body**: Heavyweight geometric Montserrat titles set with tight tracking (-0.05em), counterbalanced by highly legible, analytical Geist Sans for specifications and load metrics.
- **Architectural Hairline Grid**: Surfaces and cards sit grounded in crisp 1px borders (`border-border`) with subtle tonal elevation rather than heavy drop shadows.
- **Engineered Color Precision**: Deep industrial cobalt serves as the sole focal anchor, applied with deliberate economy to guide procurement and emergency action.

## Colors

The palette is anchored in an authoritative deep maritime-industrial blue, supported by surgical neutral tones that maintain pristine contrast across both light and dark operational modes.

### Primary
- **Industrial Cobalt** (`oklch(0.469344 0.112698 242.6308)`): The primary identity anchor. Used on primary action buttons, key stat values, brand icons, and emergency callouts. It signifies structural reliability and technical discipline.
- **Cobalt Foreground** (`oklch(0.985 0 0)`): High-contrast pure white text paired with Industrial Cobalt surfaces.

### Neutral
- **Worksite Pure White / Light Canvas** (`oklch(1 0 0)`): Crisp, clean background for daylight viewing and desktop procurement evaluations.
- **Graphite Dark Canvas** (`oklch(0.222 0 0)`): Deep low-glare charcoal background for evening operations and dark-mode sessions.
- **Structural Card Surface** (`oklch(1 0 0)` light / `oklch(0.205 0 0)` dark): Tonal container background for project cards, specification sheets, and quote forms.
- **Technical Hairline Border** (`oklch(0.922 0 0)` light / `oklch(1 0 0 / 10%)` dark): Precision divider lines separating structural grid sections.
- **Muted Steel Foreground** (`oklch(0.556 0 0)` light / `oklch(0.708 0 0)` dark): Sub-labels, metadata, load units, and timestamps.

### Accent
- **Safety Amber Accent** (`oklch(0.603 0.019 79.16)`): Subtle warm metallic highlight reserved for warning indicators, safety tags, and live status signals.

### Named Rules
**The Single Anchor Rule.** Industrial Cobalt is strictly reserved for actionable elements, key brand accents, and primary conversion metrics. It must never coat expansive decorative backgrounds without radial/linear grounding.

**The Contrast Integrity Rule.** Card surfaces and overlay gradients must never hardcode dark overlays on light themes; cards adapt dynamically (`from-background` in light mode, `dark:from-black/95` in dark mode) to maintain flawless typography legibility.

## Typography

**Display Font:** `Montserrat Variable` (fallback: `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** `Geist Variable` (fallback: `ui-sans-serif, system-ui, sans-serif`)
**Label Font:** `Geist Variable` (uppercase, wide tracking)

**Character:** A deliberate high-contrast tension between monumental, architectural display weights (Montserrat 800/900) that simulate physical steel beams, and surgical, monospace-inspired sans body copy (Geist 400/500) designed for dense technical specifications and load capacities.

### Hierarchy
- **Display** (`font-weight: 900`, `font-size: clamp(2.5rem, 6vw, 4.5rem)`, `line-height: 1.05`, `letter-spacing: -0.05em`): Hero headlines and flagship capability statements.
- **Headline** (`font-weight: 800`, `font-size: clamp(1.75rem, 3.5vw, 2.5rem)`, `line-height: 1.15`, `letter-spacing: -0.04em`): Section titles, landmark case study headers, and service titles.
- **Title** (`font-weight: 700`, `font-size: 1.25rem`, `line-height: 1.3`, `letter-spacing: -0.02em`): Card headers, specification group titles, and modal titles.
- **Body** (`font-weight: 400`, `font-size: 1rem`, `line-height: 1.6`, max width: 65ch): Descriptive copy, project narratives, and technical explanations.
- **Label** (`font-weight: 700`, `font-size: 0.75rem`, `line-height: 1`, `letter-spacing: 0.15em`, `text-transform: uppercase`): Section badges, category indicators, stat units, and breadcrumbs.

### Named Rules
**The Tight Headline Rule.** Montserrat headings above 1.5rem must always use tight tracking (`tracking-tighter` / `-0.04em` to `-0.05em`) to preserve architectural solidity and prevent loose typographic drift.

## Layout

The spatial model relies on a clean 12-column architectural grid with responsive horizontal padding and a strict 8px spatial rhythm.

- **Containers**: Centered layouts bounded at `max-w-7xl` (1280px) for wide desktop screens, scaling down through `px-4 sm:px-6 lg:px-8`.
- **Rhythm & Gaps**: Standard section separation follows `py-16 md:py-24`; card grids operate on `gap-6` (24px) or `gap-8` (32px).
- **Asymmetric Bento Grids**: Multi-media project showcases and galleries leverage asymmetric bento arrangements (2x2 hero frames paired with 1x1 details) to reflect dynamic job-site perspectives.

## Elevation & Depth

Teemane Cranes uses a structural, flat-by-default layering model. Depth is established through 1px border lines (`border-border`), subtle background tone shifts (`bg-muted/40`), and crisp backdrops (`backdrop-blur`) rather than heavy multi-layered drop shadows.

### Shadow Vocabulary
- **Resting Utility** (`box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)`): Applied to primary buttons and floating stat pills.
- **Interactive Lift** (`box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.08)`): Elevation response when hovering over cards or clicking interactive thumbnails.
- **Modal Depth** (`box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.25)`): Applied to full-screen lightbox containers and emergency overlays.

### Named Rules
**The Flat-at-Rest Rule.** All cards, tables, and inputs sit flush at rest. Elevated shadows only manifest dynamically as feedback to cursor focus or active hovering.

## Shapes

- **Border Radii**:
  - Small elements (`--radius-sm`, 6px): Badges, status tags, inline code snippets.
  - Buttons & Inputs (`--radius-md`, 8px): Interactive clickables and text inputs.
  - Cards & Containers (`--radius-xl`, 14px): Project cards, service cards, and callout sections.
  - Modals & Banners (`--radius-2xl`, 18px): Lightbox modals and featured spotlight hero frames.
- **Form Language**: Clean orthogonal geometry with refined, subtle corner easing. No pill-shaped capsule cards or aggressive organic blobbiness.

## Components

### Buttons
- **Shape**: Subtle curved corners (`rounded-lg`, 8px).
- **Primary**: Gradient blend `from-primary to-primary/70`, white bold text, `shadow-sm`.
- **Hover / Focus**: Shifts to `from-primary/90 to-primary` with `shadow` and `translate-y-px` on click.
- **Secondary**: Neutral `bg-secondary text-secondary-foreground`, border-free tone.
- **Outline**: `border border-border bg-background hover:bg-muted text-foreground`.

### Cards & Containers
- **Corner Style**: Rounded corners (`rounded-xl`, 14px).
- **Background**: Theme-aware `bg-card text-card-foreground` with `ring-1 ring-foreground/10`.
- **Elevation**: Flat at rest; smooth `transition-all duration-300 hover:shadow-md` on hover.

### Inputs & Fields
- **Style**: Height 36px (`h-9`), `border border-input`, `rounded-lg`, neutral background.
- **Focus**: `focus-visible:ring-3 focus-visible:ring-ring/50 outline-none`.

### Navigation
- **Top Utility Bar**: High-density black/white strip with 24/7 emergency readiness and national operating footprint.
- **Main Sticky Navbar**: Height 80px (`h-20`), `bg-background/95 backdrop-blur`, 1px bottom border, clean uppercase-tracking links.

### Section Headings & Overlines (The Hairline Gradient Standard)
- **Component Primitives**:
  - `SectionOverline` (`@/components/ui/misc/section-overline` or exported from `@/components/ui/misc/section-heading`): Atomic component for all section overline labels across the application.
  - `SectionHeading` (`@/components/ui/misc/section-heading`): Full section header incorporating `SectionOverline`, Montserrat uppercase display `h2` (`text-4xl lg:text-5xl font-black tracking-[0.35px] uppercase`), and optional descriptive prose copy.
  - `PageHero` (`@/components/ui/misc/page-hero`): Standardized interior page banner combining watermarked `BackgroundText`, `Wrapper`, `SectionHeading`, and optional filter chips or action links.
- **Anatomy**:
  - **Left Decorative Line**: `h-px w-10 bg-linear-to-r from-transparent via-primary/50 to-primary shrink-0` (fades in towards the label).
  - **Right Decorative Line**: `h-px w-10 bg-linear-to-l from-transparent via-primary/50 to-primary shrink-0` (fades in towards the label).
  - **Typography**: `text-xs sm:text-sm font-black text-primary tracking-[0.22em] uppercase whitespace-nowrap`.
- **Alignment Behavior**:
  - `align="left"`: Single hairline gradient on the left, label on the right.
  - `align="center"`: Symmetrical hairline gradient lines flanking both sides of the label.
  - `align="right"`: Single hairline gradient on the right.
- **Strict Invariant**: NEVER write ad-hoc inline line bars (e.g. `<div className="h-px w-8 bg-primary" />` or raw solid borders) or arbitrary monospace slashes (`// LABEL //`) for section categories. Always use `SectionOverline` or `SectionHeading` to guarantee complete site-wide visual consistency.

### Signature Component: Interactive Bento Project Card
- **Pattern**: Live thumbnail photo switcher positioned on the card's bottom edge, allowing visitors to inspect multiple angles of a heavy lift operation directly without leaving the catalog view.
- **Active State**: Focused image highlighted with a 2px active ring (`ring-2 ring-primary`) and a count pill (`+{remaining}`).

## Do's and Don'ts

### Do:
- **Do** use real job-site photography depicting cranes, heavy transport, and certified rigging teams.
- **Do** set Montserrat display headings with tight tracking (`tracking-tighter` / `-0.05em`).
- **Do** use `SectionOverline` and `SectionHeading` with standard hairline gradients (`w-10 bg-linear-to-r via-primary/50 to-primary`) for every section label on the site.
- **Do** ensure all card overlays support both light mode and dark mode via semantic theme utilities (`from-background` / `dark:from-black/95`).
- **Do** display concrete lift capacities, tonnages, and operational specs alongside project case studies.

### Don't:
- **Don't** use generic construction stock clipart, cartoonish hard-hat icons, or gaudy neon badges.
- **Don't** create one-off ad-hoc section lines (`<div className="h-px w-8 bg-primary">`) or random slash wrappers (`// TITLE //`).
- **Don't** use heavy drop shadows on resting cards; rely on 1px borders and subtle tonal backgrounds.
- **Don't** fabricate artificial testimonials, fictional clients, or unverified safety awards.
- **Don't** hardcode pitch-black gradient overlays on light-mode cards that ruin text contrast.
