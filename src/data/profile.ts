import type { T } from "./i18n";

export const profile = {
  name: "Ricardo Martínez",
  email: "ricardomartinezvet@gmail.com",
  github: "https://github.com/bohaz",
  linkedin: "https://www.linkedin.com/in/ricardomartinezdev/",
};

export type AppStatus = "live" | "private" | "dev" | "beta";

export interface Img {
  src: string;
  w: number;
  h: number;
}

export interface Shot {
  desktop?: Img;
  mobile?: Img;
}

const desk = (name: string, h = 750): Img => ({ src: `/projects/${name}-desktop.webp`, w: 1200, h });
const phone = (name: string, h = 1039): Img => ({ src: `/projects/${name}-mobile.webp`, w: 480, h });

export interface App {
  id: string;
  name: string;
  status: AppStatus[];
  shot?: Shot;
  stack: string[];
  demo?: string;
  caseStudy?: string;
  /** Repositorio público; si no hay, se indica que el código está disponible a pedido. */
  code?: string;
  text: T<{ tagline: string; summary: string; points: string[]; shotAlt?: string }>;
}

export const apps: App[] = [
  {
    id: "vigia-sms",
    name: "Vigía SMS",
    status: ["live"],
    shot: { desktop: desk("vigia-sms"), mobile: phone("vigia-sms") },
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "Recharts"],
    demo: "https://vigiasmspilot.vercel.app/",
    caseStudy: "work/vigia-sms/",
    text: {
      en: {
        tagline: "Safety Management System for airlines, built as a pilot",
        summary:
          "A pilot that shows Venezuelan airline operators how to run their whole safety program in one place, structured on RAV 5 and ICAO Annex 19.",
        points: [
          "Hazard register with initial and residual risk on the ICAO 5×5 matrix",
          "ASR and MOR reports with analysis status, authority notification and CSV export",
          "Corrective actions that can't be closed without evidence",
          "Audit log chained with SHA-256, with an integrity check and a tamper simulation",
          "Period report ready to print or save as PDF",
        ],
        shotAlt: "Vigía SMS safety dashboard with monthly indicators and the residual risk matrix",
      },
      es: {
        tagline: "Sistema de Gestión de Seguridad Operacional para aerolíneas, en versión piloto",
        summary:
          "Un piloto que muestra a operadores aéreos venezolanos cómo llevar todo su programa de seguridad en un solo lugar, con la estructura de la RAV 5 y el Anexo 19 de la OACI.",
        points: [
          "Registro de peligros con riesgo inicial y residual en la matriz 5×5 de la OACI",
          "Reportes ASR y MOR con estado de análisis, notificación a la autoridad y exportación a CSV",
          "Acciones correctivas que no se pueden cerrar sin evidencia",
          "Bitácora de auditoría encadenada con SHA-256, con verificación de integridad y simulación de manipulación",
          "Informe del período listo para imprimir o guardar en PDF",
        ],
        shotAlt: "Panel de seguridad de Vigía SMS con los indicadores del mes y la matriz de riesgo residual",
      },
    },
  },
  {
    id: "pet-fashion-gestion",
    name: "Pet Fashion Gestión",
    status: ["private"],
    shot: { mobile: phone("pet-fashion-gestion") },
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "PWA"],
    text: {
      en: {
        tagline: "The app that runs the grooming salon day to day",
        summary:
          "Appointments, dogs and business finances for the salon I co-run. We used it for a couple of months straight. It sits behind a login, so the screenshot uses sample data.",
        points: [
          "Today view, day and month calendar, and a directory of dogs with their visits",
          "Price and duration worked out from each dog's size and coat",
          "WhatsApp messages ready to send for confirmations, reminders and review requests",
          "Real-time sync between both users with Supabase Realtime and row-level security",
          "Fixed monthly reports that moved records to the previous month because of the UTC offset",
        ],
        shotAlt: "Pet Fashion Gestión on a phone: today's appointments with sample data",
      },
      es: {
        tagline: "La app con la que llevamos la peluquería día a día",
        summary:
          "Citas, perros y finanzas del negocio de la peluquería que codirijo. La usamos durante un par de meses seguidos. Tiene inicio de sesión, así que la captura usa datos de ejemplo.",
        points: [
          "Vista del día, agenda diaria y mensual, y un directorio de perros con sus visitas",
          "Precio y duración calculados según la talla y el pelaje de cada perro",
          "Mensajes de WhatsApp listos para confirmar, recordar la cita y pedir reseñas",
          "Sincronización en tiempo real entre los dos usuarios con Supabase Realtime y seguridad por fila",
          "Corregí informes mensuales que pasaban registros al mes anterior por el desfase horario con UTC",
        ],
        shotAlt: "Pet Fashion Gestión en un celular: citas del día con datos de ejemplo",
      },
    },
  },
  {
    id: "arpegios",
    name: "Arpegios",
    status: ["beta", "dev"],
    shot: { mobile: phone("arpegios") },
    stack: ["React 19", "Vite", "Tailwind CSS", "Web Audio", "React Native", "Expo"],
    code: "https://github.com/bohaz/llanero-tonos",
    text: {
      en: {
        tagline: "Repertoire, tuner and transposer for llanero harp players",
        summary:
          "A web app with songs organized by key, a tuner that detects the note you play and a key transposer. I'm porting it to React Native with Expo to publish it on Google Play.",
        points: [],
        shotAlt: "Arpegios on a phone: song list organized by key",
      },
      es: {
        tagline: "Repertorio, afinador y transporte para arpa llanera",
        summary:
          "Una app web con canciones ordenadas por tono, un afinador que detecta la nota que tocas y una herramienta para transportar. La estoy llevando a React Native con Expo para publicarla en Google Play.",
        points: [],
        shotAlt: "Arpegios en un celular: lista de canciones ordenadas por tono",
      },
    },
  },
  {
    id: "de-luca-a-dolar",
    name: "De Luca a Dólar",
    status: ["dev"],
    shot: { mobile: phone("de-luca-a-dolar") },
    stack: ["React Native", "Expo", "Expo Router", "EAS Build"],
    text: {
      en: {
        tagline: "Chilean peso to US dollar converter for Android",
        summary:
          "Converts pesos to dollars with the observed rate published by Chile's Central Bank, read from the mindicador.cl API. It includes a chart of recent values and is set up with EAS to build for Google Play.",
        points: [],
        shotAlt: "De Luca a Dólar on a phone converting 150,000 pesos with a sample rate",
      },
      es: {
        tagline: "Conversor de pesos chilenos a dólares para Android",
        summary:
          "Convierte pesos a dólares con el dólar observado que publica el Banco Central, a través de la API de mindicador.cl. Incluye un gráfico de los últimos valores y está configurada con EAS para compilar para Google Play.",
        points: [],
        shotAlt: "De Luca a Dólar en un celular convirtiendo 150.000 pesos con un valor de ejemplo",
      },
    },
  },
];

