"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Check, Sparkles } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  focus: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1000),
});

export function Register() {
  const [data, setData] = useState({ name: "", email: "", focus: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setDone(true);
    toast.success("Seat reserved", { description: "We'll be in touch within 48 hours." });
  }

  return (
    <section id="register" className="relative py-32 px-6 bg-deep text-white overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute top-0 left-1/4 size-125 rounded-full bg-coral/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 size-125 rounded-full bg-surf/30 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="reggrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M80 0H0V80" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#reggrid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur text-xs uppercase tracking-[0.2em] text-white/80">
            <Sparkles className="size-3 text-coral" />
            By invitation
          </div>
          <h2 className="mt-6 text-5xl md:text-7xl font-display font-semibold text-balance leading-[0.95]">
            Your seat at the <em className="text-coral not-italic font-bold">captain&apos;s table</em>.
          </h2>
          <p className="mt-8 text-white/70 text-lg leading-relaxed">
            Seating is limited and curated by the Accelalpha team. Tell us about your professional focus and we'll confirm within 48 hours.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            {[
              "Private 50-person executive setting",
              "Full agenda, working lunch & networking",
              "On-the-record briefing materials",
              "Direct introductions to fellow operators",
            ].map(p => (
              <div key={p} className="flex items-center gap-3 text-white/90">
                <span className="size-7 rounded-full bg-coral-gradient flex items-center justify-center text-coral-foreground shadow-glow shrink-0">
                  <Check className="size-3.5" />
                </span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={submit}
          className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-deep"
        >
          {/* Gradient border accent */}
          <div className="absolute -top-px left-12 right-12 h-px bg-linear-to-r from-transparent via-coral to-transparent" />

          {done ? (
            <div className="py-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="mx-auto size-20 rounded-full bg-coral-gradient flex items-center justify-center text-coral-foreground shadow-glow"
              >
                <Check className="size-9" />
              </motion.div>
              <h3 className="mt-6 font-display font-semibold text-4xl">Anchor dropped.</h3>
              <p className="mt-3 text-white/70">We've received your request. Look out for a confirmation in your inbox.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display font-semibold text-3xl">Request invitation</h3>
                <span className="text-xs uppercase tracking-widest text-white/40">01 / 01</span>
              </div>
              <div className="space-y-6">
                <Field label="Full name" error={errors.name}>
                  <input
                    value={data.name}
                    onChange={e => setData({ ...data, name: e.target.value })}
                    maxLength={100}
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-coral outline-none py-2.5 text-lg text-white placeholder:text-white/30 transition-colors"
                    placeholder="Jane Navigator"
                  />
                </Field>
                <Field label="Work email" error={errors.email}>
                  <input
                    type="email"
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                    maxLength={255}
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-coral outline-none py-2.5 text-lg text-white placeholder:text-white/30 transition-colors"
                    placeholder="jane@company.com"
                  />
                </Field>
                <Field label="Professional focus & current challenges" error={errors.focus}>
                  <textarea
                    value={data.focus}
                    onChange={e => setData({ ...data, focus: e.target.value })}
                    maxLength={1000}
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-coral outline-none py-2.5 resize-none text-white placeholder:text-white/30 transition-colors"
                    placeholder="VP of Supply Chain. Currently rebuilding our forecasting stack and exploring AI for last-mile..."
                  />
                  <div className="mt-1 text-right text-[10px] uppercase tracking-widest text-white/40">
                    {data.focus.length} / 1000
                  </div>
                </Field>
              </div>
              <button
                type="submit"
                className="mt-8 w-full py-4 rounded-full bg-coral-gradient text-coral-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
              >
                Send request →
              </button>
              <p className="mt-4 text-center text-xs text-white/40">
                We respond within 48 hours. No marketing list, ever.
              </p>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2 font-medium">{label}</label>
      {children}
      {error && <p className="mt-2 text-xs text-coral">{error}</p>}
    </div>
  );
}
