"use client";

import { ArrowUpRight, FileDown, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import { contact } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>05 · Contacto</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mt-12 rounded-2xl border border-border-2 bg-surface overflow-hidden relative">
            {/* Accent top strip */}
            <div className="h-[3px] w-full bg-gradient-to-r from-accent/0 via-accent to-accent/0" />

            <div
              aria-hidden
              className="absolute -top-32 -right-24 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative p-8 sm:p-12 lg:p-14 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary leading-tight mb-5 max-w-2xl">
                  {contact.headline}
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed max-w-xl mb-7">
                  {contact.subtext}
                </p>

                {/* Availability */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-accent-dim border border-accent/15 mb-9">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                  </span>
                  <p className="text-sm text-text-secondary">{contact.hint}</p>
                </div>

                {/* Primary actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <motion.a
                    href={`mailto:${contact.email}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-md bg-accent text-background font-semibold text-sm cursor-pointer hover:bg-accent-hover transition-colors duration-200"
                  >
                    <Mail size={16} />
                    {contact.emailLabel}
                  </motion.a>
                  <motion.a
                    href={contact.cv}
                    download="Manuel-Donato-Hernandez-CV.pdf"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-md border border-border-2 text-text-primary font-semibold text-sm cursor-pointer hover:border-accent/40 hover:text-accent transition-colors duration-200"
                  >
                    <FileDown size={16} />
                    {contact.cvLabel}
                  </motion.a>
                </div>
              </div>

              {/* Contact channels */}
              <div>
                <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-4">
                  ¿Prefieres otro medio?
                </p>
                <div className="space-y-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface-2 group hover:border-accent/30 transition-colors duration-200 cursor-pointer"
                >
                  <div className="p-2.5 rounded-md bg-accent-dim">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-0.5">
                      Correo
                    </p>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                      Normalmente respondo en menos de 24 horas
                    </p>
                  </div>
                  <ArrowUpRight size={15} className="text-text-muted group-hover:text-accent transition-colors" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface-2 group hover:border-accent/30 transition-colors duration-200 cursor-pointer"
                >
                  <div className="p-2.5 rounded-md bg-accent-dim">
                    <FaLinkedin size={16} className="text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-0.5">
                      LinkedIn
                    </p>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                      Conectemos
                    </p>
                  </div>
                  <ArrowUpRight size={15} className="text-text-muted group-hover:text-accent transition-colors" />
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface-2 group hover:border-accent/30 transition-colors duration-200 cursor-pointer"
                >
                  <div className="p-2.5 rounded-md bg-accent-dim">
                    <SiWhatsapp size={16} className="text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-0.5">
                      WhatsApp
                    </p>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                      Envíame un mensaje
                    </p>
                  </div>
                  <ArrowUpRight size={15} className="text-text-muted group-hover:text-accent transition-colors" />
                </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={0.1}>
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-text-muted text-sm">
            <span className="font-bold tracking-tight">
              <span className="text-accent">Donato</span>{" "}
              <span className="text-text-primary">Hernández</span>
            </span>
            <span>© 2026 Donato Hernández. {contact.footer}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
