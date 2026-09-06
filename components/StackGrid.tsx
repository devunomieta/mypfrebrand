import { stack } from '@/lib/site';
import Reveal from './Reveal';

export default function StackGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stack.map((s, i) => (
        <Reveal
          key={s.group}
          delay={i * 0.05}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
        >
          <div className="flex items-center justify-between">
            <p className="font-mono-label text-gold">{s.group}</p>
            <span className="font-mono text-[0.7rem] text-mist">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {s.items.map((it) => (
              <li
                key={it}
                className="rounded-lg border border-white/10 bg-ink px-2.5 py-1.5 text-xs text-offwhite/80"
              >
                {it}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
