"use client";
import { motion } from "motion/react";
import { Cpu, Trophy, Leaf } from "lucide-react";
import reason1 from "@/assets/reason-1.png";
import reason2 from "@/assets/reason-2.png";
import reason3 from "@/assets/reason-3.png";

const items = [
  {
    icon: Cpu,
    num: "01",
    tag: "Platform",
    title: "Oracle's Gen AI SCM platform, unveiled",
    body: "First regional preview of the supply chain control tower — autonomous planning, predictive routing, and decisions made at machine speed.",
    image: reason1,
    accent: "from-coral to-coral/60",
    shadowColor: "oklch(0.68 0.21 32 / 0.15)",
  },
  {
    icon: Trophy,
    num: "02",
    tag: "Case studies",
    title: "Customer success stories that deliver",
    body: "Hear from operators who cut inventory cost by 30%, compressed cycle times, and made resilience a measurable KPI.",
    image: reason2,
    accent: "from-surf to-surf/60",
    shadowColor: "oklch(0.7 0.12 200 / 0.15)",
  },
  {
    icon: Leaf,
    num: "03",
    tag: "Green ops",
    title: "Practical green & resilient operations",
    body: "Leave with a worksheet, not a buzzword — emissions, supplier diversification, and circular flows you can ship this quarter.",
    image: reason3,
    accent: "from-coral via-surf to-deep",
    shadowColor: "oklch(0.68 0.21 32 / 0.12)",
  },
];

export function Reasons() {
  return (
    <section id="reasons" className="relative py-32 px-6 bg-zinc-50 dark:bg-zinc-950 overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Subtle grid background overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="rgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rgrid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Scroll entry for header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-20 flex-wrap gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-coral" />
              <span className="text-xs uppercase tracking-[0.3em] text-coral font-medium">Why attend</span>
            </div>
            <h2 className="mt-6 text-5xl md:text-7xl font-display font-semibold leading-[0.95] text-balance text-zinc-900 dark:text-white">
              Three reasons to <em className="text-coral not-italic font-bold">embark</em>.
            </h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm">
            Curated content for decision-makers, not vendor pitches. Every session ends with a take-home artifact.
          </p>
        </motion.div>

        {/* Staggered cards reveal */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 180, damping: 18 }}
              whileHover="hover"
              variants={{
                hover: {
                  y: -8,
                  boxShadow: `0 25px 55px -12px ${item.shadowColor}`
                }
              }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Subtle hover gradient ring */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`} />

              <div className="p-8">
                <div className="flex items-start justify-between">
                  {/* Interactive icon box */}
                  <motion.div 
                    variants={{
                      hover: { scale: 1.12, rotate: 6, backgroundColor: "var(--color-coral)", color: "var(--color-coral-foreground)" }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="size-12 rounded-xl bg-coral/10 dark:bg-coral/15 flex items-center justify-center text-coral transition-colors duration-200"
                  >
                    <item.icon className="size-5" />
                  </motion.div>
                  <motion.span 
                    variants={{
                      hover: { color: "var(--color-coral)", opacity: 0.25 }
                    }}
                    transition={{ duration: 0.2 }}
                    className="font-display text-4xl font-semibold text-zinc-200 dark:text-zinc-800 transition-colors"
                  >
                    {item.num}
                  </motion.span>
                </div>

                <div className="mt-8">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-coral font-semibold">{item.tag}</div>
                  <h3 className="mt-3 text-2xl font-display font-semibold leading-tight text-zinc-900 dark:text-white group-hover:text-foreground transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                    {item.body}
                  </p>
                </div>
              </div>

              {/* Visual Showcase - Mockup zooming from bottom */}
              <div className="relative mt-auto px-6 pt-0 pb-0 overflow-hidden">
                <div className="rounded-t-2xl border-t border-x border-zinc-200/50 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 p-2 pb-0 group-hover:border-coral/20 transition-colors">
                  <motion.img
                    variants={{
                      hover: { scale: 1.04 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={item.image.src}
                    alt={item.title}
                    className="w-full aspect-16/10 object-cover object-top rounded-t-xl shadow-sm"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
