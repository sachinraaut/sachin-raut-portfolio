import type { SiteContent } from "@/types";

// All copy lives here so the UI stays purely presentational.
// Replace any value here to update the live site — no component edits needed.

export const siteContent: SiteContent = {
  name: "Sachin Raut",
  role: "Senior Frontend Engineer",
  tagline:
    "I build fast, accessible storefronts and product UIs for brands that can't afford to ship slow.",
  yearsExperience: 7,
  location: "Pune, India · Remote, worldwide",
  email: "hello@sachinraut.dev",
  availability: "Open to senior / staff frontend roles and select freelance builds",
  heroStack: ["React", "Next.js", "TypeScript", "Shopify", "Salesforce Commerce Cloud"],

  navLinks: [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ],

  about: {
    paragraphs: [
      "I'm a frontend engineer who has spent the last seven years inside the systems that actually move revenue — checkout flows, product listing pages, and the storefronts that sit on top of Shopify and Salesforce Commerce Cloud.",
      "My work sits at the intersection of engineering rigor and commercial pressure: a PDP that loads in under a second, a cart that never drops state, a design system that a five-person team can ship from without breaking the brand.",
      "I care most about the parts of frontend work that don't show up in a demo — render performance, type safety across a growing codebase, and the kind of component architecture that's still legible eighteen months later.",
    ],
    stats: [
      { value: "7+", label: "Years in frontend & e-commerce" },
      { value: "30+", label: "Storefronts shipped to production" },
      { value: "9", label: "Industries — fashion to industrial B2B" },
      { value: "98", label: "Avg. Lighthouse performance score" },
    ],
  },

  services: [
    {
      id: "storefront-engineering",
      title: "Storefront Engineering",
      description:
        "End-to-end build of Shopify and SFCC storefronts — theme architecture, custom checkout extensions, and headless setups on Next.js where the platform allows it.",
      icon: "ShoppingBag",
      specs: ["Shopify Hydrogen & Liquid", "SFCC SFRA & PWA Kit", "Headless commerce (Next.js)"],
    },
    {
      id: "design-systems",
      title: "Design Systems & Component Architecture",
      description:
        "Token-based design systems and component libraries built in TypeScript, documented in Storybook, and tested so design and engineering stop drifting apart.",
      icon: "Layers",
      specs: ["TypeScript + Storybook", "Tailwind / CSS-in-JS tokens", "Accessibility (WCAG 2.1 AA)"],
    },
    {
      id: "performance",
      title: "Performance Engineering",
      description:
        "Core Web Vitals audits and fixes for sites where slow means lost revenue — bundle splitting, image strategy, hydration cost, and render-path tracing.",
      icon: "Gauge",
      specs: ["Core Web Vitals (LCP/INP/CLS)", "Bundle & code-split audits", "Edge & ISR caching strategy"],
    },
    {
      id: "react-nextjs",
      title: "React & Next.js Application Builds",
      description:
        "Product dashboards, internal tools, and marketing sites built on Next.js App Router with the data layer, auth, and CI/CD wired in from day one.",
      icon: "Code2",
      specs: ["Next.js App Router", "Server components & RSC data fetching", "CI/CD on Vercel / GitHub Actions"],
    },
  ],

  projects: [
    {
      id: "northfield-outfitters",
      title: "Northfield Outfitters",
      client: "DTC Apparel Brand",
      category: "Shopify · Headless",
      description:
        "Migrated a 40k-SKU Shopify Plus store to a Hydrogen headless frontend, rebuilding PLP filtering and the cart drawer from scratch for sub-second interactions.",
      impact: "LCP improved from 4.1s → 1.6s; checkout conversion up 18%",
      stack: ["Shopify Hydrogen", "Remix", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "vantage-industrial",
      title: "Vantage Industrial Supply",
      client: "B2B Manufacturing",
      category: "Salesforce Commerce Cloud",
      description:
        "Built a quote-to-order SFCC storefront for a B2B parts catalog — tiered pricing, bulk CSV ordering, and an account-based permissions layer for procurement teams.",
      impact: "Order processing time cut from 2 days to under 1 hour",
      stack: ["SFCC SFRA", "JavaScript (ES6+)", "SCSS", "Mulesoft integration"],
    },
    {
      id: "ledger-analytics",
      title: "Ledger Analytics Dashboard",
      client: "Fintech SaaS",
      category: "Next.js · Internal Tool",
      description:
        "Designed and built a real-time analytics dashboard on Next.js App Router with server components for the data layer and a component library shared across three product teams.",
      impact: "Cut new-feature build time for downstream teams by ~35%",
      stack: ["Next.js 14", "React Server Components", "TypeScript", "Recharts"],
    },
    {
      id: "marlowe-co",
      title: "Marlowe & Co.",
      client: "Specialty Coffee Retailer",
      category: "Shopify · Custom Theme",
      description:
        "Custom Shopify theme with a subscription-aware cart, a build-your-own-bundle product flow, and an animated brand experience that kept load times under 2s.",
      impact: "Subscription sign-ups up 26% post-launch",
      stack: ["Shopify Liquid", "Alpine.js", "Tailwind CSS", "Framer Motion"],
    },
  ],

  skills: [
    {
      id: "core",
      label: "Core",
      skills: [
        { name: "React", level: 96 },
        { name: "TypeScript", level: 93 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
      ],
    },
    {
      id: "commerce",
      label: "E-commerce Platforms",
      skills: [
        { name: "Shopify (Liquid & Hydrogen)", level: 92 },
        { name: "Salesforce Commerce Cloud", level: 85 },
        { name: "Headless commerce architecture", level: 88 },
      ],
    },
    {
      id: "styling",
      label: "Styling & Motion",
      skills: [
        { name: "Tailwind CSS", level: 94 },
        { name: "Framer Motion", level: 87 },
        { name: "CSS / SCSS architecture", level: 90 },
      ],
    },
    {
      id: "tooling",
      label: "Tooling & Practice",
      skills: [
        { name: "Testing (Jest, Playwright)", level: 82 },
        { name: "Performance & Web Vitals", level: 89 },
        { name: "CI/CD & Git workflows", level: 86 },
      ],
    },
  ],

  experience: [
    {
      id: "current-role",
      role: "Senior Frontend Engineer",
      company: "Dentsu World Services",
      period: "2022 — Present", 
      location: "Pune, India", 
      summary:
        "Leading frontend architecture for a portfolio of Shopify Plus and SFCC clients, with a focus on performance and headless migrations.",
      highlights: [
        "Set the frontend architecture standard now used across 12 client storefronts",
        "Led migration of 3 major accounts from monolithic themes to headless Next.js + Shopify Hydrogen",
        "Mentored a team of 4 frontend engineers; introduced TypeScript and Storybook as team defaults",
      ],
      current: true,
    },
    {
      id: "role-2",
      role: "Frontend Engineer",
      company: "Livpure India Pvt Ltd",
      period: "2020 — 2022",
      location: "Pune, India",
      summary:
        "Built and maintained SFCC and Shopify storefronts for mid-market retail clients, owning everything from PDP logic to checkout customization.",
      highlights: [
        "Shipped 14+ storefront launches across fashion, beauty, and home goods clients",
        "Built the company's first shared component library, reused across 6 subsequent projects",
        "Reduced average client page-load time by 40% through systematic performance audits",
      ],
    },
    {
      id: "role-3",
      role: "Frontend Developer",
      company: "Amura Tech Pvt Ltd",
      period: "2018 — 2020",
      location: "Pune, India",
      summary:
        "Started in agency work building marketing sites and early React applications, developing the fundamentals that later specialized into e-commerce.",
      highlights: [
        "Delivered 20+ marketing and small business websites end-to-end",
        "Transitioned the team's primary stack from jQuery to React over an 8-month period",
        "First production e-commerce build — a 200-SKU Shopify storefront",
      ],
    },
  ],

  testimonials: [
    {
      id: "t1",
      name: "Priya Menon",
      role: "VP of E-commerce",
      company: "Northfield Outfitters",
      quote:
        "Sachin rebuilt our entire checkout experience in a quarter and somehow made it both faster and easier to maintain. Our conversion numbers moved within the first month and haven't dropped since.",
      avatarInitials: "PM",
    },
    {
      id: "t2",
      name: "Daniel Cho",
      role: "Director of Engineering",
      company: "Ledger Analytics",
      quote:
        "He's the rare frontend engineer who thinks about the system, not just the screen. The component library he built is still the backbone of three product teams a year later.",
      avatarInitials: "DC",
    },
    {
      id: "t3",
      name: "Harriet Voss",
      role: "Head of Digital",
      company: "Vantage Industrial Supply",
      quote:
        "We needed someone who understood both SFCC's quirks and our procurement team's actual workflow. Sachin delivered a storefront that our buyers actually like using — that's rarer than it sounds.",
      avatarInitials: "HV",
    },
    {
      id: "t4",
      name: "Tom Whitfield",
      role: "Founder",
      company: "Marlowe & Co.",
      quote:
        "Working with Sachin felt like having a senior engineer and a designer in one person. He pushed back on ideas that would've hurt performance and always had a better alternative ready.",
      avatarInitials: "TW",
    },
  ],

  contact: {
    heading: "Let's build something fast.",
    subheading:
      "Have a storefront that needs to be faster, a platform migration on the horizon, or a senior frontend role open? I'd like to hear about it.",
    details: [
      { label: "Email", value: "sachinrautr1013@gmail.com", href: "mailto:sachinr1013@gmail.com" },
      { label: "Location", value: "Pune, India · Remote, worldwide" },
      { label: "LinkedIn", value: "/in/sachinraut", href: "https://www.linkedin.com/in/sachinraut1013/" },
      { label: "GitHub", value: "/sachinraut", href: "https://github.com/sachinraaut" },
    ],
  },
};
