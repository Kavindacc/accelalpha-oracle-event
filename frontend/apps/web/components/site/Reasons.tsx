"use client";
import { motion } from "framer-motion";
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
  },
  {
    icon: Trophy,
    num: "02",
    tag: "Case studies",
    title: "Customer success stories that deliver",
    body: "Hear from operators who cut inventory cost by 30%, compressed cycle times, and made resilience a measurable KPI.",
    image: reason2,
    accent: "from-surf to-surf/60",
  },
  {
    icon: Leaf,
    num: "03",
    tag: "Green ops",
    title: "Practical green & resilient operations",
    body: "Leave with a worksheet, not a buzzword — emissions, supplier diversification, and circular flows you can ship this quarter.",
    image: reason3,
    accent: "from-coral via-surf to-deep",
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
        <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
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
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Subtle hover gradient ring */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`} />

              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div className="size-12 rounded-xl bg-coral/10 dark:bg-coral/15 flex items-center justify-center text-coral">
                    <item.icon className="size-5" />
                  </div>
                  <span className="font-display text-4xl font-semibold text-zinc-200 dark:text-zinc-800 group-hover:text-coral/20 transition-colors">
                    {item.num}
                  </span>
                </div>

                <div className="mt-8">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-coral font-semibold">{item.tag}</div>
                  <h3 className="mt-3 text-2xl font-display font-semibold leading-tight text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                    {item.body}
                  </p>
                </div>
              </div>

              {/* Visual Showcase - Screen Mockup cropping from bottom of card */}
              <div className="relative mt-auto px-6 pt-0 pb-0 overflow-hidden">
                <div className="rounded-t-2xl border-t border-x border-zinc-200/50 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 p-2 pb-0 group-hover:border-coral/20 transition-colors">
                  <img
                    src={item.image.src}
                    alt={item.title}
                    className="w-full aspect-16/10 object-cover object-top rounded-t-xl shadow-sm group-hover:scale-[1.03] transition-transform duration-700"
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
