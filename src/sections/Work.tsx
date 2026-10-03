"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUp, CheckCircle2, ExternalLink, Mic, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles size={20} />,
  mic: <Mic size={20} />,
  truck: (
    <span
      aria-hidden
      className="block h-6 w-9 shrink-0 bg-current"
      style={{
        WebkitMaskImage: "url('/materiales-san-rafael-truck.png')",
        maskImage: "url('/materiales-san-rafael-truck.png')",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  ),
};

const statusStyles: Record<string, string> = {
  live: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  shipped: "border-sky-500/20 bg-sky-500/10 text-sky-400",
  hackathon: "border-amber-500/20 bg-amber-500/10 text-amber-400",
};

export function Work() {
  const [selectedMedia, setSelectedMedia] = useState<{
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    if (!selectedMedia) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedMedia(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedMedia]);

  return (
    <>
    <section id="work" className="bg-surface/30 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12">
            <SectionLabel>02 · Proyectos destacados</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">Casos de estudio</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
              Tres proyectos que muestran cómo analizo un problema, tomo decisiones técnicas y convierto una necesidad real en un sistema funcional.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <nav id="project-index" aria-label="Índice de proyectos" className="mb-12 scroll-mt-24 rounded-2xl border border-border bg-background/70 p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">Índice de proyectos</p>
                <h3 className="mt-2 text-xl font-semibold text-text-primary">Selecciona un caso para conocerlo a detalle</h3>
              </div>
              <p className="text-sm text-text-muted">03 proyectos · lectura rápida</p>
            </div>
            <div className="grid gap-3 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.a key={project.id} href={`#${project.id}`} whileHover={{ y: -4 }} className="group flex min-h-48 flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/35">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-accent">{iconMap[project.icon]}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary">{project.name}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{project.indexSummary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Ir al proyecto <ArrowDownRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                  </span>
                </motion.a>
              ))}
            </div>
          </nav>
        </FadeIn>

        <div className="space-y-10">
          {projects.map((project, projectIndex) => (
            <FadeIn key={project.id} delay={projectIndex * 0.06}>
              <motion.article
                id={project.id}
                whileHover={{ borderColor: "rgba(56,189,248,0.18)" }}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <header className="border-b border-border p-6 sm:p-7">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div className="grid grid-cols-[2.5rem_1fr] items-center gap-x-3">
                      <p className="col-start-2 mb-1 font-mono text-[11px] uppercase tracking-widest text-text-muted">
                        Caso {String(projectIndex + 1).padStart(2, "0")}
                      </p>
                      <span className="row-start-2 flex h-9 w-10 items-center justify-center text-accent">
                        {iconMap[project.icon]}
                      </span>
                      <h3 className="col-start-2 row-start-2 text-2xl font-semibold leading-9 text-text-primary sm:text-3xl">
                        {project.name}
                      </h3>
                    </div>
                    <span className={`rounded-full border px-3 py-1 font-mono text-xs ${statusStyles[project.status.variant]}`}>
                      {project.status.label}
                    </span>
                  </div>
                  <p className="mb-4 max-w-3xl leading-relaxed text-text-primary">{project.indexSummary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.role.map((role) => (
                      <span key={role} className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-text-secondary">{role}</span>
                    ))}
                  </div>
                </header>

                {project.media.length > 0 && (
                  <section className="border-b border-border bg-background/60 p-6 sm:p-7">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent/70">Producto en funcionamiento</p>
                    <h4 className="mb-5 mt-2 text-xl font-semibold text-text-primary">
                      {project.id === "pitchpilot"
                        ? "Práctica en tiempo real y retroalimentación accionable"
                        : "De contenido guardado a acciones concretas"}
                    </h4>
                    <div className="flex flex-wrap items-start justify-center gap-5">
                      {project.media.map((media) => (
                        <figure
                          key={media.src}
                          className={`w-full ${media.width > media.height ? "max-w-[360px]" : "max-w-[220px]"}`}
                        >
                          <button
                            type="button"
                            onClick={() => setSelectedMedia(media)}
                            aria-label={`Ampliar captura: ${media.alt}`}
                            aria-haspopup="dialog"
                            className="block w-full overflow-hidden rounded-xl border border-border transition duration-200 hover:scale-[1.02] hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            <Image
                              src={media.src}
                              alt={media.alt}
                              width={media.width}
                              height={media.height}
                              sizes={media.width > media.height ? "360px" : "220px"}
                              className="h-auto w-full"
                            />
                          </button>
                          <figcaption className="mt-2 text-center text-xs leading-relaxed text-text-muted">
                            {media.caption}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </section>
                )}

                <section className="grid gap-5 border-b border-border p-6 sm:p-7 md:grid-cols-[0.7fr_1.3fr]">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-accent/70">Contexto del proyecto</p>
                    <h4 className="mt-2 text-lg font-semibold text-text-primary">El problema antes de la solución</h4>
                  </div>
                  <div>
                    <div className="mb-3 rounded-lg border border-accent/15 bg-accent-dim p-4">
                      <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-accent/70">El reto</p>
                      <p className="font-medium leading-relaxed text-text-primary">{project.painPoint}</p>
                    </div>
                    <p className="leading-relaxed text-text-secondary">{project.description}</p>
                  </div>
                </section>

                <section className="grid border-b border-border md:grid-cols-2 md:divide-x md:divide-border">
                  <div className="p-6 sm:p-7">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent/70">Metodología</p>
                    <h4 className="mb-4 mt-2 text-lg font-semibold text-text-primary">Cómo abordé el proyecto</h4>
                    <ol className="space-y-3">
                      {project.methodology.map((step, index) => (
                        <li key={step} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-dim font-mono text-[10px] text-accent">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="border-t border-border p-6 sm:p-7 md:border-t-0">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent/70">Implementación</p>
                    <h4 className="mb-4 mt-2 text-lg font-semibold text-text-primary">Decisiones técnicas clave</h4>
                    <ul className="space-y-3">
                      {project.technical.slice(0, 3).map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                          <span className="mt-1 shrink-0 text-accent">▸</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="border-b border-border p-6 sm:p-7">
                  <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-text-muted">Resultados tangibles</h4>
                  <ul className="grid gap-3 md:grid-cols-3">
                    {project.impact.slice(0, 3).map((result) => (
                      <li key={result} className="flex gap-3 rounded-lg border border-border bg-surface-2/50 p-4 text-sm leading-relaxed text-text-secondary">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />{result}
                      </li>
                    ))}
                  </ul>
                </section>

                <footer className="bg-surface-2/50 p-6 sm:p-7">
                  <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                    <div>
                      <p className="mb-1 font-mono text-xs uppercase tracking-widest text-accent/70">Lo que demuestra</p>
                      <p className="max-w-2xl font-medium leading-relaxed text-text-primary">{project.proof}</p>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-3">
                      <a href="#project-index" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent/30 hover:text-accent">
                        <ArrowUp size={15} /> Índice
                      </a>
                      {project.comingSoon ? (
                        <span aria-disabled="true" className="flex cursor-not-allowed select-none items-center gap-2 rounded-md border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent opacity-40">
                          <ExternalLink size={15} /> Próximamente
                        </span>
                      ) : (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.name}`} className="flex items-center gap-2 rounded-md border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/15">
                          <ExternalLink size={15} /> {project.liveLabel ?? "Ver proyecto"}
                        </a>
                      )}
                    </div>
                  </div>
                </footer>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
    <AnimatePresence>
      {selectedMedia && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setSelectedMedia(null)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de la captura"
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              autoFocus
              onClick={() => setSelectedMedia(null)}
              aria-label="Cerrar imagen ampliada"
              className="group relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Image
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                width={selectedMedia.width}
                height={selectedMedia.height}
                sizes="90vw"
                className="h-auto max-h-[74vh] w-auto max-w-[90vw] object-contain"
                priority
              />
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white transition-colors group-hover:bg-black/85">
                <X size={18} />
              </span>
            </button>
            <p className="max-w-xl text-center text-sm text-white/75">
              {selectedMedia.caption}
            </p>
            <p className="font-mono text-[10px] text-white/45">
              Pulsa la imagen, el fondo o Escape para cerrar
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
