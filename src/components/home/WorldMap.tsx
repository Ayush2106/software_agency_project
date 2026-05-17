"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { deliveryCountries, flagUrl } from "@/lib/site-data";

export default function WorldMap() {
  const [active, setActive] = useState("in");
  const activeCountry = deliveryCountries.find((c) => c.code === active) ?? deliveryCountries[0];

  return (
    <div className="relative w-full aspect-[2/1] max-h-[400px] rounded-3xl overflow-hidden glass-strong border border-violet-100 shadow-xl">
      <Image
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&h=700&fit=crop"
        alt="World map — global client delivery"
        fill
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/40 via-transparent to-violet-100/60" />

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
            className={`block relative w-9 h-6 sm:w-11 sm:h-7 rounded overflow-hidden shadow-lg ring-2 transition-all ${
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
              sizes="44px"
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
          className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-64 glass-strong rounded-2xl p-4 flex items-center gap-3"
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
            <p className="text-xs text-green-700 font-medium mt-0.5">✓ Projects delivered</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
