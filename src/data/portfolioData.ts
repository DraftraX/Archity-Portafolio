// Datos centralizados de Archity: Estudio de Software & SaaS
export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  dateEs: string;
  dateEn: string;
  title: string;
  taglineEs: string;
  taglineEn: string;
  descriptionEs: string;
  descriptionEn: string;
  category1: string;
  category2: string;
  folderColor: string; // Color de carpeta Crayon
  textColorClass?: string;
  mirrorTitle?: boolean; // Para Grupo Pineda con letras al revés
  logoUrl: string; // Logo oficial
  accentColor: string;
  demoUrl?: string;
  repoUrl?: string;
  stats?: { label: string; value: string }[];
}

export const heroData = {
  nameDisplay: "ARCHITY",
  labelEs: "somos",
  labelEn: "we are",
  roleEs: "Estudio de Software & SaaS",
  roleEn: "Software Studio & SaaS Incubator",
  locationEs: "Perú",
  locationEn: "Peru",
  statusEs: "Abiertos a nuevos proyectos y soluciones de software",
  statusEn: "Open to new software projects & hard problems",
  descEs: "Diseñamos y construimos software que se quita del camino.",
  descEn: "We design software that gets out of your way.",
  pill1Es: "Sistemas Reales",
  pill1En: "Real Systems",
  pill2Es: "Arquitectura Cloud",
  pill2En: "Cloud Architecture",
  media0: "/mascot/archity-mascot-avatar.jpg",
  media1: "/mascot/archity-mascot-coder.jpg",
};

