import type { Metadata } from 'next';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies across sports, fintech, e-commerce, education, events, and AI.',
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        index="W"
        label="Selected work"
        title={
          <>
            Different industries.
            <br />
            <span className="text-gradient">Same instinct.</span>
          </>
        }
        intro="Six builds where the hard part was rarely the code — it was the ambiguity around it. Each one shipped and is still in use."
        meta={[
          { k: 'Projects', v: String(projects.length) },
          { k: 'Sectors', v: 'Sports · Fintech · Retail · Ed · AI' },
          { k: 'Role', v: 'Lead / end-to-end' },
        ]}
      />

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
