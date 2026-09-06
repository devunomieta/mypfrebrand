import { metrics } from '@/lib/site';

export default function MetricBand() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="bg-ink p-6 md:p-8">
          <p className="font-serif text-4xl font-black tracking-tight text-gold md:text-5xl">
            {m.value}
          </p>
          <p className="mt-2 text-sm leading-tight text-mist">{m.label}</p>
        </div>
      ))}
    </div>
  );
}
