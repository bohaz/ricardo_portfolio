// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// SITE_URL se define en Vercel cuando el portafolio tenga su dominio definitivo.
const site = process.env.SITE_URL ?? "https://ricardomartinez.vercel.app";

export default defineConfig({
  site,
  trailingSlash: "always",
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", es: "es" } },
      filter: (page) => page !== `${site}/`,
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
