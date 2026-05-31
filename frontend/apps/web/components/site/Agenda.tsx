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
      <div className="absolute -right-40 top-40 size-125 rounded-full bg-surf/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
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
            <MapPin className="size-4 text-coral" />
            Marriott Resort, The Palm · Dubai
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 p-1.5 rounded-full bg-muted/60 border border-border w-fit">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === f.key ? "text-coral-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter === f.key && (
                <motion.span
                  layoutId="agenda-pill"
                  className="absolute inset-0 bg-coral-gradient rounded-full shadow-glow"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">{f.label}</span>
            </button>
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.03 }}
                  className="group relative flex items-start gap-6 md:gap-10"
                >
                  <div className="font-display text-2xl md:text-3xl tabular-nums text-foreground/80 min-w-18 pt-4">
                    {s.time}
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center pt-7 -mx-3">
                    <div className={`size-3 rounded-full ${trackDot[s.track]} ring-4 ring-background`} />
                  </div>

                  <div className="flex-1 p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-coral/40 hover:-translate-y-0.5 hover:shadow-deep transition-all">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                        <span className={`size-1.5 rounded-full ${trackDot[s.track]}`} />
                        {trackLabel[s.track]}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold mt-2 leading-snug">{s.title}</h3>
                    {s.speaker && <p className="text-sm text-coral mt-2 font-medium">{s.speaker}</p>}
                    {s.desc && <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
