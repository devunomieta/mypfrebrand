import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Post } from '@/lib/posts';
import { readingTime } from '@/lib/posts';

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-glow group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:bg-white/[0.04]"
    >
      <div className="flex items-center justify-between">
        {post.industry ? (
          <span className="font-mono-label text-coral">{post.industry}</span>
        ) : (
          <span />
        )}
        <ArrowUpRight className="h-4 w-4 text-mist transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
      </div>

      <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-offwhite transition group-hover:text-gold">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{post.excerpt}</p>

      <p className="mt-5 font-mono text-[0.7rem] text-offwhite/40">
        {date} — {readingTime(post.body)} min read
      </p>
    </Link>
  );
}
