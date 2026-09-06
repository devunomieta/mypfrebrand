import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/posts';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #08090F 0%, #12152E 55%, #1B1F3B 100%)',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, fontWeight: 700, letterSpacing: 3, color: '#FFC857' }}>
          {(post?.industry || 'BLOG').toUpperCase()}
        </div>
        <div style={{ display: 'flex', fontSize: 60, fontWeight: 700, color: '#FAF9F6', marginTop: 20, maxWidth: 1000 }}>
          {post?.title || 'Blog Post'}
        </div>
        <div style={{ display: 'flex', fontSize: 22, color: '#FAF9F6', opacity: 0.7, marginTop: 48 }}>
          Joseph Unomieta — devunomieta.xyz
        </div>
      </div>
    ),
    { ...size }
  );
}
