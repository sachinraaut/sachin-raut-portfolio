import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TechBadge } from "@/components/ui/TechBadge";
import { StackDiagram } from "@/components/ui/StackDiagram";

export function Hero() {
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient background glow — restrained, single source, no scattered blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, #2997FF 0%, transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1)}
          className="flex flex-col gap-7"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 font-mono text-xs text-ink-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {siteContent.availability}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {siteContent.name}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-balance text-xl font-medium text-ink-muted sm:text-2xl">
            {siteContent.role} · {siteContent.yearsExperience}+ years building for e-commerce
          </motion.p>

          <motion.p variants={fadeUp} className="max-w-xl text-balance text-lg leading-relaxed text-ink-muted">
            {siteContent.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-1">
            {siteContent.heroStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-3">
            <MagneticButton variant="primary" onClick={() => scrollToSection("contact")}>
              Start a project
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton variant="secondary" onClick={() => scrollToSection("projects")}>
              View projects
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Signature element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative mx-auto aspect-square w-full max-w-md rounded-[2rem] p-6"
        >
          <StackDiagram />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("projects")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint transition-colors hover:text-ink-muted"
        aria-label="Scroll to projects"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex"
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.button>
    </section>
  );
}
