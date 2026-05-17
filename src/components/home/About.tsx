"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Award, Users, Rocket, Shield } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "12+ Years Combined",
    desc: "Senior engineers, designers, and AI specialists with Fortune 500 & startup experience.",
  },
  {
    icon: Users,
    title: "Elite Remote Team",
    desc: "40+ experts across engineering, design, and ML — hand-picked for every engagement.",
  },
  {
    icon: Rocket,
    title: "Ship 3× Faster",
    desc: "AI-assisted workflows cut dev cycles without sacrificing quality or security.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade",
    desc: "SOC2-ready practices, rigorous QA, and transparent delivery at every milestone.",
  },
];

const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=700&fit=crop";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            About VioletForge
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-violet-950 mt-3 leading-tight">
            Experienced builders.{" "}
            <span className="gradient-text">Global delivery.</span>
          </h2>
          <p className="mt-6 text-violet-900/65 text-lg leading-relaxed">
            We&apos;re not a template agency. VioletForge is a specialized AI software studio —
            partnering with ambitious brands from Silicon Valley to Mumbai to Tokyo.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/15 ring-1 ring-violet-100">
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <Image
                src={TEAM_IMAGE}
                alt="VioletForge global team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/70 via-violet-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center sm:text-left">
                <p className="text-white font-display text-xl sm:text-2xl font-bold">
                  40+ experts · 35+ countries · One mission
                </p>
                <p className="text-violet-200 text-sm mt-2">
                  Real people. Real photos. Real delivery — on your timezone.
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
