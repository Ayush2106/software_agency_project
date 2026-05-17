"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet-600 via-violet-500 to-purple-500 p-12 sm:p-16 text-center shadow-2xl shadow-violet-500/30"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-fuchsia-300 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-violet-100 text-lg max-w-xl mx-auto">
            Tell us what you are building — web app, ops platform, or national-scale system.
            We will respond with an honest scope and timeline.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-violet-700 font-semibold hover:bg-violet-50 transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Let&apos;s Talk
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
