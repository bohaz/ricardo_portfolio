# Portafolio: decisiones y mantenimiento

Portafolio personal para reclutadores de cargos remotos de desarrollo Full Stack.

## Decisiones

| Tema | Decisión | Por qué |
|---|---|---|
| Tecnología | Astro 7 + Tailwind CSS 4, sitio estático | Carga rápida, sin servidor que mantener |
| Idiomas | Inglés y español en rutas propias | El español se escribe aparte, en lenguaje natural, no traducido palabra por palabra |
| Estructura | Apps separadas de sitios web | Las apps muestran producto y lógica de negocio; los sitios, trabajo para clientes |
| Línea visual | La del banner de LinkedIn | Coherencia entre el portafolio, LinkedIn y Tu Plan Digital |
| Capturas | Completas dentro de un marco, nunca recortadas en el borde | Pedido explícito: una captura cortada se ve poco profesional |
| Contacto | Formulario (Web3Forms) en vez de un enlace de correo | Se ve más profesional; si falla, el mensaje de error muestra el correo |
| Código | Solo Arpegios enlaza su repositorio | Los demás repositorios son privados: se indica «Código disponible si lo solicitas» |
| Publicación | Vercel, rama `main` | Flujo: rama desde `development` → PR con vista previa → merge → PR a `main` |

## Contenido y veracidad

- Las descripciones de las apps se revisaron contra su código (Vigía SMS, Pet Fashion Gestión, De Luca a Dólar). No se publica nada que no esté en el código o que Ricardo no haya confirmado.
- Las capturas de Pet Fashion Gestión y De Luca a Dólar usan datos de ejemplo, y sus textos lo dicen. Pet Fashion Gestión se capturó contra un Supabase simulado, sin datos reales de clientes.
- Las capturas de Decero Leathers las entregó Ricardo.

## Cómo rehacer las capturas

1. Levantar cada proyecto en local (los sitios estáticos con `python3 -m http.server`; las apps con su `build`/`dev`).
2. Capturar con Playwright: escritorio a 1440 × 900 (1x) y móvil a 390 × 844 (2x).
3. Convertir a WebP: escritorio a 1200 px de ancho y móvil a 480 px, calidad 82.
4. Guardar como `public/projects/<id>-desktop.webp` y `<id>-mobile.webp`.

## Pendiente

- Confirmar el dominio de producción en Vercel y, si no es `ricardomartinez.vercel.app`, definir `SITE_URL` con el real.
- SaaS para veterinarias: compilarlo, verificar que funcione y decidir si entra.
- Correcciones menores que se revisarán después de publicar.
