'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  MessageCircle,
  Link2,
  FileText,
  Download,
  RotateCw,
  X,
} from 'lucide-react';
import { card } from '@/lib/site';

const FRONT_ALT =
  'Joseph Unomieta — Software Engineer & Product Manager. WhatsApp 0815 684 1952 and 0704 989 8962. Email devunomieta@gmail.com.';
const BACK_ALT =
  'Building Scalable Software Solutions & Driving Product Growth — linktr.ee/devunomieta, with a WhatsApp QR code.';

const ACTION =
  'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition';
const IMG_SIZES = '(max-width: 460px) 92vw, 420px';

export default function BusinessCard({ onClose }: { onClose: () => void }) {
  const [flipped, setFlipped] = useState(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  // Keep the face that's turned away out of the tab order / a11y tree.
  useEffect(() => {
    frontRef.current?.toggleAttribute('inert', flipped);
    backRef.current?.toggleAttribute('inert', !flipped);
  }, [flipped]);

  return (
    <div className="w-full max-w-[420px]">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono-label text-mist">Complimentary card</p>
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Close"
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-offwhite transition hover:bg-white/10"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Flip scene */}
      <div className="card-scene mx-auto">
        <div
          className={`card-3d ${flipped ? 'is-flipped' : ''}`}
          role="group"
          aria-label={`Business card, ${flipped ? 'back' : 'front'} side`}
        >
          <div ref={frontRef} className="card-face">
            <Image
              src={card.images.front}
              alt={FRONT_ALT}
              fill
              sizes={IMG_SIZES}
              className="object-cover"
              priority
            />
          </div>
          <div ref={backRef} className="card-face card-face--back">
            <Image
              src={card.images.back}
              alt={BACK_ALT}
              fill
              sizes={IMG_SIZES}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={() => setFlipped((v) => !v)}
          aria-pressed={flipped}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-offwhite transition hover:border-white/40"
        >
          <RotateCw className="h-3.5 w-3.5" />
          {flipped ? 'Show front' : 'Flip card'}
        </button>
      </div>

      {/* Actions */}
      <div className="mt-6 grid grid-cols-2 gap-2.5">
        <a
          href={card.numbers[0].whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ACTION} col-span-2 bg-[#F1771F] text-white hover:bg-[#d9660f]`}
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          Message on WhatsApp
        </a>
        <a
          href={card.linktree}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ACTION} border border-white/15 text-offwhite hover:border-white/40`}
        >
          <Link2 className="h-4 w-4" />
          Linktree
        </a>
        <a
          href={card.cv.view}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ACTION} border border-white/15 text-offwhite hover:border-white/40`}
        >
          <FileText className="h-4 w-4" />
          View CV
        </a>
        <a
          href={card.cv.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ACTION} col-span-2 text-mist hover:text-offwhite`}
        >
          <Download className="h-3.5 w-3.5" />
          Download CV as PDF
        </a>
      </div>
    </div>
  );
}
