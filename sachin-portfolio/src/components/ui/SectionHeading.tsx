import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/**
 * Consistent heading pattern for every section: a small accent eyebrow,
 * a large tracked-tight title, and an optional supporting line. Using one
 * component for this keeps the type rhythm identical across the page —
 * the kind of consistency Apple's own marketing pages rely on.
 */
export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={`flex flex-col gap-4 ${alignment}`}
    >
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <h2 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-balance text-lg leading-relaxed text-ink-muted ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
