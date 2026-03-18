import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Modern Minimal
        primary: {
          dark: '#1B5E20',      // Dark green - primary brand color
          light: '#FFFFFF',     // White - backgrounds & contrast
          muted: '#C9A66B',     // Muted gold - accents & CTAs
        },
        // Secondary Colors - Supporting palette
        secondary: {
          gray: '#333333',      // Dark gray - text & emphasis
          lightgray: '#F5F5F5', // Light gray - card backgrounds
        },
        // Neutral Colors - Text & Backgrounds
        neutral: {
          dark: '#333333',      // Dark gray - main text
          cream: '#FFFFFF',     // White - backgrounds
          gray: '#666666',      // Medium gray - secondary text
        },
        // Accent Colors
        accent: {
          muted: '#C9A66B',     // Muted gold - highlights
        },
      },
    },
  },
  plugins: [],
};

export default config;
