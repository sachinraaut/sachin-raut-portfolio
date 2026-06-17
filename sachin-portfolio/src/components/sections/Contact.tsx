import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteContent } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface FormState {
  name: string;
  email: string;
  budget: string;
  message: string;
}

const INITIAL_STATE: FormState = { name: "", email: "", budget: "", message: "" };

const inputClasses =
  "w-full rounded-xl border border-glass-border bg-glass px-4 py-3 text-ink placeholder:text-ink-faint outline-none transition-colors duration-300 focus:border-accent";

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((previous) => ({ ...previous, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    // No backend wired up yet — connect this to an email service (e.g.
    // Formspree, Resend) or a serverless function before going live.
    setIsSubmitted(true);
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent"
            >
              Contact
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            >
              {siteContent.contact.heading}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-md text-balance leading-relaxed text-ink-muted">
              {siteContent.contact.subheading}
            </motion.p>

            <motion.dl variants={fadeUp} className="mt-10 flex flex-col gap-5">
              {siteContent.contact.details.map((detail) => (
                <div key={detail.label} className="flex flex-col gap-0.5">
                  <dt className="font-mono text-xs uppercase tracking-wide text-ink-muted">{detail.label}</dt>
                  <dd>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-ink transition-colors hover:text-accent"
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-ink">{detail.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div variants={fadeUp}>
            <GlassCard static className="p-8 sm:p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <CheckCircle2 size={28} />
                  </span>
                  <h3 className="text-xl font-semibold text-ink">Message ready to send</h3>
                  <p className="max-w-xs text-balance text-sm leading-relaxed text-ink-muted">
                    Thanks, {form.name.split(" ")[0]} — this form isn't connected to a backend yet.
                    Wire it up to an email service to start receiving submissions.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="font-mono text-xs uppercase tracking-wide text-ink-muted">Name</span>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Jordan Lee"
                        className={inputClasses}
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="font-mono text-xs uppercase tracking-wide text-ink-muted">Email</span>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="jordan@company.com"
                        className={inputClasses}
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs uppercase tracking-wide text-ink-muted">Budget</span>
                    <select
                      value={form.budget}
                      onChange={(e) => updateField("budget", e.target.value)}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="" className="bg-surface-raised">Select a range</option>
                      <option className="bg-surface-raised">Under $5,000</option>
                      <option className="bg-surface-raised">$5,000 – $15,000</option>
                      <option className="bg-surface-raised">$15,000 – $40,000</option>
                      <option className="bg-surface-raised">$40,000+</option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs uppercase tracking-wide text-ink-muted">Message</span>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Tell me about the project, timeline, and what success looks like."
                      className={`${inputClasses} resize-none`}
                    />
                  </label>

                  <MagneticButton variant="primary" className="mt-1 w-full sm:w-fit">
                    Send message
                    <ArrowRight size={16} />
                  </MagneticButton>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
