import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        'bg-alt': '#141414',
        card: '#1a1a1a',
        border: '#262626',
        ink: '#f5f5f5',
        muted: '#8b8b8b',
        accent: '#dc2626',
        'accent-2': '#d4a857',
        'accent-3': '#1d4ed8',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      letterSpacing: {
        'wider-2': '0.08em',
        'wider-3': '0.12em',
        'wider-4': '0.16em',
      },
    },
  },
  plugins: [],
};
export default config;
