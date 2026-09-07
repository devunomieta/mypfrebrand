'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// The card body (flip scene, next/image, icon set) is only needed once the modal
// is actually opened — keep it out of the shared bundle.
const BusinessCard = dynamic(() => import('./BusinessCard'), { ssr: false });

export default function BusinessCardModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  // Drive the native <dialog> from React state.
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    else if (!open && d.open) d.close();
  }, [open]);

  // Lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="card-dialog"
      aria-label="Joseph Unomieta — complimentary card"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {open && <BusinessCard onClose={onClose} />}
    </dialog>
  );
}
