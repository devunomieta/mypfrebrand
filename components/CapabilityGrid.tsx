import { capabilities } from '@/lib/site';
import Reveal from './Reveal';

export default function CapabilityGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
      {capabilities.map((c, i) => (
        <Reveal
          key={c.no}
          delay={i * 0.06}
          className="group relative flex flex-col bg-ink p-8 transition-colors hover:bg-ink-2 md:p-10"
        >
          <div className="flex items-center gap-3">
            <span className="font-serif text-3xl font-black text-white/10 transition group-hover:text-gold/70">
              {c.no}
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <h3 className="mt-5 font-serif text-xl font-bold text-offwhite">
            {c.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{c.body}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.7rem] text-offwhite/70"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
