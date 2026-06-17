import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="The stack, in depth."
          description="Proficiency is self-assessed against day-to-day production use, not certification badges."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {siteContent.skills.map((group) => (
            <GlassCard key={group.id} className="p-8">
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {group.label}
              </h3>

              <div className="mt-6 flex flex-col gap-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="text-sm font-medium text-ink">{skill.name}</span>
                      <span className="font-mono text-xs text-ink-faint">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-glass">
                      <motion.div
                        variants={fadeUp}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={viewportOnce}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
