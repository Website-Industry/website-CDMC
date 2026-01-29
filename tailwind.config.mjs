/** @type {import('tailwindcss').Config} */
/**
 * Configuration Tailwind CSS
 * 
 * NOTE: Les couleurs définies ici sont synchronisées avec les variables CSS
 * dans src/layouts/BaseLayout.astro. Si tu modifies une couleur ici,
 * pense à mettre à jour les variables CSS correspondantes.
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Active le dark mode avec la classe 'dark'
  theme: {
    extend: {
      colors: {
        // Palette chaleureuse : beiges, ocres, terracotta
        // Ces couleurs sont également définies comme variables CSS dans BaseLayout.astro
        warm: {
          50: '#faf8f5',
          100: '#f5f1e8',
          200: '#e8ddd0',
          300: '#d4c4b0',
          400: '#b89d7f',
          500: '#9d7a5a',
          600: '#7d6149',
          700: '#5d4838',
          800: '#3e3026',
          900: '#1f1813',
        },
        terracotta: {
          50: '#fef5f2',
          100: '#fde8e0',
          200: '#fbd5c8',
          300: '#f8b8a5',
          400: '#f49072',
          500: '#f06d4a',
          600: '#e14f2a',
          700: '#c03d1f',
          800: '#9e341d',
          900: '#82301c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['18px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};

