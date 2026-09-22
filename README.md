# Archity Portafolio

Portafolio limpio en **Astro + TypeScript** orientado a proyectos reales y enlaces externos desplegados (Vercel/sitios productivos).

## Cambios principales

- Se retiraron todas las referencias y rutas internas de `src/pages/demos/*`.
- Se eliminaron bloques de laboratorio/showcase de demos del home.
- Se centralizaron enlaces editables en `src/constants/site.ts`.
- Se rediseñó home con hero corto, métricas, cards visuales, servicios resumidos, casos y CTA.
- Se agregó `src/pages/proyectos/restobar-system.astro` como frontend puro.

## Rutas activas

- `/` Portafolio principal
- `/productos/altoplanta`
- `/productos/grupo-pineda`
- `/proyectos/restobar-system`

## Enlaces externos configurables

Editar en `src/constants/site.ts`:

- `EXTERNAL_URLS.altoplanta`
- `EXTERNAL_URLS.grupoPineda`
- `EXTERNAL_URLS.restobarVercel` (placeholder)
- `EXTERNAL_URLS.portfolioVercel` (placeholder)

## Restobar System (modo temporal)

Restobar funciona sin backend real:

- catálogo + categorías + buscador
- carrito/comanda
- selección `mesa` o `delivery`
- confirmación simulada
- persistencia local en `localStorage`
- snapshot de confirmación en `Cache Storage` (si el navegador lo soporta)

> Limitación: no hay pagos reales, no hay procesamiento de pedidos en servidor ni despacho real.

## Comandos

```bash
npm install
npm run dev
npm run build
```
