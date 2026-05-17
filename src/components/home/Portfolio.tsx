"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/lib/types";

const categoryColors: Record<string, string> = {
  "Web App": "from-violet-500 to-purple-400",
  "Mobile App": "from-fuchsia-500 to-pink-400",
  "E-Commerce": "from-indigo-500 to-violet-400",
  Enterprise: "from-sky-500 to-violet-400",
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

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-violet-950 mt-3">
              Projects we&apos;ve <span className="gradient-text">shipped</span>
            </h2>
            <p className="mt-4 text-violet-900/60 max-w-lg">
              Real deliverables for real clients — AI-native products built to scale globally.
            </p>
          </div>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
          >
            <Sparkles className="h-4 w-4" />
            Manage portfolio
          </Link>
        </AnimatedSection>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-64 rounded-3xl bg-violet-100/50 animate-pulse" />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center text-violet-900/50 py-12">
            No projects yet. Add some in the{" "}
            <Link href="/admin" className="text-violet-600 underline">
              admin panel
            </Link>
            .
          </p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {featured.map((project, i) => (
                <ProjectCard key={project.id} project={project} large delay={i * 0.1} />
              ))}
            </div>
            {others.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map((project, i) => (
                  <ProjectCard key={project.id} project={project} delay={i * 0.08} />
                ))}
              </div>
            )}
          </>
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
        <p className="text-violet-900/60 text-sm mt-3 flex-1 leading-relaxed">
          {project.description}
        </p>
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
          <ExternalLink className="h-4 w-4 text-violet-400 group-hover:text-violet-600 transition-colors" />
        </div>
      </motion.article>
    </AnimatedSection>
  );
}
