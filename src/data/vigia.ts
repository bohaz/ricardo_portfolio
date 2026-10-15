import type { T } from "./i18n";

/** Caso de estudio de Vigía SMS. Los datos salen del README y del código del repo sms-pilot. */
export const vigia: T<{
  title: string;
  description: string;
  lead: string;
  contextTitle: string;
  context: string[];
  modulesTitle: string;
  modules: { name: string; text: string }[];
  decisionsTitle: string;
  decisions: { title: string; text: string }[];
  nextTitle: string;
  next: string[];
  caveat: string;
  mobileAlt: string;
}> = {
  en: {
    title: "Vigía SMS case study",
    description:
      "How I built a Safety Management System pilot for Venezuelan airlines with Next.js, TypeScript and a tamper-evident audit log.",
    lead: "A Safety Management System pilot for Venezuelan airline operators, ready to demo in five minutes.",
    contextTitle: "The problem",
    context: [
      "Airline operators in Venezuela must run a Safety Management System under RAV 5, the national regulation based on ICAO Annex 19. Many still manage reports, hazards and corrective actions across spreadsheets and paper.",
      "I built Vigía SMS to show an operator what the whole program looks like in one tool: what needs attention today, how risk is trending and whether the safety records can be trusted.",
    ],
    modulesTitle: "What it covers",
    modules: [
      { name: "Dashboard", text: "Monthly indicators, the residual risk matrix, overdue items and recent activity." },
      { name: "ASR and MOR reports", text: "Intake, filters, analysis states, links to hazards, authority notification and CSV export." },
      { name: "Hazards and risk", text: "Initial and residual risk on the ICAO Doc 9859 matrix." },
      { name: "Corrective actions", text: "Owners, due dates and mandatory evidence to close." },
      { name: "Safety indicators", text: "Traffic-light thresholds, trends and an editable monthly log." },
      { name: "RAV 5 compliance", text: "Status and evidence for each of the 12 elements." },
      { name: "Reports", text: "Period report ready to print or save as PDF, stamped with the audit log hash." },
      { name: "Audit log", text: "SHA-256 chained entries with an integrity check." },
    ],
    decisionsTitle: "Technical decisions",
    decisions: [
      {
        title: "One door to the data",
        text: "Every screen reads and writes through a single Zustand store. Today it persists in the browser; moving to a database means changing that file, not the screens.",
      },
      {
        title: "A log you can't quietly edit",
        text: "Each audit entry stores the SHA-256 hash of the previous one. Changing any past record breaks the chain, and the integrity check reports exactly where.",
      },
      {
        title: "Rules as configuration",
        text: "Risk tolerability and indicator thresholds live in their own modules, so each operator can set its own criteria without touching the UI.",
      },
      {
        title: "Checked, not assumed",
        text: "A verification script tests the hashing, the seeded indicators and tamper detection, and the UI is checked for overflow from 320 px phones to desktop.",
      },
    ],
    nextTitle: "Path to production",
    next: [
      "Supabase (PostgreSQL) with row-level security and one organization per operator.",
      "Roles for safety manager, area lead, auditor and read-only users.",
      "The audit chain computed and stored server-side, in append-only tables.",
      "Attachments, due-date emails and electronic signature for reports.",
    ],
    caveat:
      "Indicator thresholds and notification deadlines in the demo are sample values. They need validation against the current edition of RAV 5 before any commercial use.",
    mobileAlt: "Vigía SMS dashboard on a phone, with the risk matrix fitted to the screen",
  },
  es: {
    title: "Caso de estudio: Vigía SMS",
    description:
      "Cómo construí un piloto de Sistema de Gestión de Seguridad Operacional para aerolíneas venezolanas con Next.js, TypeScript y una bitácora a prueba de alteraciones.",
    lead: "Un piloto de Sistema de Gestión de Seguridad Operacional para operadores aéreos venezolanos, listo para mostrar en cinco minutos.",
    contextTitle: "El problema",
    context: [
      "Los operadores aéreos en Venezuela deben llevar un Sistema de Gestión de Seguridad Operacional según la RAV 5, la regulación nacional basada en el Anexo 19 de la OACI. Muchos todavía manejan reportes, peligros y acciones correctivas entre planillas y papel.",
      "Construí Vigía SMS para mostrarle a un operador cómo se ve todo el programa en una sola herramienta: qué requiere atención hoy, cómo evoluciona el riesgo y si los registros de seguridad son confiables.",
    ],
    modulesTitle: "Qué incluye",
    modules: [
      { name: "Panel", text: "Indicadores del mes, matriz de riesgo residual, pendientes vencidos y actividad reciente." },
      { name: "Reportes ASR y MOR", text: "Registro, filtros, estados de análisis, vínculo con peligros, notificación a la autoridad y exportación a CSV." },
      { name: "Peligros y riesgos", text: "Riesgo inicial y residual en la matriz del Doc 9859 de la OACI." },
      { name: "Acciones correctivas", text: "Responsables, fechas límite y evidencia obligatoria para cerrarlas." },
      { name: "Indicadores de seguridad", text: "Semáforos, tendencias y un registro mensual editable." },
      { name: "Cumplimiento RAV 5", text: "Estado y evidencia de cada uno de los 12 elementos." },
      { name: "Informes", text: "Informe del período listo para imprimir o guardar en PDF, con la huella de la bitácora." },
      { name: "Bitácora de auditoría", text: "Registros encadenados con SHA-256 y verificación de integridad." },
    ],
    decisionsTitle: "Decisiones técnicas",
    decisions: [
      {
        title: "Una sola puerta a los datos",
        text: "Todas las pantallas leen y escriben a través de un único store de Zustand. Hoy guarda los datos en el navegador; pasar a una base de datos significa cambiar ese archivo, no las pantallas.",
      },
      {
        title: "Una bitácora que no se puede alterar en silencio",
        text: "Cada registro guarda la huella SHA-256 del anterior. Si se modifica cualquier registro pasado, la cadena se rompe y la verificación indica exactamente dónde.",
      },
      {
        title: "Reglas configurables",
        text: "La tolerabilidad del riesgo y los umbrales de los indicadores viven en sus propios módulos, para que cada operador defina sus criterios sin tocar la interfaz.",
      },
      {
        title: "Verificado, no supuesto",
        text: "Un script de verificación prueba las huellas, los indicadores de ejemplo y la detección de alteraciones, y la interfaz se revisa desde celulares de 320 px hasta escritorio.",
      },
    ],
    nextTitle: "Camino a producción",
    next: [
      "Supabase (PostgreSQL) con seguridad por fila y una organización por operador.",
      "Roles de gerente de seguridad, jefe de área, auditor y solo lectura.",
      "La cadena de la bitácora calculada y guardada en el servidor, en tablas de solo inserción.",
      "Adjuntos, correos de vencimiento y firma electrónica de informes.",
    ],
    caveat:
      "Los umbrales de los indicadores y los plazos de notificación de la demo son valores de ejemplo. Antes de cualquier uso comercial deben validarse con la edición vigente de la RAV 5.",
    mobileAlt: "Panel de Vigía SMS en un celular, con la matriz de riesgo ajustada a la pantalla",
  },
};
