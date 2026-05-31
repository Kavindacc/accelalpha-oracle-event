"use client";
import { motion } from "motion/react";
import { Anchor, Compass, Waves } from "lucide-react";

const stats = [
  { n: "50+", l: "Executive attendees", icon: Anchor },
  { n: "08", l: "Industry speakers", icon: Compass },
  { n: "01", l: "Day of momentum", icon: Waves },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="aboutgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0H0V60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutgrid)" />
        </svg>
      </div>

      {/* Floating coral orb */}
      <div className="absolute -top-20 right-10 size-96 rounded-full bg-coral/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 size-80 rounded-full bg-surf/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-coral" />
              <span className="text-xs uppercase tracking-[0.3em] text-coral font-medium">The Brief</span>
            </div>
            <h2 className="mt-6 text-5xl md:text-7xl font-display font-semibold text-balance leading-[0.95]">
              Navigate the <em className="text-coral not-italic font-bold">Gulf</em> supply chain era.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="text-xl text-foreground/80 leading-relaxed font-normal text-balance">
              The Gulf supply chain ecosystem stands at a pivotal moment. Shifting trade routes, AI-driven automation, and the urgent push for green operations are <em className="text-coral not-italic font-normal">rewriting the playbook</em>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This invitation-only summit convenes 50+ regional leaders for a day of frank conversation, working sessions, and a clear-eyed look at what comes next.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group"
                >
                  <s.icon className="size-5 text-coral mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-display text-5xl text-foreground tabular-nums">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
