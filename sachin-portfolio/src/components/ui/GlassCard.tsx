import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Disables the hover lift/glow — use for cards inside an already-interactive parent. */
  static?: boolean;
  as?: "div" | "li" | "article";
}

/**
 * The portfolio's signature material: a true frosted-glass surface
 * (saturated backdrop blur + hairline border) rather than a flat
 * semi-transparent box. Every card-shaped surface in the site should
 * use this component so the material reads as one consistent system.
 */
export function GlassCard({ children, className = "", static: isStatic, as = "div" }: GlassCardProps) {
  const Component = motion[as];

  return (
    <Component
      variants={fadeUp}
      className={`glass glass-hover rounded-3xl ${isStatic ? "" : "hover:-translate-y-1"} ${className}`}
    >
      {children}
    </Component>
  );
}
