import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark-first "engineered" surfaces
        ink: '#08090F',
        'ink-2': '#0E1020',
        'ink-3': '#151832',
        // Brand (unchanged hues, kept for continuity)
        navy: '#1B1F3B',
        coral: '#FF5A5F',
        gold: '#FFC857',
        iris: '#6C6CFF',
        // Light surfaces
        paper: '#F6F5F1',
        offwhite: '#FAF9F6',
        // Text
        muted: '#6B7280',
        mist: '#9AA0B4',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
        sans: [
          'var(--font-sans)',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      maxWidth: {
        content: '78rem',
      },
      letterSpacing: {
        superwide: '0.32em',
      },
      boxShadow: {
        lift: '0 24px 60px -24px rgba(8, 9, 15, 0.35)',
        'lift-lg': '0 40px 120px -32px rgba(8, 9, 15, 0.5)',
      },
      transitionTimingFunction: {
        outexpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        gridpan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        gridpan: 'gridpan 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
