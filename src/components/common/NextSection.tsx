"use client";

import React from "react";
import { CheckCircle2, Zap, Shield, Flame, Sparkles, ArrowRight } from "lucide-react";

export function NextSection() {
  const capabilities = [
    {
      icon: Zap,
      title: "Zero-Rerender Scroll Engine",
      desc: "Direct DOM mutations via requestAnimationFrame and refs eliminate all React rendering thrash during continuous mobile gestures.",
    },
    {
      icon: Shield,
      title: "iOS Address-Bar Protection",
      desc: "Height locks to measured window.innerHeight on mount to prevent sudden viewport jumpiness when mobile browsers retract toolbars.",
    },
    {
      icon: Flame,
      title: "Bidirectional Overlap",
      desc: "Seamless 3 <-> 4 direction reversal without empty frames, using dynamic z-indices and calculated cross-dissolve opacity.",
    },
    {
      icon: Sparkles,
      title: "Responsive Progressive Fallbacks",
      desc: "Full accessibility adherence with prefers-reduced-motion support and an interactive desktop preview mode.",
    },
  ];

  return (
    <section id="services" className="relative w-full py-28 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Release Verification Banner */}
        <div className="mb-16 p-6 rounded-2xl bg-zinc-900/90 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">Sticky Release Complete</h4>
              <p className="text-xs text-zinc-400">
                You have seamlessly transitioned past Slide 06 into the next document section with zero layout jump.
              </p>
            </div>
          </div>
          <a
            href="#mobile-scroll-sequence"
            className="text-xs font-mono text-indigo-400 hover:text-indigo-300 underline underline-offset-4 flex items-center gap-1"
          >
            Scroll back up
          </a>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
            Vserve Media Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engineered for Impact & Performance
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            From high-velocity commercial campaigns to bespoke interactive web experiences, we blend
            technical precision with uncompromising aesthetic beauty.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action Bar */}
        <div
          id="contact"
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-zinc-900 via-indigo-950/40 to-zinc-900 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to elevate your media presence?
            </h3>
            <p className="text-zinc-400 text-sm max-w-md">
              Let&apos;s build next-generation creative campaigns and digital choreography together.
            </p>
          </div>
          <a
            href="mailto:contact@vservemedia.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl hover:scale-105 shrink-0"
          >
            Initiate Collaboration
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
