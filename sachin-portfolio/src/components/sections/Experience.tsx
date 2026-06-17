import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Career timeline." />

        <div className="relative mt-14">
          {/* Connecting line — meaningful here because the content genuinely
              is a chronological sequence, not an arbitrary 01/02/03 list. */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-glass-border sm:left-[23px]" />

          <div className="flex flex-col gap-10">
            {siteContent.experience.map((role) => (
              <motion.div
                key={role.id}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="relative flex gap-6 pl-10 sm:pl-14"
              >
                <span
                  className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border sm:h-12 sm:w-12 ${
                    role.current
                      ? "border-accent bg-accent/15"
                      : "border-glass-border bg-surface-raised"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${role.current ? "bg-accent" : "bg-ink-faint"}`}
                  />
                </span>

                <GlassCard static className="flex-1 p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{role.role}</h3>
                    <span className="font-mono text-xs text-ink-muted">{role.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-muted">
                    {role.company} · {role.location}
                  </p>
                  <p className="mt-4 text-balance leading-relaxed text-ink-muted">{role.summary}</p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
