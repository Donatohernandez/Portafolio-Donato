export const siteMetadata = {
  title: "Donato Hernández | Automatización con IA y Desarrollo Backend",
  description:
    "Desarrollo automatizaciones, integraciones y sistemas backend impulsados por IA con n8n, Node.js, Supabase, OpenAI y Gemini.",
  url: "https://mx.donatohernandez.dev",
  ogImage: "/opengraph-image",
};

export const nav = {
  links: [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Proyectos", href: "#work" },
    { label: "Enfoque", href: "#values" },
    { label: "Habilidades", href: "#skills" },
    { label: "Contacto", href: "#contact" },
  ],
};

export const hero = {
  name: "Donato Hernández",
  title: "Automatización con IA · Sistemas Backend · Integración de Sistemas",
  tagline: "Convierto procesos manuales en sistemas confiables impulsados por IA.",
  subtext:
    "Diseño servicios backend, flujos automatizados y experiencias de IA en tiempo real con Node.js, TypeScript, Python, n8n, Supabase, OpenAI, Gemini y Google Cloud.",
  cta: {
    primary: { label: "Ver proyectos", href: "#work" },
    secondary: { label: "Hablemos", href: "#contact" },
  },
  social: [
    { label: "GitHub", icon: "github", href: "https://github.com/Donatohernandez", download: false },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/manuel-donato-hernandez/", download: false },
    { label: "WhatsApp", icon: "whatsapp", href: "https://wa.me/526471229788", download: false },
    { label: "Descargar CV", icon: "cv", href: "/Manuel-Donato-Hernandez-CV.pdf", download: true },
  ],
};

export const about = {
  narrative:
    "Diseño sistemas que sustituyen tareas repetitivas y propensas a errores por procesos claros y confiables. Mi experiencia abarca desde automatizar las cuentas por cobrar de un negocio real con n8n, Supabase y Telegram, hasta desarrollar una plataforma de IA conversacional en tiempo real con Gemini Live y un producto para iOS impulsado por IA y distribuido mediante TestFlight. Antes de elegir una herramienta, busco entender el proceso, sus datos y sus reglas para construir soluciones que las personas realmente puedan usar.",
  capabilities: [
    { label: "Automatización con IA", icon: "bot" },
    { label: "Arquitectura de Flujos", icon: "workflow" },
    { label: "Integración de Sistemas", icon: "integration" },
    { label: "Desarrollo Backend", icon: "server" },
    { label: "Arquitectura de Datos", icon: "database" },
    { label: "Despliegue en la Nube", icon: "cloud" },
  ],
  quote:
    "Entender el proceso. Diseñar el sistema. Automatizar lo que realmente importa.",
};

