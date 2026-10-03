"use client";

import Image from "next/image";
import {
  Server,
  Bot,
  Cable,
  Cloud,
  Database,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { about } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ReactNode> = {
  server: <Server size={18} />,
  bot: <Bot size={18} />,
  integration: <Cable size={18} />,
  cloud: <Cloud size={18} />,
  database: <Database size={18} />,
  workflow: <Workflow size={18} />,
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[minmax(280px,360px)_1fr] gap-12 lg:gap-16 items-center mb-14">
          <FadeIn delay={0.05}>
            <div className="relative w-full max-w-[340px] mx-auto lg:mx-0">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] border border-accent/15"
              />
              <div className="relative aspect-[4/5] rounded-[1.6rem] overflow-hidden border border-border-2 bg-surface shadow-2xl shadow-black/25">
                <Image
                  src="/donato.jpg"
                  alt="Donato Hernández, desarrollador de automatización con IA y backend"
                  fill
                  sizes="(max-width: 1024px) 340px, 360px"
                  className="object-cover object-top"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent"
                />
                <div className="absolute left-5 right-5 bottom-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-text-primary">
                    Donato Hernández
                  </span>
                  <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <SectionLabel>01 · Sobre mí</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary mt-3 mb-6 tracking-tight text-balance">
                De procesos manuales a sistemas confiables
              </h2>

              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                {about.narrative}
              </p>

              <blockquote className="mt-7 p-5 sm:p-6 rounded-xl border border-border-2 bg-surface relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                <p className="text-text-primary text-lg sm:text-xl font-medium leading-snug italic pl-2">
                  &ldquo;{about.quote}&rdquo;
                </p>
              </blockquote>
            </div>
          </FadeIn>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {about.capabilities.map((cap, i) => (
            <FadeIn key={cap.label} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(56,189,248,0.35)" }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-surface cursor-default"
              >
                <span className="text-accent shrink-0">
                  {iconMap[cap.icon]}
                </span>
                <span className="text-text-primary text-sm font-medium">
                  {cap.label}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
