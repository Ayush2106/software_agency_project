"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Users } from "lucide-react";
import { saasShowcase } from "@/lib/site-data";

export default function SaaSImpact() {
  return (
    <section id="saas" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            SaaS at scale
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-violet-950 mt-3">
            Million-dollar <span className="gradient-text">revenue engines</span>
          </h2>
          <p className="mt-4 text-violet-900/60 text-lg">
            We don&apos;t just launch MVPs — we build SaaS platforms that scale to multi-million ARR
            with AI, analytics, and enterprise-grade infrastructure.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {saasShowcase.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-3xl overflow-hidden glass-strong border border-violet-100 h-full flex flex-col"
              >
                <div className="relative h-52">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-violet-600 text-white text-sm font-bold shadow-lg">
                    {product.revenue}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs font-semibold text-violet-500 uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="font-display text-xl font-bold text-violet-950 mt-1">
                    {product.name}
                  </h3>
                  <div className="mt-4 space-y-2 flex-1">
                    <p className="flex items-center gap-2 text-sm text-violet-800">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      Revenue-generating SaaS
                    </p>
                    <p className="flex items-center gap-2 text-sm text-violet-800">
                      <Users className="h-4 w-4 text-violet-600" />
                      {product.users}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-violet-800">
                      <TrendingUp className="h-4 w-4 text-amber-500" />
                      Built & scaled by VioletForge
                    </p>
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
