"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, Building2 } from "lucide-react";

const services = [
  "Website Development",
  "App Development",
  "AI Integration",
  "Custom Software",
  "UI/UX Design",
  "Other",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: services[0],
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", company: "", budget: "", service: services[0], message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-violet-950 mt-3">
            Let&apos;s talk about your <span className="gradient-text">project</span>
          </h1>
          <p className="mt-4 text-violet-900/60 text-lg">
            Share what you are building, your timeline, and budget range. We usually reply within
            one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, title: "Email us", value: "ayush21singla@gmail.com" },
              { icon: MessageSquare, title: "Engagements", value: "Freelance & contract projects" },
              { icon: Building2, title: "Delivery", value: "Australia · India · Remote" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl glass">
                <div className="p-3 rounded-xl bg-violet-100 text-violet-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-violet-950">{item.title}</p>
                  <p className="text-sm text-violet-900/60">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-sm font-medium text-violet-900">Name *</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-violet-100 bg-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-violet-900">Email *</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-violet-100 bg-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="jane@company.com"
                />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-sm font-medium text-violet-900">Company</span>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-violet-100 bg-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="Acme Inc"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-violet-900">Budget range</span>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-violet-100 bg-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <option value="">Select budget</option>
                  <option value="5k-15k">$5k – $15k</option>
                  <option value="15k-50k">$15k – $50k</option>
                  <option value="50k-100k">$50k – $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-violet-900">Service</span>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-violet-100 bg-white focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-violet-900">Message *</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full px-4 py-3 rounded-xl border border-violet-100 bg-white focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                placeholder="Tell us about your project, timeline, and goals..."
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold hover:from-violet-700 hover:to-violet-600 disabled:opacity-60 transition-all"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <Send className="h-5 w-5" />
            </button>
            {status === "success" && (
              <p className="text-center text-green-600 text-sm font-medium">
                Message sent! We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-500 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}
