import { Bot, Workflow, TrendingUp } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  {
    "title": "Automatización de procesos",
    "description": "Conecto tus herramientas para automatizar registros, reportes y tareas repetitivas, y reducir errores en la operación diaria."
  },
  {
    "title": "Bots para tu negocio",
    "description": "Desarrollo bots de Telegram e integraciones de WhatsApp para consultar información, registrar movimientos y agilizar la atención."
  },
  {
    "title": "Dashboards y sistemas internos",
    "description": "Organizo tus datos en paneles y herramientas a medida para consultar indicadores, dar seguimiento a operaciones y tomar decisiones."
  }
];
const icons = [Workflow, Bot, TrendingUp];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 border-y border-border bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>02 · Servicios</SectionLabel>
        <h2 id="services-heading" className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">Soluciones para tu negocio</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">Menos tareas manuales, más tiempo para lo que hace crecer tu negocio.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article key={service.title} className="rounded-xl border border-border bg-surface p-6">
                <span className="inline-flex rounded-lg bg-accent-dim p-3 text-accent"><Icon size={22} aria-hidden="true" /></span>
                <h3 className="mb-3 mt-5 text-lg font-semibold text-text-primary">{service.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{service.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-secondary">Hablemos de tu proceso y de cómo puedo ayudarte.</p>
          <a href={`https://wa.me/526471229788?text=${encodeURIComponent("Hola Donato, me interesa conocer tus servicios para mi negocio.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover">
            <SiWhatsapp size={18} aria-hidden="true" /> Cuéntame qué necesitas
          </a>
        </div>
      </div>
    </section>
  );
}
