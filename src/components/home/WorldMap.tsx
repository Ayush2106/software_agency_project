"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { deliveryCountries, flagUrl } from "@/lib/site-data";

/** Simplified India + Australia landmasses on an Indian Ocean–focused view */
function RegionMapSvg() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="ocean" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ede9fe" />
          <stop offset="50%" stopColor="#ddd6fe" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        <linearGradient id="land" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#ocean)" />
      <path
        d="M248 108 C278 92 318 98 338 118 C358 138 352 168 328 188 C302 208 268 212 242 198 C218 184 210 158 218 132 C224 118 234 112 248 108 Z"
        fill="url(#land)"
        opacity="0.85"
      />
      <path
        d="M488 228 C538 212 598 222 628 258 C658 294 648 338 608 358 C568 378 512 372 478 348 C448 326 442 278 462 248 C472 236 480 232 488 228 Z"
        fill="url(#land)"
        opacity="0.85"
      />
      <path
        d="M330 165 Q420 200 500 280"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="2"
        strokeDasharray="6 8"
        opacity="0.5"
      />
    </svg>
  );
}

export default function WorldMap() {
  const [active, setActive] = useState("in");
  const activeCountry =
    deliveryCountries.find((c) => c.code === active) ?? deliveryCountries[0];

  return (
    <motion.div
      className="relative w-full aspect-[2/1] max-h-[400px] rounded-3xl overflow-hidden glass-strong border border-violet-100 shadow-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <RegionMapSvg />
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/30 via-transparent to-violet-100/40" />

      {deliveryCountries.map((country) => (
        <motion.button
          key={country.code}
          type="button"
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${country.mapX}%`, top: `${country.mapY}%` }}
          onMouseEnter={() => setActive(country.code)}
          onFocus={() => setActive(country.code)}
          whileHover={{ scale: 1.12 }}
          aria-label={country.name}
        >
          <span
            className={`block relative w-10 h-7 sm:w-12 sm:h-8 rounded overflow-hidden shadow-lg ring-2 transition-all ${
              active === country.code
                ? "ring-violet-600 scale-110"
                : "ring-white hover:ring-violet-300"
            }`}
          >
            <Image
              src={flagUrl(country.code, 80)}
              alt=""
              fill
              className="object-cover"
              sizes="48px"
            />
          </span>
          {active === country.code && (
            <span className="absolute inset-0 rounded ring-2 ring-violet-400 animate-ping opacity-50" />
          )}
        </motion.button>
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-72 glass-strong rounded-2xl p-4 flex items-center gap-3"
        >
          <div className="relative w-14 h-10 rounded overflow-hidden shadow-md shrink-0">
            <Image
              src={flagUrl(activeCountry.code, 160)}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-violet-950">{activeCountry.name}</p>
            <p className="text-xs text-violet-600 mt-0.5">{activeCountry.detail}</p>
            <p className="text-xs text-green-700 font-medium mt-1">✓ Projects delivered</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
