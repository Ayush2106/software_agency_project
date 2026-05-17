"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#work", label: "Work" },
  { href: "/#global", label: "Global" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 rounded-2xl transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg shadow-violet-500/10 py-3" : "py-2"
        }`}
        style={{ marginLeft: "auto", marginRight: "auto", width: "calc(100% - 2rem)", maxWidth: "80rem" }}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-violet-400 text-white shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Violet<span className="gradient-text">Forge</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-violet-900/70 hover:text-violet-700 rounded-lg hover:bg-violet-50 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 shadow-md shadow-violet-500/25 transition-all hover:shadow-lg hover:shadow-violet-500/30"
            >
              Start a Project
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-violet-800 hover:bg-violet-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 glass-strong rounded-2xl p-4 shadow-xl"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-sm font-medium text-violet-900 rounded-lg hover:bg-violet-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block mt-2 text-center px-4 py-3 text-sm font-semibold text-white rounded-xl bg-violet-600"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
