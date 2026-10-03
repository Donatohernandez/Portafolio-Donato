import { ImageResponse } from "next/og";

export const alt = "Donato Hernández - Automatización con IA y Desarrollo Backend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          color: "#f8fafc",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 78% 26%, rgba(56,189,248,0.18), transparent 34%), radial-gradient(circle, rgba(56,189,248,0.12) 1px, transparent 1px)",
          backgroundSize: "auto, 28px 28px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#38bdf8",
              boxShadow: "0 0 28px rgba(56,189,248,0.75)",
            }}
          />
          <div
            style={{
              color: "#38bdf8",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Automatización con IA · Backend · Integración de Sistemas
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 74, fontWeight: 700, letterSpacing: -3 }}>
            Donato Hernández
          </div>
          <div
            style={{
              maxWidth: 900,
              color: "#cbd5e1",
              fontSize: 38,
              lineHeight: 1.25,
            }}
          >
            Convierto procesos manuales en sistemas confiables impulsados por IA.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#94a3b8",
            fontSize: 22,
          }}
        >
          <div>n8n · Node.js · Supabase · OpenAI · Gemini</div>
          <div style={{ color: "#38bdf8" }}>mx.donatohernandez.dev</div>
        </div>
      </div>
    ),
    size,
  );
}