export const bioData = {
  sectionLabelEs: "sobre nosotros",
  sectionLabelEn: "about us",
  labelEs: "sobre nosotros",
  labelEn: "about us",
  year: "2026",
  badgeEs: "¡qué tal!",
  badgeEn: "what's up",
  workspaceLabelEs: "nuestro estudio",
  workspaceLabelEn: "our studio",
  whatsupLabelEs: "¡qué tal!",
  whatsupLabelEn: "what's up",
  whatsupTextEs:
    "En Archity somos un estudio de ingeniería de software e incubadora SaaS en Perú que se emociona haciendo que los sistemas complejos se sientan simples, rápidos y confiables. ✨ Cuidamos cada detalle operativo, los casos extremos que otros ignoran y desplegamos plataformas de misión crítica que hacen crecer a las empresas. 🎨",
  whatsupTextEn:
    "At Archity, we are a software engineering studio and SaaS incubator in Peru obsessed with making complicated systems feel simple, fast, and reliable. ✨ We obsess over operational edge cases everyone forgets and ship mission-critical platforms that genuinely elevate businesses. 🎨",
  photo0: {
    src: "/mascot/archity-mascot-3d-systems.jpg",
    captionEs: "2026",
    captionEn: "2026",
  },
  photo1: {
    src: "/mascot/archity-mascot-avatar.jpg",
    captionEs: "nuestro estudio",
    captionEn: "our studio",
  },
  skills: [
    { labelEs: "Arquitectura SaaS", labelEn: "SaaS Architecture", titleEs: "Arquitectura SaaS", titleEn: "SaaS Architecture", emojiA: "✨", emojiB: "🚀", color: "var(--ca-yellow-soft)", bg: "var(--ca-yellow-soft)", dark: false },
    { labelEs: "Desarrollo Cloud", labelEn: "Cloud Engineering", titleEs: "Desarrollo Cloud", titleEn: "Cloud Engineering", emojiA: "💻", emojiB: "☁️", color: "var(--ca-mint)", bg: "var(--ca-mint)", dark: false },
    { labelEs: "PropTech & GIS 360°", labelEn: "PropTech & 360° GIS", titleEs: "PropTech & GIS 360°", titleEn: "PropTech & 360° GIS", emojiA: "🗺️", emojiB: "🏢", color: "var(--ca-cyan)", bg: "var(--ca-cyan)", dark: false },
    { labelEs: "FinTech & SUNAT", labelEn: "FinTech & SUNAT", titleEs: "FinTech & SUNAT", titleEn: "FinTech & SUNAT", emojiA: "💳", emojiB: "⚡", color: "var(--ca-pink-soft)", bg: "var(--ca-pink-soft)", dark: false },
  ],
  titleEs: "NOSOTROS",
  titleEn: "ABOUT",
  cardLabelEs: "Bio empresarial",
  cardLabelEn: "Main bio",
  storyLabelEs: "Principios",
  storyLabelEn: "Story",
  workLabelEs: "Trayectoria",
  workLabelEn: "Work",
  bodyPart1Es: "Somos un estudio de software y arquitectura cloud que transforma problemas complejos en sistemas simples y robustos.",
  bodyPart1En: "We are a software studio and cloud architecture hub turning complex problems into simple, robust systems.",
  bodyPart2Es: "Cuidamos los detalles operativos, la resiliencia en obra y el código que respalda negocios reales.",
  bodyPart2En: "We obsess over operational edge cases, field resilience, and mission-critical engineering.",
  storyParagraphs: [
    {
      es: "En Archity diseñamos y desplegamos plataformas de misión crítica: sistemas inmobiliarios (PropTech), motores de cobranza y facturación electrónica (FinTech), ERPs industriales y suites clínicas.",
      en: "At Archity we engineer mission-critical platforms: real estate PropTech, FinTech collection and billing engines, industrial ERPs, and clinical suites.",
    },
    {
      es: "Desarrollamos software para los momentos donde no hay margen de error: contratos con firma digital, cronogramas de amortización, despacho de concreto en plantas industriales o emisión ante SUNAT en milisegundos. Cuando una pantalla falla ahí, se detiene una operación. Por eso resolvemos lo que otros esquivan: la resiliencia en red, la conciliación automática y la experiencia clara.",
      en: "We build software for high-stakes operational moments: digital contracts, financial amortizations, automated concrete batching, or instant SUNAT tax authorization. When software fails there, business stops. That's why we focus on what most skip: offline resilience, automated reconciliation, and effortless UX.",
    },
    {
      es: "Nuestra metodología combina ingeniería de sistemas estricta con diseño de producto obvio. Nos sentamos con los operadores en obra, con los contadores y con los usuarios reales, prototipamos rápido y pulimos hasta que cada flujo se sienta natural e intuitivo.",
      en: "Our approach couples rigorous systems engineering with intuitive product design. We shadow plant operators, accountants, and field users, prototype rapidly, and cut complexity until only what matters remains.",
    },
    {
      es: "Hoy impulsamos plataformas líderes como AltoPlanta, Vinkula CRM, Sencillo FinTech y el ERP de Grupo Pineda, transformando la gestión digital en el Perú.",
      en: "Today we power production platforms like AltoPlanta, Vinkula CRM, Sencillo FinTech, and the industrial ERP of Grupo Pineda, setting new standards for business software in Peru.",
    },
  ],
  calloutEs: "Right now en Archity: expandiendo la suite PropTech AltoPlanta y el motor SUNAT UBL 2.1 para conectar a empresas de todo el país en tiempo real.",
  calloutEn: "Right now at Archity: expanding the AltoPlanta PropTech suite and SUNAT UBL 2.1 engine to connect enterprises across the country in real-time.",
  noteEs: "Impulsados de principio a fin por arquitectura limpia, observabilidad continua y tecnología orientada a resultados reales.",
  noteEn: "Driven start to finish by clean architecture, continuous observability, and real-world impact.",
  principles: [
    {
      titleEs: "Empieza por el porqué",
      titleEn: "Start with the why",
      bodyEs:
        "Antes de escribir código o abrir una herramienta de diseño, definimos el problema de negocio y quién lo opera. Saltarse eso es construir software costoso que nadie usa. Cada plataforma exitosa comenzó con una mejor pregunta.",
      bodyEn:
        "Before writing code or opening a design tool, we pin down the core business bottleneck and who will operate it. Skip that and you ship expensive software nobody needed. Every successful system starts with a better question.",
      noteEs: "preguntas antes que código.",
      noteEn: "questions before pixels.",
      bg: "var(--ca-yellow-soft)",
      tilt: "-rotate-1",
      tapes: ["-left-4 -top-2 h-5 w-16 -rotate-[38deg]", "-right-4 -top-2 h-5 w-16 rotate-[38deg]"],
    },
    {
      titleEs: "Diseña para un mal día",
      titleEn: "Design for a bad day",
      bodyEs:
        "Nadie usa un software empresarial descansado, con fibra óptica perfecta y tiempo de sobra. Diseñamos para el operador en obra con señal intermitente, el contador al cierre de mes y el cliente apurado. Ahí es donde el buen software gana su valor.",
      bodyEn:
        "Nobody uses business software fully rested, on high-speed fiber, with time to spare. We design for the field worker on spotty 3G, the accountant during month-end closing, and the rushed buyer. That's where solid engineering shines.",
      noteEs: "¡aquí no hay usuarios perfectos!",
      noteEn: "no perfect users here!",
      bg: "var(--ca-mint)",
      tilt: "rotate-1",
      tapes: ["-left-4 -top-2 h-5 w-16 -rotate-[38deg]", "-right-4 -top-2 h-5 w-16 rotate-[38deg]"],
    },
    {
      titleEs: "Construye con el equipo",
      titleEn: "Build with the team",
      bodyEs:
        "Las arquitecturas más sólidas que hemos lanzado nacieron de iterar directamente con ingenieros de planta, contadores y gerentes desde el primer boceto. Es mejor iterar un martes en pizarra que encariñarse con una idea el viernes. Construimos mejor en equipo.",
      bodyEn:
        "The most resilient architectures we've deployed came from engineers, operators, and stakeholders testing early sketches. We'd rather iterate fast on a whiteboard on Tuesday than cling to a flawed mockup on Friday. We build better together.",
      noteEs: "nosotros, no yo.",
      noteEn: "us, not me.",
      bg: "var(--ca-pink-soft)",
      tilt: "-rotate-1",
      tapes: ["-left-4 -top-2 h-5 w-16 -rotate-[38deg]", "-right-4 -top-2 h-5 w-16 rotate-[38deg]"],
    },
  ],
  work: [
    {
      roleEs: "Fundación & Plataforma PropTech SaaS 360°",
      roleEn: "Founder & 360° PropTech SaaS Platform",
      companyEs: "AltoPlanta · Inmobiliaria Flamingo",
      companyEn: "AltoPlanta · Flamingo Real Estate",
      periodEs: "2024 a Hoy",
      periodEn: "2024 to Present",
    },
    {
      roleEs: "Arquitectura ERP Industrial & Plantas Concreto",
      roleEn: "Industrial ERP Architecture & Concrete Plants",
      companyEs: "Consorcio Grupo Pineda · MATEPCO / ROCAFER",
      companyEn: "Grupo Pineda Consortium · MATEPCO / ROCAFER",
      periodEs: "2021 a 2024",
      periodEn: "2021 to 2024",
    },
    {
      roleEs: "Core FinTech, Amortización & CRM WhatsApp AI",
      roleEn: "FinTech Core, Amortization & WhatsApp AI CRM",
      companyEs: "Vinkula CRM & Sencillo FinTech",
      companyEn: "Vinkula CRM & Sencillo FinTech",
      periodEs: "2021 a Hoy",
      periodEn: "2021 to Present",
    },
    {
      roleEs: "Estudio de Software & Arquitectura de Sistemas",
      roleEn: "Software Studio & Systems Architecture",
      companyEs: "Archity Software Studio",
      companyEn: "Archity Software Studio",
      periodEs: "2019 a Hoy",
      periodEn: "2019 to Present",
    },
  ],
};

