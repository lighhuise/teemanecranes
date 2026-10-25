---
name: frontend-design-system
description: "Guidelines and standards for UI/UX visual hierarchy, layout architecture, typography, color balance, contrast, and modern design aesthetics in React and Tailwind CSS v4. Activate whenever designing, building, or styling pages, layouts, sections, banners, or user interfaces."
license: MIT
metadata:
  author: teemane-cranes
---

# Frontend Design System

## Overview

This skill establishes visual design and UI/UX standards for the application. It ensures every interface feels authoritative, premium, industrial, and purpose-built rather than generic.

## Core Visual Identity & Tone

- **Aesthetic**: Premium industrial & engineering excellence (bold, powerful, clean, precise).
- **Brand Colors**: High-contrast pairings using Tailwind v4 theme variables (`--color-primary`, `--color-background`, `--color-foreground`, `--color-muted`, `--color-border`).
- **Typography Hierarchy**:
  - Headings: Bold, uppercase, tracking-tight, powerful display (`font-black tracking-tight uppercase`).
  - Subheadings & Eyebrows: Monospace or uppercase tracking-wide accent labels (`text-xs font-bold uppercase tracking-widest text-primary`).
  - Body Text: Clean, legible, relaxed line height (`text-muted-foreground leading-relaxed`).

## Anti-Patterns & What to Avoid

1. **No Boring Sequential Numbering in Loops**:
   - Avoid generic `01`, `02`, `03` or `Gallery 01`, `Item 02` counter badges on cards and repeated components unless explicitly a numbered step-by-step process.
   - Prefer meaningful contextual badges (e.g., photo counts, categories, status badges, or clean uninterrupted imagery).
2. **No AI Cliché Elements**:
   - Avoid generic placeholder icons or meaningless floating circles.
   - Avoid low-contrast text on colored backgrounds.
3. **No Crowded Layouts**:
   - Give content room to breathe with deliberate vertical rhythm (`py-16`, `py-20`, `py-24`).
   - Use `Wrapper` for consistent horizontal gutters.

## Typography & Color Rules

- Headings should use high-contrast foreground text with selective brand accent highlights:
  ```tsx
  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
    Engineered for <span className="text-primary">The Lift</span>
  </h2>
  ```
- Eyebrow section labels should include subtle brand motifs (e.g. divider lines or small diamond/accent points):
  ```tsx
  <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-primary uppercase mb-4">
    <div className="h-px w-8 bg-primary"></div>
    Our Portfolio
  </div>
  ```

## Spacing & Grid System

- Container width: standard `Wrapper` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- Grids: Responsive 1/2/3/4 columns (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`).
- Cards: Consistent border, subtle backdrop blur, smooth hover elevation (`hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300`).
