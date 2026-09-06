'use client';

import { useState } from 'react';
import { Share2, Linkedin, Link2 } from 'lucide-react';

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const nativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled — no-op
      }
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const canNativeShare =
    typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const xHref = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {canNativeShare && (
        <button
          onClick={nativeShare}
          className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-offwhite transition hover:bg-coral"
        >
          <Share2 className="h-4 w-4" /> Share
        </button>
      )}
      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy transition hover:border-coral hover:text-coral"
      >
        <Linkedin className="h-4 w-4" /> LinkedIn
      </a>
      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy transition hover:border-coral hover:text-coral"
      >
        X
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy transition hover:border-coral hover:text-coral"
      >
        WhatsApp
      </a>
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy transition hover:border-coral hover:text-coral"
      >
        <Link2 className="h-4 w-4" /> {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  );
}