export const projects = [
  {
    id: "materiales-san-rafael",
    name: "Materiales San Rafael",
    icon: "truck",
    indexSummary:
      "Digitalización del crédito y la cobranza para un negocio familiar con más de 20 años de operación.",
    role: ["Automatización con IA", "Backend y Datos", "Integración de Sistemas"],
    painPoint:
      "Los créditos de clientes y las cuentas por cobrar se registraban a mano, lo que dificultaba actualizar saldos, verificar movimientos y mantener un historial confiable.",
    description:
      "Sistema móvil para una empresa familiar de materiales para construcción. Digitaliza créditos, abonos, saldos e historiales, con la lógica financiera centralizada y cada movimiento disponible para consulta.",
    status: { label: "Activo · Proyecto para cliente", variant: "live" as const },
    technical: [
      "Supabase y PostgreSQL como fuente central de la información financiera",
      "Flujos de n8n autohospedados para lógica de negocio, validaciones e integraciones",
      "Telegram Bot API como interfaz operativa móvil para el equipo",
      "Modelo relacional para clientes, ventas a crédito, abonos, saldos e historial de cuenta",
      "Reglas de integridad y auditoría para modificaciones, cancelaciones y trazabilidad financiera",
    ],
    methodology: [
      "Analicé el proceso con quienes operan el negocio y limité la primera versión a crédito y cobranza, sin convertirla en un ERP.",
      "Modelé clientes, notas, compras, abonos y auditoría antes de automatizar, con PostgreSQL como fuente de verdad.",
      "Diseñé flujos móviles en Telegram y n8n para migrar notas, validar casos reales y automatizar por etapas.",
    ],
    impact: [
      "Automaticé cuatro procesos clave: registro de clientes, ventas a crédito, abonos y consulta de saldos",
      "Sustituí los cálculos manuales por actualizaciones consistentes desde la base de datos",
      "Validé la lógica financiera en cinco escenarios de cargos, pagos y cancelaciones",
      "Conservé un historial consultable de cada movimiento realizado en las cuentas",
    ],
    proof:
      "Puedo analizar un proceso real de negocio, estructurar sus datos y reglas, y convertirlo en una automatización práctica que el equipo utiliza desde el celular.",
    live: "#",
    liveLabel: "Caso de estudio próximamente",
    comingSoon: true,
    media: [] as { src: string; alt: string; caption: string; width: number; height: number }[],
  },
  {
    id: "pitchpilot",
    name: "PitchPilot AI",
    icon: "mic",
    indexSummary:
      "Simulador de pitches por voz con IA en tiempo real, sesiones guiadas y retroalimentación accionable.",
    role: ["Desarrollador Full Stack", "Ingeniero Backend", "Cofundador"],
    painPoint:
      "Quienes preparan un pitch suelen practicar sin recibir retroalimentación inmediata ni adaptada al tipo de audiencia que enfrentarán.",
    description:
      "Plataforma de práctica con IA que simula inversionistas, docentes o clientes mediante conversaciones de voz bidireccionales en tiempo real con Gemini Live API.",
    status: { label: "Proyecto terminado", variant: "shipped" as const },
    technical: [
      "Backend en Node.js y TypeScript con WebSockets como puente de audio entre el navegador y Gemini Live API",
      "Backend desplegado en Google Cloud Run y frontend en Vercel",
      "Sistema de monitoreo por fases para detectar fallas de la IA y reducir interrupciones",
      "Conversión de sesiones de voz en reportes escritos con métricas de desempeño",
    ],
    methodology: [
      "Dividí la experiencia en preparación, pitch, preguntas, coaching y reporte mediante una máquina de estados.",
      "Construí un proxy WebSocket para orquestar audio entre el navegador y Gemini Live sin exponer credenciales.",
      "Probé sesiones completas y ajusté el monitoreo y la detección de voz para reducir latencia e interrupciones.",
    ],
    impact: [
      "Reduje aproximadamente 35% la latencia percibida entre turnos al optimizar la detección de voz y la transmisión de audio",
      "Reduje las interrupciones de sesión de cuatro a cero durante dos días de pruebas con 60 usuarios",
      "Generé reportes posteriores a cada sesión con recomendaciones y planes de acción",
      "Migré la infraestructura de una cuenta compartida a una cuenta propia de Google Cloud",
    ],
    proof:
      "Puedo construir y desplegar sistemas de IA en tiempo real que integran audio, orquestación de sesiones e infraestructura en la nube.",
    github: "#",
    live: "#",
    liveLabel: "Conocer PitchPilot",
    comingSoon: true,
    media: [
      {
        src: "/projects/pitchpilot/simulacion-enfocado.webp",
        alt: "Sesión de práctica de PitchPilot con contacto visual detectado",
        caption: "La sesión evalúa el pitch en tiempo real mientras el usuario mantiene el contacto visual.",
        width: 1600,
        height: 841,
      },
      {
        src: "/projects/pitchpilot/simulacion-distraccion.webp",
        alt: "PitchPilot detectando una distracción durante una simulación",
        caption: "El sistema identifica distracciones durante la práctica y las incorpora a la retroalimentación.",
        width: 1600,
        height: 841,
      },
      {
        src: "/projects/pitchpilot/reporte-completo.webp",
        alt: "Reporte de desempeño generado después de una sesión de PitchPilot",
        caption: "Cada sesión termina con métricas, hallazgos y acciones concretas para mejorar el siguiente pitch.",
        width: 973,
        height: 1600,
      },
    ],
  },
  {
    id: "zaaby",
    name: "Zaaby App",
    icon: "sparkles",
    indexSummary:
      "Aplicación para iOS que convierte contenido guardado e ideas personales en conocimiento accionable.",
    role: ["Desarrollador Full Stack", "Arquitecto Backend", "Cofundador"],
    painPoint:
      "Las personas guardan contenido valioso en redes sociales, pero rara vez vuelven a consultarlo o lo convierten en acciones concretas.",
    description:
      "Aplicación para iOS que transforma enlaces e ideas en resúmenes, aprendizajes organizados y siguientes pasos accionables mediante IA.",
    status: { label: "MVP avanzado · TestFlight", variant: "live" as const },
    technical: [
      "Aplicación para iOS desarrollada con React Native, Expo y TypeScript",
      "Supabase con PostgreSQL, Row Level Security, autenticación, almacenamiento y Edge Functions",
      "Flujo de OpenAI GPT-4.1-mini para generar resúmenes, etiquetas y acciones sugeridas",
      "Autenticación con OAuth 2.0 y JWT mediante Apple y Google",
      "Suscripciones con RevenueCat y distribución en TestFlight mediante EAS Build",
    ],
    methodology: [
      "Definí el recorrido desde guardar contenido hasta obtener un resumen, etiquetas y cinco acciones personalizadas.",
      "Separé la app, los servicios y el procesamiento en servidor con Supabase Edge Functions, autenticación y RLS.",
      "Iteré con TestFlight y pruebas de usuarios sobre navegación, métricas, suscripciones y costos de IA.",
    ],
    impact: [
      "Desarrollé cerca del 80% del producto, desde la arquitectura hasta el despliegue beta",
      "Convertí contenido no estructurado en resultados claros, consistentes y accionables mediante IA",
      "Coordiné pruebas beta en TestFlight con 10 usuarios",
      "Integré frontend, backend, datos, autenticación, IA y servicios de suscripción",
    ],
    proof:
      "Puedo diseñar y llevar a producción un producto móvil con IA, integrando frontend, backend, datos, autenticación, suscripciones y despliegue.",
    live: "https://zaaby.app/",
    liveLabel: "Visitar sitio de Zaaby",
    media: [
      {
        src: "/projects/zaaby/biblioteca.webp",
        alt: "Biblioteca de contenido guardado en Zaaby con filtros, estados y acciones sugeridas",
        caption: "Biblioteca organizada con filtros, estados y acceso directo a las acciones sugeridas.",
        width: 1290,
        height: 2796,
      },
      {
        src: "/projects/zaaby/detalle-acciones.webp",
        alt: "Detalle de un contenido en Zaaby con resumen, etiquetas y acciones generadas por IA",
        caption: "Resumen, etiquetas y próximos pasos generados por IA a partir del contenido guardado.",
        width: 1290,
        height: 2796,
      },
      {
        src: "/projects/zaaby/metricas.webp",
        alt: "Panel de métricas de Zaaby con progreso, acciones completadas y categorías",
        caption: "Panel de avance con contenido útil, tareas completadas y progreso por categoría.",
        width: 1290,
        height: 2796,
      },
    ],
  },
];

