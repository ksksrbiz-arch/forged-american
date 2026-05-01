import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        'bg-alt': '#141414',
        card: '#1a1a1a',
        border: '#2a2a2a',
        ink: '#f5f1e8',
        muted: '#a8a29e',
        accent: '#dc2626',
        'accent-hover': '#b91c1c',
        gold: '#d4a857',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'mega': '0.02em',
        'wider-2': '0.08em',
      },
    },
  },
  plugins: [],
};

export default config;
