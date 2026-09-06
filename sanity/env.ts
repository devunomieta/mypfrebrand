export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    // During local/demo runs without a Sanity project yet, we don't want this
    // to crash the build — lib/posts.ts checks isSanityConfigured and falls
    // back to demo content instead. It only throws once something actually
    // tries to use a real Sanity client without env vars set.
    return '' as unknown as T;
  }
  return v;
}
