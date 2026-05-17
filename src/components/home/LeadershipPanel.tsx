"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leadershipTeam } from "@/lib/site-data";

export default function LeadershipPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative w-full"
    >
      <div className="absolute -inset-6 bg-gradient-to-br from-violet-400/25 to-fuchsia-300/20 rounded-[2rem] blur-2xl" />
      <div className="relative glass-strong rounded-3xl p-6 shadow-xl shadow-violet-500/10 border border-violet-100/80">
        <h3 className="font-display text-lg font-bold text-violet-950 mb-5 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Leadership Team
        </h3>
        <div className="space-y-3">
          {leadershipTeam.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12 }}
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex items-center gap-4 p-3 rounded-2xl bg-white/70 hover:bg-violet-50/90 border border-violet-50 transition-all"
            >
              <div className="relative h-14 w-14 shrink-0 rounded-xl overflow-hidden ring-2 ring-violet-200 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-violet-950 truncate">{member.name}</p>
                <p className="text-sm text-violet-600 truncate">{member.role}</p>
                <p className="text-xs text-violet-400 mt-0.5">{member.region}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-4 text-center text-xs text-violet-500 font-medium"
        >
          Online now · 4 regions
        </motion.p>
      </div>
    </motion.div>
  );
}
