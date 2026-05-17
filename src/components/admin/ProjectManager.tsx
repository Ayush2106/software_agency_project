"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, Star, X, Save } from "lucide-react";
import type { Project } from "@/lib/types";

const emptyProject = (): Omit<Project, "id"> => ({
  title: "",
  client: "",
  category: "Web App",
  description: "",
  image: "",
  tech: [],
  year: new Date().getFullYear().toString(),
  featured: false,
});

export default function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Project | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [secret, setSecret] = useState("");
  const [techInput, setTechInput] = useState("");

  const headers = (): HeadersInit => ({
    "Content-Type": "application/json",
    ...(secret ? { "x-admin-secret": secret } : {}),
  });

  const load = () => {
    setLoading(true);
    fetch("/api/projects")
      .then((r) => r.json())
      .then(setProjects)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const save = async () => {
    if (!editing) return;
    const method = isNew ? "POST" : "PUT";
    const res = await fetch("/api/projects", {
      method,
      headers: headers(),
      body: JSON.stringify(editing),
    });
    if (res.ok) {
      setEditing(null);
      setIsNew(false);
      load();
    } else {
      alert("Save failed. Check admin secret if configured.");
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    const res = await fetch(`/api/projects?id=${id}`, {
      method: "DELETE",
      headers: headers(),
    });
    if (res.ok) load();
    else alert("Delete failed. Check admin secret if configured.");
  };

  const startNew = () => {
    setEditing({ ...emptyProject(), id: "" } as Project);
    setTechInput("");
    setIsNew(true);
  };

  const startEdit = (p: Project) => {
    setEditing({ ...p });
    setTechInput(p.tech.join(", "));
    setIsNew(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-violet-950">
            Project Manager
          </h1>
          <p className="text-violet-900/60 text-sm mt-1">
            Add, edit, and showcase delivered projects on the portfolio.
          </p>
        </div>
        <button
          type="button"
          onClick={startNew}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </button>
      </div>

      <div className="mb-6 p-4 rounded-xl bg-violet-50 border border-violet-100">
        <label className="text-sm font-medium text-violet-900">
          Admin secret (optional — set ADMIN_SECRET in .env)
        </label>
        <input
          type="password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          placeholder="Enter secret for write operations"
          className="mt-2 w-full max-w-md px-4 py-2 rounded-lg border border-violet-200 bg-white text-sm"
        />
      </div>

      {loading ? (
        <p className="text-violet-500">Loading projects...</p>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl glass"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-violet-950 truncate">{project.title}</h3>
                  {project.featured && (
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500 shrink-0" />
                  )}
                </div>
                <p className="text-sm text-violet-600">{project.client} · {project.category}</p>
                <p className="text-xs text-violet-400 mt-1 line-clamp-1">{project.description}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => startEdit(project)}
                  className="p-2 rounded-lg bg-violet-100 text-violet-700 hover:bg-violet-200"
                  aria-label="Edit"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => remove(project.id)}
                  className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                  aria-label="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {editing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-violet-950/40 backdrop-blur-sm"
            onClick={() => setEditing(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto glass-strong rounded-3xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold text-violet-950">
                  {isNew ? "New Project" : "Edit Project"}
                </h2>
                <button
                  type="button"
                  onClick={() => setEditing(null)}
                  className="p-2 rounded-lg hover:bg-violet-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                <input
                  placeholder="Project title"
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-violet-100"
                />
                <input
                  placeholder="Client name"
                  value={editing.client}
                  onChange={(e) => setEditing({ ...editing, client: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-violet-100"
                />
                <select
                  value={editing.category}
                  onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-violet-100"
                >
                  {["Web App", "Mobile App", "E-Commerce", "Enterprise", "Other"].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Description"
                  rows={3}
                  value={editing.description}
                  onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-violet-100 resize-none"
                />
                <input
                  placeholder="Tech stack (comma separated)"
                  value={techInput}
                  onChange={(e) => {
                    setTechInput(e.target.value);
                    setEditing({
                      ...editing,
                      tech: e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
                    });
                  }}
                  className="w-full px-4 py-2 rounded-xl border border-violet-100"
                />
                <input
                  placeholder="Year"
                  value={editing.year}
                  onChange={(e) => setEditing({ ...editing, year: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-violet-100"
                />
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editing.featured}
                    onChange={(e) => setEditing({ ...editing, featured: e.target.checked })}
                    className="rounded border-violet-300 text-violet-600"
                  />
                  <span className="text-sm text-violet-900">Featured on homepage</span>
                </label>
                <button
                  type="button"
                  onClick={save}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700"
                >
                  <Save className="h-4 w-4" />
                  Save Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
