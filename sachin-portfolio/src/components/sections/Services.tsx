import { motion } from "framer-motion";
import { ShoppingBag, Layers, Gauge, Code2, type LucideIcon } from "lucide-react";
import { siteContent } from "@/data/content";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Maps the icon name stored in content data to the actual Lucide component.
// Keeping this map here (rather than storing components in data/content.ts)
// keeps the data layer free of framework-specific values.
const ICON_MAP: Record<string, LucideIcon> = {
  ShoppingBag,
  Layers,
  Gauge,
  Code2,
};

export function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Where I help."
          description="Four areas where senior frontend work tends to matter most for commerce-driven products."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {siteContent.services.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Code2;
            return (
              <GlassCard key={service.id} className="flex flex-col gap-5 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{service.title}</h3>
                  <p className="mt-3 text-balance leading-relaxed text-ink-muted">{service.description}</p>
                </div>

                {/* Spec list — the Apple "tech spec table" reference made literal */}
                <ul className="mt-auto flex flex-col gap-2 border-t border-glass-border pt-5">
                  {service.specs.map((spec) => (
                    <li key={spec} className="flex items-baseline gap-2 font-mono text-xs text-ink-faint">
                      <span className="text-accent">—</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
