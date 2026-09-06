import { Sparkle } from 'lucide-react';

export default function Marquee({
  items,
  className = '',
}: {
  items: string[];
  className?: string;
}) {
  const Group = () => (
    <div className="flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="text-sm font-medium tracking-tight text-offwhite/70">
            {it}
          </span>
          <Sparkle className="h-3 w-3 text-gold/60" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`mask-fade-x flex overflow-hidden border-y border-white/10 bg-white/[0.02] py-4 ${className}`}
    >
      <div className="flex animate-marquee">
        <Group />
        <Group />
      </div>
    </div>
  );
}
