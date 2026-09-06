import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId, isSanityConfigured } from '@/sanity/env';

let _client: SanityClient | null = null;

// Lazy singleton: only constructs a real client (and only validates
// projectId/dataset) once something actually tries to use it. This keeps
// `next build` and `npm run dev` working before a real Sanity project
// exists — lib/posts.ts checks isSanityConfigured before ever calling
// client.fetch(), so this getter is never invoked in that case.
export function getClient(): SanityClient {
  if (!isSanityConfigured) {
    throw new Error('Sanity is not configured — set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.');
  }
  if (!_client) {
    _client = createClient({ projectId, dataset, apiVersion, useCdn: true });
  }
  return _client;
}

export function urlForImage(source: any) {
  return imageUrlBuilder(getClient()).image(source);
}
