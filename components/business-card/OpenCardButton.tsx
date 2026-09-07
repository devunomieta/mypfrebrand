'use client';

import type { ReactNode } from 'react';

/**
 * Opens the business-card modal without importing it — dispatches a DOM event
 * that <Header> listens for. Keeps the modal (and its deps) out of every page's
 * shared bundle.
 */
export const OPEN_CARD_EVENT = 'businesscard:open';

export function openBusinessCard() {
  window.dispatchEvent(new CustomEvent(OPEN_CARD_EVENT));
}

export default function OpenCardButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={openBusinessCard} className={className}>
      {children}
    </button>
  );
}
