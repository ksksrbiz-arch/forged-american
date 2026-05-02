import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0807',
        'bg-alt': '#141110',
        card: '#1a1614',
        border: '#2a2422',
        ink: '#f5f0e8',
        muted: '#9a8f86',
        accent: '#c11f1f',
        'accent-2': '#d4a857',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        grunge: ['var(--font-grunge)'],
      },
      letterSpacing: {
        'wider-2': '0.06em',
        'wider-3': '0.1em',
        'wider-4': '0.15em',
        'wider-5': '0.22em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
