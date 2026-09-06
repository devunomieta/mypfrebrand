'use client';

import { useRef, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
};

export default function TiltCard({ children, className = '', max = 7 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ref.current.style.setProperty('--mx', `${px * 100}%`);
    ref.current.style.setProperty('--my', `${py * 100}%`);
    ref.current.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${
      (px - 0.5) * max
    }deg) translateZ(0)`;
  }

  function reset() {
    if (!ref.current) return;
    ref.current.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`transition-transform duration-300 ease-outexpo will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
