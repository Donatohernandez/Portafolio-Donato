import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Donato Hernández",
  url: siteMetadata.url,
  jobTitle: "Desarrollador de Automatización con IA y Backend",
  sameAs: [
    "https://github.com/Donatohernandez",
    "https://www.linkedin.com/in/manuel-donato-hernandez/",
  ],
  knowsAbout: [
    "Automatización con IA",
    "Desarrollo backend",
    "Automatización de flujos",
    "Integración de sistemas",
    "Node.js",
    "TypeScript",
    "n8n",
    "Supabase",
    "OpenAI",
    "Google Gemini",
  ],
};

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: "Donato Hernández",
    images: [{ url: siteMetadata.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} ${jetBrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
