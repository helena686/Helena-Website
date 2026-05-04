# Project Specs — Luminous Life Website

## What it does & who uses it
A single-page coaching website for Helena Menadue's "Luminous Life" brand.
Audience: women healing from toxic and narcissistic relationships.
The site presents Helena's coaching approach, personal story, and a Calendly booking flow.

## Tech Stack
- TypeScript + Next.js 14 (App Router)
- Tailwind CSS (layout utilities)
- Custom CSS (design tokens + all component styles ported from prototype)
- react-calendly (popup booking widget on all primary CTAs)
- Deployed to Vercel

## Pages & User Flows
Single page: `/` (home)

Scroll order:
1. Nav — fixed pill, blurred dark background
2. Hero — full-viewport, Helena's portrait, headline, primary CTA
3. Intro — problem framing, 3 pillar cards
4. Approach — dark angled section, 5 method icons
5. About — 2-column with portrait + floating quote
6. Journey — Gain vs Release comparison columns
7. Stories — dark angled gallery with text-based placeholder cards
8. FAQ — 6-item accordion
9. Book — final CTA section
10. Footer — dark, 3-column grid

All primary CTA buttons open a Calendly popup (react-calendly).

## Definition of Done
- `npm run build` passes with zero TypeScript or build errors
- All sections render correctly on mobile (< 760px) and desktop
- Calendly popup opens on every primary CTA click
- No GSAP or external animation libraries (native CSS only)
- Native CSS hover effects preserved from prototype
- First-person singular voice ("I", "my") throughout
- Images served from /public/assets/
- Deployed to Vercel
