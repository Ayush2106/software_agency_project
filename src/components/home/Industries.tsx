"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { industries } from "@/lib/site-data";

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-white to-violet-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            Industries
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-violet-950 mt-3">
            Sectors we <span className="gradient-text">build for</span>
          </h2>
          <p className="mt-4 text-violet-900/60 text-lg">
            Grounded in real deliveries — operations, government, education, and development finance.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((sector, i) => (
            <AnimatedSection key={sector.name} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-violet-500/5 border border-violet-100"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 via-violet-950/20 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-display text-2xl font-bold text-white">
                    {sector.name}
                  </h3>
                </div>
                <p className="p-5 text-sm text-violet-900/65 leading-relaxed">
                  {sector.description}
                </p>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
