export interface ProjectItem {
  num: string;
  slug: string;
  dateEs: string;
  dateEn: string;
  title: string;
  shortDescEs: string;
  shortDescEn: string;
  coverImg: string;
  color: string;
  darkText: boolean;
  internalUrl: string;
  externalUrl: string;
  tagsEs: [string, string];
  tagsEn: [string, string];
}

export const heroData = {
  labelEs: "nuestro nombre es",
  labelEn: "my name is",
  nameDisplay: "ARCHITY",
  pill1Es: "Hacemos cosas",
  pill1En: "Made things",
  pill2Es: "Cuidamos los detalles",
  pill2En: "Sweat the details",
  roleEs: "Product Designer & Software",
  roleEn: "Product Designer",
  locationEs: "Lima, PE",
  locationEn: "Chicago, IL",
  statusEs: "Abiertos a nuevos proyectos y buenos problemas",
  statusEn: "Open to new work and good problems",
  titlePart1Es: "Diseñamos software que ",
  titlePart1En: "I design software that ",
  titlePart2Es: "se quita de tu camino.",
  titlePart2En: "gets out of your way.",
  ctaEs: "Contáctame",
  ctaEn: "Contact me",
  media0:
    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop",
  media1:
    "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=2071&auto=format&fit=crop",
};

