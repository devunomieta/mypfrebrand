import type { Metadata } from 'next';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import PostCard from '@/components/PostCard';
import Reveal from '@/components/Reveal';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notes on building product frontends across sports, fintech, e-commerce, and education.',
};

export const revalidate = 60;

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <PageHeader
        index="B"
        label="Writing"
        title={
          <>
            Notes from <span className="text-gradient">the build.</span>
          </>
        }
        intro="Occasional essays on frontend architecture, shipping under constraints, and what four industries have in common underneath."
        meta={[
          { k: 'Posts', v: String(posts.length) },
          { k: 'Cadence', v: 'When it earns it' },
          { k: 'Feed', v: 'RSS available' },
        ]}
      />

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p._id} delay={(i % 3) * 0.08}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
