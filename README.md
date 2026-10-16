# Portafolio de Ricardo Martínez

Sitio personal para reclutadores, en inglés (`/en/`) y español (`/es/`). La raíz `/` envía a cada visitante al idioma de su navegador.

Hecho con Astro 7 y Tailwind CSS 4. Es estático: no tiene servidor ni base de datos.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor local en `http://localhost:4321` |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run check` | Revisa `dist/`: enlaces e imágenes, pares de idioma, `hreflang`, título, descripción y un solo `h1` por página |

Antes de cada pull request: `npm run build && npm run check`.

## Dónde cambiar el contenido

Todo el texto vive en `src/data/`, separado del diseño:

- `i18n.ts`: textos de la interfaz (portada, títulos de sección, botones) en los dos idiomas.
- `profile.ts`: apps, sitios web, principios de trabajo, experiencia, formación e idiomas.
- `vigia.ts`: el caso de estudio de Vigía SMS.

El español se escribe aparte, como se diría en Chile; no es una traducción palabra por palabra del inglés.

### Agregar un proyecto

1. Toma las capturas a 1440 × 900 (escritorio) y 390 × 844 (móvil, a 2x) y guárdalas en `public/projects/` como WebP: escritorio a 1200 px de ancho y móvil a 480 px, con los nombres `<id>-desktop.webp` y `<id>-mobile.webp`.
2. Agrega el proyecto en `apps` o `websites` dentro de `src/data/profile.ts`, con su texto en `en` y `es`.
3. Las capturas se muestran completas dentro de un marco de navegador o de celular (`Browser.astro` y `Phone.astro`); no se recortan.
4. `npm run build && npm run check`.

## Estructura

```
src/
  data/          contenido en inglés y español
  layouts/       Base.astro: <head>, SEO, hreflang y datos estructurados
  components/    encabezado, pie, marcos de captura, formulario de contacto, estado y tecnologías
  pages/
    index.astro          redirección por idioma
    [lang]/index.astro   página principal
    [lang]/work/         casos de estudio
  styles/global.css      tokens de color y tipografía
public/projects/   capturas de los proyectos
scripts/check.mjs  revisión del sitio compilado
```

## Publicación

Vercel detecta Astro sin configuración. Define la variable `SITE_URL` con la URL pública (por ejemplo `https://ricardomartinez.vercel.app`) para que las URL canónicas, `hreflang`, la imagen para redes y el sitemap salgan correctos.

### Formulario de contacto

El formulario envía los mensajes con [Web3Forms](https://web3forms.com) al correo de la cuenta. La clave de acceso está en `src/components/ContactForm.astro`; es pública por diseño, no es un secreto. Para cambiarla sin tocar el código, define en Vercel la variable `PUBLIC_WEB3FORMS_KEY`. Los mensajes llegan al correo con el que se creó la clave.

## Línea visual

La misma del banner de LinkedIn: navy `#050816`, azul eléctrico `#1687FF`, cyan `#12D9E8`, gris `#A7B0C2`; Manrope para títulos e Inter para texto, servidas desde el propio sitio.
