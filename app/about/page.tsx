import type { Metadata } from 'next';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import SectionLabel from '@/components/SectionLabel';
import PillarGrid from '@/components/PillarGrid';
import Timeline from '@/components/Timeline';
import ProcessGrid from '@/components/ProcessGrid';
import Reveal from '@/components/Reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Six years building and leading products end-to-end across sports, fintech, e-commerce, and education.',
};

const education = [
  {
    school: 'MIVA Open University',
    detail: "Master's in Information Technology — Major in Software Engineering",
    note: 'Distinction (in view) · Expected Sept 2026',
  },
  {
    school: 'Akwa Ibom State University',
    detail: 'B.Sc. Computer Science',
    note: 'May 2022',
  },
  {
    school: 'Google / Coursera Scholarship',
    detail: 'Project Management Program',
    note: 'Dec 2021 – May 2022',
  },
  {
    school: 'Skill Up by Simplilearn',
    detail: 'CAPM Certification',
    note: 'Nov 2022',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="A"
        label="About"
        title={
          <>
            Not a generalist.
            <br />
            <span className="text-gradient">A problem solver.</span>
          </>
        }
        intro={site.intro}
        meta={[
          { k: 'Discipline', v: 'Product Engineering' },
          { k: 'Experience', v: '6 years · CTO → GM' },
          { k: 'Based', v: 'Nigeria — Remote worldwide' },
        ]}
      />

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <SectionLabel index="01">The short version</SectionLabel>
            <div className="space-y-5 text-lg leading-relaxed text-mist">
              <p>
                I&rsquo;m a product-minded engineer who&rsquo;s spent six years
                solving problems other people were stuck on — building and leading
                the systems that let a sports scouting network run its platform, a
                savings group manage member finances, and a state ministry get
                hundreds of staff onto new digital tools.
              </p>
              <p>
                I don&rsquo;t lead with a tech stack; I lead with the outcome. My
                path runs from frontend to fullstack, startup CTO to government IT
                lead, developer to product manager — so I can sit in the technical
                detail or the business conversation, whichever the problem
                actually needs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-ink-2 py-20 md:py-28">
        <Container>
          <SectionLabel index="02">The approach</SectionLabel>
          <div className="mt-10">
            <PillarGrid />
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-ink py-20 md:py-28">
        <Container>
          <SectionLabel index="03">Track record</SectionLabel>
          <div className="mt-12 max-w-3xl">
            <Timeline />
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-ink-2 py-20 md:py-28">
        <Container>
          <SectionLabel index="04">How I work</SectionLabel>
          <div className="mt-10">
            <ProcessGrid />
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-ink py-20 md:py-28">
        <Container>
          <SectionLabel index="05">Education &amp; credentials</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.05} className="bg-ink p-7">
                <p className="font-semibold text-offwhite">{e.school}</p>
                <p className="mt-1.5 text-sm text-mist">{e.detail}</p>
                <p className="mt-3 font-mono text-[0.7rem] text-offwhite/40">
                  {e.note}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