export const bioData = {
  labelEs: "¡sobre mí!",
  labelEn: "about me!",
  badgeEs: "qué tal",
  badgeEn: "what's up",
  titleEs: "NOSOTROS",
  titleEn: "ABOUT",
  cardLabelEs: "Bio principal",
  cardLabelEn: "Main bio",
  bodyPart1Es:
    "Soy un diseñador de producto y estudio de software que se emociona haciendo que las cosas complicadas se sientan simples.",
  bodyPart1En:
    "I'm a product designer who gets a little too excited about making complicated things feel simple.",
  bodyPart2Es:
    "Cuidamos los pequeños detalles, los casos extremos que todos olvidan y lanzamos trabajo que genuinamente hace más fácil el día de alguien.",
  bodyPart2En:
    "I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier.",
  photo0: {
    src: "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=2071&auto=format&fit=crop",
    captionEs: "2026",
    captionEn: "2026",
  },
  photo1: {
    src: "https://images.unsplash.com/photo-1663298172343-9238ba22cd30?q=80&w=927&auto=format&fit=crop",
    captionEs: "mi espacio",
    captionEn: "my workspace",
  },
  skills: [
    {
      labelEs: "Diseño de Interacción",
      labelEn: "Interaction Design",
      color: "var(--ca-blue)",
      dark: true,
      emojiA: "✨",
      emojiB: "🎨",
    },
    {
      labelEs: "Prototipado",
      labelEn: "Prototyping",
      color: "var(--ca-magenta)",
      dark: false,
      emojiA: "🎨",
      emojiB: "🧩",
    },
    {
      labelEs: "Investigación UX",
      labelEn: "User Research",
      color: "var(--ca-yellow)",
      dark: false,
      emojiA: "🧩",
      emojiB: "👀",
    },
    {
      labelEs: "Motion Design",
      labelEn: "Motion Design",
      color: "var(--ca-green)",
      dark: false,
      emojiA: "👀",
      emojiB: "💡",
    },
  ],
  storyParagraphs: [
    {
      es: "Paso la mayor parte de mis días en aplicaciones inmobiliarias, financieras e industriales, del tipo que la gente abre cuando tiene prisa, está distraída o un poco estresada. Una pantalla confusa ahí no solo es molesta: hace que alguien pierda una operación o dude de un pago. Por eso me siento con las partes que la mayoría salta: los errores, los estados vacíos y los momentos de qué-pasa-si.",
      en: "I spend most days on transit and money apps, the kind people open when they're rushed, distracted, or a little stressed. A confusing screen there isn't just annoying, it makes someone miss a bus or second-guess a payment. So I sit with the parts most people skip: the errors, the empty states, the what-happens-if moments.",
    },
    {
      es: "Las herramientas cambian pero mi forma de trabajar no. Me acerco a las personas que realmente usan el producto, boceto rápido y sigo recortando hasta que solo queda lo que importa. El buen diseño debe sentirse obvio en el momento en que lo ves, incluso cuando llegar ahí fue todo menos sencillo.",
      en: "The tools change but the way I work doesn't. I get close to the people actually using the thing, sketch fast, and keep cutting until only what matters is left. Good design should feel obvious the moment you see it, even when getting there was anything but.",
    },
  ],
  calloutEs:
    "Ahora mismo en Archity estamos rediseñando cómo las empresas inmobiliarias e industriales operan en la nube, para que gestionar un proyecto entero se sienta menos como resolver un rompecabezas y más como algo natural.",
  calloutEn:
    "Right now I'm at Wayline, redesigning how a whole city plans a trip, so catching the next train feels less like solving a puzzle and more like second nature.",
  noteEs:
    "Cuando no estoy diseñando, suelo desarmar alguna aplicación que me encanta para descubrir por qué una pantalla se siente sin esfuerzo y la siguiente me da ganas de cerrar la pestaña. Impulsado de principio a fin por cold brew.",
  noteEn:
    "When I'm not designing, I'm usually pulling apart some app I love to figure out why one screen feels effortless and the next one makes me want to close the tab. Fueled start to finish by cold brew.",
  storyLabelEs: "Historia",
  storyLabelEn: "Story",
  principles: [
    {
      titleEs: "Empieza por el porqué",
      titleEn: "Start with the why",
      bodyEs:
        "Antes de abrir una herramienta de diseño o escribir código, quiero saber qué estamos resolviendo realmente y para quién es. Si te saltas eso, lanzas algo pulido que nadie necesitaba. Cada buen proyecto que hemos hecho empezó con una mejor pregunta.",
      bodyEn:
        "Before I open a design tool, I want to know what we're actually solving and who it's for. Skip that and you ship something polished that nobody needed. Every good project I've done started with a better question.",
      noteEs: "preguntas antes que píxeles.",
      noteEn: "questions before pixels.",
      bg: "var(--ca-cyan)",
      tilt: "-rotate-1",
      tapes: [
        "-left-5 -top-2 h-5 w-16 -rotate-[40deg]",
        "-right-4 bottom-8 h-5 w-14 rotate-[62deg]",
      ],
    },
    {
      titleEs: "Diseña para un mal día",
      titleEn: "Design for a bad day",
      bodyEs:
        "Nadie usa tu producto descansado, con wifi rápido y tiempo de sobra. Diseño para el usuario apurado, el operador en obra y la señal inestable en campo. Ahí es donde el buen diseño se gana su lugar.",
      bodyEn:
        "Nobody uses your product rested, on fast wifi, with time to spare. I design for the rushed commuter, the tired parent, the spotty signal on the platform. That's where good design earns its keep.",
      noteEs: "¡aquí no hay usuarios perfectos!",
      noteEn: "no perfect users here!",
      bg: "var(--ca-yellow-soft)",
      tilt: "rotate-1",
      tapes: [
        "-right-5 -top-2 h-5 w-16 rotate-[40deg]",
        "-left-4 bottom-10 h-5 w-14 -rotate-[62deg]",
      ],
    },
    {
      titleEs: "Hazlo con el equipo",
      titleEn: "Make it with the team",
      bodyEs:
        "El mejor trabajo que hemos lanzado surgió de ingenieros y PMs encontrando detalles temprano, mientras aún era un boceto. Prefiero equivocarme en una pizarra el martes que encariñarme con un mockup el viernes. Lanzamos mejor juntos.",
      bodyEn:
        "The best work I've shipped came from engineers and PMs poking holes in it early, while it was still a rough sketch. I'd rather be wrong on a whiteboard Tuesday than precious about a mockup Friday. We ship better together.",
      noteEs: "nosotros, no yo.",
      noteEn: "us, not me.",
      bg: "var(--ca-purple)",
      tilt: "-rotate-2",
      tapes: [
        "-left-4 top-1/2 h-5 w-14 -rotate-[78deg]",
        "-right-5 -top-2 h-5 w-16 rotate-[36deg]",
      ],
    },
  ],
  workLabelEs: "Trayectoria",
  workLabelEn: "Work",
  work: [
    {
      roleEs: "Lead Product Designer & Arquitectura SaaS",
      roleEn: "Lead Product Designer",
      companyEs: "Archity · AltoPlanta & Inmobiliaria Flamingo",
      companyEn: "Wayline",
      periodEs: "2024 a Hoy",
      periodEn: "2024 to Now",
    },
    {
      roleEs: "Product Designer & Sistemas ERP",
      roleEn: "Product Designer",
      companyEs: "Grupo Pineda · Vinkula CRM & Sencillo",
      companyEn: "Formwork",
      periodEs: "2021 a 2024",
      periodEn: "2021 to 2024",
    },
    {
      roleEs: "Product Designer & Full-Stack",
      roleEn: "Product Designer",
      companyEs: "Halcyon Labs · Sistemas Digitales",
      companyEn: "Halcyon Labs",
      periodEs: "2019 a 2021",
      periodEn: "2019 to 2021",
    },
  ],
};

