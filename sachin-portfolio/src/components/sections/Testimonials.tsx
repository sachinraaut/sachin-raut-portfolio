import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteContent } from "@/data/content";
import { viewportOnce } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const AUTO_ADVANCE_MS = 6000;

export function Testimonials() {
  const { testimonials } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotionSafe();

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % testimonials.length) + testimonials.length) % testimonials.length);
    },
    [testimonials.length]
  );

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(() => goTo(activeIndex + 1), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, prefersReducedMotion, goTo]);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Testimonials" title="What it's like to work together." align="center" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ hidden: {}, visible: {} }}
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <GlassCard static className="relative min-h-[280px] overflow-hidden p-10 sm:p-14">
            <Quote className="text-accent/40" size={32} aria-hidden />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6"
              >
                <p className="text-balance text-xl leading-relaxed text-ink sm:text-2xl">
                  "{active.quote}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 font-mono text-sm font-medium text-accent">
                    {active.avatarInitials}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{active.name}</p>
                    <p className="text-sm text-ink-muted">
                      {active.role} · {active.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </GlassCard>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              onClick={() => goTo(activeIndex - 1)}
              className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-ink-muted hover:text-ink"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial selector">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Testimonial from ${testimonial.name}`}
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-accent" : "w-1.5 bg-ink-faint"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(activeIndex + 1)}
              className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-ink-muted hover:text-ink"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
