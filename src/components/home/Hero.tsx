"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap } from "lucide-react";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[min(480px,55vh)] lg:h-[min(560px,72vh)]" />
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg grid-pattern">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-violet-700 mb-8"
            >
              <Bot className="h-4 w-4" />
              <span>100% AI-Augmented Development Studio</span>
              <Zap className="h-4 w-4 text-amber-500" />
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-violet-950">
              Software that{" "}
              <span className="gradient-text">thinks</span>
              <br />
              with your business
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-violet-900/65 max-w-xl leading-relaxed">
              VioletForge crafts bespoke websites, mobile apps, and AI-native platforms.
              Not another boring agency — we ship intelligent products at lightspeed,
              globally.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/40 transition-all hover:-translate-y-0.5"
              >
                Build Something Epic
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass font-semibold text-violet-800 hover:bg-white transition-all"
              >
                See Our Work
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
              {[
                { value: "120+", label: "Projects shipped" },
                { value: "35+", label: "Countries served" },
                { value: "24/7", label: "Global coverage" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-violet-900/50 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="w-full"
          >
            <HeroScene contained />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
