import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import Container from '../Container';
import { site, stack } from '@/lib/site';
import Hero3D from './Hero3D';

const toolCount = stack.reduce((n, s) => n + s.items.length, 0);

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-ink pt-[4.5rem]">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-iris/10 blur-[140px]" />

      <Container className="relative grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left — copy */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            <span className="font-mono-label text-mist">{site.availability}</span>
          </div>

          <h1 className="mt-7 font-serif text-[15vw] font-black leading-[0.92] tracking-tight text-offwhite sm:text-6xl lg:text-[5.4rem]">
            <span className="block type-3d">Senior</span>
            <span className="block type-3d">Frontend</span>
            <span className="block text-gradient">Engineer</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist">
            {site.punchline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold"
            >
              See the work
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-offwhite transition hover:border-white/40"
            >
              Start a conversation
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-x-6 gap-y-2 border-t border-white/10 pt-6">
            {[
              ['Based', 'Nigeria · Remote'],
              ['Experience', '6 years'],
              ['Toolkit', `${toolCount}+ tools`],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono-label text-mist">{k}</dt>
                <dd className="mt-1 text-sm font-medium text-offwhite">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — 3D */}
        <div className="relative h-[46vh] min-h-[320px] w-full lg:h-[34rem]">
          <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent">
            <Hero3D />
            <div className="pointer-events-none absolute left-4 top-4 font-mono text-[0.65rem] text-offwhite/40">
              webgl · react-three-fiber
            </div>
            <div className="pointer-events-none absolute bottom-4 right-4 font-mono text-[0.65rem] text-offwhite/40">
              drag / move — it responds
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <span className="inline-flex items-center gap-2 font-mono-label text-mist">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll
        </span>
      </div>
    </section>
  );
}
