"use client";
import { motion } from "motion/react";
import { LinkIcon } from "lucide-react";

// Import real speaker images
import speaker1 from "@/assets/speaker-1.png";
import speaker2 from "@/assets/speaker-2.png";
import speaker3 from "@/assets/speaker-3.png";
import speaker4 from "@/assets/speaker-4.png";
import speaker5 from "@/assets/speaker-5.png";
import speaker6 from "@/assets/speaker-6.png";
import speaker7 from "@/assets/speaker-7.png";
import speaker8 from "@/assets/speaker-8.png";

// Real speaker profiles and session tags mapped from the source website
const speakers = [
  {
    name: "Dr Raman Kumar",
    role: "CEO",
    company: "Al-Futtaim Logistics",
    image: speaker1,
    session: "Insights from Digital Evolution",
    time: "11:50 AM - 12:10 PM",
    type: "Presentation",
  },
  {
    name: "David Moono",
    role: "Global Logistics Manager",
    company: "Weatherford",
    image: speaker2,
    session: "Strategies in Action: Panel Discussion",
    time: "12:10 PM - 12:40 PM",
    type: "Panelist",
  },
  {
    name: "Tamer Hamed",
    role: "CIO",
    company: "Dubai Cable Company",
    image: speaker3,
    session: "Strategies in Action: Panel Discussion",
    time: "12:10 PM - 12:40 PM",
    type: "Panelist",
  },
  {
    name: "Richard Buxton",
    role: "VP EMEA",
    company: "Accelalpha",
    image: speaker4,
    session: "Welcome Note & Opening Address",
    time: "10:00 AM - 10:10 AM",
    type: "Welcome Note",
  },
  {
    name: "Joe Spear",
    role: "Partner",
    company: "Accelalpha",
    image: speaker5,
    session: "A Practical Guide to Successful Implementation",
    time: "10:40 AM - 11:10 AM",
    type: "Implementation Guide",
  },
  {
    name: "Srivatsav Sarvepalli",
    role: "Regional Director, SCM Solutions",
    company: "Oracle",
    image: speaker6,
    session: "Industry Keynote (Outlook & Challenges on Digital Logistics)",
    time: "10:10 AM - 10:40 AM",
    type: "Keynote",
  },
  {
    name: "Rohan Chitnis",
    role: "Sales Director Applications",
    company: "Oracle",
    image: speaker7,
    session: "Welcome Note & Opening Address",
    time: "10:00 AM - 10:10 AM",
    type: "Welcome Note",
  },
  {
    name: "Ujjwal Kumar",
    role: "Principal Domain Lead, ECEMEA",
    company: "Oracle",
    image: speaker8,
    session: "The Resilient Supply Chain & SCM Innovations",
    time: "11:10 AM - 11:30 AM",
    type: "SCM Innovation",
  },
];

export function Speakers() {
  return (
    <section id="speakers" className="relative py-32 px-6 overflow-hidden scroll-mt-24 md:scroll-mt-28 bg-zinc-50/50 dark:bg-zinc-950/20">
      {/* Decorative radial ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-150 rounded-full bg-coral/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-coral" />
              <span className="text-xs uppercase tracking-[0.3em] text-coral font-semibold">The voices</span>
            </div>
            <h2 className="mt-6 text-5xl md:text-7xl font-display font-semibold leading-[0.95] text-zinc-900 dark:text-white">
              Our <em className="text-coral not-italic font-bold">speakers</em>.
            </h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm">
            Operators, builders, and strategists shaping the next chapter of Gulf logistics and SCM automation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 p-4 hover:shadow-[0_20px_50px_rgba(206,42,41,0.08)] hover:-translate-y-1.5 hover:border-coral/35 transition-all duration-500 flex flex-col"
            >
              {/* Stylized Padded Portrait Frame */}
              <div className="aspect-[4/5] relative w-full rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-850">
                <img
                  src={s.image.src}
                  alt={s.name}
                  className="size-full object-cover object-center group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />

                {/* Advanced Glassmorphic Slide-Up Session Panel */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out backdrop-blur-md bg-zinc-950/70 border-t border-white/10 flex flex-col justify-end text-left pointer-events-none select-none">
                  <span className="text-[8px] font-bold tracking-widest text-coral uppercase mb-1">
                    {s.type}
                  </span>
                  <h4 className="text-[11px] font-semibold text-white leading-snug line-clamp-2">
                    {s.session}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-2 text-[9px] text-white/50 font-medium">
                    <span className="size-1 rounded-full bg-coral animate-pulse" />
                    <span>{s.time}</span>
                  </div>
                </div>

                {/* Glassmorphic LinkedIn Hover Action */}
                <a
                  href="#"
                  className="absolute top-3 right-3 size-9 rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur border border-zinc-200/40 dark:border-zinc-800/80 flex items-center justify-center text-zinc-700 dark:text-zinc-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-sm hover:bg-coral hover:text-white hover:border-coral z-10"
                  aria-label={`${s.name} LinkedIn Profile`}
                >
                  <LinkIcon className="size-4" />
                </a>
              </div>

              {/* Dedicated Typography and Affiliation Panel */}
              <div className="mt-5 px-1 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[9px] uppercase tracking-widest text-coral font-bold bg-coral/5 border border-coral/15 px-2 py-0.5 rounded-md">
                    {s.company}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white mt-3 group-hover:text-coral transition-colors leading-tight">
                    {s.name}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                  {s.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
