import { workflow } from '@/lib/site';
import Reveal from './Reveal';

export default function ProcessGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
      {workflow.map((p, i) => (
        <Reveal
          key={p.no}
          delay={i * 0.06}
          className="group flex flex-col bg-ink p-8 transition-colors hover:bg-ink-2 md:p-10"
        >
          <div className="flex items-center gap-3">
            <span className="font-serif text-3xl font-black text-white/10 transition group-hover:text-gold/70">
              {p.no}
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="mt-5 font-serif text-xl font-bold text-offwhite">
            {p.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-mist">{p.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
