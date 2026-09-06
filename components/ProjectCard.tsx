import Link from 'next/link';
import {
  Trophy,
  Wallet,
  ShoppingCart,
  GraduationCap,
  CalendarDays,
  Brain,
  ArrowUpRight,
} from 'lucide-react';
import type { Project } from '@/lib/projects';
import TiltCard from './TiltCard';

const iconMap: Record<string, any> = {
  Sports: Trophy,
  Fintech: Wallet,
  'E-Commerce': ShoppingCart,
  Education: GraduationCap,
  Events: CalendarDays,
  'AI / Healthcare': Brain,
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = iconMap[project.industry] || Trophy;

  return (
    <TiltCard className="tilt-3d h-full">
      <Link
        href={`/work/${project.slug}`}
        className="card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:bg-white/[0.04]"
      >
        <div className="flex items-start justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-ink text-gold">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="font-mono-label text-mist">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="mt-6 font-mono-label text-coral">{project.industry}</p>
        <h3 className="mt-2 font-serif text-xl font-bold text-offwhite">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">
          {project.punchline}
        </p>

        {project.link && (
          <p className="mt-4 font-mono text-xs text-offwhite/40">{project.link}</p>
        )}

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-offwhite transition group-hover:text-gold">
          View case study
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </TiltCard>
  );
}
