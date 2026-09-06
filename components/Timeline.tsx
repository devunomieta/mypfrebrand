import { timeline } from '@/lib/site';
import Reveal from './Reveal';

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-gold/60 via-white/15 to-transparent md:left-[9px]" />
      <div className="space-y-12">
        {timeline.map((n, i) => (
          <Reveal
            key={n.company}
            delay={i * 0.05}
            className="relative pl-10 md:pl-14"
          >
            <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-gold/50 bg-ink md:h-[19px] md:w-[19px]">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-lg font-semibold text-offwhite">{n.company}</p>
              <p className="font-mono-label text-mist">{n.dates}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-coral">{n.role}</p>

            {n.stats.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-6">
                {n.stats.map(([num, label]) => (
                  <div key={label} className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-black text-gold">
                      {num}
                    </span>
                    <span className="max-w-[9rem] text-xs leading-tight text-mist">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist">
              {n.note}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