export interface Website {
  id: string;
  name: string;
  url: string;
  shot: Shot;
  text: T<{ kind: string; summary: string }>;
}

export const websites: Website[] = [
  {
    id: "tu-plan-digital",
    name: "Tu Plan Digital",
    url: "https://tuplandigital.cl/",
    shot: { desktop: desk("tu-plan-digital"), mobile: phone("tu-plan-digital") },
    text: {
      en: {
        kind: "My digital agency",
        summary:
          "Hand-built HTML, CSS and JavaScript with structured data and an automated content and SEO check on every pull request.",
      },
      es: {
        kind: "Mi agencia digital",
        summary:
          "HTML, CSS y JavaScript sin frameworks, con datos estructurados y una revisión automática de contenido y SEO en cada pull request.",
      },
    },
  },
  {
    id: "pet-fashion",
    name: "Pet Fashion Dog Salon",
    url: "https://petfashiondogsalon.cl/",
    shot: { desktop: desk("pet-fashion"), mobile: phone("pet-fashion") },
    text: {
      en: {
        kind: "Grooming salon in Isla Negra, Chile",
        summary: "One-page site with services, prices by size, gallery, reviews and FAQ, with booking through WhatsApp.",
      },
      es: {
        kind: "Peluquería canina en Isla Negra",
        summary: "Sitio de una página con servicios, precios por talla, galería, reseñas y preguntas frecuentes, con reservas por WhatsApp.",
      },
    },
  },
  {
    id: "katdoc",
    name: "Katdoc",
    url: "https://katdoc.com.ve/",
    shot: { desktop: desk("katdoc"), mobile: phone("katdoc") },
    text: {
      en: { kind: "Veterinary clinic in Puerto Ordaz, Venezuela", summary: "Site with WhatsApp appointment booking and production-ready SEO." },
      es: { kind: "Veterinaria en Puerto Ordaz, Venezuela", summary: "Sitio con agendamiento por WhatsApp y SEO listo para producción." },
    },
  },
  {
    id: "limpia-fosas-pit",
    name: "Limpia Fosas PIT",
    url: "https://limpiafosaspit.cl/",
    shot: { desktop: desk("limpia-fosas-pit"), mobile: phone("limpia-fosas-pit") },
    text: {
      en: {
        kind: "Septic tank cleaning on Chile's Central Coast",
        summary: "Fast static site on Cloudflare with security headers and one-tap WhatsApp contact.",
      },
      es: {
        kind: "Limpieza de fosas sépticas en el Litoral Central",
        summary: "Sitio estático y rápido en Cloudflare, con cabeceras de seguridad y contacto por WhatsApp en un toque.",
      },
    },
  },
  {
    id: "decero-leathers",
    name: "Decero Leathers Chile",
    url: "https://deceroleathers.cl/",
    shot: { desktop: desk("decero-leathers", 537), mobile: phone("decero-leathers", 907) },
    text: {
      en: { kind: "Leather goods store", summary: "Theme customization for the brand's Jumpseller online store." },
      es: { kind: "Tienda de artículos de cuero", summary: "Personalización del tema de su tienda en línea en Jumpseller." },
    },
  },
];

