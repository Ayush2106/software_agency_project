"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { deliveryCountries, flagUrl } from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";

export default function GlobalFlags() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-lg mx-auto">
      {deliveryCountries.map((country, i) => (
        <motion.div
          key={country.code}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -6, scale: 1.03 }}
          className="group flex flex-col items-center p-5 sm:p-6 rounded-2xl bg-white border border-violet-100 shadow-md hover:shadow-xl hover:border-violet-300 transition-all"
        >
          <div className="relative w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden shadow-inner ring-1 ring-violet-100">
            <Image
              src={flagUrl(country.code, 160)}
              alt={`${country.name} flag`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <p className="mt-3 font-semibold text-violet-950 text-sm sm:text-base text-center">
            {country.name}
          </p>
          <p className="mt-1 text-xs text-violet-500 text-center leading-snug px-1">
            {country.detail}
          </p>
          <p className="mt-2 flex items-center gap-1 text-[10px] sm:text-xs text-green-700 font-medium">
            <CheckCircle2 className="h-3 w-3 shrink-0" />
            Projects delivered
          </p>
        </motion.div>
      ))}
    </div>
  );
}
