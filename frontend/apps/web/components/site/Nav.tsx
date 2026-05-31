"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { motion } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";
import logoBlack from "@/assets/logo-black.png";
import logoOracle from "@/assets/logo with oracle.png";

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white dark:bg-zinc-950 border-zinc-200/80 dark:border-zinc-800/80 shadow-sm py-2"
          : "bg-white dark:bg-zinc-950/80 border-border/50 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Double branding logo container */}
        <div className="flex items-center gap-4">
          <a href="#top" className="hover:opacity-90 transition-opacity">
            <img
              src={theme === "dark" ? logoWhite.src : logoBlack.src}
              alt="Accelalpha Logo"
              className="h-10 md:h-11 w-auto object-contain"
            />
          </a>
          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />
          <img
            src={logoOracle.src}
            alt="Oracle Partner"
            className="h-9 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggler */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="size-9 rounded-full border border-border flex items-center justify-center hover:bg-accent text-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          {/* Call to action button */}
          <a
            href="#register"
            className="inline-flex items-center px-6 h-10 rounded-full bg-coral-gradient text-coral-foreground text-sm font-semibold shadow-glow hover:scale-[1.03] transition-transform duration-200"
          >
            Reserve Seat
          </a>
        </div>
      </div>
    </motion.header>
  );
}
