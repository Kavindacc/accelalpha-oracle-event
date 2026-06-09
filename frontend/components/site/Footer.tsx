"use client";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Brand & Description */}
        <div className="space-y-4">
          <div className="font-display text-2xl font-bold text-white tracking-tight">
            Kavinda Chadrasiri™
          </div>
          <p className="text-xs leading-relaxed text-zinc-400 max-w-sm">
            Through our conferences we transform your business challenges into opportunities. Our clients and customers are leading government entities and Fortune 500 companies.
          </p>
        </div>

        {/* Column 2: Global Offices */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest">Our Offices</h4>
          <ul className="space-y-4 text-xs leading-relaxed">
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 text-coral shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-200 block mb-0.5">Middle East & Africa HQ</strong>
                Office No: 209, The Metropolis Tower<br />
                Business Bay, Dubai, UAE
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 text-zinc-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-300 block mb-0.5">Asia Pacific HQ</strong>
                2nd floor Green Lanka Tower<br />
                Colombo, Sri Lanka
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 text-zinc-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-300 block mb-0.5">Saudi Arabia HQ</strong>
                Riyadh, Saudi Arabia
              </div>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest">Contact Details</h4>
          <ul className="space-y-3.5 text-xs">
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-coral shrink-0" />
              <a href="tel:+97145761039" className="hover:text-white transition-colors">
                +971 4 576 1039
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-zinc-600 shrink-0" />
              <a href="tel:+971506435244" className="hover:text-white transition-colors">
                +971 50 643 5244
              </a>
            </li>
            <li className="flex items-center gap-2.5 pt-1">
              <Mail className="size-4 text-coral shrink-0" />
              <a href="mailto:kavindacc@gmai.com" className="hover:text-white transition-colors break-all">
                kavindacc@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Partnerships & Accents */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest">Global Partners</h4>
          <p className="text-xs leading-relaxed text-zinc-500">
            Co-organized alongside Accelalpha & Oracle SCM Cloud Services.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {["Oracle", "Accelalpha", "SCM Cloud", "AI Logistics", "GDPR Compliant"].map((tag) => (
              <span
                key={tag}
                className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Block */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
        <span>
          © 2026 Kavinda Chadrasiri. All Rights Reserved.
        </span>

        {/* Social Network Node Links - Compiler-Safe Inline SVGs */}
        <div className="flex items-center gap-2.5">
          {[
            {
              href: "https://www.linkedin.com/in/kavinda-chandrasiri/",
              label: "LinkedIn",
              svg: (
                <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              ),
            },
            {
              href: "https://www.facebook.com/cseventsuae/",
              label: "Facebook",
              svg: (
                <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              ),
            },
            {
              href: "https://www.instagram.com/kavinda__chamod/",
              label: "Instagram",
              svg: (
                <svg className="size-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              ),
            },
            {
              href: "https://twitter.com/cseventsdxb",
              label: "Twitter",
              svg: (
                <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="size-8 rounded-full border border-zinc-900 bg-zinc-900/30 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-coral hover:border-coral transition-all duration-300"
              aria-label={item.label}
            >
              {item.svg}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
