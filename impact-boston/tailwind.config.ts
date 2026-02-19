import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#421956',
          'primary-shade': '#6b3789',
          secondary: '#6C3789',
          complementary: '#C83B19',
          orange: '#Fe6634',
          black: '#000000',
          'gray-light': '#F4F5F5',
          'gray-mid': '#D3D3D3',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-ibm-plex-sans)', 'sans-serif'],
        nav: ['var(--font-ibm-plex-sans)', 'sans-serif'],
      },
      fontSize: {
        h1: ['72px', { lineHeight: '105%', fontWeight: '700' }],
        h2: ['70px', { lineHeight: '105%', fontWeight: '700' }],
        h3: ['44px', { lineHeight: '105%', fontWeight: '700' }],
        subtitle1: ['24px', { lineHeight: '1.4', fontWeight: '700' }],
        subtitle2: ['18px', { lineHeight: '1.4', fontWeight: '700' }],
        body1: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        body2: ['14px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      maxWidth: {
        content: '1200px',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      screens: {
        'mobile': '390px',
        'tablet': '744px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
