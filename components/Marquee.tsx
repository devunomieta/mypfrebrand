'use client';

import { Sparkle } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';

export default function Marquee({
  items,
  className = '',
}: {
  items: string[];
  className?: string;
}) {
  // iOS often ships with "Reduce Motion" on — fall back to a swipeable strip.
  const reduce = useReducedMotion();

  const Group = ({ clone = false }: { clone?: boolean }) => (
    <ul
      aria-hidden={clone || undefined}
      className="flex shrink-0 items-center gap-8 whitespace-nowrap pr-8"
    >
      {items.map((it, i) => (
        <li key={i} className="flex items-center gap-8">
          <span className="text-sm font-medium tracking-tight text-offwhite/70">
            {it}
          </span>
          <Sparkle className="h-3 w-3 text-gold/60" />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`no-scrollbar relative flex border-y border-white/10 bg-white/[0.02] py-4 ${
        reduce ? 'overflow-x-auto' : 'overflow-hidden'
      } ${className}`}
    >
      {/* Edge fades — a plain gradient overlay instead of -webkit-mask-image,
          which freezes the animated track on iOS Safari. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink to-ink/0" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink to-ink/0" />

      <div
        className={`flex shrink-0 ${reduce ? '' : 'animate-marquee'}`}
        style={
          reduce
            ? undefined
            : { willChange: 'transform', backfaceVisibility: 'hidden' }
        }
      >
        <Group />
        {!reduce && <Group clone />}
      </div>
    </div>
  );
}
