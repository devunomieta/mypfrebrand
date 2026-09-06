import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
        <div style={{ display: 'flex', fontSize: 20, fontWeight: 700, letterSpacing: 4, color: '#FFC857' }}>
          {site.tagline.toUpperCase()}
        </div>
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, color: '#FAF9F6', marginTop: 24 }}>
          {site.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            fontStyle: 'italic',
            color: '#FAF9F6',
            opacity: 0.9,
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          &ldquo;{site.punchline}&rdquo;
        </div>
        <div style={{ display: 'flex', fontSize: 22, fontWeight: 700, color: '#FF5A5F', marginTop: 40, letterSpacing: 2 }}>
          {site.industries.join('   ·   ')}
        </div>
      </div>
    ),
    { ...size }
  );
}
