import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/Container';
import Hero from '@/components/hero/Hero';
import Marquee from '@/components/Marquee';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import MetricBand from '@/components/MetricBand';
import CapabilityGrid from '@/components/CapabilityGrid';
import PillarGrid from '@/components/PillarGrid';
import StackGrid from '@/components/StackGrid';
import ProjectCard from '@/components/ProjectCard';
import PostCard from '@/components/PostCard';
import { site, stack } from '@/lib/site';
import { projects } from '@/lib/projects';
import { getAllPosts } from '@/lib/posts';

const marqueeItems = [
  ...stack.flatMap((s) => s.items).slice(0, 14),
  'Ships end-to-end',
];

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <Marquee items={marqueeItems} />

      {/* Metrics */}
      <section className="bg-ink py-20 md:py-28">
        <Container>
          <SectionLabel index="00">By the numbers</SectionLabel>
          <div className="mt-10">
            <MetricBand />
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-t border-white/10 bg-ink-2 py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel index="01">Capabilities</SectionLabel>
            <h2 className="mt-6 font-serif text-3xl font-black tracking-tight text-offwhite md:text-4xl">
              Where I do my best work
            </h2>
            <p className="mt-4 text-mist">
              Four areas I go deep on. Everything else is in service of shipping
              these well.
            </p>
          </div>
          <div className="mt-12">
            <CapabilityGrid />
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="border-t border-white/10 bg-ink py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel index="02">Approach</SectionLabel>
            <h2 className="mt-6 font-serif text-3xl font-black tracking-tight text-offwhite md:text-4xl">
              Not a generalist. A problem solver.
            </h2>
            <p className="mt-4 text-mist">{site.intro}</p>
          </div>
          <div className="mt-12">
            <PillarGrid />
          </div>
        </Container>
      </section>

      {/* Featured work */}
      <section className="border-t border-white/10 bg-ink-2 py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel index="03">Selected work</SectionLabel>
              <h2 className="mt-6 font-serif text-3xl font-black tracking-tight text-offwhite md:text-4xl">
                Different industries. Same instinct.
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-offwhite transition hover:text-gold"
            >
              View all work
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Stack */}
      <section className="border-t border-white/10 bg-ink py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel index="04">Toolkit</SectionLabel>
            <h2 className="mt-6 font-serif text-3xl font-black tracking-tight text-offwhite md:text-4xl">
              The stack I reach for
            </h2>
            <p className="mt-4 text-mist">
              Tools are means, not identity — but these are the ones I know cold.
            </p>
          </div>
          <div className="mt-12">
            <StackGrid />
          </div>
        </Container>
      </section>

      {/* Blog */}
      <section className="border-t border-white/10 bg-ink-2 py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel index="05">Writing</SectionLabel>
              <h2 className="mt-6 font-serif text-3xl font-black tracking-tight text-offwhite md:text-4xl">
                Notes from the build
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-offwhite transition hover:text-gold"
            >
              All posts
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p._id} delay={i * 0.08}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10 bg-ink py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/10 blur-[130px]" />
        <Container className="relative text-center">
          <h2 className="mx-auto max-w-3xl font-serif text-4xl font-black tracking-tight text-offwhite md:text-6xl">
            <span className="type-3d">Let&rsquo;s solve</span>{' '}
            <span className="text-gradient">something.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-mist">
            If it&rsquo;s broken, ambiguous, or stuck — that&rsquo;s exactly what
            I build for.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-offwhite px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
