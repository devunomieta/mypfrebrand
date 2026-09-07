'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, CreditCard } from 'lucide-react';
import Container from './Container';
import BusinessCardModal from './business-card/BusinessCardModal';
import { site } from '@/lib/site';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll + close on Escape while the full-screen menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? 'bg-ink'
          : scrolled
            ? 'border-b border-white/10 bg-ink/80 backdrop-blur-xl'
            : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/[0.03] font-serif text-sm font-black text-offwhite transition group-hover:border-gold/60 group-hover:text-gold">
            JU
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-offwhite sm:block">
            Joseph Unomieta
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive(l.href) ? 'text-offwhite' : 'text-mist hover:text-offwhite'
              }`}
            >
              {isActive(l.href) && (
                <span className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.04]" />
              )}
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCardOpen(true)}
            className="group hidden items-center gap-2 rounded-full bg-offwhite px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold md:inline-flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            My card
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-offwhite md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-ink transition-[opacity,visibility] duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-iris/15 blur-[110px]" />

        <div className="relative flex h-full flex-col px-6 pb-10 pt-[4.5rem]">
          <nav className="flex flex-1 flex-col justify-center gap-1">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`group flex items-baseline gap-4 border-b border-white/10 py-5 transition ${
                  open
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
              >
                <span className="font-mono-label text-gold">
                  0{i + 1}
                </span>
                <span
                  className={`font-serif text-4xl font-black tracking-tight transition ${
                    isActive(l.href)
                      ? 'text-gradient'
                      : 'text-offwhite group-hover:text-gold'
                  }`}
                >
                  {l.label}
                </span>
                <ArrowUpRight className="ml-auto h-6 w-6 self-center text-mist transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
              </Link>
            ))}
          </nav>

          <div className="relative mt-8">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setCardOpen(true);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-4 text-sm font-semibold text-offwhite"
            >
              <CreditCard className="h-4 w-4" />
              View card
            </button>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-offwhite px-5 py-4 text-sm font-semibold text-ink"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
              </span>
              Start a conversation
            </Link>
            <div className="mt-6 flex items-center justify-center gap-6">
              {[
                ['LinkedIn', site.socials.linkedin],
                ['GitHub', site.socials.github],
                ['X', site.socials.x],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="font-mono-label text-mist transition hover:text-gold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BusinessCardModal open={cardOpen} onClose={() => setCardOpen(false)} />
    </header>
  );
}
