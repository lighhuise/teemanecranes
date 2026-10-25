---
name: interaction-and-animation
description: "Guidelines and implementation patterns for GSAP ScrollTrigger, parallax scrolling, micro-interactions, hover dynamics, and performant animations in React components. Activate whenever adding or refactoring animations, transitions, or parallax effects."
license: MIT
metadata:
  author: teemane-cranes
---

# Interaction & Animation

## Overview

This skill provides patterns for building smooth, high-performance animations and interactive scroll effects using GSAP and CSS transitions in React.

## GSAP & ScrollTrigger Setup in React

Always register ScrollTrigger once, and wrap all GSAP animations in a `gsap.context()` inside a `useEffect` with a scoped `ref`:

```tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AnimatedSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // animations go here
        }, containerRef);

        return () => ctx.revert(); // Essential: prevents memory leaks and stale triggers
    }, []);

    return <div ref={containerRef}>{/* content */}</div>;
}
```

## Parallax Background Effect

To create a scrubbed parallax effect on a background image:
1. Ensure the parent container has `overflow-hidden` and `relative`.
2. Give the image extra height (e.g. `h-[140%] -top-[20%] w-full absolute inset-x-0 object-cover`).
3. Add `will-change-transform` and `pointer-events-none`.
4. Animate `yPercent` from `-15` to `15` using `scrub: true`:

```tsx
gsap.fromTo(
    imageRef.current,
    { yPercent: -15 },
    {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    }
);
```

## Performance Guidelines

- **Composite Only**: Only animate `transform` (`x`, `y`, `yPercent`, `scale`, `rotate`) and `opacity`. Never animate `top`, `left`, `width`, `height`, `margin`, or `padding`.
- **GPU Acceleration**: Add `will-change-transform` to parallax or continuously moving layers.
- **Always Clean Up**: Return `ctx.revert()` in React effect cleanups to prevent duplicate ScrollTrigger instances during hot-reloads and Inertia page transitions.
- **CSS Transitions**: For simple UI hover states, prefer Tailwind utility classes (`transition-all duration-300 hover:scale-105 hover:-translate-y-1`) instead of heavy JavaScript listeners.