export const projectsData: ProjectItem[] = [
  {
    num: "01",
    slug: "altoplanta",
    dateEs: "19 Mar, 2026",
    dateEn: "Mar 19, 2026",
    title: "AltoPlanta",
    shortDescEs:
      "Haciendo que los planos CAD y mapas inmobiliarios de toda una ciudad se sientan simples de explorar.",
    shortDescEn:
      "Making a whole city's real estate CAD maps and 360° tours feel less like decoding a puzzle.",
    coverImg:
      "https://images.unsplash.com/photo-1746690052484-f49bee6e48c7?q=80&w=2070&auto=format&fit=crop",
    color: "var(--ca-blue)",
    darkText: false,
    internalUrl: "/productos/altoplanta",
    externalUrl: "https://altoplanta.com/",
    tagsEs: ["PropTech", "SaaS App"],
    tagsEn: ["Mobility", "Consumer App"],
  },
  {
    num: "02",
    slug: "sencillo",
    dateEs: "2 Mar, 2026",
    dateEn: "Mar 2, 2026",
    title: "Sencillo",
    shortDescEs:
      "De hojas de cálculo confusas a contratos, letras y cobranzas que finalmente se sienten claras.",
    shortDescEn:
      "From 'who owes who' to contracts and payments that finally feel shared.",
    coverImg:
      "https://cdn.dribbble.com/userupload/13712927/file/original-963ef9be53325cefd88bec052cdf2aa6.png?resize=2048x1536&vertical=center",
    color: "var(--ca-ink)",
    darkText: false,
    internalUrl: "/productos/sencillo",
    externalUrl: "https://sencillo.altoplanta.com/",
    tagsEs: ["Fintech", "Consumer App"],
    tagsEn: ["Fintech", "Consumer App"],
  },
  {
    num: "03",
    slug: "proyect-flamingo",
    dateEs: "2 Ene, 2026",
    dateEn: "Jan 2, 2026",
    title: "Flamingo",
    shortDescEs:
      "Llevando al comprador desde el vuelo en dron hasta elegir su lote ideal en 360° sin fricción.",
    shortDescEn:
      "Getting a home buyer from aerial drone view to choosing a lot without the panic.",
    coverImg:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    color: "var(--ca-yellow)",
    darkText: true,
    internalUrl: "/productos/proyect-flamingo",
    externalUrl: "https://proyect-flamingo.vercel.app/",
    tagsEs: ["Inmobiliaria", "Showroom 360°"],
    tagsEn: ["Dev Tools", "Onboarding"],
  },
  {
    num: "04",
    slug: "grupo-pineda",
    dateEs: "16 Mar, 2026",
    dateEn: "Mar 16, 2026",
    title: "Grupo Pineda",
    shortDescEs:
      "Ayudando a las plantas industriales y canteras a controlar su producción en tiempo real.",
    shortDescEn:
      "Helping industrial plants actually understand the production and telemetry they run daily.",
    coverImg:
      "https://cdn.dribbble.com/userupload/45634536/file/78267e4a088043e8a75ea78d6ecafce9.png?resize=2048x1536&vertical=center",
    color: "var(--ca-magenta)",
    darkText: false,
    internalUrl: "/productos/grupo-pineda",
    externalUrl: "https://grupopineda.pe/",
    tagsEs: ["ERP Industrial", "Data Design"],
    tagsEn: ["Climate", "Data Design"],
  },
];

export const trustedClients = [
  {
    name: "Inmobiliaria Flamingo Residencial",
    logo: "/logos/flamingo-trusted.png",
    bg: "var(--ca-yellow-soft)",
    tilt: "-rotate-2",
    href: "/productos/proyect-flamingo",
  },
  {
    name: "Peru Builds · JFS Inversiones Inmobiliarias SAC",
    logo: "/logos/peru-builds-logo.png",
    bg: "var(--ca-mint)",
    tilt: "rotate-2",
    href: "#work",
  },
];

