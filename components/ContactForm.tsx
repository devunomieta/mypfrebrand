'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-offwhite placeholder-mist/50 outline-none transition focus:border-gold/60 focus:bg-white/[0.05]';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex items-start gap-4 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
        <div>
          <p className="font-semibold text-offwhite">That landed in my inbox.</p>
          <p className="mt-1 text-sm text-mist">
            I read every message myself and usually reply within a day or two.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            className="mb-1.5 block font-mono-label text-mist"
            htmlFor="name"
          >
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} />
        </div>
        <div>
          <label
            className="mb-1.5 block font-mono-label text-mist"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label
          className="mb-1.5 block font-mono-label text-mist"
          htmlFor="message"
        >
          What are you trying to solve?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={fieldClass}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-2 rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-coral">
          Something went wrong — try emailing directly instead.
        </p>
      )}
    </form>
  );
}
