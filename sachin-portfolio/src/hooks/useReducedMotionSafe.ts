import { useReducedMotion } from "framer-motion";

/**
 * Thin wrapper around Framer Motion's reduced-motion media query hook.
 * Centralizing it means every section asks the same question the same
 * way, and gives one place to change behavior later (e.g. a manual
 * "reduce motion" toggle in settings) without touching every section.
 */
export function useReducedMotionSafe(): boolean {
  const prefersReduced = useReducedMotion();
  return Boolean(prefersReduced);
}