export const playgroundItems = [
  {
    src: "https://images.unsplash.com/photo-1769750216011-28855a9aad37?q=80&w=987&auto=format&fit=crop",
    captionEs: "toma casual",
    captionEn: "random shot",
    left: "3%",
    top: "6%",
    w: "w-44 sm:w-64 lg:w-80",
    tilt: "-rotate-3",
    color: "var(--ca-yellow-soft)",
  },
  {
    src: "https://images.unsplash.com/photo-1761641466573-f240b6e446de?q=80&w=1065&auto=format&fit=crop",
    captionEs: "qué es esto",
    captionEn: "what is this",
    left: "56%",
    top: "2%",
    w: "w-36 sm:w-52 lg:w-64",
    tilt: "rotate-2",
    color: "var(--ca-purple)",
  },
  {
    src: "https://images.unsplash.com/photo-1611264327630-8090373c8cef?q=80&w=927&auto=format&fit=crop",
    captionEs: "hola mundo",
    captionEn: "hello world",
    left: "30%",
    top: "26%",
    w: "w-48 sm:w-72 lg:w-96",
    tilt: "rotate-3",
    color: "var(--ca-cyan)",
  },
  {
    src: "https://images.unsplash.com/photo-1655735223921-43367e3a36b5?q=80&w=2232&auto=format&fit=crop",
    captionEs: "primera vez",
    captionEn: "first time",
    left: "76%",
    top: "24%",
    w: "w-32 sm:w-48 lg:w-56",
    tilt: "-rotate-2",
    color: "var(--ca-yellow-soft)",
  },
  {
    src: "https://images.unsplash.com/photo-1617695744007-68ef55752789?q=80&w=1036&auto=format&fit=crop",
    captionEs: "toma 20",
    captionEn: "20th take",
    left: "6%",
    top: "48%",
    w: "w-40 sm:w-56 lg:w-72",
    tilt: "rotate-2",
    color: "var(--ca-cyan)",
  },
  {
    src: "https://images.unsplash.com/photo-1760008486599-e62d30e2ca95?q=80&w=2232&auto=format&fit=crop",
    captionEs: "prácticaaa",
    captionEn: "practiceee",
    left: "52%",
    top: "52%",
    w: "w-44 sm:w-64 lg:w-[22rem]",
    tilt: "-rotate-3",
    color: "var(--ca-purple)",
  },
  {
    src: "https://images.unsplash.com/photo-1782328497904-8beec6bd7962?q=80&w=2232&auto=format&fit=crop",
    captionEs: "mmh",
    captionEn: "uhm",
    left: "80%",
    top: "58%",
    w: "w-32 sm:w-44 lg:w-52",
    tilt: "rotate-3",
    color: "var(--ca-yellow-soft)",
  },
  {
    src: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=2232&auto=format&fit=crop",
    captionEs: "¡encontrado!",
    captionEn: "found!",
    left: "24%",
    top: "66%",
    w: "w-40 sm:w-56 lg:w-64",
    tilt: "-rotate-2",
    color: "var(--ca-purple)",
  },
];

export const contactData = {
  titleEs: "Hablemos",
  titleEn: "Let's talk",
  descriptionEs:
    "¿Tienes un proyecto, un problema difícil o solo quieres saludar? Envíalo. Leo cada mensaje.",
  descriptionEn:
    "Got a project, a hard problem, or just want to say hi? Send it over. I read every message.",
  commentAuthor: "Archity",
  commentAvatar:
    "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=2071&auto=format&fit=crop",
  commentNoteEs:
    "Abiertos a trabajo por contrato, proyectos full-time y conversaciones interesantes sobre problemas complejos de diseño y software.",
  commentNoteEn:
    "Open to contract work, full-time roles, and interesting conversations about hard design problems.",
  commentReactions: "1",
  bannerTaglineEs: "hagamos algo juntos",
  bannerTaglineEn: "let's make something together",
  bannerEs: "CONTACTO",
  bannerEn: "CONTACT",
  dropALineEs: "escríbeme",
  dropALineEn: "drop a line",
  sayHiEs: "di hola",
  sayHiEn: "say hi",
  email: "wmanuelga@gmail.com",
};
