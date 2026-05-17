"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { deliveryCountries, flagUrl } from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";

export default function GlobalFlags() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-5">
      {deliveryCountries.map((country, i) => (
        <motion.div
          key={country.code}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          whileHover={{ y: -6, scale: 1.03 }}
          className="group flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-white border border-violet-100 shadow-md hover:shadow-xl hover:border-violet-300 transition-all"
        >
          <div className="relative w-16 h-11 sm:w-20 sm:h-14 rounded-lg overflow-hidden shadow-inner ring-1 ring-violet-100">
            <Image
              src={flagUrl(country.code, 160)}
              alt={`${country.name} flag`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <p className="mt-3 font-semibold text-violet-950 text-xs sm:text-sm text-center leading-tight">
            {country.name}
          </p>
          <p className="mt-1.5 flex items-center gap-1 text-[10px] sm:text-xs text-green-700 font-medium">
            <CheckCircle2 className="h-3 w-3 shrink-0" />
            Clients delivered
          </p>
        </motion.div>
      ))}
    </div>
  );
}