export const values = [
  {
    icon: "search",
    title: "Entender antes de automatizar",
    body: "Antes de elegir herramientas, analizo el proceso, los datos, las reglas y los posibles puntos de falla.",
  },
  {
    icon: "layers",
    title: "Sistemas, no soluciones temporales",
    body: "Si un problema se repite, construyo un sistema confiable que evite resolverlo manualmente una y otra vez.",
  },
  {
    icon: "bot",
    title: "IA donde realmente aporta valor",
    body: "No todos los procesos necesitan IA. La utilizo cuando mejora las decisiones, agiliza el trabajo o eleva la experiencia del usuario.",
  },
  {
    icon: "shield",
    title: "Confiabilidad desde el diseño",
    body: "La validación, la trazabilidad, la seguridad y el manejo de errores forman parte de la arquitectura desde el inicio.",
  },
  {
    icon: "trending",
    title: "Construir, medir y mejorar",
    body: "Entrego soluciones funcionales, observo cómo se utilizan y las mejoro con base en resultados reales.",
  },
  {
    icon: "route",
    title: "Responsabilidad de principio a fin",
    body: "Llevo los proyectos desde el análisis del proceso y la arquitectura hasta la integración, el despliegue y la mejora continua.",
  },
];

export const skills = {
  columns: [
    {
      title: "IA y Automatización",
      items: [
        "n8n · Automatización de Flujos",
        "OpenAI API · GPT-4.1-mini",
        "Google Gemini Live API",
        "Telegram Bot API",
        "Diseño de Prompts y Resultados",
        "Integración de Sistemas con IA",
      ],
    },
    {
      title: "Backend e Integración",
      items: [
        "Node.js · TypeScript",
        "Python",
        "REST APIs · WebSockets",
        "OAuth 2.0 · JWT",
        "OpenAPI",
        "Integración de Sistemas",
      ],
    },
    {
      title: "Datos y Nube",
      items: [
        "PostgreSQL · Supabase",
        "Modelado de Datos · RLS",
        "Edge Functions · Deno",
        "Google Cloud Run",
        "Docker · Contenedores",
        "CI/CD · Vercel",
      ],
    },
    {
      title: "Frontend y Móvil",
      items: [
        "React · Next.js",
        "React Native · Expo",
        "JavaScript · TypeScript",
        "EAS Build · TestFlight",
      ],
    },
  ],
  tools: [
    "n8n",
    "Node.js",
    "TypeScript",
    "Python",
    "Supabase",
    "PostgreSQL",
    "OpenAI",
    "Gemini",
    "Google Cloud",
    "Docker",
    "React Native",
    "Expo",
    "GitHub",
    "Vercel",
    "RevenueCat",
  ],
  philosophy:
    "La IA debe acelerar el entendimiento, no sustituirlo. La utilizo para construir más rápido, sin perder de vista cómo y por qué funciona cada parte del sistema.",
};

export const contact = {
  headline: "Automaticemos lo que le quita tiempo a tu equipo.",
  subtext:
    "Ayudo a equipos y negocios a sustituir tareas repetitivas por automatizaciones confiables, sistemas conectados y soluciones backend impulsadas por IA.",
  hint: "Disponible para proyectos y oportunidades remotas en automatización con IA y backend.",
  email: "manueldonato9921@gmail.com",
  linkedin: "https://www.linkedin.com/in/manuel-donato-hernandez/",
  whatsapp: "https://wa.me/526471229788",
  cv: "/Manuel-Donato-Hernandez-CV.pdf",
  emailLabel: "Iniciar conversación",
  cvLabel: "Descargar CV",
  linkedinLabel: "LinkedIn",
  whatsappLabel: "WhatsApp",
  footer:
    "Construyendo sistemas confiables y automatizaciones que resuelven problemas reales.",
};
