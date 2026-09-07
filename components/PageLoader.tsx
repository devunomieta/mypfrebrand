/**
 * Full-screen blurred loading veil with the animated "JU" site mark.
 * Rendered by app/loading.tsx as the route-segment Suspense fallback, so it
 * covers inter-page transitions. The CSS holds it invisible for ~250ms
 * (see .page-loader in globals.css) so instant navigations don't flash it.
 */
export default function PageLoader() {
  return (
    <div
      className="page-loader fixed inset-0 z-[100] grid place-items-center bg-ink/70 backdrop-blur-xl"
      role="status"
      aria-label="Loading"
    >
      <div className="relative grid h-24 w-24 place-items-center">
        <span className="page-loader__ring absolute inset-0 animate-spin rounded-full [animation-duration:1.1s]" />
        <span className="grid h-14 w-14 place-items-center rounded-xl border border-white/15 bg-white/[0.05] font-serif text-lg font-black text-gold [animation:ju-breathe_1.6s_ease-in-out_infinite]">
          JU
        </span>
      </div>
    </div>
  );
}