export const principles: T<{ title: string; text: string }[]> = {
  en: [
    { title: "Understand the business first", text: "I ask what the project needs to achieve before choosing tools." },
    { title: "Small, reviewable changes", text: "Feature branches, pull requests and automated checks before anything reaches production." },
    { title: "Code someone else can maintain", text: "Documented standards, typed code and tests where the logic matters." },
    { title: "AI as a tool, not an author", text: "I use AI-assisted development every day and review everything it produces." },
  ],
  es: [
    { title: "Primero entiendo el negocio", text: "Antes de elegir herramientas, pregunto qué necesita lograr el proyecto." },
    { title: "Cambios chicos y revisables", text: "Ramas, pull requests y revisiones automáticas antes de llegar a producción." },
    { title: "Código que otro pueda mantener", text: "Estándares documentados, código tipado y pruebas donde la lógica importa." },
    { title: "La IA como herramienta", text: "Uso desarrollo asistido por IA a diario y reviso todo lo que genera." },
  ],
};

export interface Role {
  from: string;
  to?: string;
  org: string | T;
  place: T;
  title: T;
  text: T;
}

export const experience: Role[] = [
  {
    from: "2026-10",
    org: "Tu Plan Digital",
    place: { en: "El Quisco, Chile", es: "El Quisco, Chile" },
    title: { en: "Founder & Full Stack Developer", es: "Fundador y desarrollador Full Stack" },
    text: {
      en: "Digital agency for small businesses in Chile. I scope, build and ship websites and custom tools, and defined the technical standard for each service tier.",
      es: "Agencia digital para pequeños negocios en Chile. Defino, desarrollo y publico sitios y herramientas a medida, y definí el estándar técnico de cada plan.",
    },
  },
  {
    from: "2023-04",
    org: { en: "Independent", es: "Independiente" },
    place: { en: "Remote", es: "Remoto" },
    title: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    text: {
      en: "Products and client projects built end to end, from requirements to deployment: Vigía SMS, Pet Fashion Gestión, Arpegios and sites for local businesses.",
      es: "Productos y proyectos de clientes de principio a fin, desde los requerimientos hasta la publicación: Vigía SMS, Pet Fashion Gestión, Arpegios y sitios para negocios locales.",
    },
  },
  {
    from: "2020-08",
    org: "Pet Fashion Dog Salon",
    place: { en: "Isla Negra, Chile", es: "Isla Negra, Chile" },
    title: { en: "Co-founder", es: "Cofundador" },
    text: {
      en: "Six years running a dog-grooming salon as a two-person team, serving about 60 dogs a month.",
      es: "Seis años a cargo de una peluquería canina con un equipo de dos personas; atendemos unos 60 perros al mes.",
    },
  },
  {
    from: "2017-08",
    to: "2019-05",
    org: "Finca El Retumbo",
    place: { en: "Bolívar, Venezuela", es: "Bolívar, Venezuela" },
    title: { en: "General Manager & Veterinarian", es: "Gerente general y médico veterinario" },
    text: {
      en: "Led dairy and beef teams. Milk production rose 15%, feed costs fell 20% and illness-related costs fell 30%.",
      es: "Dirigí los equipos de leche y carne. La producción de leche subió 15 %, el costo de alimento bajó 20 % y los gastos por enfermedades bajaron 30 %.",
    },
  },
  {
    from: "2016-11",
    to: "2017-06",
    org: "Centro Agropecuario El Porvenir",
    place: { en: "Bolívar, Venezuela", es: "Bolívar, Venezuela" },
    title: { en: "Livestock Manager & Veterinarian", es: "Jefe de producción ganadera y médico veterinario" },
    text: {
      en: "Health, breeding and feeding plans for cattle and horses, and quality control for dairy production.",
      es: "Planes sanitarios, reproductivos y de alimentación para bovinos y equinos, y control de calidad de la producción lechera.",
    },
  },
];

export const education: { from: string; to: string; org: string; title: T; text?: T }[] = [
  {
    from: "2023-04",
    to: "2023-11",
    org: "Microverse",
    title: { en: "Full-Stack Web Development", es: "Desarrollo web Full Stack" },
    text: {
      en: "Remote program in Ruby on Rails, React, Redux and JavaScript. Built 40+ projects pair programming with developers from other countries.",
      es: "Programa remoto de Ruby on Rails, React, Redux y JavaScript. Más de 40 proyectos programando en pareja con desarrolladores de otros países.",
    },
  },
  {
    from: "2009",
    to: "2016",
    org: "Universidad Nacional Experimental de los Llanos Centrales Rómulo Gallegos",
    title: { en: "Doctor of Veterinary Medicine", es: "Médico veterinario" },
  },
];

export const languages: T<string[]> = {
  en: ["Spanish, native", "English, full professional", "Portuguese, elementary"],
  es: ["Español, nativo", "Inglés, nivel profesional", "Portugués, básico"],
};
