"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { hero } from "@/data/content";
import { SpecialText } from "@/components/ui/special-text";

const iconMap: Record<string, React.ReactNode> = {
  github: <SiGithub size={18} />,
  linkedin: <FaLinkedin size={18} />,
  whatsapp: <SiWhatsapp size={18} />,
  cv: <FileDown size={18} />,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle dot grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(56,189,248,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={item}
          className="font-mono text-xs text-accent tracking-widest uppercase mb-6"
        >
          Automatización con IA &amp; Desarrollo Backend
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold text-text-primary leading-tight tracking-tight mb-4"
        >
          <SpecialText delay={0.3}>
            {hero.name}
          </SpecialText>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="font-mono text-sm text-text-muted mb-6 tracking-wide"
        >
          {hero.title}
        </motion.p>

        {/* Tagline */}
        <motion.h2
          variants={item}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-text-primary mb-6 text-balance"
        >
          {hero.tagline}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
        >
          {hero.subtext}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href={hero.cta.primary.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-background font-semibold text-sm transition-all duration-200 hover:bg-accent-hover hover:scale-[1.03] cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {hero.cta.primary.label}
            <ArrowDown size={14} />
          </a>
          <a
            href={hero.cta.secondary.href}
            className="inline-flex items-center px-6 py-3 rounded-md border border-border-2 text-text-secondary text-sm font-medium transition-all duration-200 hover:border-accent/40 hover:text-text-primary cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {hero.cta.secondary.label}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3"
        >
          {hero.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.download ? undefined : "_blank"}
              rel={s.download ? undefined : "noopener noreferrer"}
              download={s.download ? "Manuel-Donato-Hernandez-CV.pdf" : undefined}
              aria-label={s.label}
              className={`flex items-center justify-center h-10 rounded-md border border-border text-text-muted hover:border-accent/40 hover:text-accent transition-all duration-200 ${
                s.download ? "gap-2 px-3" : "w-10"
              }`}
            >
              {iconMap[s.icon]}
              {s.download && (
                <span className="font-mono text-xs font-semibold tracking-wide">CV</span>
              )}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="font-mono text-xs text-text-muted tracking-widest">explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