// LOS 5 PROYECTOS ESPECÍFICOS SOLICITADOS CON SUS LOGOS OFICIALES:
// 1. AltoPlanta
// 2. Vinkula
// 3. Sencillo
// 4. Proyecto Flamingo (EN CARPETA ROSA)
// 5. Grupo Pineda (EN CARPETA AMARILLA CON LETRAS NEGRAS AL REVÉS)
export const featuredProjects: ProjectItem[] = [
  {
    id: "altoplanta",
    slug: "altoplanta",
    number: "Proyecto 01",
    dateEs: "Mar 19, 2026",
    dateEn: "Mar 19, 2026",
    title: "AltoPlanta",
    taglineEs: "Cartografía interactiva GIS, digitalización CAD .DXF y recorridos virtuales 360° para inmobiliarias.",
    taglineEn: "Interactive GIS cartography, CAD .DXF digitization, and 360° virtual tours for real estate.",
    descriptionEs:
      "Plataforma SaaS PropTech de ventas inmobiliarias con planos georreferenciados sobre Google Maps JS API, portales White-Label y sincronización de lotes.",
    descriptionEn:
      "SaaS PropTech platform for real estate sales featuring georeferenced cadastral maps over Google Maps, White-Label portals, and lot syncing.",
    category1: "PropTech",
    category2: "Cartografía GIS",
    folderColor: "var(--ca-cyan)",
    logoUrl: "/logos/altoplanta-logo.svg",
    accentColor: "#2b57d6",
    demoUrl: "/productos/altoplanta",
    stats: [
      { label: "Lotes Cartografiados", value: "+2,400" },
      { label: "Carga de Mapa", value: "< 1.2s" },
      { label: "Visor 360°", value: "8K HDR" },
    ],
  },
  {
    id: "vinkula",
    slug: "vinkula",
    number: "Proyecto 02",
    dateEs: "Mar 2, 2026",
    dateEn: "Mar 2, 2026",
    title: "Vinkula CRM",
    taglineEs: "Suite CRM inmobiliaria con embudo reactivo, bandeja de WhatsApp Cloud API y agentes IA 24/7.",
    taglineEn: "Real estate CRM suite with reactive Kanban funnel, WhatsApp Cloud API inbox, and 24/7 AI agents.",
    descriptionEs:
      "CRM multi-tenant inspirado en Twenty CRM con vista Spreadsheet reactiva, cotizaciones en PDF en 1 clic y bot calificador con Google Gemini.",
    descriptionEn:
      "Multi-tenant CRM with reactive spreadsheet view, 1-click PDF quotations, and automated lead qualification with Google Gemini.",
    category1: "CRM Inmobiliario",
    category2: "WhatsApp AI",
    folderColor: "var(--ca-mint)",
    logoUrl: "/logos/vinkula-logo.svg",
    accentColor: "#16b06a",
    demoUrl: "/productos/vinkula",
    stats: [
      { label: "Tiempo de Respuesta", value: "0.8s" },
      { label: "Leads Gestionados", value: "+18,500" },
      { label: "Disponibilidad Bot", value: "99.98%" },
    ],
  },
  {
    id: "sencillo",
    slug: "sencillo",
    number: "Proyecto 03",
    dateEs: "Feb 14, 2026",
    dateEn: "Feb 14, 2026",
    title: "Sencillo",
    taglineEs: "Core FinTech de cobranzas, amortización francesa / 0% TEA, letras y conciliación bancaria.",
    taglineEn: "FinTech amortization engine, French/0% APR schedules, promissory notes, and automated reconciliation.",
    descriptionEs:
      "Motor financiero con cálculo diario de mora compensatoria, emisión de recibos y conciliación automática vía Webhooks de Mercado Pago.",
    descriptionEn:
      "Financial engine with daily penalty interest calculation, receipt generation, and automated reconciliation via Mercado Pago Webhooks.",
    category1: "FinTech",
    category2: "Amortización & SUNAT",
    folderColor: "var(--ca-yellow-soft)",
    logoUrl: "/logos/sencillo-logo.svg",
    accentColor: "#f7c948",
    demoUrl: "/productos/sencillo",
    stats: [
      { label: "Letras Cobradas", value: "+S/ 4.8M" },
      { label: "Conciliación Webhooks", value: "Tiempo Real" },
      { label: "Kardex Auditable", value: "100%" },
    ],
  },
  {
    id: "proyect-flamingo",
    slug: "proyect-flamingo",
    number: "Proyecto 04",
    dateEs: "Ene 20, 2026",
    dateEn: "Jan 20, 2026",
    title: "Proyecto Flamingo",
    taglineEs: "Showroom interactivo 360° con vuelos de dron multicapa y plano interactivo de 133 lotes.",
    taglineEn: "Interactive 360° showroom with multi-layer drone flights and interactive 133-lot masterplan.",
    descriptionEs:
      "Aero-visor inmobiliario desarrollado para Inmobiliaria Flamingo con cambio de modo Día/Noche, 4 modelos de casa y calibración visual por OpenCV.",
    descriptionEn:
      "Interactive aerial showroom built for Inmobiliaria Flamingo featuring Day/Night modes, 4 house models, and OpenCV-assisted alignment.",
    category1: "Inmobiliaria",
    category2: "Showroom 360°",
    // DE PREFERENCIA EN LA CARPETA ROSA SOLICITADA POR EL USUARIO:
    folderColor: "var(--ca-magenta)",
    textColorClass: "text-white",
    logoUrl: "/logos/flamingo-logo.png",
    accentColor: "#ff4d8d",
    demoUrl: "/productos/proyect-flamingo",
    stats: [
      { label: "Lotes Habilitados", value: "133 Lotes" },
      { label: "Transición Dron", value: "0ms Crossfade" },
      { label: "Visor Aéreo", value: "Full HD 60fps" },
    ],
  },
  {
    id: "grupo-pineda",
    slug: "grupo-pineda",
    number: "Proyecto 05",
    dateEs: "Ene 2, 2026",
    dateEn: "Jan 2, 2026",
    title: "Grupo Pineda",
    taglineEs: "ERP multi-empresa para plantas de concreto premezclado, canteras chancadoras y flota pesada.",
    taglineEn: "Multi-company industrial ERP for ready-mix concrete plants, aggregate quarries, and heavy fleet.",
    descriptionEs:
      "Sistema centralizado para MATEPCO (Tarapoto, Moyobamba, Chachapoyas), cantera ROCAFER (780 TM/día), flota SERVIPIPA y distribuidora PRINCOR.",
    descriptionEn:
      "Centralized ERP managing MATEPCO concrete batching plants, ROCAFER quarry (780 MT/day), SERVIPIPA fleet, and PRINCOR distribution.",
    category1: "ERP Industrial",
    category2: "Concreto & Canteras",
    // DE PREFERENCIA EN LA CARPETA AMARILLA CON LETRAS NEGRAS AL REVÉS SOLICITADA POR EL USUARIO:
    folderColor: "var(--ca-yellow)",
    textColorClass: "text-[var(--ca-ink)]",
    mirrorTitle: true, // Letras al revés
    logoUrl: "/logos/grupo-pineda-logo.svg",
    accentColor: "#f7c948",
    demoUrl: "/productos/grupo-pineda",
    stats: [
      { label: "Plantas Concreto", value: "3 Sedes" },
      { label: "Producción Cantera", value: "780 TM/Día" },
      { label: "Monitoreo Flota", value: "GPS Tiempo Real" },
    ],
  },
];

