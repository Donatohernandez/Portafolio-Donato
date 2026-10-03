"use client";

import { Search, Layers, Bot, ShieldCheck, TrendingUp, Route } from "lucide-react";
import { motion } from "framer-motion";
import { values } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ReactNode> = {
  search: <Search size={18} />,
  layers: <Layers size={18} />,
  bot: <Bot size={18} />,
  shield: <ShieldCheck size={18} />,
  trending: <TrendingUp size={18} />,
  route: <Route size={18} />,
};

export function Values() {
  return (
    <section id="values" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <SectionLabel>03 · Enfoque</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3">
              Cómo trabajo
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(56,189,248,0.3)" }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl border border-border bg-surface cursor-default h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-accent-dim text-accent">
                    {iconMap[v.icon]}
                  </div>
                  <p className="font-mono text-[11px] text-accent tracking-widest uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="text-text-primary font-semibold text-base mb-2">
                  {v.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
