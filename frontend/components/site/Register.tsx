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
  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState<{
    visitor_name: string;
    visitor_email: string;
    matched_session: string;
    email_body: string;
    timestamp: string;
  } | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("https://accelalpha-oracle-event.onrender.com/api/v1/generate-invitation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          professional_focus: data.focus,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.detail || "Failed to generate invitation");
      }

      const responseData = await res.json();
      setResponse(responseData);
      setDone(true);
      toast.success("Invitation generated", { description: "We've matched your interests to the agenda!" });
    } catch (err: any) {
      toast.error("Registration failed", { description: err.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
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
            Seating is limited and curated by the Accelalpha team. Tell us about your professional focus and our system will match you to our elite GCC schedule.
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

          {done && response ? (
            <div className="space-y-6">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="mx-auto size-16 rounded-full bg-coral-gradient flex items-center justify-center text-coral-foreground shadow-glow"
                >
                  <Check className="size-8" />
                </motion.div>
                <h3 className="mt-4 font-display font-semibold text-3xl text-white">Anchor dropped.</h3>
                <p className="mt-2 text-zinc-300 text-sm">We've matched your professional focus to the agenda!</p>
              </div>

              {/* Matched Session Info Panel */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2 text-left">
                <span className="text-[9px] uppercase tracking-widest text-coral font-bold bg-coral/10 border border-coral/20 px-2 py-0.5 rounded-md">
                  Matched Session
                </span>
                <h4 className="text-sm font-semibold text-white pt-1">
                  {response.matched_session}
                </h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Based on your interest, this session has been highlighted for your GCC supply chain dashboard.
                </p>
              </div>

              {/* Generated Email Draft */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
                    AI-Drafted Invitation
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(response.email_body);
                      toast.success("Copied to clipboard", { description: "Email draft copied successfully!" });
                    }}
                    className="text-[10px] text-coral hover:text-white transition-colors cursor-pointer bg-coral/5 hover:bg-coral/10 px-2.5 py-1 rounded-md border border-coral/20 font-medium"
                  >
                    Copy Draft
                  </button>
                </div>
                <div className="bg-zinc-950/60 rounded-xl p-3.5 border border-white/5 font-mono text-[10px] text-zinc-300 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed scrollbar-thin">
                  {response.email_body}
                </div>
              </div>

              <p className="text-center text-xs text-zinc-500">
                Invitation request logged at: {new Date(response.timestamp).toLocaleTimeString()}
              </p>
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
                    disabled={submitting}
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-coral outline-none py-2.5 text-lg text-white placeholder:text-white/30 transition-colors disabled:opacity-50"
                    placeholder="Jane Navigator"
                  />
                </Field>
                <Field label="Work email" error={errors.email}>
                  <input
                    type="email"
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                    maxLength={255}
                    disabled={submitting}
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-coral outline-none py-2.5 text-lg text-white placeholder:text-white/30 transition-colors disabled:opacity-50"
                    placeholder="jane@company.com"
                  />
                </Field>
                <Field label="Professional focus & current challenges" error={errors.focus}>
                  <textarea
                    value={data.focus}
                    onChange={e => setData({ ...data, focus: e.target.value })}
                    maxLength={1000}
                    rows={4}
                    disabled={submitting}
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-coral outline-none py-2.5 resize-none text-white placeholder:text-white/30 transition-colors disabled:opacity-50"
                    placeholder="VP of Supply Chain. Currently rebuilding our forecasting stack and exploring AI for last-mile..."
                  />
                  <div className="mt-1 text-right text-[10px] uppercase tracking-widest text-white/40">
                    {data.focus.length} / 1000
                  </div>
                </Field>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-8 w-full py-4 rounded-full bg-coral-gradient text-coral-foreground font-semibold shadow-glow hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <>
                    <span className="size-4 rounded-full border-2 border-coral-foreground border-t-transparent animate-spin" />
                    Customizing Agenda...
                  </>
                ) : (
                  "Send request →"
                )}
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
