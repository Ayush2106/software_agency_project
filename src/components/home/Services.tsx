"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Code2,
  Cloud,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Marketing sites and production web apps — fast, accessible, and built to convert visitors into leads.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Cross-platform and native mobile apps when your product needs to live in users' pockets.",
    gradient: "from-purple-500 to-fuchsia-400",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Practical AI — assistants, automation, and integrations where they save time, not just buzzwords.",
    gradient: "from-indigo-500 to-violet-400",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Ops dashboards, client portals, Chrome extensions, and bespoke platforms — like the work in our portfolio.",
    gradient: "from-violet-600 to-indigo-400",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, GCP, Azure deployments with CI/CD, monitoring, and infrastructure as code from day one.",
    gradient: "from-sky-500 to-violet-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Stunning interfaces that convert. Motion design, design systems, and brand experiences that wow.",
    gradient: "from-pink-500 to-violet-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            What we build
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-violet-950 mt-3">
            AI-powered services that{" "}
            <span className="gradient-text">deliver</span>
          </h2>
          <p className="mt-4 text-violet-900/60 text-lg">
            End-to-end delivery for founders and teams who need software that works in production —
            especially when workflows, data, and accuracy matter.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full p-8 rounded-3xl glass hover:glass-strong transition-all cursor-default"
              >
                <div
                  className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg shadow-violet-500/20 mb-6`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-violet-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-violet-900/60 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
