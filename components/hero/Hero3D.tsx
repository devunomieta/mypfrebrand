'use client';

import { Component, type ReactNode, Suspense } from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => <Fallback pulse />,
});

function Fallback({ pulse = false }: { pulse?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
          pulse ? 'animate-pulse' : ''
        }`}
        style={{
          background:
            'radial-gradient(circle at 40% 40%, rgba(255,200,87,0.35), transparent 55%), radial-gradient(circle at 65% 65%, rgba(108,108,255,0.35), transparent 55%)',
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className="type-3d select-none font-serif text-[26vw] font-black leading-none tracking-tighter md:text-[13rem]">
          JU
        </span>
      </div>
    </div>
  );
}

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return <Fallback />;
    return this.props.children;
  }
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <Boundary>
        <Suspense fallback={<Fallback pulse />}>
          <Scene />
        </Suspense>
      </Boundary>
    </div>
  );
}
