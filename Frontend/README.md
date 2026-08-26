# StoryForge AI — Landing Page

A cinematic, dark-themed landing page for **StoryForge AI**, a memory-augmented multimodal AI storytelling system. Built with Next.js 14 (App Router) and React.

## Features

- Glassmorphism navbar with Sign In / Sign Up buttons (no theme toggle, no pricing/features/contact links)
- Large cinematic hero with animated fantasy background (moon, mountains, castle, dragon, floating island — all hand-drawn SVG)
- Auto-rotating 3D "coverflow" story carousel (5 genre cards, 4s interval, pauses on hover, manual arrows, touch swipe, infinite loop)
- Scroll indicator that smooth-scrolls into the workflow section
- "StoryForge AI Capability Flow" section: a 6-stage glowing pipeline (Idea → Story Generation → Story Memory → Scene Generation → Multimodal Creation → Your Story) with animated particles traveling along the connecting lines, revealed on scroll
- 7-card capability grid (Creative Generation, Character Consistency, World Consistency, Story Memory, Multi-Scene Generation, Visual Storytelling, Audio Narration)
- Fully responsive: desktop / laptop / tablet / mobile, with the carousel collapsing to a single focused card on small screens
- Respects `prefers-reduced-motion`

## Getting started

Requires Node.js 18.18+ (or 20+).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.jsx        Root layout, fonts, metadata
  page.jsx           Assembles the page
  globals.css         All styling (design tokens, glass UI, carousel, workflow, responsive rules)
components/
  BackgroundAtmosphere.jsx   Fixed cinematic SVG background
  Navbar.jsx
  HeroSection.jsx
  StoryCarousel.jsx           Carousel state/logic (hooks)
  StoryCard.jsx
  ScrollIndicator.jsx
  StoryWorkflow.jsx
  WorkflowNode.jsx            Node card + animated connector
  CapabilitySection.jsx
  Footer.jsx
  icons.jsx                   All inline SVG icon components
  useInView.js                Scroll-reveal hook (IntersectionObserver)
data/
  stories.js          Story carousel content
  workflow.js          Pipeline + capability content
```

## Wiring up real auth

The Sign In / Sign Up buttons and the Get Started CTA currently point to `#signin` / `#signup` anchors. If your project already has auth routes, update the `href`s in `components/Navbar.jsx` and `components/HeroSection.jsx` (or pass them in as props — `Navbar` already accepts `signInHref` / `signUpHref`).

## Notes

- No external UI libraries — all carousel/animation logic is hand-rolled with React state, CSS transitions/transforms, and `IntersectionObserver`.
- Fonts: Sora (display) + Inter (body), loaded from Google Fonts in `app/layout.jsx`.
- A static HTML/CSS/JS version of the same design (no build step required) is included in `static-version/` for quick preview.
