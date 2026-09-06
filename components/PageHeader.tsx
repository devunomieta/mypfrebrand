import Container from './Container';
import SectionLabel from './SectionLabel';

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  meta?: { k: string; v: string }[];
};

export default function PageHeader({ index, label, title, intro, meta }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink pt-[4.5rem]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5]" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-iris/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-coral/10 blur-[120px]" />

      <Container className="relative py-20 md:py-28">
        <SectionLabel index={index}>{label}</SectionLabel>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl font-black leading-[1.05] tracking-tight text-offwhite md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{intro}</p>
        )}
        {meta && (
          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.k}>
                <dt className="font-mono-label text-mist">{m.k}</dt>
                <dd className="mt-1 text-sm font-medium text-offwhite">{m.v}</dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  );
}
