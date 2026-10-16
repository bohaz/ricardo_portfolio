import type { Lang } from "../data/i18n";

/** "2026-10" → "Oct 2026" / "oct 2026"; "2009" → "2009". */
export function monthYear(value: string, lang: Lang): string {
  const [year, month] = value.split("-").map(Number);
  if (!month) return String(year);
  const label = new Intl.DateTimeFormat(lang === "en" ? "en-US" : "es-CL", { month: "short", year: "numeric", timeZone: "UTC" })
    .format(new Date(Date.UTC(year, month - 1, 1)))
    .replace(".", "");
  return label.charAt(0).toUpperCase() + label.slice(1);
}

/** Dominio legible para mostrar junto a un enlace. */
export const host = (url: string) => new URL(url).host.replace(/^www\./, "");
