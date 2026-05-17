"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-violet-50/80 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            Client love
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-violet-950 mt-3">
            What our clients <span className="gradient-text">say</span>
          </h2>
          <p className="mt-4 text-violet-900/60 text-lg">
            Founders, CTOs, and product leaders worldwide — unfiltered feedback from real engagements.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative h-full p-8 rounded-3xl bg-white border border-violet-100 shadow-xl shadow-violet-500/5"
              >
                <Quote className="h-10 w-10 text-violet-200 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-violet-900/80 leading-relaxed text-lg italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-violet-100">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-violet-200">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="56px" />
                  </div>
                  <div>
                    <p className="font-bold text-violet-950">{t.name}</p>
                    <p className="text-sm text-violet-600">{t.role}</p>
                    <p className="text-xs text-violet-400">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
