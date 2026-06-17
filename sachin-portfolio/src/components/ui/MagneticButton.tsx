import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

/**
 * A button that leans subtly toward the cursor on hover — a restrained
 * version of the "magnetic" pattern seen on premium product sites.
 * Reserved for primary CTAs only (hero + contact); using it everywhere
 * would turn a signature detail into noise.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotionSafe();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  // Cap the pull distance so the effect reads as "responsive surface",
  // not "button chasing your mouse around the screen".
  const translateX = useTransform(springX, (v) => v * 0.25);
  const translateY = useTransform(springY, (v) => v * 0.25);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300";
  const variantStyles =
    variant === "primary"
      ? "bg-ink text-canvas hover:bg-accent hover:text-ink"
      : "glass glass-hover text-ink";

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: translateX, y: translateY }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </Tag>
  );
}
