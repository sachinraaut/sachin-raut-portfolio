import type { Variants } from "framer-motion";

// Centralized motion language so every section animates with the same
// physics. Apple's own motion is restrained — short distance, no bounce,
// a single custom ease — rather than springy or overshooting.

export const EASE_APPLE = [0.16, 1, 0.3, 1] as const;

/** Fade up — the default reveal for headings, paragraphs, and cards. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_APPLE },
  },
};

/** Fade only — for elements where vertical motion would feel busy. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_APPLE },
  },
};

/** Scale in — reserved for the hero's signature element and modal-like reveals. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_APPLE },
  },
};

/** Container that staggers its direct children using fadeUp. */
export const staggerContainer = (staggerDelay = 0.12): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.05,
    },
  },
});

/** Standard viewport config for scroll-triggered reveals — fires once, slightly before fully in view. */
export const viewportOnce = { once: true, margin: "-80px" };
