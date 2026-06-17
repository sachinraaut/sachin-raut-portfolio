# Sachin Raut — Portfolio

A premium, dark, Apple-inspired freelance portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **React 19** + **TypeScript** — function components, hook-based state throughout, no class components
- **Vite** — dev server and build
- **Tailwind CSS v4** — theme tokens defined in `src/index.css` via `@theme`, no separate `tailwind.config.js` (v4 uses CSS-first config)
- **Framer Motion** — scroll reveals, the hero's signature stack diagram, the magnetic CTA button, and the testimonials carousel

## Getting started

```bash
npm install
npm run dev      # starts the dev server
npm run build    # type-checks then builds to dist/
npm run preview  # serves the production build locally
```

## Folder structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        glass navbar, scroll-spy active state, mobile menu
│   │   └── Footer.tsx        footer links + copyright
│   ├── sections/             one component per page section (see below)
│   └── ui/                   shared primitives used across sections
│       ├── GlassCard.tsx         the glassmorphism card material
│       ├── SectionHeading.tsx    eyebrow + title + description pattern
│       ├── MagneticButton.tsx    cursor-following CTA button
│       ├── TechBadge.tsx         small pill for stack/tech tags
│       └── StackDiagram.tsx      hero's signature animated node diagram
├── data/
│   └── content.ts            ALL site copy and data lives here
├── types/
│   └── index.ts               shared TypeScript interfaces for content.ts
├── hooks/
│   ├── useScrollSpy.ts         tracks which section is in view (drives nav)
│   └── useReducedMotionSafe.ts wraps Framer's reduced-motion check
├── lib/
│   └── motion.ts               shared Framer Motion variants (fadeUp, stagger, etc.)
├── App.tsx                     composes all sections in order
├── main.tsx                    React root
└── index.css                   Tailwind import + design tokens (@theme) + base styles
```

## Sections (in page order)

1. **Hero** — headline, tagline, stack badges, two CTAs, and the signature stack diagram (an animated node graph of React/TypeScript → Next.js → Shopify/SFCC — the literal path a request takes through Sachin's actual stack).
2. **About** — bio paragraphs + a 4-stat glass card grid.
3. **Services** — four offering cards styled like spec sheets, each with a short spec list.
4. **Projects** — case-study cards with a generated gradient tile (swap in real screenshots via the `image` field), an impact callout, and stack tags.
5. **Skills** — four skill groups with animated proficiency bars.
6. **Experience** — a real chronological timeline (career history is a genuine sequence, so a connecting line + ordered cards is used deliberately here, not as decoration).
7. **Testimonials** — an auto-advancing, pausable, keyboard- and screen-reader-friendly carousel.
8. **Contact** — contact details + a controlled form (name/email/budget/message). The form is not wired to a backend — see below.

## Editing content

Everything text/data-related lives in **`src/data/content.ts`**, typed against **`src/types/index.ts`**. To update copy, projects, skills, experience, or testimonials, edit that one file — no component code needs to change.

## Wiring up the contact form

`src/components/sections/Contact.tsx` currently shows a "ready to send" confirmation state on submit but does not send anywhere. To make it functional, either:
- Point the form at a service like **Formspree** or **Resend** (swap the `handleSubmit` body for a `fetch()` call), or
- Add a serverless function (Vercel/Netlify function) that emails you the payload.

## Design tokens

All colors, fonts, and the custom easing curve are defined once in `src/index.css` under `@theme`. To restyle (e.g. swap the accent blue), change the value there — every component references the token, not a hardcoded hex value.

## Known limitations / things to swap before going live

- Project images are generated gradient tiles (no real screenshots) — add real images via each project's `image` field and update `Projects.tsx` to render an `<img>` when present.
- Social links in `content.ts` (LinkedIn/GitHub) point to placeholder URLs.
- The contact form has no backend (see above).
- Testimonials, project names, and metrics are illustrative placeholders — replace with real client work and quotes.

## Accessibility notes

- All interactive elements have visible keyboard focus (`:focus-visible` styled globally).
- `prefers-reduced-motion` is respected both at the CSS level (global transition/animation kill switch) and inside Framer Motion components via `useReducedMotionSafe`.
- Body-copy text colors were checked against WCAG AA contrast (4.5:1) on their actual backgrounds; decorative/redundant labels (e.g. skill percentages that duplicate a visible bar) intentionally use a lower-contrast token, but no essential standalone text does.
