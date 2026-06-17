import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Seven years in the engine room of e-commerce."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.15)}
            className="flex flex-col gap-6"
          >
            {siteContent.about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                className="text-balance text-lg leading-relaxed text-ink-muted"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="grid grid-cols-2 gap-4"
          >
            {siteContent.about.stats.map((stat) => (
              <GlassCard key={stat.label} className="p-6">
                <p className="font-mono text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-ink-muted">{stat.label}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
