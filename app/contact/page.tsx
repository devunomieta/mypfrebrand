import type { Metadata } from 'next';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import SectionLabel from '@/components/SectionLabel';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Joseph Unomieta.',
};

export default function ContactPage() {
  const channels = [
    { icon: Mail, label: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}` },
    {
      icon: Phone,
      label: 'Phone',
      value: site.contact.phone,
      href: `tel:${site.contact.phone.replace(/[^+\d]/g, '')}`,
    },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/devunomieta', href: site.socials.linkedin },
    { icon: Github, label: 'GitHub', value: '@DEVUNOMIETA', href: site.socials.github },
  ];

  return (
    <>
      <PageHeader
        index="C"
        label="Contact"
        title={
          <>
            Let&rsquo;s solve <span className="text-gradient">something.</span>
          </>
        }
        intro="If it's broken, ambiguous, or stuck — that's exactly what I build for. Reach out directly, or use the form."
        meta={[
          { k: 'Response time', v: '1–2 days' },
          { k: 'Timezone', v: 'WAT (UTC+1)' },
          { k: 'Status', v: 'Open to new problems' },
        ]}
      />

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionLabel index="01">Direct channels</SectionLabel>
              <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="group flex items-center gap-4 py-4 transition"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-gold">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-mono-label text-mist">
                          {c.label}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium text-offwhite transition group-hover:text-gold">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel index="02">Send a message</SectionLabel>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
