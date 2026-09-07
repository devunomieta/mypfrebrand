'use client';

import { usePathname } from 'next/navigation';
import PageLoader from '@/components/PageLoader';

const NAMES: Record<string, string> = {
  '/': 'Home',
  '/work': 'Work',
  '/about': 'About',
  '/blog': 'Blog',
  '/contact': 'Contact',
};

function pageName(path: string): string {
  if (NAMES[path]) return NAMES[path];
  if (path.startsWith('/work/')) return 'Case study';
  if (path.startsWith('/blog/')) return 'Article';
  if (path.startsWith('/studio')) return 'Studio';
  return 'Loading';
}

export default function Loading() {
  // During a transition the URL is already the destination, so this is the
  // page being navigated to.
  const pathname = usePathname();
  return <PageLoader label={pageName(pathname)} />;
}
