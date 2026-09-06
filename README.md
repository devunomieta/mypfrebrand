# Joseph Unomieta — Personal Site

Next.js (App Router) + Tailwind, with a WebGL hero (Three.js / React Three Fiber)
and Framer Motion. Dark, technical "senior frontend engineer" aesthetic. Blog runs
on Sanity (headless CMS), deployed on Vercel.

## Frontend architecture notes

- **3D hero** — `components/hero/`. `Scene.tsx` renders an extruded 3D "JU" monogram
  (`drei` `<Text3D>` + `MeshTransmissionMaterial`) over a particle field. It's loaded
  via `next/dynamic({ ssr: false })` behind an error boundary with a CSS fallback, so
  the ~600 kB Three.js bundle is code-split and never blocks first paint.
- **Motion** — `Reveal` (scroll-in), `ScrollProgress`, `TiltCard`. All respect
  `prefers-reduced-motion`.
- **Design tokens** — `tailwind.config.ts`. `ink*` dark surfaces + `navy` / `coral` /
  `gold` / `iris` accents; `--font-serif` (Fraunces), `--font-sans` (Inter),
  `--font-mono` (JetBrains Mono).

## What's here

- **Home / About / Work / Blog / Contact** — pages under `app/`
- **Work case studies** — static data in `lib/projects.ts`, one page per project at `/work/[slug]`
- **Blog** — content lives in Sanity, fetched in `lib/posts.ts`. Runs with placeholder demo
  content out of the box so `npm run dev` works before you've set up Sanity.
- **Sanity Studio** — embedded at `/studio` (no separate app to deploy)
- **Dynamic social share images** — every page and blog post auto-generates its own
  Open Graph / Twitter Card image via `opengraph-image.tsx` files (using `next/og`)
- **RSS feed** at `/blog/feed.xml`, sitemap at `/sitemap.xml`

## 1. Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site works immediately with demo blog content.

## 2. Set up Sanity (for the real blog)

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage) (or run
   `npx sanity@latest init` from this folder and answer the prompts — reuse the existing
   schema, don't let it scaffold a new one).
2. Copy `.env.local.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` — from the project you just created
   - `NEXT_PUBLIC_SANITY_DATASET` — usually `production`
3. Restart `npm run dev`, then go to **http://localhost:3000/studio** and log in with
   your Sanity account. You'll see a **Blog Post** document type ready to use.
4. Publish a post — it replaces the demo content on `/blog` automatically.

**To make new posts appear instantly** (instead of waiting up to 60 seconds):
1. In [sanity.io/manage](https://www.sanity.io/manage) → your project → API → Webhooks,
   add a webhook pointing at `https://your-domain.com/api/revalidate?secret=YOUR_SECRET`,
   triggered on Create/Update/Delete for the `post` type.
2. Set `REVALIDATE_SECRET` in your environment to the same value.

## 3. Set up the contact form

The contact form supports **Brevo** (300 free emails/day) and **Resend** (100 free emails/day).

**Using Brevo:**
1. Get an API key from Brevo dashboard -> **SMTP & API Keys**.
2. In `.env.local`, set:
   - `BREVO_API_KEY` — Your Brevo API key
   - `CONTACT_TO_EMAIL` — Email address where messages should be sent
   - `CONTACT_FROM_EMAIL` — Verified sender email in Brevo

**Using Resend:**
1. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).
2. In `.env.local`, set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.

*(If both keys are set, Brevo is prioritized).*

## 4. Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the same environment variables from `.env.local` in the Vercel project settings.
4. Set `NEXT_PUBLIC_SITE_URL` to your real domain once it's attached — this feeds the
   sitemap, RSS feed, and share links.

## Swapping in real fonts

This scaffold uses web-safe font stacks (see `tailwind.config.ts`) so it builds with zero
network calls — useful in sandboxed environments. Once you're deployed on Vercel (which has
full network access), you can switch to the fonts the brand was designed around
(**Fraunces** for headers, **Inter** for body) with a small change in `app/layout.tsx`:

```tsx
import { Fraunces, Inter } from 'next/font/google';
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-serif' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
// then add `${fraunces.variable} ${inter.variable}` to the <html> className,
// and point tailwind.config.ts's fontFamily.serif/sans at the CSS variables.
```

## Brand

Palette: Navy `#1B1F3B` (dominant), Coral `#FF5A5F` (secondary/accent), Gold `#FFC857`
(sharp accent), Off-white `#FAF9F6` (light background). Same palette as the CV and the
personal portfolio PDF, for consistency across every touchpoint.