export const trustedLogos = [
  {
    name: "Inmobiliaria Flamingo",
    sub: "Flamingo Residencial",
    logo: "/logos/flamingo-trusted.png",
    link: "/productos/proyect-flamingo",
  },
  {
    name: "Peru Builds",
    sub: "JFS Inversiones Inmobiliarias SAC",
    logo: "/logos/peru-builds-logo.png",
    link: "/case-studies",
  },
  {
    name: "Consorcio Grupo Pineda",
    sub: "MATEPCO · ROCAFER · SERVIPIPA",
    logo: "/logos/grupo-pineda-logo.svg",
    link: "/productos/grupo-pineda",
  },
];

export const trustedClients = trustedLogos;

export const projectsData = featuredProjects.map((p) => ({
  ...p,
  number: p.number,
  date: p.dateEs,
  dateEs: p.dateEs,
  dateEn: p.dateEn,
  title: p.title,
  tagline: p.taglineEs,
  taglineEs: p.taglineEs,
  taglineEn: p.taglineEn,
  descEs: p.descriptionEs,
  descEn: p.descriptionEn,
  category1: p.category1,
  category2: p.category2,
  color: p.folderColor,
  folderColor: p.folderColor,
  darkText: p.mirrorTitle || p.textColorClass?.includes("ca-ink"),
  image: p.logoUrl,
  logoUrl: p.logoUrl,
  link: p.demoUrl || `/productos/${p.slug}`,
  demoUrl: p.demoUrl || `/productos/${p.slug}`,
  mirrorTitle: p.mirrorTitle,
}));

