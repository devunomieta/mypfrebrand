import { Rocket, MessagesSquare, Compass, ShieldCheck } from 'lucide-react';
import { pillars } from '@/lib/site';
import Reveal from './Reveal';

const iconMap = {
  rocket: Rocket,
  chat: MessagesSquare,
  compass: Compass,
  shield: ShieldCheck,
};

export default function PillarGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
      {pillars.map((p, i) => {
        const Icon = iconMap[p.icon as keyof typeof iconMap];
        return (
          <Reveal
            key={p.title}
            delay={i * 0.06}
            className="group flex gap-4 bg-ink p-7 transition-colors hover:bg-ink-2"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-coral transition group-hover:border-coral/40 group-hover:text-gold">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <p className="font-semibold text-offwhite">{p.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">{p.sub}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
