"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MapPin, Globe2, Zap } from "lucide-react";
import { deliveryCountries } from "@/lib/site-data";
import WorldMap from "./WorldMap";
import GlobalFlags from "./GlobalFlags";

export default function GlobalReach() {
  return (
    <section id="global" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-violet-600 mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Global footprint
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-violet-950">
            We work <span className="gradient-text">across the globe</span>
          </h2>
          <p className="mt-4 text-violet-900/60 text-lg">
            Real clients. Real deliveries. From the United States to India, Europe to APAC —
            we&apos;ve shipped products for teams in every major market below.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6 text-violet-700">
            <Globe2 className="h-5 w-5" />
            <span className="font-semibold">Countries where we&apos;ve delivered</span>
          </div>
          <GlobalFlags />
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mb-14">
          <p className="text-center text-sm text-violet-500 mb-4 font-medium">
            Hover a flag on the map
          </p>
          <WorldMap />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="glass-strong rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-violet-100">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 text-white">
                <Zap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-violet-950">
                  Fastest delivery in the world
                </h3>
                <p className="text-violet-900/60 mt-1 max-w-lg">
                  Follow-the-sun teams across {deliveryCountries.length}+ countries. Average MVP in 6 weeks.
                </p>
              </div>
            </div>
            <div className="flex gap-8 shrink-0">
              {[
                { v: "35+", l: "Countries" },
                { v: "120+", l: "Projects" },
                { v: "6wk", l: "Avg. MVP" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-3xl font-bold gradient-text">{s.v}</p>
                  <p className="text-xs text-violet-500 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
