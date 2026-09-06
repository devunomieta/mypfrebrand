export const site = {
  name: 'Joseph Unomieta',
  tagline: 'Senior Frontend Engineer',
  roleLine: 'Senior Frontend Engineer — building fast, resilient product UIs',
  industries: ['Sports', 'E-Commerce', 'Education', 'Fintech'],
  punchline:
    "I don't sell a tech stack. I ship interfaces that hold up — under real users, real data, and real deadlines.",
  intro:
    "Six years turning ambiguous product problems into shipped, maintainable frontends. I work close to the metal of the browser and close to the business — equally comfortable profiling a render loop or scoping a roadmap.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.devunomieta.xyz',
  location: 'Nigeria — working remote, worldwide',
  availability: 'Open to senior frontend & product-engineering roles',
  contact: {
    website: 'www.devunomieta.xyz',
    handle: '@DEVUNOMIETA',
    phone: '+234 (815) 6841-952',
    email: 'lionelunomieta@gmail.com',
  },
  socials: {
    x: 'https://x.com/DEVUNOMIETA',
    linkedin: 'https://linkedin.com/in/devunomieta',
    github: 'https://github.com/DEVUNOMIETA',
  },
};

export const metrics: { value: string; label: string }[] = [
  { value: '6 yrs', label: 'Shipping production frontends' },
  { value: '4', label: 'Industries delivered in' },
  { value: '60%', label: 'Team productivity lift as CTO' },
  { value: '100%', label: 'Client apps delivered on time' },
];

export const stack: { group: string; items: string[] }[] = [
  {
    group: 'Core',
    items: ['TypeScript', 'React', 'Next.js', 'Remix', 'JavaScript (ES2023)'],
  },
  {
    group: 'UI & Motion',
    items: ['Tailwind CSS', 'CSS Architecture', 'Framer Motion', 'Radix', 'Design Systems'],
  },
  {
    group: '3D & Graphics',
    items: ['Three.js', 'React Three Fiber', 'WebGL / GLSL', 'Canvas 2D', 'SVG'],
  },
  {
    group: 'Platform',
    items: ['Node.js', 'GraphQL', 'REST', 'Sanity', 'PostgreSQL'],
  },
  {
    group: 'Quality',
    items: ['Playwright', 'Vitest', 'Testing Library', 'Web Vitals', 'a11y / WCAG'],
  },
  {
    group: 'Delivery',
    items: ['CI/CD', 'Vercel', 'Storybook', 'Feature flags', 'Observability'],
  },
];

export const pillars = [
  {
    title: 'Ships end-to-end',
    sub: 'Idea to live product — architecture, UI, release, and the dashboard that watches it after.',
    icon: 'rocket',
  },
  {
    title: 'Bilingual by design',
    sub: 'Fluent in render performance and in revenue — I translate between the two without a handoff.',
    icon: 'chat',
  },
  {
    title: 'Cross-industry, not scattered',
    sub: 'Same engineering instinct across sports, fintech, retail, and education — different constraints, one standard.',
    icon: 'compass',
  },
  {
    title: 'Built to last',
    sub: 'Typed, tested, documented. Interfaces a team can extend a year later without archaeology.',
    icon: 'shield',
  },
];

export const capabilities: { no: string; title: string; body: string; tags: string[] }[] = [
  {
    no: '01',
    title: 'Product UI engineering',
    body: 'Complex, stateful interfaces — dashboards, editors, multi-role platforms — built component-first with a design system underneath so they stay consistent as they grow.',
    tags: ['React', 'Next.js', 'TypeScript', 'Design systems'],
  },
  {
    no: '02',
    title: 'Performance & Core Web Vitals',
    body: 'Profiling real render paths, cutting bundle weight, streaming server components, and getting LCP/INP into the green on mid-range devices and slow networks.',
    tags: ['Web Vitals', 'Profiling', 'Streaming SSR', 'Edge'],
  },
  {
    no: '03',
    title: 'Interactive & 3D interfaces',
    body: 'WebGL and Three.js work that earns its place — 3D product views, spatial navigation, motion systems — with graceful fallbacks and a strict performance budget.',
    tags: ['Three.js', 'R3F', 'GLSL', 'Motion'],
  },
  {
    no: '04',
    title: 'Frontend architecture & DX',
    body: 'Monorepo structure, typed API boundaries, CI gates, Storybook, and the conventions that let a team of engineers move fast without breaking each other.',
    tags: ['Monorepo', 'CI/CD', 'Testing', 'Tooling'],
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
    note: '4 major client apps delivered 100% on time and on budget. Set the frontend standards, tooling, and review culture the team still runs on.',
  },
  {
    company: 'State Min. of Info. & Comms. (NYSC)',
    role: 'IT Specialist',
    dates: 'Feb – Dec 2025',
    stats: [],
    note: "Replaced analogue systems with digital tools across the Commissioner's office; trained civil servants, staff, and corps members to run them.",
  },
  {
    company: 'Netisens ICT Academy',
    role: 'Project / Product Management Tutor',
    dates: 'Oct 2023 – Jul 2024',
    stats: [],
    note: 'Tutored students to PMI standard; built the practical, case-study curriculum from scratch.',
  },
];