export const contactData = {
  titleEs: "Hablemos",
  titleEn: "Let's talk",
  descriptionEs: "¿Tienes un proyecto, un problema difícil o solo quieres saludar? Envíalo. Leemos cada mensaje.",
  descriptionEn: "Got a project, a hard problem, or just want to say hi? Send it over. We read every message.",
  commentAuthor: "Archity Studio",
  commentAvatar: "/mascot/archity-mascot-avatar.jpg",
  commentNoteEs: "Abiertos a trabajo por contrato, proyectos de software y alianzas tecnológicas.",
  commentNoteEn: "Open to contract work, software projects, and tech partnerships.",
  commentReactions: "1",
  email: "contacto@archity.pe",
  phone: "+51 940 771 896",
  whatsappUrl: "https://wa.me/51940771896?text=Hola%20Archity,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20software.",
  linkedinUrl: "https://www.linkedin.com/company/archit-tech/posts/?viewAsMember=true",
  facebookUrl: "https://www.facebook.com/profile.php?id=61590953622590",
  githubUrl: "https://github.com/DraftraX",
  addressEs: "Tarapoto, San Martín · Lima, Perú",
  addressEn: "Tarapoto, San Martin · Lima, Peru",
};

// Servicios oficiales de Archity para la página Servicios (/playground)
export const servicesData = [
  {
    id: "saas-cloud",
    titleEs: "Desarrollo SaaS & Plataformas Cloud",
    titleEn: "SaaS Development & Cloud Platforms",
    category: "Cloud & Multi-Tenant",
    descEs:
      "Arquitectura de software escalable con bases de datos multi-tenant, microservicios en Docker/Linux, colas Redis/Celery y autenticación segura para productos digitales de alto tráfico.",
    descEn:
      "Scalable software architecture with multi-tenant databases, Docker/Linux microservices, Redis/Celery task queues, and secure auth for high-traffic digital products.",
    img: "/services/service-saas-cloud.jpg",
    tags: ["Astro 5", "Next.js", "Python", "Docker", "AWS/Vercel"],
    color: "var(--ca-yellow)",
  },
  {
    id: "gis-proptech",
    titleEs: "PropTech & Cartografía GIS 360°",
    titleEn: "PropTech & 360° GIS Mapping",
    category: "GIS & Inmobiliaria",
    descEs:
      "Digitalización de planos catastrales y archivos CAD .DXF georreferenciados sobre Google Maps JS API, con visores aéreos 360° en 8K y portales White-Label para ventas de condominios.",
    descEn:
      "Digitization of cadastral blueprints and georeferenced CAD .DXF files over Google Maps, with 8K 360° aerial tours and White-Label portals for condominium sales.",
    img: "/services/service-gis-360.jpg",
    tags: ["Google Maps API", "PostGIS", "CAD .DXF", "Three.js", "OpenCV"],
    color: "var(--ca-cyan)",
  },
  {
    id: "erp-industrial",
    titleEs: "ERPs Industriales & Control de Planta",
    titleEn: "Industrial ERPs & Batching Plant Systems",
    category: "Industria & Operaciones",
    descEs:
      "Sistemas empresariales a medida para plantas de concreto premezclado, canteras de agregados y flotas de transporte pesado, con despacho automatizado, control de stock y telemetría.",
    descEn:
      "Custom ERPs for ready-mix concrete plants, aggregate quarries, and heavy transport fleets, with automated batching, inventory tracking, and fleet telemetry.",
    img: "/services/service-erp-industrial.jpg",
    tags: ["Django 5", "PostgreSQL", "GPS Telemetry", "Redis", "Nginx"],
    color: "var(--ca-mint)",
  },
  {
    id: "fintech-amortizacion",
    titleEs: "FinTech, Amortización & Cobranzas",
    titleEn: "FinTech, Amortization & Collections",
    category: "Core Financiero",
    descEs:
      "Plataformas financieras para emisión de contratos de financiamiento directo, cronogramas de pago (sistema francés / 0% interés), cálculo automático de mora diaria y conciliación bancaria.",
    descEn:
      "Financial core for direct financing contracts, amortization schedules (French system / 0% APR), automatic daily interest penalty calculations, and reconciliation.",
    img: "/services/service-fintech-contracts.jpg",
    tags: ["Mercado Pago API", "Webhooks", "Contratos Digitales", "Kardex"],
    color: "var(--ca-yellow-soft)",
  },
  {
    id: "sunat-billing",
    titleEs: "Facturación Electrónica SUNAT UBL 2.1",
    titleEn: "SUNAT Electronic Invoicing UBL 2.1",
    category: "GovTech & Tributario",
    descEs:
      "Motor multi-tenant de emisión electrónica ante SUNAT con firma digital XMLDSig RSA-SHA256, envío directo por SOAP a servidores OSE/SEE, CDR instantáneo y generación de PDF con código QR.",
    descEn:
      "Multi-tenant electronic invoicing engine with XMLDSig RSA-SHA256 digital signature, direct SOAP dispatch to SUNAT OSE/SEE, instant CDR, and QR PDF generation.",
    img: "/services/service-sunat-fintech.jpg",
    tags: ["XMLDSig", "RSA-SHA256", "SOAP SUNAT", "UBL 2.1", "Microservicios"],
    color: "var(--ca-pink-soft)",
  },
  {
    id: "crm-whatsapp-ai",
    titleEs: "CRM Inmobiliario & WhatsApp AI 24/7",
    titleEn: "Real Estate CRM & 24/7 WhatsApp AI",
    category: "IA & Omnicanal",
    descEs:
      "Bandeja compartida para equipos de ventas integrada con la API Cloud oficial de WhatsApp, embudo de prospección visual y agentes inteligentes impulsados por Google Gemini para responder clientes 24/7.",
    descEn:
      "Shared sales inbox integrated with the official WhatsApp Cloud API, visual sales pipeline, and smart agents powered by Google Gemini to qualify leads 24/7.",
    img: "/services/service-crm-ai-3d.jpg",
    tags: ["WhatsApp Cloud API", "Google Gemini AI", "Spreadsheet UI", "Webhooks"],
    color: "var(--ca-green)",
  },
  {
    id: "healthtech-clinica",
    titleEs: "HealthTech & Sistemas Clínicos",
    titleEn: "HealthTech & Clinical Suites",
    category: "Salud & Trazabilidad",
    descEs:
      "Plataformas para bancos de sangre y centros médicos con trazabilidad completa de unidades de hemoterapia, donantes voluntarios, medicina transfusional y campañas hospitalarias.",
    descEn:
      "Platforms for blood banks and medical centers with end-to-end traceability of hemotherapy units, volunteer donors, transfusion medicine, and hospital drives.",
    img: "/services/service-healthtech.jpg",
    tags: ["Trazabilidad Clínica", "Aféresis", "PostgreSQL", "Cifrado SSL"],
    color: "var(--ca-cyan)",
  },
];

export const playgroundItems = [
  {
    src: "/mascot/archity-mascot-avatar.jpg",
    captionEs: "2026",
    captionEn: "2026",
    color: "var(--ca-yellow)",
    tilt: "-rotate-6",
    w: "w-56 sm:w-64",
    left: "10%",
    top: "20%",
  },
  {
    src: "/mascot/archity-mascot-3d-systems.jpg",
    captionEs: "estudio",
    captionEn: "studio",
    color: "var(--ca-mint)",
    tilt: "rotate-6",
    w: "w-56 sm:w-64",
    left: "70%",
    top: "25%",
  },
];
