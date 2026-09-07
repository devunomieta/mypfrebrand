export const site = {
  name: 'Joseph Unomieta',
  tagline: 'Problem-First Product Engineer',
  roleLine: 'Problem-First Product Engineer',
  industries: ['Sports', 'E-Commerce', 'Education', 'Fintech'],
  punchline:
    "I don't sell a tech stack. I solve business problems that happen to need software.",
  intro:
    'Six years building and leading products end-to-end — a sports scouting platform, an automated savings and loans system, e-commerce storefronts, and the digital tools that moved a state ministry off analogue systems. My path runs from frontend to fullstack, startup CTO to government IT lead, developer to product manager — so I can own a problem from the code to the business outcome.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.devunomieta.xyz',
  location: 'Nigeria — working remote, worldwide',
  availability: 'Available for new problems',
  contact: {
    website: 'www.devunomieta.xyz',
    handle: '@DEVUNOMIETA',
    phone: '+234 (815) 6841-952',
    email: 'devunomieta@gmail.com',
  },
  socials: {
    x: 'https://x.com/DEVUNOMIETA',
    linkedin: 'https://linkedin.com/in/devunomieta',
    github: 'https://github.com/DEVUNOMIETA',
  },
};

// Digital twin of the printed complimentary card (docs/interactive-business-card.md).
// One source of truth so the print card and the web card can't drift.
const CV_DOC_ID = '1kC1weq0hE66fzUcXEVztZD6omJ3jkigStzWfv2C96ME';

export const card = {
  name: 'Joseph Unomieta',
  role: 'Software Engineer & Product Manager',
  tagline: 'Building Scalable Software Solutions & Driving Product Growth',
  email: 'devunomieta@gmail.com',
  linktree: 'https://linktr.ee/devunomieta',
  cv: {
    view: `https://docs.google.com/document/d/${CV_DOC_ID}/preview`,
    pdf: `https://docs.google.com/document/d/${CV_DOC_ID}/export?format=pdf`,
  },
  // The two faces of the printed card, extracted from docs/C A R D.pdf.
  images: {
    front: '/card/card-front.jpg',
    back: '/card/card-back.jpg',
    // native pixel size of the artwork — drives the flip frame's aspect ratio
    width: 1600,
    height: 907,
  },
  // Both numbers are reachable on WhatsApp.
  numbers: [
    {
      display: '0815 684 1952',
      whatsapp: 'https://wa.me/2348156841952?text=Hi%20Joseph%2C%20I%20found%20your%20card',
      tel: 'tel:+2348156841952',
      primary: true,
    },
    {
      display: '0704 989 8962',
      whatsapp: 'https://wa.me/2347049898962?text=Hi%20Joseph%2C%20I%20found%20your%20card',
      tel: 'tel:+2347049898962',
      primary: false,
    },
  ],
} as const;

export const metrics: { value: string; label: string }[] = [
  { value: '6 yrs', label: 'Building & leading products end-to-end' },
  { value: '4', label: 'Industries delivered in' },
  { value: '60%', label: 'Engineering productivity lift as CTO' },
  { value: '100%', label: 'Client apps delivered on time, on budget' },
];

// How the work actually gets done — no tech-stack list, by design.
export const workflow: { no: string; title: string; body: string }[] = [
  {
    no: '01',
    title: 'Discovery',
    body: 'Get to the real problem before any code. Talk to the people stuck on it, map how the work actually flows, and find where it breaks.',
  },
  {
    no: '02',
    title: 'Delivery',
    body: 'Build and ship it end-to-end — architecture, product, and launch. Scoped tight, delivered on time and on budget.',
  },
  {
    no: '03',
    title: 'Operations',
    body: 'Stay past the launch: automation, dashboards, and training so the system keeps running long after the handover.',
  },
];

export const pillars = [
  {
    title: 'Ships end-to-end',
    sub: 'Idea to live product — not just code.',
    icon: 'rocket',
  },
  {
    title: 'Bilingual by design',
    sub: 'Equally fluent in engineering and business outcomes.',
    icon: 'chat',
  },
  {
    title: 'Cross-industry, not scattered',
    sub: 'Same instinct, different battlefields — sports, fintech, retail, education.',
    icon: 'compass',
  },
  {
    title: 'Built to last',
    sub: 'Automation and dashboards that outlive the launch.',
    icon: 'shield',
  },
];

export const capabilities: { no: string; title: string; body: string; tags: string[] }[] = [
  {
    no: '01',
    title: 'Product & platform builds',
    body: 'Full applications from zero — multi-role platforms, member dashboards, admin tooling. CenterKick and Mary’s Thrift Finance were built and led end-to-end.',
    tags: ['Web apps', 'Dashboards', 'CMS / RBAC', 'APIs'],
  },
  {
    no: '02',
    title: 'Automation & internal tools',
    body: 'Replacing manual and analogue processes with software that runs itself: contribution tracking, loan management, a state ministry moved off paper.',
    tags: ['Process automation', 'Admin tooling', 'Self-service'],
  },
  {
    no: '03',
    title: 'Technical leadership',
    body: 'Owning delivery as CTO and General Manager — team standards, hiring, and shipping four major client apps 100% on time and on budget.',
    tags: ['CTO / GM', 'Delivery', 'Team standards', 'Roadmap'],
  },
  {
    no: '04',
    title: 'Emerging tech, applied',
    body: 'Research-led product decisions and explainable AI built for local realities — see Affiong-AI and the ed-tech work at Hachstacks.',
    tags: ['Explainable AI', 'Research', 'Ed-tech'],
  },
];

export const timeline = [
  {
    company: 'Netisens Tech Ltd',
    role: 'CTO → General Manager',
    dates: 'Apr 2023 – Jul 2024',
    stats: [
      ['60%', 'engineering productivity lift'],
      ['+40%', 'client satisfaction'],
    ],
    note: '4 major client apps delivered 100% on time, on budget.',
  },
  {
    company: 'State Min. of Info. & Comms. (NYSC)',
    role: 'IT Specialist',
    dates: 'Feb – Dec 2025',
    stats: [],
    note: "Replaced analogue systems with digital tools across the Commissioner's office; trained civil servants, staff, and corps members.",
  },
  {
    company: 'Netisens ICT Academy',
    role: 'Project / Product Management Tutor',
    dates: 'Oct 2023 – Jul 2024',
    stats: [],
    note: 'Tutored students to PMI standard; built the practical, case-study curriculum.',
  },
];
