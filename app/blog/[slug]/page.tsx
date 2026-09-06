import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import ShareButtons from '@/components/ShareButtons';
import { getAllPosts, getPostBySlug, readingTime } from '@/lib/posts';
import { site } from '@/lib/site';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();
  const url = `${site.url}/blog/${post.slug}`;
  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <PageHeader
        index="B"
        label={post.industry ? `Writing — ${post.industry}` : 'Writing'}
        title={post.title}
        meta={[
          { k: 'Published', v: date },
          { k: 'Read', v: `${readingTime(post.body)} min` },
        ]}
      />

      <section className="bg-ink py-16 md:py-24">
        <Container className="max-w-2xl">
          <article className="rounded-3xl border border-black/5 bg-paper p-8 shadow-lift-lg md:p-12">
            <div className="prose-post">
              {Array.isArray(post.body) ? (
                <PortableText value={post.body} />
              ) : (
                <p>{String(post.body)}</p>
              )}
            </div>

            <div className="mt-14 border-t border-navy/10 pt-8">
              <ShareButtons url={url} title={post.title} />
            </div>
          </article>

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-mist transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the blog
          </Link>
        </Container>
      </section>
    </>
  );
}
