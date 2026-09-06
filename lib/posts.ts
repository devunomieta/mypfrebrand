import { getClient } from '@/lib/sanity.client';
import { allPostsQuery, postBySlugQuery } from '@/lib/sanity.queries';
import { isSanityConfigured } from '@/sanity/env';

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: any;
  industry?: string;
  publishedAt: string;
  body: any;
};

// Shown out of the box before a real Sanity project is wired up, so `npm run
// dev` has something to render. Once NEXT_PUBLIC_SANITY_PROJECT_ID and
// NEXT_PUBLIC_SANITY_DATASET are set (see README), real posts from Sanity
// Studio replace these automatically — no code change needed.
const demoPosts: Post[] = [
  {
    _id: 'demo-1',
    title: 'What running four industries at once actually teaches you',
    slug: 'what-running-four-industries-teaches-you',
    excerpt:
      'Sports, fintech, retail, and education look nothing alike from the outside. The problems underneath rhyme more than you\u2019d think.',
    industry: 'Product',
    publishedAt: new Date().toISOString(),
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'This is a demo post. Replace it by publishing your first real post in Sanity Studio at /studio \u2014 it will appear here automatically once NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET are set in your environment.',
          },
        ],
      },
    ],
  },
];

export async function getAllPosts(): Promise<Post[]> {
  if (!isSanityConfigured) return demoPosts;
  try {
    const posts = await getClient().fetch(allPostsQuery, {}, { next: { revalidate: 60 } });
    return posts?.length ? posts : demoPosts;
  } catch (err) {
    console.warn('Sanity fetch failed, falling back to demo posts:', err);
    return demoPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  if (!isSanityConfigured) return demoPosts.find((p) => p.slug === slug);
  try {
    const post = await getClient().fetch(postBySlugQuery, { slug }, { next: { revalidate: 60 } });
    return post || demoPosts.find((p) => p.slug === slug);
  } catch (err) {
    console.warn('Sanity fetch failed, falling back to demo posts:', err);
    return demoPosts.find((p) => p.slug === slug);
  }
}

export function readingTime(body: any): number {
  const text = Array.isArray(body)
    ? body
        .map((block: any) => (block.children || []).map((c: any) => c.text).join(' '))
        .join(' ')
    : String(body || '');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
