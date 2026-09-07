/**
 * Full-screen blurred loading veil with the animated "JU" site mark plus a
 * context label:
 *   - route navigation  -> the destination page name  (app/loading.tsx)
 *   - form submission    -> "Submitting"               (ContactForm)
 *   - anything else      -> "Loading"                  (default)
 *
 * `position: fixed`, so it covers the viewport wherever it's rendered. The CSS
 * holds it invisible for ~250ms (see .page-loader in globals.css) so instant
 * navigations / fast submits never flash it.
 */
export default function PageLoader({ label = 'Loading' }: { label?: string }) {
  return (
    <div
      className="page-loader fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-ink/70 backdrop-blur-xl"
      role="status"
      aria-live="polite"
    >
      <div className="relative grid h-24 w-24 place-items-center">
        <span className="page-loader__ring absolute inset-0 animate-spin rounded-full [animation-duration:1.1s]" />
        <span className="grid h-14 w-14 place-items-center rounded-xl border border-white/15 bg-white/[0.05] font-serif text-lg font-black text-gold [animation:ju-breathe_1.6s_ease-in-out_infinite]">
          JU
        </span>
      </div>
      <p className="font-mono-label text-mist">{label}</p>
    </div>
  );
}
