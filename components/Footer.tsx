import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
import Container from './Container';

const nav = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-iris/10 to-transparent blur-2xl" />
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-black tracking-tight text-offwhite">
              {site.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-mist">{site.roleLine}</p>
            <p className="mt-6 font-mono-label text-mist">{site.location}</p>
          </div>

          <div>
            <p className="font-mono-label text-mist">Sitemap</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-offwhite/80 transition hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-label text-mist">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              {[
                ['LinkedIn', site.socials.linkedin],
                ['GitHub', site.socials.github],
                ['X / Twitter', site.socials.x],
                ['Email', `mailto:${site.contact.email}`],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1 text-sm text-offwhite/80 transition hover:text-gold"
                  >
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-mist md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Next.js.
          </p>
          <p className="font-mono-label">{site.availability}</p>
        </div>
      </Container>
    </footer>
  );
}
