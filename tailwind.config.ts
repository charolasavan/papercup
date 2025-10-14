import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  container: {
    // Center the container content on all screen si  zes
    center: true,

    // Optionally set default horizontal padding
    margin: 'auto',

    // Breakpoints with custom adjustments
    screens: {
      DEFAULT: '375px',  // Mobile
      sm: '640px',       // Small tablet
      md: '768px',       // Medium devices (tablets, smaller laptops)
      lg: '1024px',      // Large screens (laptops, desktops)
      xl: '1280px',      // Extra-large screens
      '2xl': '1536px',   // Very large screens (wide monitors)
    },
  },
  plugins: [],
};

export default config;
