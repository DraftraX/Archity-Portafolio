# ARCHITY — Software a la Medida & SaaS Hub

Portafolio y Hub de productos tecnológicos de **ARCHITY**, diseñado con una estética limpia y minimalista inspirada en Kimi.ai, construido con **Astro v5** y **Tailwind CSS v4**.

## ✨ Características

- ⚡ **Astro v5 + Tailwind CSS v4 (@tailwindcss/vite)**: Máximo rendimiento, CSS compilado en milisegundos con cero dependencias innecesarias.
- 📐 **Identidad Vectorial SVG**:
  - `logo-icon.svg`: Isotipo geométrico angular de la "A".
  - `logo-full.svg`: Marca completa ARCHITY en vectores puros.
  - `favicon.svg`: Icono optimizado para navegadores.
- 🎨 **Estética Kimi.ai**: Superficies blancas, bordes sutiles, micro-interacciones suaves y acento en azul eléctrico (`#1a5cff`).
- 📱 **100% Responsive**: Navegación adaptativa con menú desplegable para dispositivos móviles.
- 📦 **Componentes Modulares**:
  - `Header.astro`: Barra sticky con desenfoque de fondo.
  - `Hero.astro`: Encabezado de alto impacto con indicador de estado en vivo.
  - `ProductGrid.astro` & `ProductCard.astro`: Catálogo de sistemas SaaS listos para operar.
  - `PortfolioSection.astro`: Casos de éxito con métricas cuantitativas.
  - `Footer.astro`: Pie de página corporativo con enlaces y contacto.

## 🚀 Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

## 📁 Estructura

```
archoty/
├── public/
│   ├── favicon.svg
│   ├── logo-icon.svg
│   ├── logo-full.svg
│   └── images/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
└── package.json
```
