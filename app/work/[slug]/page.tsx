import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import ShareButtons from '@/components/ShareButtons';
import { getProject, projects } from '@/lib/projects';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();
  const url = `${site.url}/work/${project.slug}`;

  const meta = [
    { k: 'Industry', v: project.industry },
    ...(project.link ? [{ k: 'Live', v: project.link }] : []),
    ...(project.status ? [{ k: 'Status', v: project.status }] : []),
  ];

  return (
    <>
      <PageHeader
        index="W"
        label={`Case study — ${project.industry}`}
        title={project.name}
        intro={project.punchline}
        meta={meta}
      />

      <section className="bg-ink py-16 md:py-24">
        <Container className="max-w-3xl">
          <div className="rounded-3xl border border-black/5 bg-paper p-8 shadow-lift-lg md:p-12">
            <p className="font-mono-label text-coral">Summary</p>
            <p className="mt-3 text-lg leading-relaxed text-navy/80">
              {project.summary}
            </p>

            <h2 className="mt-12 font-serif text-2xl font-bold text-navy">
              The problem
            </h2>
            <p className="mt-4 leading-relaxed text-navy/70">{project.problem}</p>

            <h2 className="mt-12 font-serif text-2xl font-bold text-navy">
              What I built
            </h2>
            <ul className="mt-5 space-y-3">
              {project.built.map((b) => (
                <li key={b} className="flex gap-3 text-navy/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  {b}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-serif text-2xl font-bold text-navy">
              The outcome
            </h2>
            <p className="mt-4 leading-relaxed text-navy/70">{project.outcome}</p>

            <div className="mt-12 border-t border-navy/10 pt-8">
              <ShareButtons url={url} title={project.name} />
            </div>
          </div>

          <Link
            href="/work"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-mist transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>
        </Container>
      </section>
    </>
  );
}
