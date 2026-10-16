// Revisa el sitio compilado (dist/) antes de publicar:
// - cada enlace interno y cada imagen apuntan a un archivo que existe;
// - cada página en inglés tiene su par en español y se enlazan con hreflang;
// - cada página tiene título, descripción y una sola etiqueta h1.
// Uso: npm run build && npm run check
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const errors = [];

if (!existsSync(DIST)) {
  console.error("No existe dist/. Ejecuta primero: npm run build");
  process.exit(1);
}

const htmlFiles = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? htmlFiles(path) : name.endsWith(".html") ? [path] : [];
  });

const resolves = (url) => {
  const clean = decodeURI(url.split("#")[0].split("?")[0]);
  if (clean === "") return true;
  const path = join(DIST, clean);
  return existsSync(path) && (statSync(path).isFile() || existsSync(join(path, "index.html")));
};

const pages = htmlFiles(DIST);
for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const page = "/" + relative(DIST, file);

  for (const [, attr, url] of html.matchAll(/\s(href|src)="(\/[^"]*)"/g)) {
    if (!resolves(url)) errors.push(`${page}: ${attr} apunta a ${url}, que no existe`);
  }

  const localized = page.match(/^\/(en|es)\/(.*)$/);
  if (!localized) continue;
  const [, lang, rest] = localized;
  const other = lang === "en" ? "es" : "en";
  if (!existsSync(join(DIST, other, rest))) errors.push(`${page}: falta la versión /${other}/${rest}`);
  if (!new RegExp(`hreflang="${other}"`).test(html)) errors.push(`${page}: falta hreflang="${other}"`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${page}: falta <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${page}: falta la meta description`);
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) errors.push(`${page}: tiene ${h1} etiquetas h1 (debe tener 1)`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} problema(s):\n` + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log(`✓ ${pages.length} páginas revisadas sin problemas.`);
