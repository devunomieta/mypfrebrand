export type Project = {
  slug: string;
  industry: string;
  name: string;
  punchline: string;
  link?: string;
  status?: string;
  summary: string;
  problem: string;
  built: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'centerkick',
    industry: 'Sports',
    name: 'CenterKick',
    punchline: 'A scouting network, run like a league office.',
    link: 'centerkick.com',
    summary:
      'A full talent/scouting platform for players, agents, scouts, and clubs — built and led end-to-end.',
    problem:
      'Sports talent networks in the region were running on spreadsheets and WhatsApp groups — no shared system for player profiles, scouting notes, or tournament logistics.',
    built: [
      'Player, coach, and scout profiles',
      'Agent, scout, and club management tools',
      'Private team and tournament management',
      'CMS, RBAC, and integrated email + APIs',
    ],
    outcome:
      'One platform now serves four distinct stakeholder types — players, coaches, scouts, and clubs — replacing the scattered spreadsheets and group chats it grew out of.',
  },
  {
    slug: 'marys-thrift-finance',
    industry: 'Fintech',
    name: "Mary's Thrift Finance",
    punchline: 'Manual contribution tracking, replaced.',
    link: 'marythriftservices.com',
    summary: 'An automated savings and loans platform with member and admin dashboards.',
    problem:
      "A thrift and savings group was tracking member contributions and loan repayments by hand — slow, error-prone, and hard to audit.",
    built: [
      'Automated savings and loans management',
      'Secured backend admin dashboard and controls',
      'Self-service member experience by design',
    ],
    outcome:
      'Contribution tracking and loan management now run themselves, with a self-service member dashboard and a secured admin control panel replacing the manual ledger.',
  },
  {
    slug: 'middra-arrdimbeauty',
    industry: 'E-Commerce',
    name: 'Middra & ArrdimBeauty Stores',
    punchline: 'Storefronts built and run end-to-end.',
    summary: 'Two WordPress e-commerce storefronts, built and actively managed.',
    problem:
      'Two retail brands needed an online storefront that could actually be maintained day-to-day, not just launched and abandoned.',
    built: ['WordPress storefront builds', 'Ongoing store management and updates', 'Catalog and checkout setup'],
    outcome: 'Both stores are live and actively maintained — hands-on ops plus platform ownership.',
  },
  {
    slug: 'the-visual-conference',
    industry: 'Events',
    name: 'The Visual Conference',
    punchline: 'The digital front door for a recurring event.',
    link: 'thevisualconference.com',
    summary: 'The website for a recurring industry conference, built and managed.',
    problem: 'A recurring conference needed a consistent, professional web presence year over year.',
    built: ['WordPress site build', 'Ongoing management across event cycles'],
    outcome: 'A stable, recognizable web presence the event can rely on every cycle.',
  },
  {
    slug: 'hachstacks',
    industry: 'Education',
    name: 'Hachstacks',
    punchline: 'Ed-tech built from the ground up since 2021.',
    status: 'Co-founder & Ops Manager, Oct 2021 – Present',
    summary: 'An ed-tech startup co-founded and operated alongside its software roadmap.',
    problem:
      'A university community needed better ed-tech tooling than what was commercially available or affordable to them.',
    built: [
      'Software roadmap planning',
      'Stakeholder and operations management',
      'Research-led product decisions',
    ],
    outcome: 'A running ed-tech operation, still active, still shipping.',
  },
  {
    slug: 'affiong-ai',
    industry: 'AI / Healthcare',
    name: 'Affiong-AI',
    punchline: 'Explainable AI for Nigerian clinics — in build.',
    status: "Master's Project, in build",
    summary:
      'A microservices-based explainable AI system for chest X-ray-adjacent clinical decision support.',
    problem:
      'AI diagnostic tools rarely explain themselves, and rarely account for local demographic data — a barrier to clinician trust.',
    built: [
      'Microservices architecture across 4 services',
      'Explainable AI via SHAP and Grad-CAM/LIME',
      'Conformal prediction (via MAPIE) for confidence intervals',
      'Human-in-the-loop clinician feedback cycle',
    ],
    outcome:
      'A system designed so clinicians can override predictions — feeding those overrides back to fine-tune the model for local Nigerian demographics.',
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
