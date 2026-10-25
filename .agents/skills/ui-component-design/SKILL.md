---
name: ui-component-design
description: "Component patterns, anatomy, and styling conventions for cards, banners, hero sections, image galleries, and interactive elements. Activate when creating, modifying, or refactoring UI components in the application."
license: MIT
metadata:
  author: teemane-cranes
---

# UI Component Design

## Overview

This skill guides the construction and styling of reusable UI components in the application, ensuring consistency across cards, banners, separators, galleries, and typography headers.

## 1. Cards (e.g. `ProjectCard`, `ServiceCard`)

- **Aspect Ratio**: 16:10 or 4:3 for header images (`aspect-16/10 w-full overflow-hidden`).
- **Image Fallback**: Always import a fallback image (e.g. `@/../images/IMG_0190-copy.webp`) and fallback if `featured_image_url` is absent or on `onError`.
- **Image Gradient**: Always apply an overlay gradient to ensure text contrast and visual depth (`absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent`).
- **No Sequential Number Badges**: Do not render `01`, `02`, `03` numbers. If a badge is needed, render meaningful badges like total photo counts or category tags.
- **Card Body**:
  - Title: `text-xl font-black uppercase text-foreground group-hover:text-primary transition-colors`.
  - Excerpt: `text-sm text-muted-foreground line-clamp-3 leading-relaxed`.
  - Action link: `text-sm font-bold tracking-widest text-primary uppercase` with translate-on-hover arrow icon.

## 2. Page Separators & Banners (e.g. `PageSeparator`)

- Always support optional `image`, `fallbackSrc`, and `children` props while providing functional defaults.
- Use `overflow-hidden` container with `min-h-62 isolate bg-primary relative`.
- Implement scrubbed parallax with GSAP ScrollTrigger on the background image.
- Layering: Content inside `Wrapper` with `relative z-10`, background image with `object-cover mix-blend-overlay opacity-50 blur-xs absolute z-0`.

## 3. Image Galleries & Lightboxes

- Display thumbnails in clean responsive grids (`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`).
- Add a hover overlay with an expand icon (`group-hover:opacity-100 flex items-center justify-center`).
- Use `yet-another-react-lightbox` for fullscreen browsing with keyboard and swipe navigation.
- Label gallery collections with descriptive titles (e.g. `"Site Photography"`, `"Photo Collection"`) rather than numbered counters (`"Gallery 01"`).

## 4. Section Headings & Background Typography

- Use `SectionHeading` component with:
  - `label`: Uppercase tracking-widest text label.
  - `title`: Primary headline with brand color emphasis.
  - `align`: `'left'` or `'center'`.
- Use `BackgroundText` behind headers with low opacity to establish industrial scale and branding.
