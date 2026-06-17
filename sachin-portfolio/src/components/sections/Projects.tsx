import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { siteContent } from "@/data/content";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";

// Deterministic per-project gradient so each placeholder tile is visually
// distinct without needing real screenshots. Replace with project.image
// once real case-study assets exist — the `image` field is already
// wired in the data type.
const GRADIENTS = [
  "from-blue-500/30 via-indigo-500/20 to-transparent",
  "from-amber-500/25 via-rose-500/15 to-transparent",
  "from-emerald-500/25 via-teal-500/15 to-transparent",
  "from-violet-500/25 via-fuchsia-500/15 to-transparent",
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Storefronts and systems, shipped."
          description="A sample of recent e-commerce and product engineering work. Client names are illustrative — happy to walk through real case studies on a call."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {siteContent.projects.map((project, index) => (
            <GlassCard key={project.id} className="group flex flex-col overflow-hidden">
              {/* Generated tile standing in for a real screenshot */}
              <div
                className={`relative flex h-44 items-center justify-between bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} px-7`}
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                  {project.category}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-7">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">{project.client}</p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
                </div>

                <p className="text-balance leading-relaxed text-ink-muted">{project.description}</p>

                <div className="flex items-start gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  <TrendingUp size={16} className="mt-0.5 shrink-0" />
                  <span>{project.impact}</span>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
