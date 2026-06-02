"use client";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import heroShip from "@/assets/hero-ship.jpg";

const EVENT_TARGET = new Date("2026-11-19T09:30:00+04:00");

function useCountdown(target: Date) {
  const [t, setT] = useState<number | null>(null);
  useEffect(() => {
    setT(target.getTime() - Date.now());
    const id = setInterval(() => setT(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);
  if (t === null) return { days: 0, hours: 0, mins: 0, secs: 0, ready: false };
  const clamp = Math.max(0, t);
  return {
    days: Math.floor(clamp / 86400000),
    hours: Math.floor((clamp / 3600000) % 24),
    mins: Math.floor((clamp / 60000) % 60),
    secs: Math.floor((clamp / 1000) % 60),
    ready: true,
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
} as const;

export function Hero() {
  const c = useCountdown(EVENT_TARGET);

  // Motion values to track mouse coordinate offsets on the countdown card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse offsets to degrees of 3D rotation (max 10 degrees)
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Compute cursor offset relative to the center of the card
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-hero-gradient">
      {/* Ken Burns slow background scale on load */}
      <motion.img
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 3, ease: "easeOut" }}
        src={heroShip.src}
        alt="Container ship navigating stormy seas"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover opacity-50 mix-blend-luminosity pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent pointer-events-none" />

      {/* Drifting backdrop glowing orbs for advanced visual depth */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/12 size-96 rounded-full bg-coral/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-1/4 right-1/10 size-96 rounded-full bg-surf/10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 grid lg:grid-cols-12 gap-12 items-center">
        {/* Staggered text element introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-white"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur text-xs uppercase tracking-[0.2em]"
          >
            <span className="size-1.5 rounded-full bg-coral animate-pulse" />
            Exclusive Invitation
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="mt-6 font-display text-6xl md:text-8xl font-semibold leading-[0.95] text-balance"
          >
            Troubled <em className="text-coral not-italic font-bold">Waters</em>.
            <br />
            Charted by <em className="italic font-bold">AI</em>.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 max-w-xl text-lg text-white/70"
          >
            A maritime gathering for supply chain leaders navigating the next decade of disruption. November 19, 2026 · Marriott Resort, The Palm.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#register" className="px-7 py-3.5 rounded-full bg-coral-gradient text-coral-foreground font-medium shadow-glow hover:scale-105 transition-transform duration-300">
              Reserve your seat
            </a>
            <a href="#agenda" className="px-7 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-300">
              View agenda
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Parallax Perspective Card Container */}
        <div className="lg:col-span-5 [perspective:1000px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.45, type: "spring", stiffness: 100, damping: 18 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ y: -5 }}
            className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-deep hover:border-white/20 transition-colors duration-300 cursor-default select-none"
          >
            {/* translateZ offsets separate elements in 3D space on hover */}
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 [transform:translateZ(20px)]">Countdown to embark</p>
            
            <div className="mt-4 grid grid-cols-4 gap-2 text-white [transform:translateZ(45px)]">
              {[
                { v: c.days, l: "Days" },
                { v: c.hours, l: "Hours" },
                { v: c.mins, l: "Minutes" },
                { v: c.secs, l: "Seconds" },
              ].map(({ v, l }) => (
                <motion.div 
                  key={l}
                  whileHover={{ scale: 1.08, borderColor: "rgba(238, 77, 72, 0.5)", backgroundColor: "rgba(238, 77, 72, 0.05)" }}
                  className="rounded-xl bg-deep/40 border border-white/5 p-3 text-center transition-colors duration-300"
                >
                  <div className="font-display text-3xl md:text-4xl tabular-nums" suppressHydrationWarning>
                    {c.ready ? String(v).padStart(2, "0") : "—"}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1">{l}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10 text-sm text-white/70 space-y-1.5 [transform:translateZ(30px)]">
              <div className="flex justify-between"><span>Date</span><span className="text-white">19 Nov 2026</span></div>
              <div className="flex justify-between"><span>Time</span><span className="text-white">09:30 - 02:00</span></div>
              <div className="flex justify-between"><span>Venue</span><span className="text-white">The Palm, Dubai</span></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <svg className="absolute bottom-0 inset-x-0 text-background" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}
