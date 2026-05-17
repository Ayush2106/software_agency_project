"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";

const categoryColors: Record<string, string> = {
  "Web App": "from-violet-500 to-purple-400",
  "Mobile App": "from-fuchsia-500 to-pink-400",
  "E-Commerce": "from-indigo-500 to-violet-400",
  Enterprise: "from-sky-500 to-violet-400",
  Government: "from-amber-500 to-orange-400",
};

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-violet-950 mt-3">
            Our <span className="gradient-text">work</span>
          </h2>
          <p className="mt-4 text-violet-900/60 max-w-lg">
            Three production platforms delivered in Australia and India — the proof behind PrimeAxis Solutions.
          </p>
        </AnimatedSection>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-3xl bg-violet-100/50 animate-pulse" />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center text-violet-900/50 py-12">
            Portfolio coming soon.{" "}
            <Link href="/contact" className="text-violet-600 underline">
              Get in touch
            </Link>{" "}
            to discuss your project.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} large delay={i * 0.1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
  delay = 0,
}: {
  project: Project;
  large?: boolean;
  delay?: number;
}) {
  const gradient = categoryColors[project.category] || "from-violet-500 to-purple-400";

  return (
    <AnimatedSection delay={delay}>
      <motion.article
        whileHover={{ y: -4 }}
        className={`group relative overflow-hidden rounded-3xl glass hover:glass-strong transition-all ${
          large ? "p-8 min-h-[280px]" : "p-6 min-h-[220px]"
        } flex flex-col`}
      >
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}
        />
        <span
          className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${gradient}`}
        >
          {project.category}
        </span>
        <h3
          className={`font-display font-bold text-violet-950 mt-4 ${
            large ? "text-2xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="text-sm text-violet-600 mt-1">{project.client}</p>
        {project.tagline ? (
          <p className="text-sm font-semibold text-violet-800 mt-2 italic">
            {project.tagline}
          </p>
        ) : null}
        <p className="text-violet-900/60 text-sm mt-3 flex-1 leading-relaxed">
          {project.description}
        </p>
        {project.highlights && project.highlights.length > 0 ? (
          <ul className="mt-4 space-y-2 flex-1">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-xs sm:text-sm text-violet-900/70 leading-snug"
              >
                <span className="text-violet-500 shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs rounded-lg bg-violet-50 text-violet-700"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-violet-100">
          <span className="text-xs text-violet-400">{project.year}</span>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-600 transition-colors"
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </motion.article>
    </AnimatedSection>
  );
}
