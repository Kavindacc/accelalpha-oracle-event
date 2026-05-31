"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Pullquote() {
  return (
    <section className="relative py-32 px-6 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-coral/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 p-8 md:p-16 text-center shadow-lg"
        >
          {/* Elegant floating quote badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 size-12 rounded-full bg-coral flex items-center justify-center text-white shadow-glow">
            <Quote className="size-5 fill-current" />
          </div>

          <blockquote className="mt-4 font-display font-medium text-2xl md:text-4xl text-zinc-900 dark:text-zinc-100 leading-relaxed text-balance">
            “In an era of shifting global trade lanes, this summit is the definitive forum to operationalize <em className="text-coral not-italic font-semibold">cognitive SCM architectures</em>, anticipate shipping disruptions, and deploy <em className="text-coral not-italic font-semibold">sustainable logistics</em> across the Middle East.”
          </blockquote>

          <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-coral font-semibold">GCC Executive Briefing</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Charting the next decade of maritime SCM efficiency</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
