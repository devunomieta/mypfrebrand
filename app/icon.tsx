import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#08090F',
          border: '2px solid #2A2E52',
          borderRadius: 14,
          color: '#FFC857',
          fontSize: 30,
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
        }}
      >
        JU
      </div>
    ),
    { ...size }
  );
}
