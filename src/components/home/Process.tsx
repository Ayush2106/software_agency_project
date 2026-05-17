"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/site-data";
import {
  Search,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  RefreshCw,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const icons = [Search, Palette, Code2, TestTube2, Rocket, RefreshCw];
const mainFlow = processSteps.filter((s) => s.step <= 5);
const iterateStep = processSteps.find((s) => s.step === 6)!;

function ArrowRightFlow() {
  return (
    <div className="hidden lg:flex items-center shrink-0 px-0.5 text-violet-400">
      <div className="w-5 h-0.5 bg-violet-400 rounded" />
      <ChevronRight className="h-8 w-8 -ml-0.5 text-violet-500" strokeWidth={2.5} />
    </div>
  );
}

function ArrowDownFlow() {
  return (
    <div className="flex justify-center py-1 text-violet-400 lg:hidden">
      <ChevronDown className="h-8 w-8" strokeWidth={2.5} />
    </div>
  );
}

function StepBlock({
  step,
  Icon,
  highlight = false,
}: {
  step: (typeof processSteps)[0];
  Icon: React.ComponentType<{ className?: string }>;
  highlight?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative w-full rounded-2xl border-2 p-5 text-center ${
        highlight
          ? "bg-gradient-to-br from-violet-600 to-purple-600 border-violet-400 text-white shadow-xl shadow-violet-500/25"
          : "bg-white border-violet-200 shadow-md hover:border-violet-300 hover:shadow-lg"
      }`}
    >
      <span
        className={`absolute -top-3 left-1/2 -translate-x-1/2 min-w-[28px] px-2 py-0.5 rounded-full text-xs font-bold ${
          highlight ? "bg-amber-400 text-violet-950" : "bg-violet-600 text-white"
        }`}
      >
        {step.step}
      </span>
      <div
        className={`inline-flex p-3 rounded-xl mt-1 ${
          highlight ? "bg-white/20" : "bg-violet-100 text-violet-600"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3
        className={`font-display font-bold mt-3 text-base ${
          highlight ? "text-white" : "text-violet-950"
        }`}
      >
        {step.title}
      </h3>
      <p
        className={`text-xs mt-2 leading-relaxed ${
          highlight ? "text-violet-100" : "text-violet-900/55"
        }`}
      >
        {step.desc}
      </p>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-violet-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            Our process
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-violet-950 mt-3">
            How we <span className="gradient-text">deliver</span>
          </h2>
          <p className="mt-4 text-violet-900/60 text-lg">
            A clear path from idea to production — with room to refine until you are confident to launch.
          </p>
        </AnimatedSection>

        <div className="hidden lg:flex items-center justify-center flex-wrap gap-y-6">
          {mainFlow.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={step.step} className="flex items-center">
                <AnimatedSection delay={i * 0.07} className="w-[158px]">
                  <StepBlock step={step} Icon={Icon} />
                </AnimatedSection>
                {i < mainFlow.length - 1 && <ArrowRightFlow />}
              </div>
            );
          })}
        </div>

        <div className="lg:hidden max-w-sm mx-auto">
          {mainFlow.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={step.step}>
                <AnimatedSection delay={i * 0.06}>
                  <StepBlock step={step} Icon={Icon} />
                </AnimatedSection>
                {i < mainFlow.length - 1 && <ArrowDownFlow />}
              </div>
            );
          })}
        </div>

        <AnimatedSection delay={0.45} className="mt-14">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px flex-1 max-w-[80px] bg-violet-300" />
              <span className="flex items-center gap-2 text-sm font-semibold text-violet-600 uppercase tracking-wide">
                <RefreshCw className="h-4 w-4" />
                Feedback loop
              </span>
              <div className="h-px flex-1 max-w-[80px] bg-violet-300" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="w-full max-w-[200px]">
                <StepBlock step={iterateStep} Icon={icons[5]} highlight />
              </div>

              <div className="hidden lg:flex flex-col gap-6 text-center">
                <div className="flex items-center gap-2 text-violet-600">
                  <ChevronRight className="h-5 w-5 rotate-180" />
                  <span className="text-sm font-medium">Develop</span>
                </div>
                <div className="flex items-center gap-2 text-violet-600">
                  <ChevronRight className="h-5 w-5 rotate-180" />
                  <span className="text-sm font-medium">Test</span>
                </div>
              </div>

              <div className="lg:hidden text-center text-sm text-violet-600 font-medium py-4">
                ↺ Returns to Develop & Test anytime you need changes
              </div>

              <div className="hidden lg:grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="p-3 rounded-xl border-2 border-dashed border-violet-300 bg-violet-50/80 text-center">
                  <p className="text-xs font-bold text-violet-600">← Develop</p>
                  <p className="text-[10px] text-violet-500 mt-1">New features & fixes</p>
                </div>
                <div className="p-3 rounded-xl border-2 border-dashed border-violet-300 bg-violet-50/80 text-center">
                  <p className="text-xs font-bold text-violet-600">← Test</p>
                  <p className="text-[10px] text-violet-500 mt-1">QA & UAT cycles</p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-violet-500 mt-8 max-w-lg mx-auto">
              Develop ↔ Test iteration runs until you sign off — transparent sprints, zero surprise handoffs.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
