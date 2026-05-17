"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Award, Users, Rocket, Shield } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Production-first",
    desc: "We ship live systems — ops platforms, government tools, and finance-grade web apps — not slide decks.",
  },
  {
    icon: Users,
    title: "Human workflows",
    desc: "Expert at products where people do real work: manual applications, assessments, approvals, and coordination.",
  },
  {
    icon: Rocket,
    title: "AI-augmented speed",
    desc: "Modern tooling and AI-assisted development to move faster without cutting corners on quality.",
  },
  {
    icon: Shield,
    title: "Precision matters",
    desc: "When calculations, records, or client data must be exact, we engineer for accuracy and reliability.",
  },
];

const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=700&fit=crop";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            About PrimeAxis Solutions
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-violet-950 mt-3 leading-tight">
            A studio built to{" "}
            <span className="gradient-text">show our work</span>
          </h2>
          <p className="mt-6 text-violet-900/65 text-lg leading-relaxed">
            We are a custom software studio focused on client delivery in Australia and India.
            Our portfolio includes Apply For Me — a human-powered job application platform —
            plus national-scale systems in education and international development finance.
            We take on freelance and contract engagements where the product needs to work in
            production, not just look good in a demo.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/15 ring-1 ring-violet-100">
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <Image
                src={TEAM_IMAGE}
                alt="PrimeAxis Solutions team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/70 via-violet-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center sm:text-left">
                <p className="text-white font-display text-xl sm:text-2xl font-bold">
                  3 platforms · 2 countries · One standard
                </p>
                <p className="text-violet-200 text-sm mt-2">
                  Clear communication, honest timelines, and software you can run a business on.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.2 + i * 0.05}>
              <div className="p-5 rounded-2xl bg-white/70 border border-violet-100 h-full">
                <item.icon className="h-5 w-5 text-violet-600 mb-3" />
                <h4 className="font-semibold text-violet-950">{item.title}</h4>
                <p className="text-xs text-violet-900/55 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
