"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MapPin } from "lucide-react";

type Track = "all" | "keynote" | "panel" | "workshop" | "break";

const sessions = [
  { time: "09:00", title: "Doors & Arrival", track: "break", desc: "Welcome coffee on the deck." },
  { time: "09:30", title: "Welcome Note", track: "keynote", speaker: "H. Kumar, Accelalpha" },
  { time: "09:45", title: "Future of Supply Chain & Challenges in Gulf Logistics", track: "keynote", speaker: "Imran Hamid, Zain Cola" },
  { time: "10:30", title: "A Practical Guide to Successful Implementation", track: "workshop", speaker: "Joe Sarno, Accelalpha" },
  { time: "11:15", title: "The Oracle Supply Chain & SCM Innovations", track: "keynote", speaker: "Srinivas Saraganti, Oracle" },
  { time: "12:00", title: "Coffee Break", track: "break" },
  { time: "12:15", title: "Predictive Demand Innovation", track: "workshop", speaker: "Suhas Channa, Oracle" },
  { time: "13:00", title: "Strategies in Sustainability — Panel with Aramco & Dubai", track: "panel", speaker: "Multi-speaker panel" },
  { time: "13:45", title: "Q&A and Closing Remarks", track: "panel" },
  { time: "14:00", title: "Lunch & Networking", track: "break" },
];

const filters: { key: Track; label: string }[] = [
  { key: "all", label: "All sessions" },
  { key: "keynote", label: "Keynotes" },
  { key: "panel", label: "Panels" },
  { key: "workshop", label: "Workshops" },
  { key: "break", label: "Breaks" },
];

const trackDot: Record<string, string> = {
  keynote: "bg-coral",
  panel: "bg-surf",
  workshop: "bg-accent-foreground",
  break: "bg-muted-foreground/40",
};

const trackLabel: Record<string, string> = {
  keynote: "Keynote",
  panel: "Panel",
  workshop: "Workshop",
  break: "Break",
};

export function Agenda() {
  const [filter, setFilter] = useState<Track>("all");
  const list = sessions.filter(s => filter === "all" || s.track === filter);

  return (
    <section id="agenda" className="relative py-32 px-6 overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Dynamic background aura */}
      <div className="absolute -right-40 top-40 size-125 rounded-full bg-surf/10 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />

      <div className="relative max-w-5xl mx-auto">
        {/* Scroll-triggered header entry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-16 flex-wrap gap-6"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-coral" />
              <span className="text-xs uppercase tracking-[0.3em] text-coral font-medium">The day</span>
            </div>
            <h2 className="mt-6 text-5xl md:text-7xl font-display font-semibold leading-[0.95]">
              <em className="text-coral not-italic font-bold">Agenda</em>.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-coral animate-bounce" style={{ animationDuration: "2s" }} />
            Marriott Resort, The Palm · Dubai
          </div>
        </motion.div>

        {/* Filter buttons with click/hover micro-interactions */}
        <div className="flex flex-wrap gap-2 mb-12 p-1.5 rounded-full bg-muted/60 border border-border w-fit">
          {filters.map(f => (
            <motion.button
              key={f.key}
              onClick={() => setFilter(f.key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                filter === f.key ? "text-coral-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter === f.key && (
                <motion.span
                  layoutId="agenda-pill"
                  className="absolute inset-0 bg-coral-gradient rounded-full shadow-glow"
                  transition={{ type: "spring", bounce: 0.18, duration: 0.6 }}
                />
              )}
              <span className="relative">{f.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-22 top-2 bottom-2 w-px bg-border md:block hidden" />

          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {list.map((s, i) => (
                <motion.div
                  layout
                  key={s.time + s.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  whileHover="hover"
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                    opacity: { duration: 0.25 }
                  }}
                  className="group relative flex items-start gap-6 md:gap-10 cursor-pointer"
                >
                  {/* Time indicator - animated slide-right on hover */}
                  <motion.div
                    variants={{
                      hover: { x: 5, color: "var(--color-coral)" }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="font-display text-2xl md:text-3xl tabular-nums text-foreground/80 min-w-18 pt-4 transition-colors duration-200"
                  >
                    {s.time}
                  </motion.div>

                  {/* Interactive Timeline dot with glowing aura */}
                  <div className="hidden md:flex flex-col items-center pt-7 -mx-3 relative">
                    <motion.div
                      variants={{
                        hover: {
                          scale: 2.8,
                          opacity: 0.18,
                          transition: { repeat: Infinity, repeatType: "reverse", duration: 0.6 }
                        }
                      }}
                      className={`absolute size-3 rounded-full ${trackDot[s.track]} opacity-0 pointer-events-none`}
                    />
                    <motion.div
                      variants={{
                        hover: { scale: 1.4 }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`size-3 rounded-full ${trackDot[s.track]} ring-4 ring-background z-10`}
                    />
                  </div>

                  {/* Interactive Card with premium custom-colored shadows on hover */}
                  <motion.div
                    variants={{
                      hover: {
                        y: -6,
                        boxShadow: s.track === "keynote"
                          ? "0 20px 45px -12px oklch(0.68 0.21 32 / 0.16), 0 0 15px oklch(0.68 0.21 32 / 0.05)"
                          : s.track === "panel"
                          ? "0 20px 45px -12px oklch(0.7 0.12 200 / 0.16), 0 0 15px oklch(0.7 0.12 200 / 0.05)"
                          : "0 20px 45px -12px oklch(0.22 0.06 245 / 0.16)",
                        borderColor: s.track === "keynote"
                          ? "oklch(0.68 0.21 32 / 0.45)"
                          : s.track === "panel"
                          ? "oklch(0.7 0.12 200 / 0.45)"
                          : "oklch(0.22 0.06 245 / 0.35)"
                      }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="flex-1 p-5 md:p-6 rounded-2xl bg-card border border-border transition-colors duration-300 shadow-sm"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                        <span className={`size-1.5 rounded-full ${trackDot[s.track]}`} />
                        {trackLabel[s.track]}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold mt-2 leading-snug group-hover:text-foreground transition-colors">
                      {s.title}
                    </h3>
                    {s.speaker && <p className="text-sm text-coral mt-2 font-medium">{s.speaker}</p>}
                    {s.desc && <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
